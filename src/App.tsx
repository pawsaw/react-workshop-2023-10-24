import { useState } from 'react';
import { Theme, ThemeProvider } from './domain/theme';
import { ThemeEditor } from './components/ThemeEditor';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState<Theme['primaryColor']>('tomato');

  return (
    <ThemeProvider theme={{ primaryColor, setPrimaryColor }}>
      <ThemeEditor />
      <Outlet />
    </ThemeProvider>
  );
};
