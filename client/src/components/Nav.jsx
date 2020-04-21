import React, {useState} from 'react';
import {useDarkMode} from './useDarkMode';

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    console.log(darkMode, setDarkMode);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className='navbar'>
            <h1>Women's World Cup Players</h1>
            <div className="dark-mode__toggle">
                <div onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'} 
                    />
            </div>
        </nav>
    )
}

export default Nav;