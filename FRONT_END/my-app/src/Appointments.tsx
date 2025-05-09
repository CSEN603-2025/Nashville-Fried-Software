'use client';

import React, { useState } from 'react';
import ContactBook from './Components/Appointments/ContactBook';
import AppointmentRequestForm from './Components/Appointments/AppointmentRequestForm';
import AppointmentNotifications from './Components/Appointments/AppointmentNotifications';

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
    profilePictureUrl: 'https://example.com/alice.jpg',
    isOnline: true,
  },
  {
    id: 2,
    firstName: 'Brian',
    lastName: 'Smith',
    profilePictureUrl: 'https://example.com/brian.jpg',
    isOnline: false,
  },
  {
    id: 3,
    firstName: 'Carmen',
    lastName: 'Taylor',
    profilePictureUrl: 'https://example.com/carmen.jpg',
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
    profilePictureUrl: 'https://example.com/you.jpg',
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

    // For demo: recipient sends the same request back to simulate "incoming"
    const mirroredRequest: AppointmentRequest = {
      ...newRequest,
      id: requestIdCounter++,
      sender: recipient,
      recipient: currentUser,
    };

    setIncomingRequests((prev) => [...prev, mirroredRequest]);
    setSelectedUser(null);
  };

  const handleRespondToRequest = (requestId: number, response: 'accepted' | 'rejected') => {
    setIncomingRequests((prev) =>
      prev.map((r) => (r.id === requestId ? { ...r, status: response } : r))
    );
  };

  return (
    <main>
      <h1>Manage Appointments</h1>

      <ContactBook users={mockUsers} onStartAppointment={handleStartAppointment} />

      {selectedUser && (
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
)}


      <AppointmentNotifications
        incomingRequests={incomingRequests}
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
    </main>
  );
}

export default AppointmentsPage;
