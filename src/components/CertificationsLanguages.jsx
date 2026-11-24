import { Award, BadgeCheck, Languages } from 'lucide-react';

export default function CertificationsLanguages({ content }) {
  const { certifications } = content;

  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-b border-emerald-900/10 bg-section-aurora py-16 sm:py-20 dark:border-white/10"
    >
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute -top-20 end-1/3 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-aurora-alt pointer-events-none absolute -bottom-20 start-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {certifications.title}
          </h2>
          <p className="mt-2.5 text-base text-slate-600 dark:text-slate-400">
            {certifications.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Certifications */}
          <div className="space-y-4 lg:col-span-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <Award className="h-5 w-5 text-emerald-500" />
              <span>{certifications.certsHeading}</span>
            </h3>

            <div className="space-y-3">
              {certifications.items.map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card flex flex-col justify-between gap-2 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center"
                >
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-600 sm:text-sm dark:text-slate-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 self-start rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-700 sm:self-center dark:text-emerald-300">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4 lg:col-span-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <Languages className="h-5 w-5 text-emerald-500" />
              <span>{certifications.langsHeading}</span>
            </h3>

            <div className="glass-card space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
              {certifications.languages.map((langItem) => (
                <div key={langItem.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {langItem.name}
                    </span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      {langItem.level}
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-400"
                      style={{ width: `${langItem.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}