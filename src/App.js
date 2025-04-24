import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './Header/Header.js';
import SearchResults from './SearchResults/SearchResults.js';
import Playlist from './Playlist/Playlist.js';
import {clientId, redirectUrl, authorizationEndpoint, tokenEndpoint, scope, currentToken, redirectToSpotifyAuthorize, getToken, refreshToken, getUserData, loginWithSpotifyClick, logoutClick} from './SpotifyAuth.js';
import Login from './LoginScreen/Login.js';

function App() {

  const [userInput, setUserInput] = useState("");

  const [searchData, setSearchData] = useState([]);

  const [playlistData, setPlaylistData] = useState([]);

  const [playlistName, setPlaylistName] =useState("");

  const [playlistUris, setPlaylistUris] =useState([]);

//Get request to spotify API with the userInput
  const getTracks = async () => {

    const searchUrl = `https://api.spotify.com/v1/search?q=${userInput}&type=track&limit=20&offset=0`;

    const options = {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + currentToken.access_token }
    };

    try {
      const response = await fetch(searchUrl, options);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setSearchData(jsonResponse.tracks.items);
    } catch (error) {
      console.error(error.message);
    }
  };


  //handle the search text input fill and submit
  function handleUserInput(input) {
    setUserInput(input);
  };

  function handleChange(e) {
    handleUserInput(e.target.value);
};

function handleSearchSubmit(e) {
    e.preventDefault();
    getTracks();
};

//set playlist name to value of playlist name text input
function handlePlaylistNameChange(e) {
  setPlaylistName(e.target.value)
};

//save playlist to user's spotify account on submit
function handlePlaylistSave() {
  if (playlistName === '') {
      alert(`Please give a name to your playlist`);
      return;
  };
  alert(`The playlist ${playlistName} is being saved to your spotify account`);
  console.log(playlistUris);
  /* this needs to be replaced
  setSearchData((prev) => [...prev, playlistData]);
  setPlaylistData([]);
  setPlaylistName(''); */
};

if (currentToken.access_token) {
  return (
    <div className={styles.App} >
      <Header 
        userInput={userInput} 
        handleUserInput={handleUserInput} 
        handleChange={handleChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      <div className={styles.body}>
        <SearchResults 
          setSearchData={setSearchData} 
          searchData={searchData} 
          setPlaylistData={setPlaylistData} 
          playlistData={playlistData} 
          setPlaylistUris={setPlaylistUris}
          playlistUris={playlistUris}
        />
        <Playlist 
          setSearchData={setSearchData} 
          searchData={searchData} 
          setPlaylistData={setPlaylistData} 
          playlistData={playlistData} 
          setPlaylistName={setPlaylistName}
          playlistName={playlistName} 
          handlePlaylistNameChange={handlePlaylistNameChange}
          handlePlaylistSave={handlePlaylistSave}
        />
      </div>
    </div>
  );
};

if (!currentToken.access_token) {
  return (
    <div className={styles.App} >
      <Login 
        clientId={clientId} 
        redirectUrl={redirectUrl}
        authorizationEndpoint={authorizationEndpoint}
        tokenEndpoint={tokenEndpoint}
        scope={scope}
        currentToken={currentToken}
        redirectToSpotifyAuthorize={redirectToSpotifyAuthorize}
        getToken={getToken}
        refreshToken={refreshToken}
        getUserData={getUserData}
        loginWithSpotifyClick={loginWithSpotifyClick}
        logoutClick={logoutClick}
      />
    </div>
  );
};
  
}

export default App;
