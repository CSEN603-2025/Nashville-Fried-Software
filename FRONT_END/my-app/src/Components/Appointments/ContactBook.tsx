import React from 'react';
import './ContactBook.css';
interface User {
  id: number;
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
  isOnline: boolean;
}
interface ContactBookProps {
  users: {
    id: number;
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
    isOnline: boolean; // ← Add this to match the full User type
  }[];
  onStartAppointment: (user: {
    id: number;
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
    isOnline: boolean; // ← Include this field
  }) => void;
}



function ContactBook({ users, onStartAppointment }: ContactBookProps) {
  const sortedUsers = [...users].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  return (
    <div>
      <h2>Contact Book</h2>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            <img
              src={user.profilePictureUrl}
              alt={`${user.firstName} ${user.lastName}`}
              width={50}
              height={50}
            />
            <span>{user.firstName} {user.lastName}</span>
            <button onClick={() => onStartAppointment(user)}>Request Appointment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactBook;
