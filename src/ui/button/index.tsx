import React, { FC } from 'react';

import './button.module.css';

interface Props {
  children: React.ReactNode;
}

export const Button: FC<Props> = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  );
};