import React, { useState } from 'react';
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

  const [playlistName, setPlaylistName] = useState("");

  const [playlistUris, setPlaylistUris] = useState([]);


  //NB not using refreshToken() yet so when token expire -> response 401 to fetch request...

  //Get request to spotify API with the user search string (userInput)
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
      setSearchData(jsonResponse.tracks.items);
    } catch (error) {
      console.error(error.message);
    }
  };

  //Post request to create a new playlist on the user' spotify account
  const createPlaylist = async () => {

    const userData = await getUserData();

    const userId = userData.id;

    const addPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`

    const options = {
      method: 'POST',
      headers: { 
        'Authorization': 'Bearer ' + currentToken.access_token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'name': playlistName})
    };

    try {
      const response = await fetch(addPlaylistUrl, options);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const jsonResponse = await response.json();
      
      return jsonResponse;

    } catch (error) {
      console.error(error.message);
    }
  };

  //POST request to add the songs to the newly created playlist
  const addTracks = async () => {

    const activePlaylist = await createPlaylist();

    const playlistId = activePlaylist.id;
    
    const addSongsUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

    const options = {
      method: 'POST',
      headers: { 
        'Authorization': 'Bearer ' + currentToken.access_token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'uris': playlistUris})
    };

    try {
      const response = await fetch(addSongsUrl, options);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      alert(`Your playlist was saved to Spotify`);
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

  addTracks();
  setPlaylistData([]);
  setPlaylistName('');
};

// HTML
if (currentToken.access_token) {
  return (
    <div className={styles.App} >
      <Header 
        userInput={userInput} 
        handleUserInput={handleUserInput} 
        handleChange={handleChange}
        handleSearchSubmit={handleSearchSubmit}
        logoutClick={logoutClick}
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
          setPlaylistUris={setPlaylistUris}
          playlistUris={playlistUris}
        />
      </div>
      <button className={styles.button} onClick={logoutClick}>Log out</button>
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
      />
    </div>
  );
};
  
}

export default App;
