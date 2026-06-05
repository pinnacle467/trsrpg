import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LOGO } from '@/data/images';
import { GAME } from '@/data/game';

// The Realm Survivor RPG logo lockup. Sizes are ~1.5x the previous lockup.
export const Wordmark = ({ className, size = 'nav', to = '/' }) => {
  const heights = {
    navSm: 'h-16 sm:h-20',
    nav: 'h-24 sm:h-28',
    sm: 'h-16 sm:h-20',
    md: 'h-24',
    lg: 'h-32 sm:h-44',
    xl: 'h-44 sm:h-64 lg:h-80',
  };

  const logo = (
    <img
      src={LOGO}
      alt={GAME.title}
      className={cn(
        'w-auto max-w-[88vw] object-contain drop-shadow-[0_6px_30px_rgba(124,58,237,0.45)]',
        heights[size],
      )}
    />
  );

  if (!to) return <div data-testid="wordmark-logo" className={className}>{logo}</div>;

  return (
    <Link
      to={to}
      aria-label={`${GAME.title} home`}
      data-testid="wordmark-logo"
      className={cn('inline-flex items-center', className)}
    >
      {logo}
    </Link>
  );
};

export default Wordmark;
