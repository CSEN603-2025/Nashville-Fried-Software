import React from 'react';
import './Styles/RecordedWorkshop.css';
import {useState, useEffect, useRef} from 'react'
import notesIcon from './assets/notes.svg';
import addIcon from './assets/add.svg';
import deleteIcon from './assets/delete.svg';
import leaveIcon from './assets/leave.svg';
import Rating from './Components/VidWork/Rating'


const RecordedWorkshop = () => {
  const [notes, setNotes] = useState([])
  const [currNote, setCurrNote] = useState('')
  const [notesOpened, setNotesOpened] = useState(false)
  const [hasLeft, setHasLeft] = useState(false)

  return (
    <div className="bigboy">
    <div className={`video-container ${hasLeft ? 'blurred' : ''}`}>
      <div className={`video-wrapper ${notesOpened ? 'shrink' : ''}`}>
        <iframe
          className="video-frame"
          src="https://www.youtube.com/embed/KbamZoa05-8"
          title="Embedded YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="sidebar">
            {!notesOpened && (<button className='notes-button' onClick={() => setNotesOpened(true)}>
                <img src={notesIcon} alt = '' className="button-icon1" />
                Notes
            </button>)}
            {!notesOpened && (<button onClick={() => {setHasLeft(true)}} className="notes-button">
                <img src={leaveIcon} alt = '' className="button-icon1" />
                Leave
            </button>)}
        </div>
      </div>
      
      <div className={`notes-section ${notesOpened ? 'open' : 'closed'}`}>
        <div className='notes-header'>
            <h1>Notes</h1>
            <button className='close-button' onClick={() => setNotesOpened(false)}>×</button>
        </div>
        <div className="notes-list">
            {notes.map((note, index) => (
            <div key={index} className="note-item">
                <p>{note}</p>
            </div>
            ))}
        </div>
        <div className='notes-spacer'>
            <textarea
            className="notes-input"
            placeholder="Type your note here..."
            value={currNote} // Bind textarea value to state
            onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setCurrNote(e.target.value)} // Handle input changes
            />
            <div className="button-container">
                <button onClick={() => {setNotes([...notes,currNote]); setCurrNote("")}} className='take-note'>
                    Take note
                    <img src={addIcon} alt = '' className="noteButton-icon" />
                </button>
                <button onClick={() => {setNotes([])}} className='clear-note'>
                    Clear notes
                    <img src={deleteIcon} alt = '' className="noteButton-icon" />
                </button>
            </div>
        </div>
    </div>
    </div>
    {hasLeft && (<Rating workshop="Angular Basics Workshop!"/>)}
    </div>
  );
};

export default RecordedWorkshop;
