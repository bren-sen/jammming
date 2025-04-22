import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({userInput, handleUserInput}) {

    function handleChange(e) {
        handleUserInput(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        alert(`You searched for ${userInput}`)
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form} >
            <input 
                type='text' 
                id='searchInput' 
                name='searchInput' 
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

//removed label <label htmlFor='searchInput'>Search:</label>

export default SearchBar;