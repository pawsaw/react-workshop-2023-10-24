import { useState } from 'react';
import { Theme, ThemeProvider } from './domain/theme';
import { ThemeEditor } from './components/ThemeEditor';
import { NavLink, Outlet } from 'react-router-dom';

const NavBar: React.FC = () => (
  <div className="app-header">
    <NavLink to="/about">About</NavLink>
    <NavLink to="/books">Books</NavLink>
  </div>
);

export const App: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState<Theme['primaryColor']>('tomato');

  return (
    <ThemeProvider theme={{ primaryColor, setPrimaryColor }}>
      <NavBar />
      <ThemeEditor />
      <Outlet />
    </ThemeProvider>
  );
};
