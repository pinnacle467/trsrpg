import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LOGO, MK_LOGO } from '@/data/images';
import { GAME } from '@/data/game';

// Dual lockup: The Realm Survivor RPG logo + Monarchy Knuckle Games logo, equal heights.
export const Wordmark = ({ className, size = 'navSm' }) => {
  const heights = {
    navSm: 'h-[8.4rem] sm:h-[10.5rem]',
    nav: 'h-[12.6rem] sm:h-[14.7rem]',
    sm: 'h-16 sm:h-20',
    md: 'h-24',
    lg: 'h-32 sm:h-44',
    xl: 'h-44 sm:h-64 lg:h-80',
  };

  const imgCls = cn(
    'w-auto object-contain drop-shadow-[0_6px_30px_rgba(124,58,237,0.45)]',
    heights[size],
  );

  return (
    <div
      className={cn('flex items-center gap-3 sm:gap-5', className)}
      data-testid="wordmark-logos"
    >
      <Link
        to="/"
        aria-label={`${GAME.title} home`}
        data-testid="wordmark-logo"
        className="inline-flex shrink-0 items-center"
      >
        <img src={LOGO} alt={GAME.title} className={imgCls} />
      </Link>
      <span
        aria-hidden="true"
        className="hidden h-2/3 w-px bg-white/15 sm:block"
      />
      <Link
        to="/pimps"
        aria-label="Monarchy Knuckle Games"
        data-testid="wordmark-mk-logo"
        className="inline-flex shrink-0 items-center"
      >
        <img
          src={MK_LOGO}
          alt="Monarchy Knuckle Games"
          className={cn(imgCls, 'rounded-full bg-white/[0.04] p-1')}
        />
      </Link>
    </div>
  );
};

export default Wordmark;
