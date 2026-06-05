import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { WEBSITE_BG, MEDIA_BG } from '@/data/images';
import { Toaster } from '@/components/ui/sonner';

export const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const bg = pathname.startsWith('/media') ? MEDIA_BG : WEBSITE_BG;

  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed full-page background — swaps for the Media page */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <img
          src={bg}
          alt=""
          className="h-full w-full object-cover"
          data-testid="page-background"
        />
        <div className="absolute inset-0 bg-ink-deep/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/40 via-transparent to-ink-deep/80" />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-brand-purple focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" richColors />
    </div>
  );
};

export default Layout;
