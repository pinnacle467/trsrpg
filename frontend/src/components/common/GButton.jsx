import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Premium button with gradient / outline / ghost variants and hover glow.
const base =
  'relative inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider rounded-md transition-all duration-300 will-change-transform focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none';

const variants = {
  gradient:
    'btn-grad text-white shadow-[0_10px_30px_-10px_rgba(147,51,234,0.6)] hover:shadow-[0_18px_46px_-12px_rgba(59,130,246,0.7)] hover:-translate-y-0.5 hover:bg-[position:100%_50%] hover:scale-[1.03]',
  outline:
    'border border-white/30 text-white bg-white/0 hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 backdrop-blur-sm',
  blood:
    'bg-blood text-white hover:bg-red-500 hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(220,38,38,0.7)] hover:scale-[1.03]',
  ghost: 'text-white/80 hover:text-white hover:bg-white/5',
};

const sizes = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-sm sm:text-base px-8 py-4',
};

export const GButton = forwardRef(
  ({ variant = 'gradient', size = 'md', to, href, className, children, ...props }, ref) => {
    const cls = cn(base, variants[variant], sizes[size], className);
    if (to) {
      return (
        <Link to={to} className={cls} ref={ref} {...props}>
          {children}
        </Link>
      );
    }
    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} ref={ref} {...props}>
          {children}
        </a>
      );
    }
    return (
      <button className={cls} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);
GButton.displayName = 'GButton';

export default GButton;
