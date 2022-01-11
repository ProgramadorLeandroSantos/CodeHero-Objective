import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Routes from './routes';
import FlashMessage from 'react-native-flash-message';
import AppProvider from './hooks';
import {useTheme} from './hooks/theme';
import * as Theme from './styles/themes';

const App: React.FC = () => {
  const {theme} = useTheme();

  return (
    <NavigationContainer>
      <AppProvider>
        <ThemeProvider theme={theme === 'ligth' ? Theme.Ligth : Theme.Dark}>
          <StatusBar
            barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
            backgroundColor="transparent"
            translucent
          />
          <Routes />
          <FlashMessage position="top" />
        </ThemeProvider>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
