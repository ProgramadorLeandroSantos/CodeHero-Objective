import React from 'react';
import {ThemeProvider} from './theme';
import {ListProvider} from './charactersList';

const AppProvider: React.FC = ({children}) => (
  <ThemeProvider>
    <ListProvider>{children}</ListProvider>
  </ThemeProvider>
);

export default AppProvider;
