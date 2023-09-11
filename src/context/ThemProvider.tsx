import { useState, useEffect } from 'react';
import { DefaultTheme } from 'styled-components';
import { Light, Dark } from '@/utils/Variables';

export const useThemeToggle = () => {
    const [theme, setTheme] = useState<string>('dark'); // Use lowercase 'light'

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || savedTheme === 'light') { // Ensure lowercase comparison
            setTheme(savedTheme);
        } else {
            setTheme('light'); // Set a default theme if none is found in local storage
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme); // Use the lowercase theme value
    }, [theme]);

    return { theme, toggleTheme };
};