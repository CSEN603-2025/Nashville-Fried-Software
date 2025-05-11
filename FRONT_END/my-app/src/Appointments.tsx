'use client';

import React, { useState } from 'react';
import ContactBook from './Components/Appointments/ContactBook';
import AppointmentRequestForm from './Components/Appointments/AppointmentRequestForm';
import AppointmentNotifications from './Components/Appointments/AppointmentNotifications';
import { useEffect } from 'react'; 
type User = {
  id: number;
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
  isOnline: boolean;
};

type AppointmentRequest = {
  id: number;
  sender: User;
  recipient: User;
  subject: string;
  date: string;
  time: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
};


const mockUsers: User[] = [
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    profilePictureUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    isOnline: true,
  },
  {
    id: 2,
    firstName: 'Brian',
    lastName: 'Smith',
    profilePictureUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    isOnline: false,
  },
  {
    id: 3,
    firstName: 'Carmen',
    lastName: 'Taylor',
    profilePictureUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    isOnline: true,
  },
];

let requestIdCounter = 1;

function AppointmentsPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [incomingRequests, setIncomingRequests] = useState<AppointmentRequest[]>([]);
  const [outgoingRequests, setOutgoingRequests] = useState<AppointmentRequest[]>([]);

  const currentUser: User = {
    id: 99,
    firstName: 'You',
    lastName: 'User',
    profilePictureUrl: 'https://randomuser.me/api/portraits/lego/1.jpg',
    isOnline: true,
  };

  const handleStartAppointment = (user: User) => {
    setSelectedUser(user);
  };

 const handleSendRequest = ({
  recipientId,
  subject,
  date,
  time,
  message,
}: {
  recipientId: number;
  subject: string;
  date: string;
  time: string;
  message: string;
}) => {
  const recipient = mockUsers.find((u) => u.id === recipientId);
  if (!recipient) return;

  const newRequest: AppointmentRequest = {
    id: requestIdCounter++,
    sender: currentUser,
    recipient,
    subject,
    date,
    time,
    message,
    status: 'pending',
  };

  setOutgoingRequests((prev) => [...prev, newRequest]);
  setSelectedUser(null);

  // Simulate the recipient accepting after 3 seconds
  setTimeout(() => {
    setOutgoingRequests((prev) =>
      prev.map((r) =>
        r.id === newRequest.id ? { ...r, status: 'accepted' } : r
      )
    );
  }, 3000);
};

  const handleRespondToRequest = (requestId: number, response: 'accepted' | 'rejected') => {
  setIncomingRequests((prev) => {
    const target = prev.find((r) => r.id === requestId);
    if (!target) return prev;

    if (response === 'accepted') {
      const newResponse = {
        id: requestId,
        recipient: target.sender,
        status: 'accepted',
      };
      setOutgoingRequests((prevOut) => [...prevOut, newResponse]);
    }

    return prev.filter((r) => r.id !== requestId); // remove from incoming
  });
};

  useEffect(() => {
  const timer = setTimeout(() => {
    const simulatedRequest: AppointmentRequest = {
      id: requestIdCounter++,
      sender: mockUsers[0], // Alice sends the request
      recipient: currentUser,
      subject: 'Quick Catch-Up',
      date: '2025-05-15',
      time: '14:30',
      message: 'Hey! Let’s touch base about the project.',
      status: 'pending',
    };

    setIncomingRequests((prev) => [...prev, simulatedRequest]);
  }, 3000); 

  return () => clearTimeout(timer); // Cleanup on unmount
}, []);

  return (
    <main className="appointments-page">
      <h1 className="page-title">Manage Appointments</h1>

      <section className="contact-book-section">
        <ContactBook users={mockUsers} onStartAppointment={handleStartAppointment} />
      </section>

      {selectedUser && (
        <section className="appointment-form-section">
          <AppointmentRequestForm
            recipient={{
              id: selectedUser.id.toString(),
              firstName: selectedUser.firstName,
              lastName: selectedUser.lastName,
              profilePicture: selectedUser.profilePictureUrl,
              isOnline: selectedUser.isOnline,
            }}
            onSendRequest={handleSendRequest}
          />
        </section>
      )}

      <section className="notifications-section">
        <AppointmentNotifications
  incomingRequests={incomingRequests.map(({ id, sender, subject, date, time, message }) => ({
    id: id.toString(),
    sender: {
      id: sender.id.toString(),
      firstName: sender.firstName,
      lastName: sender.lastName,
      profilePicture: sender.profilePictureUrl,
      isOnline: sender.isOnline,
    },
    subject,
    date,
    time,
    message,
  }))}
  sentResponses={outgoingRequests.map(({ id, recipient, status }) => ({
    id: id.toString(),
    recipient: {
      id: recipient.id.toString(),
      firstName: recipient.firstName,
      lastName: recipient.lastName,
      profilePicture: recipient.profilePictureUrl,
      isOnline: recipient.isOnline,
    },
    status,
  }))}
  onAccept={(id) => handleRespondToRequest(Number(id), 'accepted')}
  onReject={(id) => handleRespondToRequest(Number(id), 'rejected')}
/>
      </section>
    </main>
  );
}

export default AppointmentsPage;
