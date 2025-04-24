import React from "react";
import Track from "../Track/Track";
import styles from './Tracklist.module.css';

function TrackList({setSearchData, searchData, setPlaylistData, playlistData, playlisturis, setPlaylistUris}) {
    
    return (
        <div>
            <ul className={styles.ul} >
                {searchData.map((song) => {
                    return (
                        <Track 
                            song={song} 
                            setSearchData={setSearchData} 
                            searchData={searchData} 
                            setPlaylistData={setPlaylistData} 
                            playlistData={playlistData} 
                            playlisturis={playlisturis}
                            setPlaylistUris={setPlaylistUris}
                        />
                    );
                })}
            </ul>
        </div>
    )
};

export default TrackList;

