import React from 'react';
import TrackList from '../TrackList/TrackList';
import styles from './SearchResults.module.css';

function SearchResults({searchData, playlistData, setSearchData, setPlaylistData}) {
    if (searchData) {
        return (
            <div className={styles.container} >
                <h2 className={styles.sectionTitle} >Your Search Results</h2>
                <TrackList 
                    setSearchData={setSearchData} 
                    searchData={searchData} 
                    setPlaylistData={setPlaylistData} 
                    playlistData={playlistData} 
                />
            </div>
        );
    };
    return (
        <div>
            <h2>Your Search Results</h2>
            <p>No results available yet...</p>
        </div>
    );
};

export default SearchResults;