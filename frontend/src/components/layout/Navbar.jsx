import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/data/site';
import { GAME } from '@/data/game';
import Wordmark from '@/components/common/Wordmark';
import GButton from '@/components/common/GButton';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[100] transition-all duration-300',
          'bg-ink-deep/90 backdrop-blur-xl border-b border-white/10 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]',
        )}
        data-testid="main-navbar"
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-5 sm:px-8">
          <div className="flex items-center gap-10 lg:gap-16">
            <Wordmark size="navSm" />

            <nav className="hidden lg:flex items-center gap-16" aria-label="Primary">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  data-testid={`nav-${l.label.toLowerCase()}`}
                  className={cn(
                    'font-display uppercase text-5xl tracking-wide transition-colors link-underline [text-shadow:_0_2px_10px_rgba(0,0,0,0.95),_0_0_2px_rgba(0,0,0,0.9)]',
                    isActive(l.to) ? 'text-white' : 'text-white/95 hover:text-white',
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <GButton
              href={GAME.steam}
              size="sm"
              className="hidden whitespace-nowrap sm:inline-flex !text-2xl !px-7 !py-4 !gap-2.5 ml-6 lg:ml-12 [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]"
              data-testid="nav-wishlist"
            >
              <Gamepad2 size={27} /> Wishlist on Steam
            </GButton>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              data-testid="mobile-menu-open"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-md glass text-white"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[110] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="mobile-menu-overlay"
          >
            <div className="absolute inset-0 bg-ink-deep/95 backdrop-blur-xl" />
            <motion.nav
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-ink-deep border-l border-white/10 px-7 py-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Wordmark size="navSm" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  data-testid="mobile-menu-close"
                  className="grid h-10 w-10 place-items-center rounded-md glass text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="mt-10 flex flex-col gap-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                      className={cn(
                        'block py-3 font-display uppercase text-2xl tracking-wide border-b border-white/5',
                        isActive(l.to) ? 'text-gradient' : 'text-white/70',
                      )}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <GButton href={GAME.steam} size="lg" className="mt-8 w-full" data-testid="mobile-wishlist">
                <Gamepad2 size={18} /> Wishlist on Steam
              </GButton>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
