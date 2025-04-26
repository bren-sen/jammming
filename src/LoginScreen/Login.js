import React from 'react';
import styles from './Login.module.css';

function Login({loginWithSpotifyClick}) {

    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.titleText}>JA<span className={styles.titleM} >MMM</span>ING</h1>
            </div>
            <div className={styles.body} >
                <p className={styles.p} >Search for your favourite artists, albums and songs and add them to your playlists in a jiffy</p>
                <p className={styles.p} >Sure, you can do the same directly in The Spotify app, but where is the fun in that?</p>
                <p className={styles.p} >First let's get you logged in to your Spotify account, this way your saved playlists will appear there</p>
                <button className={styles.button} onClick={loginWithSpotifyClick}>Login</button>
            </div>
        </>
    );
};

export default Login;