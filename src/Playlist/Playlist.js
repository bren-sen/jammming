import React from 'react';
import Track from '../Track/Track';
import styles from './Playlist.module.css';

function Playlist({playlistData, setPlaylistData, searchData, setSearchData, playlistName, setPlaylistName}) {

    function handleNameChange(e) {
        setPlaylistName(e.target.value)
    };

    function handleSave() {
        if (playlistName === '') {
            alert(`Please give a name to your playlist`);
            return;
        };
        alert(`The playlist ${playlistName} is being saved to your spotify account`)
    };

    if (playlistData.length > 0) {
        return (
            <div className={styles.container} >
                <h2 className={styles.sectionTitle} >Your Playlist</h2>
                <input 
                    type='text' 
                    id='playlistName' 
                    name='playlistName' 
                    placeholder='Name Your Playlist'
                    value={playlistName} 
                    onChange={handleNameChange} 
                    className={styles.playlistName}
                />
                <ul className={styles.ul} >
                    {playlistData.map((song) => {
                        return <Track 
                                song={song} 
                                setPlaylistData={setPlaylistData} 
                                playlistData={playlistData} 
                                setSearchData={setSearchData} 
                                searchData={searchData} 
                               />;
                    })}
                </ul>
                <button onClick={handleSave} className={styles.button} >Save to Spotify</button>
            </div>
        )
    };
    return (
        <div className={styles.container} >
            <h2 className={styles.sectionTitle} >Your Playlist</h2>
            <p className={styles.p} >There are no song in your playlist yet. Start by adding songs from your search results</p>
        </div>
    );
};

export default Playlist;