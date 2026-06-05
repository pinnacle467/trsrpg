import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { GAME } from '@/data/game';
import Atmosphere from '@/components/common/Atmosphere';
import SectionHeading from '@/components/common/SectionHeading';
import Reveal from '@/components/common/Reveal';
import GButton from '@/components/common/GButton';

const FAQ = [
  {
    q: 'Why Early Access?',
    a: [
      'We decided The Realm Survivor RPG for Early Access because we believe strongly in developing this game with input from our players. Although this is the 1st saga, we have been playtesting with players for years and their input has been valuable with the development to the game.',
    ],
  },
  {
    q: 'Approximately how long will this game be in Early Access?',
    a: [
      'We honestly don\u2019t know when The Realm Survivor RPG will be ready to leave Early Access. We have large ambitions for the full game, and it could take us roughly 2 years to get there. Thought we don\u2019t believe there is a hurry to leaving early access. The community feedback will ultimately help decide whether how long the game will still be in early access, so that The Realm Survivor RPG will be a great full release.',
    ],
  },
  {
    q: 'How is the full version planned to differ from the Early Access version?',
    a: [
      'The full release of The Realm Survivor RPG will be a grand expansion of the Early Access version. While we plan to keep the core gameplay the same, we plan to add new challenges, new interiors and locations, enemies, and environments, making exploration more rewarding and satisfying. We plan to give players access to a wide variety of weapons, gear, and new businesses, allowing for a deeper RPG experience.',
    ],
  },
  {
    q: 'What is the current state of the Early Access version?',
    a: ['Early Access version features an expansive open world with tons of content:'],
    bullets: [
      '3 Story Acts each mission (includes multi-side quests).',
      '4 Businesses to Build and grow (Restaurants, Trade Businesses and More).',
      'Harvesting, Fishing, Crafting, Research, Farming.',
      'Skill tree options to the player and unique skills (Optional).',
      '2 Allies to help you across the realms.',
      'A dense open world to explore and Urban exploration buildings.',
      'Over 100+ Items to collect, sell, craft or use for the player gains.',
    ],
  },
  {
    q: 'Will the game be priced differently during and after Early Access?',
    a: [
      'We plan to gradually raise the price as the new content will improve the game overall.',
      'A minor price increase for the 1.0 release.',
    ],
  },
  {
    q: 'How are we planning on involving the Community in your development process?',
    a: [
      'We would love to hear your feedback via the Community discussions or in general. This feedback will help the games RPG mechanics as well. Also, insight for future updates and how we should implement the additional content and make any changes that seems useless or not important at the moment to the gameplay currently.',
    ],
  },
];

export default function Support() {
  return (
    <div data-testid="support-page">
      <section className="relative overflow-hidden pt-40 pb-12 lg:pt-48">
        <Atmosphere variant="dust" count={18} />
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <p
              className="font-display uppercase tracking-[0.4em] text-sm text-white/90"
              data-testid="support-eyebrow"
            >
              Support
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="heading mt-4 text-4xl text-white sm:text-5xl lg:text-6xl"
              data-testid="support-headline"
            >
              Coming Soon To <span className="text-white">Early Access</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
              data-testid="support-intro"
            >
              {GAME.title} is launching into Early Access. Below is everything you need to know
              about the journey ahead and how your feedback shapes the road to 1.0.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <GButton href={GAME.steam} size="lg" data-testid="support-wishlist">
                <Gamepad2 size={18} /> Wishlist on Steam
              </GButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 lg:py-20" data-testid="support-faq">
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="Early Access FAQ"
            title="What you should"
            highlight="know"
          />
          <div className="mt-12 space-y-6">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.06}>
                <motion.article
                  className="rounded-2xl glass border border-white/10 px-6 py-7 sm:px-8 sm:py-8 hover:border-brand-purple/40 transition-colors duration-300"
                  data-testid={`support-faq-${i}`}
                >
                  <h3
                    className="font-display text-xl uppercase tracking-wide text-white sm:text-2xl"
                    data-testid={`support-faq-q-${i}`}
                  >
                    {item.q}
                  </h3>
                  <div className="mt-4 space-y-3">
                    {item.a.map((para, idx) => (
                      <p
                        key={idx}
                        className="text-base leading-relaxed text-white/90 sm:text-lg"
                        data-testid={`support-faq-a-${i}-${idx}`}
                      >
                        {para}
                      </p>
                    ))}
                    {item.bullets && (
                      <ul
                        className="mt-2 space-y-2 pl-1"
                        data-testid={`support-faq-bullets-${i}`}
                      >
                        {item.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="relative pl-6 text-base leading-relaxed text-white/90 sm:text-lg"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-brand-purple shadow-[0_0_10px_rgba(147,51,234,0.8)]"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
