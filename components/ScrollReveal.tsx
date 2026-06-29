'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, { threshold: .15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const dirClass = direction === 'left' ? 'left' : direction === 'right' ? 'right' : '';
  const delayClass = delay === 1 ? 'delay-1' : delay === 2 ? 'delay-2' : delay === 3 ? 'delay-3' : '';
  return (
    <div ref={ref} className={`reveal ${dirClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
