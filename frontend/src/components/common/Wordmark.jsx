import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LOGO, MK_LOGO } from '@/data/images';
import { GAME } from '@/data/game';

// Dual lockup: MK Games logo (left) + The Realm Survivor RPG logo (right).
// Sizes are tuned smaller so both logos + the full nav fit cleanly at every breakpoint.
export const Wordmark = ({ className, size = 'navSm' }) => {
  const heights = {
    navSm: 'h-[6rem] sm:h-[7.6rem] lg:h-[9.6rem]',
    nav: 'h-[6.8rem] sm:h-[8.4rem] lg:h-[11.2rem]',
    sm: 'h-16 sm:h-20',
    md: 'h-24',
    lg: 'h-32 sm:h-44',
    xl: 'h-44 sm:h-64 lg:h-80',
  };

  const baseImg = cn(
    'w-auto object-contain drop-shadow-[0_6px_30px_rgba(124,58,237,0.45)]',
    heights[size],
  );

  return (
    <div
      className={cn('flex items-center gap-3 sm:gap-4', className)}
      data-testid="wordmark-logos"
    >
      <Link
        to="/mkgames"
        aria-label="Monarchy Knuckle Games"
        data-testid="wordmark-mk-logo"
        className="inline-flex shrink-0 items-center"
      >
        <img
          src={MK_LOGO}
          alt="Monarchy Knuckle Games"
          className={cn(baseImg, 'rounded-full bg-white/[0.06] p-1 ring-1 ring-white/10')}
        />
      </Link>
      <span
        aria-hidden="true"
        className="hidden h-8 w-px bg-white/15 sm:block lg:h-10"
      />
      <Link
        to="/"
        aria-label={`${GAME.title} home`}
        data-testid="wordmark-logo"
        className="inline-flex shrink-0 items-center"
      >
        <img src={LOGO} alt={GAME.title} className={baseImg} />
      </Link>
    </div>
  );
};

export default Wordmark;
