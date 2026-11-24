import { Award, Briefcase, Calendar, GraduationCap } from 'lucide-react';

export default function ExperienceEducation({ content }) {
  const { experience } = content;

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-emerald-900/10 bg-section-aurora py-16 sm:py-20 dark:border-white/10"
    >
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute -top-20 start-1/3 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-aurora-alt pointer-events-none absolute -bottom-20 end-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {experience.title}
          </h2>
          <p className="mt-2.5 text-base text-slate-600 dark:text-slate-400">
            {experience.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Experience Timeline */}
          <div className="space-y-6 lg:col-span-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <Briefcase className="h-5 w-5 text-emerald-500" />
              <span>{experience.expHeading}</span>
            </h3>

            <div className="space-y-6">
              {experience.items.map((item) => (
                <article
                  key={item.role}
                  className="glass-card rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h4>
                      <p className="mt-0.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {item.org}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="space-y-6 lg:col-span-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <GraduationCap className="h-5 w-5 text-emerald-500" />
              <span>{experience.eduHeading}</span>
            </h3>

            <div className="glass-card rounded-2xl border border-slate-200 bg-white p-6">
              <span className="inline-block rounded-full bg-emerald-500/15 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                {experience.education.year}
              </span>

              <h4 className="font-display mt-3 text-xl font-bold text-slate-900 dark:text-white">
                {experience.education.university}
              </h4>

              <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                {experience.education.degree}
              </p>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {experience.education.major}
              </p>

              <div className="mt-6 space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-[#090b0e]/80">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {experience.education.gradProjectLabel}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {experience.education.gradProject}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-3 dark:border-white/10">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    {experience.education.gradeLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    <Award className="h-3.5 w-3.5" />
                    {experience.education.grade}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}