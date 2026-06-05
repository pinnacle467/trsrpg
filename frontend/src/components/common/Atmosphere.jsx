import { useMemo } from 'react';
import { cn } from '@/lib/utils';

// Lightweight CSS particle field: rising embers + drifting dust motes, plus a
// grain texture. Used on hero / dramatic sections.
export const Atmosphere = ({ variant = 'dust', count = 22, className }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 2 + Math.random() * 6;
        return {
          id: i,
          left: Math.random() * 100,
          size,
          duration: 8 + Math.random() * 12,
          delay: Math.random() * 10,
          drift: Math.random() * 40 - 20,
        };
      }),
    [count],
  );

  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className={variant === 'ember' ? 'ember' : 'dust'}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ['--drift']: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Atmosphere;
