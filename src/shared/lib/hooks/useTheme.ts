import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '../../const/localstorage';
import { Theme } from '../../const/theme';
import { ThemeContext } from '../context/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void,
    theme: Theme
}
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        case Theme.DARK:
            newTheme = Theme.GREEN;
            break;
        case Theme.GREEN:
            newTheme = Theme.LIGHT;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme: theme || Theme.LIGHT, toggleTheme };
}