import { useState } from 'react';

export interface HidableProps {
  children: React.ReactNode;
}

export const Hidable: React.FC<HidableProps> = ({ children }) => {
  const [shouldShowChildren, setShouldShowChildren] = useState(false);

  const toggleVisibility = () => setShouldShowChildren(!shouldShowChildren);

  return (
    <div>
      {shouldShowChildren && children}
      <button className="tertiary" onClick={toggleVisibility}>
        {shouldShowChildren ? '- hide details' : '+ show details'}
      </button>
    </div>
  );
};
