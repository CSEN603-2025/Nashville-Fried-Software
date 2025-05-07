import React, { useState } from 'react';
import ContactBook from './Components/Appointments/ContactBook';
import AppointmentRequestForm from './Components/Appointments/AppointmentRequestForm';
import AppointmentNotifications from './Components/Appointments/AppointmentNotifications';

const mockUsers = [
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
  const [selectedUser, setSelectedUser] = useState<null | typeof mockUsers[0]>(null);
  const [incomingRequests, setIncomingRequests] = useState<any[]>([]);
  const [outgoingRequests, setOutgoingRequests] = useState<any[]>([]);

  const currentUser = {
    id: 99,
    firstName: 'You',
    lastName: 'User',
    profilePictureUrl: 'https://example.com/you.jpg',
  };

  const handleStartAppointment = (user: typeof mockUsers[0]) => {
    setSelectedUser(user);
  };

  const handleSendRequest = (requestData: {
    recipientId: number;
    subject: string;
    date: string;
    time: string;
    message: string;
  }) => {
    const recipient = mockUsers.find((u) => u.id === requestData.recipientId);
    if (!recipient) return;

    const newRequest = {
      id: requestIdCounter++,
      sender: currentUser,
      recipient,
      subject: requestData.subject,
      date: requestData.date,
      time: requestData.time,
      message: requestData.message,
      status: 'pending',
    };

    // Add to outgoing and incoming for demo purposes
    setOutgoingRequests((prev) => [...prev, newRequest]);
    setIncomingRequests((prev) => [...prev, { ...newRequest, sender: recipient, recipient: currentUser }]);

    setSelectedUser(null);
  };

  const handleRespondToRequest = (requestId: number, response: 'accepted' | 'rejected') => {
    setIncomingRequests((prev) =>
      prev.map((r) =>
        r.id === requestId ? { ...r, status: response } : r
      )
    );
  };

  return (
    <div>
      <h1>Manage Appointments</h1>

      <ContactBook users={mockUsers} onStartAppointment={handleStartAppointment} />

      {selectedUser && (
        <AppointmentRequestForm
          recipient={selectedUser}
          onSendRequest={handleSendRequest}
        />
      )}

      <AppointmentNotifications
        incomingRequests={incomingRequests}
        outgoingRequests={outgoingRequests}
        onRespondToRequest={handleRespondToRequest}
      />
    </div>
  );
}

export default AppointmentsPage;
