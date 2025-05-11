import React from 'react';
import './AppointmentNotifications.css';

type Profile = {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  isOnline?: boolean;
};

type AppointmentRequest = {
  id: string;
  sender: Profile;
  date: string;
  time: string;
  subject: string;
  message: string;
};

type AppointmentResponse = {
  id: string;
  recipient: Profile;
  status: 'accepted' | 'rejected';
};

type AppointmentNotificationsProps = {
  incomingRequests: AppointmentRequest[];
  sentResponses: AppointmentResponse[];
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
};

function AppointmentNotifications({
  incomingRequests,
  sentResponses,
  onAccept,
  onReject,
}: AppointmentNotificationsProps) {
  return (
    <section className="notifications-container">
      <h3>Incoming Requests</h3>
      {incomingRequests.length === 0 ? (
        <p className="no-requests">No new requests.</p>
      ) : (
        <ul className="request-list">
          {incomingRequests.map((req) => (
            <li key={req.id} className="notification-item">
              <img
                src={req.sender.profilePicture}
                alt={`${req.sender.firstName} ${req.sender.lastName}`}
              />
              <div>
                <strong>{req.sender.firstName} {req.sender.lastName}</strong>
                <p>Subject: {req.subject}</p>
                <p>{req.message}</p>
                <p>{req.date} at {req.time}</p>
                <div className="response-buttons">
                  <button className="accept" onClick={() => onAccept(req.id)}>Accept</button>
                  <button className="reject" onClick={() => onReject(req.id)}>Reject</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h3>Responses</h3>
      {sentResponses.length === 0 ? (
        <p className="no-responses">No responses yet.</p>
      ) : (
        <ul className="response-list">
          {sentResponses.map((res) => (
            <li key={res.id} className="notification-item">
              <img
                src={res.recipient.profilePicture}
                alt={`${res.recipient.firstName} ${res.recipient.lastName}`}
              />
              <div>
                <strong>{res.recipient.firstName} {res.recipient.lastName}</strong>
                <p>Status: {res.status}</p>
                {res.status === 'accepted' && (
                  <p className="online-status">
                    {res.recipient.isOnline ? 'Online' : 'Offline'}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default AppointmentNotifications;