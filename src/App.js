import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './Header/Header.js';
import SearchResults from './SearchResults/SearchResults.js';
import Playlist from './Playlist/Playlist.js';


function App() {

  const [userInput, setUserInput] = useState("");

  const [searchData, setSearchData] = useState([]);

  const [playlistData, setPlaylistData] = useState([]);

  const [playlistName, setPlaylistName] =useState("");

  useEffect(() => setSearchData([
    {
      name: 'Espresso',
      artist: 'Sabrina Carpenter',
      album: 'Short and Sweet',
      id: 123
    },
    {
      name: 'Born to die',
      artist: 'Lana del Rey',
      album: 'Born to die',
      id: 762
    },
    {
      name: 'Beautiful War',
      artist: 'Kings of Leon',
      album: 'Mechanical Bull',
      id: 399
    },
    {
      name: 'Wicked Game',
      artist: 'Stone Sour',
      album: 'Com What(ever) May',
      id: 690
    }
  ]) ,[]);
  //useEffect will do API get request then setSearchData with json response, array dependency is [userInput]

  function handleUserInput(input) {
    setUserInput(input);
  };


  return (
    <div className={styles.App} >
      <Header 
        userInput={userInput} 
        handleUserInput={handleUserInput} 
      />
      <div className={styles.body}>
        <SearchResults 
          setSearchData={setSearchData} 
          searchData={searchData} 
          setPlaylistData={setPlaylistData} 
          playlistData={playlistData} 
        />
        <Playlist 
          setSearchData={setSearchData} 
          searchData={searchData} 
          setPlaylistData={setPlaylistData} 
          playlistData={playlistData} 
          setPlaylistName={setPlaylistName}
          playlistName={playlistName} 
        />
      </div>
    </div>
  );
}

export default App;
