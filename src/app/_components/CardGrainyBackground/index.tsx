'use client';

import { useEffect, useState } from 'react';
import './index.css';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function CardGrainyBackground() {
  const [isClient, setIsClient] = useState(false);

  const bgColor = getRandomHexColor();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className='absolute inset-0 -z-10 border-2 border-dashed border-black'
      style={{ background: isClient ? bgColor : '' }}>
      <div className='h-full w-full card' />
    </div>
  );
}
