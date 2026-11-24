import { UserCheck } from 'lucide-react';

export default function About({ content }) {
  const { about } = content;

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-emerald-900/10 bg-section-aurora py-16 sm:py-20 dark:border-white/10"
    >
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute -top-24 start-1/4 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-aurora-alt pointer-events-none absolute -bottom-24 end-1/4 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {about.title}
          </h2>
          <p className="mt-2.5 text-base text-slate-600 dark:text-slate-400">
            {about.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Bio paragraphs */}
          <div className="glass-card space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-600 sm:p-8 sm:text-base lg:col-span-8 dark:text-slate-300">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick profile sidebar */}
          <aside className="lg:col-span-4">
            <div className="glass-card h-full rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <UserCheck className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {about.quickInfoTitle}
                </h3>
              </div>

              <dl className="space-y-4">
                {about.quickInfo.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-slate-200/80 pb-3.5 last:border-b-0 last:pb-0 dark:border-white/10"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}