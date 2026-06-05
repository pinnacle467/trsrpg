import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Play, Gamepad2, ArrowRight, Globe, Building2, MoonStar, Zap, Sparkles, Car,
  Users, Hammer, Swords, Coins, Trophy, Backpack,
} from 'lucide-react';
import { GAME, FEATURES, PATHS } from '@/data/game';
import { TRAILER, TRAILER_POSTER, SHOTS } from '@/data/images';
import Atmosphere from '@/components/common/Atmosphere';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import GButton from '@/components/common/GButton';

const ICONS = {
  Globe, Building2, MoonStar, Zap, Sparkles, Car, Users, Hammer, Swords, Coins, Trophy, Backpack,
};

const PATH_RING = {
  blood: 'hover:border-blood/60 hover:shadow-glow-blood',
  purple: 'hover:border-brand-purple/60 hover:shadow-glow',
  blue: 'hover:border-brand-blue/60 hover:shadow-glow-blue',
};
const PATH_TEXT = {
  blood: 'text-blood',
  purple: 'text-brand-purple',
  blue: 'text-brand-neon',
};

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
      className="group relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_30px_90px_-30px_rgba(124,58,237,0.6)]"
      data-testid="home-trailer"
    >
      <video
        ref={ref}
        src={TRAILER}
        poster={TRAILER_POSTER}
        controls={playing}
        playsInline
        preload="metadata"
        className="aspect-video w-full bg-black object-cover"
        data-testid="home-trailer-video"
      />
      {!playing && (
        <button
          onClick={start}
          aria-label="Play gameplay trailer"
          data-testid="home-trailer-play"
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

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-16">
        <Atmosphere variant="dust" count={22} />
        <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {GAME.genres.join(' · ')}
            </motion.span>
            <motion.h1
              className="heading mt-4 text-4xl leading-[1.02] text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              The <span className="text-gradient-animated">Realm</span> Survivor
              <span className="ml-2 align-top text-2xl text-white sm:text-3xl">RPG</span>
            </motion.h1>
            <motion.p
              className="mt-5 font-display text-xl uppercase tracking-wider text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {GAME.tagline}
            </motion.p>
            <motion.p
              className="mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              {GAME.hook}
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <GButton href={GAME.steam} size="lg" data-testid="hero-wishlist">
                <Gamepad2 size={18} /> Wishlist on Steam
              </GButton>
              <GButton to="/media" variant="outline" size="lg" data-testid="hero-media">
                <Play size={16} /> View Media
              </GButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TrailerPlayer />
            <p className="mt-3 text-center text-xs uppercase tracking-wider text-white/40">
              Official Gameplay Trailer
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-20 lg:py-28" data-testid="home-story">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/12">
              <img
                src={SHOTS[1].full}
                alt="The Realm Survivor RPG"
                className="h-full w-full object-cover"
                style={{ filter: 'saturate(1.05) contrast(1.02)' }}
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" className="mx-0" eyebrow="The Story" title="Cross the" highlight="Realms" />
            <div className="mt-6 space-y-4">
              {GAME.story.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-base leading-relaxed text-white/60">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PATHS */}
      <section className="relative py-20 lg:py-24" data-testid="home-paths">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Choice Is Yours"
            title="Demonic. Deviant."
            highlight="Divine."
            subtitle="Every mission is a moral choice. Aid the corruption, neutralize the chaos, or change the realms for the better."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PATHS.map((p, i) => (
              <Reveal key={p.tag} delay={i * 0.1}>
                <div
                  className={`h-full rounded-2xl glass border border-white/10 p-8 transition-all duration-300 ${PATH_RING[p.color]}`}
                >
                  <span className={`font-display text-3xl uppercase tracking-wide ${PATH_TEXT[p.color]}`}>
                    {p.tag}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-20 lg:py-28" data-testid="home-features">
        <div className="container-x">
          <SectionHeading
            align="left"
            className="mx-0"
            eyebrow="Features"
            title="One Game,"
            highlight="Infinite Realms"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => {
              const Icon = ICONS[f.icon] || Globe;
              return (
                <Reveal key={f.title} delay={(i % 3) * 0.08}>
                  <div className="group h-full rounded-2xl glass border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/50 hover:shadow-glow">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-btn-grad text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 font-display text-lg uppercase tracking-wide text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCREENSHOT STRIP */}
      <section className="relative py-16" data-testid="home-screenshots">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading align="left" className="mx-0" eyebrow="Gallery" title="From the" highlight="Realms" />
            <Link
              to="/media"
              className="hidden shrink-0 items-center gap-1.5 font-display text-sm uppercase tracking-wider text-white/60 transition hover:text-white sm:inline-flex"
              data-testid="home-view-all-media"
            >
              View all media <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {SHOTS.slice(2, 6).map((s, i) => (
              <Reveal key={s.key} delay={i * 0.08}>
                <Link to="/media" className="group block overflow-hidden rounded-xl ring-1 ring-white/10">
                  <img
                    src={s.full}
                    alt="The Realm Survivor RPG screenshot"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20" data-testid="home-cta">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl glass-strong border border-white/10 px-8 py-16 text-center">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-purple/30 blur-[100px]" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-brand-blue/30 blur-[100px]" />
            <h2 className="heading relative text-3xl text-white sm:text-5xl">
              The realms are <span className="text-gradient">waiting</span>.
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-base text-white/60">
              {GAME.release} on Steam. Wishlist now and be the first into the realm when time stops.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-4">
              <GButton href={GAME.steam} size="lg" data-testid="cta-wishlist">
                <Gamepad2 size={18} /> Wishlist on Steam
              </GButton>
              <GButton to="/media" variant="outline" size="lg" data-testid="cta-media">
                Explore Media <ArrowRight size={16} />
              </GButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
