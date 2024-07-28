export interface ThemeContextProps {
    theme: string;
    systemTheme: string;
    toggleTheme: () => void;
    setTheme: (theme: string) => void;
}
