
import React from 'react';
import './VideoCall.css';
import {useState, useEffect, useRef} from 'react'
import leaveIcon from './assets/leave.svg';
import muteIcon from './assets/mute.svg';
import videoIcon from './assets/video.svg';
import shareIcon from './assets/share.svg';
import participantsIcon from './assets/participants.svg';
import mutedIcon from './assets/muted.svg';
import videoOffIcon from './assets/novideo.svg';
import muteSound from './assets/mute.wav'
import unmuteSound from './assets/unute.wav'
import Webcam from 'react-webcam'



function VideoCall() {

    let muteAudio = new Audio(muteSound)
    let unmuteAudio = new Audio(unmuteSound)
    const [muteImage, setMuteImage] = useState(muteIcon);
    const [videoImage, setVideoImage] = useState(videoIcon);

    function toggleVideo(){
        if(videoImage == videoIcon){
            setVideoImage(videoOffIcon)
        }
        else{
            setVideoImage(videoIcon)
        }
    }

    function toggleMute(){
        if(muteImage == muteIcon){
            muteAudio.pause()
            unmuteAudio.play()
            setMuteImage(mutedIcon)
        }
        else{
            setMuteImage(muteIcon)
            unmuteAudio.pause()
            muteAudio.play()
        }
    }



    return(
      <>
        <div className="container">
            <div className="card">
            <div className="card-title">Video call</div>
            <div className="card-text">There are no participants in this call.</div>
            <div className="button-bar">
                <button onClick={toggleMute}>
                    <img src={muteImage} alt = '' className="button-icon" />
                    Mute
                </button>
                <button onClick={toggleVideo}>
                    <img src={videoImage} alt = '' className="button-icon" />
                    Video
                </button>
                <button className="share-button">
                    <img src={shareIcon} alt = '' className="button-icon" />
                    Share Screen
                </button>
                <button>
                    <img src={participantsIcon} alt = '' className="button-icon" />
                    Participants
                </button>
                <button className="leave-button">
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