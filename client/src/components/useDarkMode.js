import React from 'react';
import {useLocalStorage} from './useLocalStorage';

export function useDarkMode(key, initialValue, cb) {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    React.useEffect(() => {
        darkMode
            ? document.querySelector("body").classList.add('dark-mode')
            : document.querySelector("body").classList.remove('dark-mode'); 
    });

    return [darkMode, setDarkMode];
}

