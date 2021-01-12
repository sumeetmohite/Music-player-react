import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';


const Player= ({
    currentSong,
    songs,
    isPlaying,
    setIsPlaying,
    audioRef,
    songInfo,
    setSongInfo,
    setCurrentSong
}) => {
    
    //Event handlers
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const dragTimeHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    };

    const getTime = (time) => {
    return ( 
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    };
    const skipTrackHandler = (direction) =>{
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward'){
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
    }


    return (
        <div className = "Player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min = {0} max = {songInfo.duration || 0} value = {songInfo.currentTime} onChange = {dragTimeHandler} type = "range">
                </input>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className ="skip-back" size = "2x" icon = {faAngleLeft}></FontAwesomeIcon>
                <FontAwesomeIcon onClick={playSongHandler} className = "play" size = "2x" icon = {isPlaying ? faPause : faPlay}></FontAwesomeIcon>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className ="skip-forward" size = "2x" icon = {faAngleRight}></FontAwesomeIcon>
            </div>            
        </div>
    )
}

export default Player;
