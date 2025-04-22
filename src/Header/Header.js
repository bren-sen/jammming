import React from 'react';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar.js';

function Header({userInput, handleUserInput}) {

    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.titleText}>JA<span className={styles.titleM} >MMM</span>ING</h1>
            </div>
            <p className={styles.p} >Search for your favourite artists, albums and songs and add them to your playlists in a jiffy</p>
            <SearchBar userInput={userInput} handleUserInput={handleUserInput} />
        </>
    );
};

export default Header;