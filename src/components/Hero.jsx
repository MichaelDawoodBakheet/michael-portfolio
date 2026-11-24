import { useState } from 'react';
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import { CONTACT_LINKS } from '../data/portfolioData';

export default function Hero({ content, isRtl }) {
  const { meta, hero } = content;
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-emerald-900/10 bg-hero-surface dark:border-white/10"
    >
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute -top-28 start-1/3 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-sky-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-aurora-alt pointer-events-none absolute -bottom-24 end-1/6 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Greeting + Name + Bio + CTAs */}
          <div className="lg:col-span-7">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="truncate">{meta.availabilityBadge}</span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              <span className="inline-flex items-center gap-2">
                <span>{hero.greeting}</span>
                <span aria-hidden="true" className="animate-wave-hand">
                  👋
                </span>
              </span>
              <span className="mt-1 block text-slate-900 dark:text-white">
                {meta.name}
              </span>
            </h1>

            <p className="mt-2.5 text-sm sm:text-base lg:text-lg font-semibold text-emerald-600 dark:text-emerald-400">
              {meta.role}
            </p>

            <p className="mt-2 text-xs sm:text-sm lg:text-base font-medium text-slate-700 dark:text-slate-300">
              {meta.tagline}
            </p>

            <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {hero.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <p className="mt-3.5 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>{hero.ctaLine}</span>
            </p>

            {/* Primary CTAs */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="tech-glow inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400"
              >
                <span>{hero.viewProjects}</span>
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-slate-800 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:bg-[#11151b] dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
              >
                <Mail className="h-4 w-4 text-emerald-500" />
                <span>{hero.contactMe}</span>
              </a>
            </div>

            {/* Quick contact bar */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 border-t border-slate-200/80 pt-4 sm:pt-5 text-xs sm:text-sm text-slate-600 dark:border-white/10 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="truncate">{meta.location}</span>
              </span>
              <a
                href={`mailto:${CONTACT_LINKS.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 truncate"
              >
                <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="truncate">{CONTACT_LINKS.email}</span>
              </a>
              <a
                href={CONTACT_LINKS.phoneHref}
                dir="ltr"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                {CONTACT_LINKS.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Portrait & Frame */}
          <div className="flex flex-col items-center justify-center lg:col-span-5 mt-4 lg:mt-0">
            <div className="relative flex w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] items-end justify-center pt-2">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 rounded-3xl bg-[#0b0f13]/90 border border-emerald-500/25 backdrop-blur-sm"
                style={{ height: '98%' }}
              />

              <div
                aria-hidden="true"
                className="animate-racing-border pointer-events-none absolute inset-x-0 bottom-0 rounded-3xl"
                style={{ height: '98%', padding: '2px' }}
              >
                <div className="h-full w-full rounded-3xl bg-[#0b0f13]" />
              </div>

              {!photoMissing ? (
                <img
                  src="/profile.png"
                  alt={meta.name}
                  onError={() => setPhotoMissing(true)}
                  className="relative z-10 w-[88%] max-h-[420px] sm:max-h-[520px] object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                />
              ) : (
                <div className="relative z-10 flex h-80 w-64 sm:h-96 sm:w-72 flex-col items-center justify-between overflow-hidden rounded-3xl border border-emerald-500/35 bg-gradient-to-b from-[#131820] to-[#0a0d12] p-6 text-center shadow-2xl my-6">
                  <div className="flex w-full items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold text-emerald-400">
                      FLUTTER.DEV
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                  </div>

                  <div className="my-auto flex flex-col items-center">
                    <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-emerald-400/70 bg-emerald-500/15 font-display text-2xl sm:text-3xl font-bold text-white shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      MD
                    </div>
                    <p className="mt-3 font-display text-sm sm:text-base font-bold text-white">
                      {meta.shortName}
                    </p>
                    <p className="mt-1 text-xs text-emerald-400">
                      Android • iOS • Windows
                    </p>
                  </div>

                  <div className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 font-mono text-[10px] text-slate-400">
                    {hero.avatarHint}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}