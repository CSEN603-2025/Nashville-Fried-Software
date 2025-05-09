import React from 'react';
import './Styles/LiveWorkshop.css';
import {useState, useEffect, useRef} from 'react'
import chatIcon from './assets/chat.svg';
import addIcon from './assets/add.svg';
import deleteIcon from './assets/delete.svg';
import leaveIcon from './assets/leave.svg';
import Rating from './Components/VidWork/Rating'
import workshopVideo from './assets/workshop.mp4'
import sendIcon from './assets/send.svg'


const LiveWorkshop = () => {

  const messagesEndRef = useRef(null);
  const [showMessageNotice, setShowMessageNotice] = useState(false);

  const [unread, setUnread] = useState(0);
  const [notesOpened, setNotesOpened] = useState(false)
  const [hasLeft, setHasLeft] = useState(false)
  const [msgNotice, setMsgNotice] = useState({user: null, content: null});
  const [messages, setMessages] = useState([
    { user: 'Mo', content: 'Hey, how are you?' },
    { user: 'You', content: 'I’m good, thanks! How about you?' },
    { user: 'The good, the bad and the ugly', content: 'I am excited about this workshop!' }
  ]);

  useEffect(() => {
    const users = ['John Pork', 'Ben', 'Abdul', 'The good, the bad and the ugly'];
    const messagesPool = [
      'What do you guys think about the topic?',
      'This is super helpful!',
      'Where can I get the slides later?',
      'Nice explanation!',
      'Can someone repeat that last part?',
      'I love this kind of workshops!',
    ];
  
    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 3000) + 2000; // 2–5 sec
      setTimeout(() => {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomMessage = messagesPool[Math.floor(Math.random() * messagesPool.length)];
        let newMsg = { user: randomUser, content: randomMessage }
        setMsgNotice(newMsg);
        setMessages(prev => [...prev, newMsg]);
        setShowMessageNotice(true);
            const timer = setTimeout(() => setShowMessageNotice(false), 2000);
            return () => clearTimeout(timer);
      }, randomDelay);
    }, 4000); // check every 4 seconds
  
    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  
  const [currMessage, setCurrMessage] = useState('');

  useEffect(() => {
    if(notesOpened) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    else{
        setUnread(unread+1)
    }
  }, [messages]);
  
  const sendMessage = () => {
    if (currMessage.trim()) {
      setMessages([...messages, { user: 'You', content: currMessage }]);
      setCurrMessage(''); // Clear message input after sending
    }
  };

  return (
    <div className="bigboy">
    <div className={`video-container ${hasLeft ? 'blurred' : ''}`}>
      <div className={`video-wrapper ${notesOpened ? 'shrink' : ''}`}>
      <div className={`videoo ${notesOpened ? 'shrink' : ''}`}>
        <div className="video-header">
            <h2 className="workshop-title">React Basics Workshop</h2>
            <div className="live-indicator">
                <span className="red-dot" />
                Live
            </div>
        </div>
      <video
        className="video-frame"
        src={workshopVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        onContextMenu={(e: React.MouseEvent<HTMLVideoElement>) => e.preventDefault()}
        onPause={(e: React.SyntheticEvent<HTMLVideoElement>) => {
            e.currentTarget.play();
        }}
        />
        {showMessageNotice && !notesOpened &&(
                <div className='message-notice'>
                  <strong>{msgNotice.user} : </strong>
                  {msgNotice.content}
                </div>
            )}
        </div>

        <div className="sidebar">
            {!notesOpened && (<div className="button-wrapper">
                <button className="notes-button" onClick={() => {setNotesOpened(true); setUnread(0)}}>
                <img src={chatIcon} alt="" className="button-icon" />
                Chat
                </button>
                {unread > 0 && (
                <div className="notification-badge">
                    {unread}
                </div>
                )}
            </div>)}
            {!notesOpened && (<button onClick={() => {setHasLeft(true)}} className="notes-button">
                <img src={leaveIcon} alt = '' className="button-icon" />
                Leave
            </button>)}
        </div>
      </div>
      
      
      <div className={`notes-section ${notesOpened ? 'open' : 'closed'}`}>
        <div className='notes-header'>
            <h1>Chat</h1>
            <button className='close-button' onClick={() => setNotesOpened(false)}>×</button>
        </div>
        
        <div className="messages-list">
            {messages.map((message, index) => (
            <div key={index} className={`message-bubble ${message.user === 'You' ? 'sent' : 'received'}`}>
                <strong>{message.user}: </strong>
                <p>{message.content}</p>
            </div>
            ))}
            <div ref={messagesEndRef} />
        </div>

        <div className="message-input-container">
            <textarea
            className="message-input"
            placeholder="Type a message..."
            value={currMessage}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrMessage(e.target.value)}
            />
            <button onClick={sendMessage} className="send-message-button">
                Send
                <img src={sendIcon} alt = '' className="send-button-icon" />
            </button>
        </div>
        </div>

    </div>
    {hasLeft && (<Rating className="centered-rating"/>)}
    </div>
  );
};

export default LiveWorkshop;
