import React,{useState} from "react";
import "./styles/App.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./util";


function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  return (
    <div className="App">
      <Song currentSong = {currentSong}/>
      <Player/>   

    </div>
  );
}

export default App;
