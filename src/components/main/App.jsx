import React from 'react';
import { Appearance } from 'react-native';
import { ThemeProvider as RNEThemeProvider } from 'react-native-elements';
import DarkTheme from '../../util/themes/DarkTheme';
import LightTheme from '../../util/themes/LightTheme';
import TabNavigation from './TabNavigation';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <RNEThemeProvider
      useDark={isDarkMode}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <TabNavigation />
    </RNEThemeProvider>
  );
};

export default App;
