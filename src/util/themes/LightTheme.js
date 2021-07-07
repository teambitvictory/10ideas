import { merge } from 'lodash';
import BaseTheme from './BaseTheme';

const LightTheme = {
  colors: {
    primary: '#430f74',
    secondary: '#b5f7e8',
  },
};

export default merge({}, BaseTheme, LightTheme);
