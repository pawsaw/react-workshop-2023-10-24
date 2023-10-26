import { CSSProperties } from 'react';

export interface Theme {
  primaryColor: CSSProperties['color'];
  setPrimaryColor: (color: CSSProperties['color']) => void;
}
