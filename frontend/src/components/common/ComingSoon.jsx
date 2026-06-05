import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import Atmosphere from '@/components/common/Atmosphere';
import GButton from '@/components/common/GButton';
import { GAME } from '@/data/game';

// Big, theme-matched "Coming Soon" placeholder (purple / blue / white).
export const ComingSoon = ({ label, testid }) => {
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-5 pt-28 pb-20"
      data-testid={testid}
    >
      <Atmosphere variant="dust" count={20} />

      {/* Glowing orbs */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-brand-purple/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-brand-blue/30 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {label && (
          <motion.span
            className="eyebrow mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {label}
          </motion.span>
        )}

        <motion.h1
          className="heading text-6xl leading-[0.95] text-white sm:text-8xl lg:text-9xl"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-gradient-animated">Coming</span>
          <br />
          <span className="text-white drop-shadow-[0_4px_30px_rgba(124,58,237,0.5)]">Soon</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-md text-base text-white/60 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          This realm is still forming. Check back soon — and wishlist {GAME.title} to be the first to
          know when it opens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <GButton href={GAME.steam} size="lg" className="mt-10" data-testid={`${testid}-wishlist`}>
            <Gamepad2 size={18} /> Wishlist on Steam
          </GButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
