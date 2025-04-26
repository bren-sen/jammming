import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({userInput, handleChange, handleSearchSubmit}) {

    return (
        <form onSubmit={handleSearchSubmit} className={styles.form} >
            <input 
                type='text' 
                id='searchInput' 
                name='searchInput'
                pattern='[A-Za-z0-9 ]+' 
                value={userInput} 
                onChange={handleChange}
                className={styles.searchField} />
            <input 
                type='submit' 
                value='Find your jam!'
                className={styles.button} />
        </form>
    );
};

export default SearchBar;