import React from "react";
import styles from './Track.module.css';

function Track({song, setPlaylistData, playlistData, setSearchData, searchData}) {
    console.log("setSearchData type:", typeof setSearchData);

    function handleAddClick() {
        setPlaylistData(prevData => [...prevData, song]);
        setSearchData(searchData.filter((track) => track.id !== song.id));
    };

    function handleRemoveClick() {
        setSearchData(prevData => [...prevData, song]);
        setPlaylistData(playlistData.filter((track) => track.id !== song.id));
    };

    let button = <button onClick={handleAddClick} className={styles.button} >+</button>;

    if (playlistData.includes(song)) {
        button = <button onClick={handleRemoveClick} className={styles.button} >-</button>
    };

    return (
        <li key={song.id} className={styles.container} >
            <div>
                <h3 className={styles.h3} >{song.name}</h3>
                <p className={styles.p} >{song.artist} <span className={styles.span} >|</span> {song.album}</p>
            </div>
            <div>
                {button}
            </div>
        </li>
    );
};

export default Track;

