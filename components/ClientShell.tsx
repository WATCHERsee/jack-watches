'use client';
import { useEffect } from 'react';
import Background from './Background';

export default function ClientShell() {
  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.classList.add('is-touch');
    }
  }, []);

  return <Background />;
}
