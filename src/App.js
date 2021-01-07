import React,{useState} from "react";
import "./styles/App.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import data from "./util";


function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong = {currentSong}/>
      <Player setIsPlaying = {setIsPlaying}
              isPlaying = {isPlaying} 
              currentSong = {currentSong}
      />   
      <Library songs = {songs} />

    </div>
  );
}

export default App;
