import React,{useState,useRef} from "react";
import "./styles/App.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import data from "./util";


function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  //State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
  const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime: current, duration})
  };

  return (
    <div className="App">
      <Song currentSong = {currentSong}/>
      <Player audioRef={audioRef}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying} 
              currentSong={currentSong}
              songInfo={songInfo}
              setSongInfo={setSongInfo}
      />   
      <Library 
        audioRef={audioRef}
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <audio onTimeUpdate={timeUpdateHandler} 
            onLoadedMetadata={timeUpdateHandler} 
            ref={audioRef} 
            src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;
