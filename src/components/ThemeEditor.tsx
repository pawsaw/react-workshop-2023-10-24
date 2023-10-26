import { useTheme } from '../domain/theme';

export const ThemeEditor: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="theme-editor">
      <button onClick={() => theme.setPrimaryColor('tomato')}>tomato</button>
      <button onClick={() => theme.setPrimaryColor('blueviolet')}>blueviolet</button>
    </div>
  );
};
