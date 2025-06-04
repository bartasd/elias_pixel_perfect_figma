import React from 'react';
import style from './WrapContainer.module.css';

type WrapContainerProps = {
  children: React.ReactNode;
  gap?: number; // Optional: gap between items in pixels
};

export default function WrapContainer({ children, gap = 12 }: WrapContainerProps) {
  return (
    <div className={style.container} style={{ gap }}>
      {children}
    </div>
  );
}