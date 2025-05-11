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
    isOnline: boolean;
  }[];
  onStartAppointment: (user: {
    id: number;
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
    isOnline: boolean;
  }) => void;
}

function ContactBook({ users, onStartAppointment }: ContactBookProps) {
  const sortedUsers = [...users].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  return (
    <div className="contact-book-container">
      <h2 className="contact-book-title">Contact Book</h2>
      <ul className="contact-list">
        {sortedUsers.map((user) => (
          <li key={user.id} className="contact-item">
            <img
              src={user.profilePictureUrl}
              alt={`${user.firstName} ${user.lastName}`}
              className="contact-avatar"
            />
            <span className="contact-name">
              {user.firstName} {user.lastName}
            </span>
            <button
              className="contact-button"
              onClick={() => onStartAppointment(user)}
            >
              Request Appointment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactBook;
