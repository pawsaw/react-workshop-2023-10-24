import React, { useContext } from 'react';
import { Theme } from './Theme';

export const ThemeContext = React.createContext<Theme>({
  primaryColor: 'steelblue',
  setPrimaryColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);
