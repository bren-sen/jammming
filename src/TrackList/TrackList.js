import React from "react";
import Track from "../Track/Track";
import styles from './Tracklist.module.css';

function TrackList({setSearchData, searchData, setPlaylistData, playlistData}) {
    
    return (
        <div>
            <ul className={styles.ul} >
                {searchData.map((song) => {
                    return <Track song={song} setSearchData={setSearchData} searchData={searchData} setPlaylistData={setPlaylistData} playlistData={playlistData} />;
                })}
            </ul>
        </div>
    )
};

export default TrackList;
