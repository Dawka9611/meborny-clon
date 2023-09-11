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
        if (savedTheme === 'dark' || savedTheme === 'light') { 
            setTheme(savedTheme);
        } else {
            setTheme(theme); 
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme); 
    }, [theme]);

    return { theme, toggleTheme };
};