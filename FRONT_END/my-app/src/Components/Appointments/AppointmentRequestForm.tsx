import React, { useState, type FormEvent } from 'react';

type Profile = {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
};

type AppointmentRequestFormProps = {
  recipient: Profile;
  onSend: (data: {
    date: string;
    time: string;
    subject: string;
    message: string;
  }) => void;
};

function AppointmentRequestForm({ recipient, onSend }: AppointmentRequestFormProps) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSend({ date, time, subject, message });
    setDate('');
    setTime('');
    setSubject('');
    setMessage('');
  };

  return (
    <div>
      <h3>Request Appointment with {recipient.firstName} {recipient.lastName}</h3>
      <img src={recipient.profilePicture} alt={`${recipient.firstName} ${recipient.lastName}`} width="50" height="50" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date: </label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Time: </label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div>
          <label>Subject: </label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        <div>
          <label>Message: </label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
}

export default AppointmentRequestForm;
