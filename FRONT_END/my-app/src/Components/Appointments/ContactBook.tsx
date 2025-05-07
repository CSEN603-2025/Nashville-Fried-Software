import React from 'react';

type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
};

type ContactBookProps = {
  contacts: Contact[];
  onSelect: (contact: Contact) => void;
};

function ContactBook({ contacts, onSelect }: ContactBookProps) {
  // Sort contacts alphabetically by last name
  const sortedContacts = [...contacts].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  return (
    <div>
      <h2>Contact Book</h2>
      <ul>
        {sortedContacts.map((contact) => (
          <li key={contact.id}>
            <img src={contact.profilePicture} alt={`${contact.firstName} ${contact.lastName}`} width="50" height="50" />
            <span>{contact.firstName} {contact.lastName}</span>
            <button onClick={() => onSelect(contact)}>Request Appointment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactBook;
