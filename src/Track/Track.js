import React from "react";
import styles from './Track.module.css';

function Track({song, setPlaylistData, playlistData, setPlaylistUris, playlistUris}) {

    //when a track is added or removed from the playlist, both playlistData and playlistUris are updated
    //playlistUri is the data used for the POST request to spotify when saving the playlist
    function handleAddClick() {
        if (playlistData.filter((track) => track.id !== song.id)) {
            setPlaylistData(prevData => [...prevData, song]);
            setPlaylistUris(prevData => [...prevData, song.uri]);
        };
    };

    function handleRemoveClick() {
        setPlaylistData(playlistData.filter((track) => track.id !== song.id));
        setPlaylistUris(playlistUris.filter((track) => track.id !== song.id))
    };

    let button = <button onClick={handleAddClick} className={styles.button} >+</button>;

    if (playlistData.includes(song)) {
        button = <button onClick={handleRemoveClick} className={styles.button} >-</button>
    };

    return (
        <li key={song.id} className={styles.container} >
            <div>
                <img src={song.album.images[2].url} className={styles.albumCover} alt="album cover" />
            </div>
            <div>
                <h3 className={styles.h3} >{song.name}</h3>
                <p className={styles.p} >{song.artists[0].name} <span className={styles.span} >|</span> {song.album.name}</p>
            </div>
            <div>
                {button}
            </div>
        </li>
    );
};

export default Track;

