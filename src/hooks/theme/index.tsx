import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeProviderContext {
  changeTheme: React.Dispatch<any>;
  theme: string;
}

const ThemeConText = createContext<ThemeProviderContext>(
  {} as ThemeProviderContext,
);

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    async function loadStoragedTheme(): Promise<void> {
      const storagedTheme = await AsyncStorage.getItem('@Theme');
      setTheme(storagedTheme !== null ? storagedTheme : 'light');
      console.log(`TEMA ${storagedTheme} CARREGADO DO STORAGE`);
    }

    loadStoragedTheme();
  }, []);

  const changeTheme = useCallback((themeName: string) => {
    try {
      async function setThemeStorage(): Promise<void> {
        setTheme(themeName);
        await AsyncStorage.setItem('@Theme', themeName);
        console.log(`TEMA ${themeName} GUARDADO DO STORAGE`);
      }
      setThemeStorage();
    } catch (error) {
      return console.log(error);
    }
  }, []);

  return (
    <ThemeConText.Provider
      value={{
        changeTheme,
        theme,
      }}>
      {children}
    </ThemeConText.Provider>
  );
};

export function useTheme(): ThemeProviderContext {
  const context = useContext(ThemeConText);
  return context;
}
