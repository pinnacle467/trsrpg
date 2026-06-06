import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare, AtSign } from 'lucide-react';
import Atmosphere from '@/components/common/Atmosphere';
import SectionHeading from '@/components/common/SectionHeading';
import Reveal from '@/components/common/Reveal';
import GButton from '@/components/common/GButton';
import { MK_LOGO } from '@/data/images';

const CONTACT_EMAIL = 'support@therealmsurvivorrpg.com';

export default function Pimps() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Hello from ${form.name || 'a Realm Survivor fan'}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || 'Anonymous'}\nReply to: ${form.email || '(no email provided)'}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    'w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-white/45 transition focus:border-brand-purple/70 focus:outline-none focus:ring-2 focus:ring-brand-purple/30';

  return (
    <div data-testid="mk-games-page">
      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-12 lg:pt-44" data-testid="mk-hero">
        <Atmosphere variant="dust" count={18} />
        <div className="container-x relative z-10 grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <Reveal>
            <div className="mx-auto grid h-44 w-44 place-items-center rounded-full bg-white/[0.04] p-4 ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(124,58,237,0.7)] sm:h-56 sm:w-56">
              <img
                src={MK_LOGO}
                alt="Monarchy Knuckle Games logo"
                className="h-full w-full object-contain drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
                data-testid="mk-hero-logo"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p
                className="font-display uppercase tracking-[0.4em] text-sm text-white/90"
                data-testid="mk-eyebrow"
              >
                Studio
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1
                className="heading mt-4 text-4xl text-white sm:text-5xl lg:text-6xl"
                data-testid="mk-headline"
              >
                Monarchy <span className="text-white">Knuckle Games</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p
                className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
                data-testid="mk-bio"
              >
                Monarchy Knuckle Games is an independent studio led by a solo developer with over a
                decade of hands-on experience across game design, narrative systems, combat
                mechanics, and world-building. Operating under the Monarchy Knuckle banner, the
                studio is built on a single conviction: that ambitious, player-driven worlds do not
                require a hundred-person team to feel alive. Years of prototyping, playtesting, and
                refining systems with real communities have shaped a development philosophy that
                puts craft, atmosphere, and choice above all else. <em>The Realm Survivor RPG</em>
                {' '}is the studio's debut title, a deeply personal vision finally ready to meet the
                realms it was built for.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <GButton href={`mailto:${CONTACT_EMAIL}`} size="lg" data-testid="mk-email-cta">
                  <Mail size={18} /> {CONTACT_EMAIL}
                </GButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative py-16 lg:py-20" data-testid="mk-contact-section">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Get In Touch" title="Reach the" highlight="Studio" />
          <Reveal>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-white/85">
              Press, partnerships, playtest requests, or just a hello from a fellow Realm Survivor.
              Drop a line below and it will land directly in our inbox at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white underline decoration-brand-purple/70 underline-offset-4 hover:text-brand-purple"
                data-testid="mk-inline-email"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.form
              onSubmit={onSubmit}
              className="mt-10 grid gap-5 rounded-2xl glass border border-white/10 p-6 sm:p-8"
              data-testid="mk-contact-form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 font-display text-xs uppercase tracking-widest text-white/90">
                    <User size={14} /> Name
                  </span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className={inputCls}
                    data-testid="mk-form-name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 font-display text-xs uppercase tracking-widest text-white/90">
                    <AtSign size={14} /> Email
                  </span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    className={inputCls}
                    data-testid="mk-form-email"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 font-display text-xs uppercase tracking-widest text-white/90">
                  <MessageSquare size={14} /> Subject
                </span>
                <input
                  type="text"
                  value={form.subject}
                  onChange={update('subject')}
                  placeholder="What is this about?"
                  className={inputCls}
                  data-testid="mk-form-subject"
                />
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 font-display text-xs uppercase tracking-widest text-white/90">
                  <MessageSquare size={14} /> Message
                </span>
                <textarea
                  required
                  value={form.message}
                  onChange={update('message')}
                  rows={6}
                  placeholder="Tell us what's on your mind…"
                  className={`${inputCls} resize-y`}
                  data-testid="mk-form-message"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs text-white/65" data-testid="mk-form-note">
                  Submitting opens your email client with the message pre-filled.
                </p>
                <button
                  type="submit"
                  className="btn-grad inline-flex items-center gap-2 rounded-md px-7 py-3 font-display text-sm uppercase tracking-wider text-white shadow-[0_10px_30px_-10px_rgba(147,51,234,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_46px_-12px_rgba(59,130,246,0.7)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]"
                  data-testid="mk-form-submit"
                >
                  <Send size={16} /> Send Message
                </button>
              </div>

              {sent && (
                <p
                  className="rounded-md border border-brand-purple/40 bg-brand-purple/10 px-4 py-3 text-sm text-white/95"
                  data-testid="mk-form-sent"
                >
                  Thanks! Your email client should have opened with the message ready to send. If
                  not, you can reach us directly at{' '}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="underline decoration-brand-purple/70 underline-offset-4"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </motion.form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
