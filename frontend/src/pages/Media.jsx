import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Gamepad2 } from 'lucide-react';
import { GAME } from '@/data/game';
import { TRAILER, TRAILER_POSTER, SHOTS } from '@/data/images';
import Atmosphere from '@/components/common/Atmosphere';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import Lightbox from '@/components/common/Lightbox';
import GButton from '@/components/common/GButton';

const TrailerPlayer = () => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const start = () => {
    setPlaying(true);
    const v = ref.current;
    if (v) {
      v.controls = true;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
  };
  return (
    <div
      className="group relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_30px_90px_-30px_rgba(124,58,237,0.6)]"
      data-testid="media-trailer"
    >
      <video
        ref={ref}
        src={TRAILER}
        poster={TRAILER_POSTER}
        controls={playing}
        playsInline
        preload="metadata"
        className="aspect-video w-full bg-black object-cover"
        data-testid="media-trailer-video"
      />
      {!playing && (
        <button
          onClick={start}
          aria-label="Play gameplay trailer"
          data-testid="media-trailer-play"
          className="absolute inset-0 grid place-items-center bg-ink-deep/30 transition-colors hover:bg-ink-deep/10"
        >
          <span className="grid h-20 w-20 place-items-center rounded-full bg-btn-grad text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
            <Play size={34} className="ml-1 fill-white" />
          </span>
        </button>
      )}
    </div>
  );
};

export default function Media() {
  const [box, setBox] = useState({ items: [], index: null });

  return (
    <div data-testid="media-page">
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-12">
        <Atmosphere variant="dust" count={16} />
        <div className="container-x relative z-10 text-center">
          <motion.span
            className="eyebrow inline-block"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Media
          </motion.span>
          <motion.h1
            className="heading mt-4 text-4xl text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Trailer & <span className="text-gradient">Screenshots</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Watch the official gameplay trailer and explore {SHOTS.length} screenshots from across the
            realms of {GAME.title}.
          </motion.p>
        </div>
      </section>

      {/* TRAILER */}
      <section className="relative py-12" data-testid="media-trailer-section">
        <div className="container-x">
          <Reveal>
            <TrailerPlayer />
          </Reveal>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="relative py-16 lg:py-24" data-testid="media-screenshots">
        <div className="container-x">
          <SectionHeading align="left" className="mx-0" eyebrow="Gallery" title="" highlight="Screenshots" />
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {SHOTS.map((s, i) => (
              <motion.button
                key={s.key}
                onClick={() => setBox({ items: SHOTS, index: i })}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative block w-full overflow-hidden rounded-xl ring-1 ring-white/10"
                data-testid={`screenshot-${i}`}
              >
                <img
                  src={s.full}
                  alt={`The Realm Survivor RPG screenshot ${i + 1}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16" data-testid="media-cta">
        <div className="container-x flex flex-col items-center gap-5 rounded-2xl glass-strong border border-white/10 p-10 text-center">
          <h3 className="heading text-2xl text-white sm:text-3xl">Want more?</h3>
          <p className="max-w-md text-sm text-white/55">
            Wishlist {GAME.title} on Steam to follow development and get notified at launch.
          </p>
          <GButton href={GAME.steam} size="md" data-testid="media-wishlist">
            <Gamepad2 size={16} /> Wishlist on Steam
          </GButton>
        </div>
      </section>

      <Lightbox
        items={box.items}
        index={box.index}
        onClose={() => setBox({ items: [], index: null })}
        onNavigate={(index) => setBox((b) => ({ ...b, index }))}
      />
    </div>
  );
}
