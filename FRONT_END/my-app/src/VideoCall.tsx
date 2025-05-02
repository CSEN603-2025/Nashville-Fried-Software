import React from 'react';
import './VideoCall.css';
import leaveIcon from './assets/leave.svg';
import muteIcon from './assets/mute.svg';
import videoIcon from './assets/video.svg';
import shareIcon from './assets/share.svg';
import participantsIcon from './assets/participants.svg';


function VideoCall() {

    return(
      <>
        <div className="container">
            <div className="card">
            <div className="card-title">Video call</div>
            <div className="card-text">There are no participants in this call.</div>
            <div className="button-bar">
                <button className = 'button-container'>
                    <img src={muteIcon} alt = '' className="button-icon" />
                    Mute
                </button>
                <button className = 'button-container'>
                    <img src={videoIcon} alt = '' className="button-icon" />
                    Video
                </button>
                <button className = 'button-container'>
                    <img src={shareIcon} alt = '' className="button-icon" />
                    Share Screen
                </button>
                <button className = 'button-container'>
                    <img src={participantsIcon} alt = '' className="button-icon" />
                    Participants
                </button>
                <button className = 'button-container'>
                    <img src={leaveIcon} alt = '' className="button-icon" />
                    Leave
                </button>
            </div>
            </div>
        </div>
      </>
    )

}

export default VideoCall;