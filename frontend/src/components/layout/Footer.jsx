import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import { NAV_LINKS, STUDIO } from '@/data/site';
import { GAME } from '@/data/game';
import Wordmark from '@/components/common/Wordmark';

export const Footer = () => {
  return (
    <footer className="relative border-t-2 border-brand-purple/40 bg-ink-deep/70 backdrop-blur-md" data-testid="main-footer">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1.2fr]">
          <div>
            <Wordmark size="sm" to={null} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              {GAME.hook}
            </p>
            <p className="mt-4 text-xs uppercase tracking-wider text-brand-purple/80">
              {GAME.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="eyebrow mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/55 hover:text-white transition link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow mb-4">Get the Game</h3>
            <a
              href={GAME.steam}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-steam"
              className="inline-flex items-center gap-2 rounded-lg glass px-4 py-3 text-sm font-display uppercase tracking-wider text-white/80 transition hover:text-white hover:shadow-glow"
            >
              <Gamepad2 size={18} /> Wishlist on Steam
            </a>
            <p className="mt-5 text-xs text-white/40">
              {GAME.release} · {GAME.developer}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>{STUDIO.copyright}</p>
          <p className="mt-3 text-[11px] leading-relaxed text-white/25">{STUDIO.note}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
