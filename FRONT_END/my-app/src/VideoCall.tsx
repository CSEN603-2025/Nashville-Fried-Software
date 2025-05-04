
import React from 'react';
import styles from './VideoCall.module.css';
import {useState, useEffect, useRef} from 'react'
import leaveIcon from './assets/leave.svg';
import muteIcon from './assets/mute.svg';
import videoIcon from './assets/video.svg';
import shareIcon from './assets/share.svg';
import participantsIcon from './assets/participants.svg';
import mutedIcon from './assets/muted.svg';
import videoOffIcon from './assets/novideo.svg';
import porkyJohn from './assets/john.png';
import muteSound from './assets/mute.wav'
import unmuteSound from './assets/unute.wav'



function VideoCall() {

    const videoRef = useRef(null);
    const cameraRef = useRef(null)
    let stream;
    let muteAudio = new Audio(muteSound)
    let unmuteAudio = new Audio(unmuteSound)
    const [muteImage, setMuteImage] = useState(muteIcon);
    const [videoImage, setVideoImage] = useState(videoOffIcon);
    const [shared, setShared] = useState(false);
    const [sharedVideo, setSharedVideo] = useState(false);
    const [showImage, setShowImage] = useState(true);
    const [showLeaveNotice, setShowLeaveNotice] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const leaveButtonRef = useRef(null);

    const shareScreen = async () => {
        if (!shared){
            setShared(true)
            stream = await navigator.mediaDevices.getDisplayMedia({
                audio: false,
            })
            videoRef.current.srcObject = stream;
            
        }
        else{
            setShared(false)
        }
    }

    const shareCamera = async () => {
        toggleVideo()
        if (!sharedVideo){
            setSharedVideo(true)
            navigator.mediaDevices.getUserMedia({
                video: {
                    width: 1920,
                    height: 1080
                }
            }).then(stream => {
                let video = cameraRef.current;
                video.srcObject = stream;
                video.play();
            })
            
        }
        else{
            setSharedVideo(false)
        }
    }


    const handleLeaveClick = () => {
        setShowModal(prev => !prev);
    };

    const confirmLeave = () => {
        // Handle leaving the call
        alert("You have left the call.");
        setShowModal(false);
    };

    const cancelLeave = () => {
        setShowModal(false);
    };

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

    setInterval(() => {
        setShowImage(false);
    }, 10000)

    useEffect(() => {
        if (!showImage) {
            setShowLeaveNotice(true);
            const timer = setTimeout(() => setShowLeaveNotice(false), 3000);
            return () => clearTimeout(timer);
          }
    }, [showImage])

    
    return(
        
        <>
        <div className={styles['container']}>
            <div className={styles['card']}>
            {shared && (
                <video className={styles['screen-share']} width={400} height={200} ref={videoRef} autoPlay />
            )}
            <div className={styles['card-title']}>Video call</div>
            {showLeaveNotice && (
                <div className={styles['leave-notice']}>John Pork has left the call.</div>
            )}
            <div className={styles['card-text']}>
                {showImage && !shared ? (
                <div className={styles['callerCard']}>
                    <img src={porkyJohn} alt="No participants" className={`${styles['center-image']} ${styles['speaking']}`} />
                    John Pork
                </div>
                ) : !shared && !sharedVideo ? (
                'There are no participants in this call.'
                ) : ''}
                {sharedVideo && (
                <div className={styles['callerCard']}>
                    <video className={styles['center-image']} width={400} height={200} ref={cameraRef} autoPlay />
                    You
                </div>
                )}
            </div>

            <div className={styles['button-bar']}>
                <button onClick={toggleMute}>
                <img src={muteImage} alt='' className={styles['button-icon']} />
                {muteImage !== muteIcon ? 'Unmute' : 'Mute'}
                </button>
                <button onClick={shareCamera}>
                <img src={videoImage} alt='' className={styles['button-icon']} />
                Video
                </button>
                <button onClick={shareScreen} className={styles['share-button']}>
                <img src={shareIcon} alt='' className={styles['button-icon']} />
                {shared ? 'Stop sharing' : 'Share Screen'}
                </button>
                <button className={styles['participants-button']}>
                <div className={styles['icon-wrapper']}>
                    <img src={participantsIcon} alt='' className={styles['button-icon']} />
                    <span className={styles['badge']}>{showImage ? 2 : 1}</span>
                </div>
                Participants
                </button>
                <button onClick={handleLeaveClick} ref={leaveButtonRef} className={`${styles['leave-button']} ${styles['red-button']}`}>
                <img src={leaveIcon} alt='' className={styles['button-icon']} />
                Leave
                </button>

                {showModal && (
                <div className={styles['leave-modal']}>
                    <button id='stringy3ny3ady' className={`${styles['modal-button']} ${styles['leave-call']}`} onClick={confirmLeave}>
                    Leave Call
                    </button>
                    <button className={`${styles['modal-button']} ${styles['cancel']}`} onClick={cancelLeave}>
                    Cancel
                    </button>
                </div>
                )}
            </div>
            </div>
        </div>
        </>

    )

}

export default VideoCall;

