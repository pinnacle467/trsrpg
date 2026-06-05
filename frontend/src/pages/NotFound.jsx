import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Atmosphere from '@/components/common/Atmosphere';
import GButton from '@/components/common/GButton';

export default function NotFound() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-5 pt-28 pb-20"
      data-testid="notfound-page"
    >
      <Atmosphere variant="dust" count={16} />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-brand-purple/25 blur-[120px]" />
      <div className="relative z-10 text-center">
        <h1 className="heading text-7xl text-white sm:text-9xl">
          <span className="text-gradient-animated">404</span>
        </h1>
        <p className="mt-4 max-w-md text-base text-white/60">
          This realm doesn&apos;t exist — or time has erased it. Let&apos;s get you back.
        </p>
        <GButton to="/" size="lg" className="mt-9" data-testid="notfound-home">
          <Home size={18} /> Back to Home
        </GButton>
        <div className="mt-6">
          <Link to="/media" className="text-sm text-white/45 transition hover:text-white">
            or explore the Media
          </Link>
        </div>
      </div>
    </section>
  );
}
