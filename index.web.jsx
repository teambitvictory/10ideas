import 'react-native-gesture-handler';
import font from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import { name as appName } from './app.json';
import App from './src/components/main/App';

const WebApp = () => (
  <View>
    <App />
    <style type="text/css">
      {`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${font}) format('truetype');
        }
      `}
    </style>
  </View>
);

AppRegistry.registerComponent(appName, () => WebApp);
AppRegistry.runApplication(appName, { rootTag: document.getElementById('react-native-app') });
