import { CheckCircle2, Code, Database, Layers, Layout, Smartphone, Users, Wrench } from 'lucide-react';

const CATEGORY_ICONS = [Code, Smartphone, Layers, Database, Layout, Wrench, Code];

export default function Skills({ content }) {
  const { skills } = content;

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-emerald-900/10 bg-section-aurora-alt py-16 sm:py-20 dark:border-white/10"
    >
      <div
        aria-hidden="true"
        className="animate-aurora-alt pointer-events-none absolute top-10 end-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute bottom-10 start-1/4 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {skills.title}
          </h2>
          <p className="mt-2.5 text-base text-slate-600 dark:text-slate-400">
            {skills.subtitle}
          </p>
        </div>

        <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
          <Code className="h-5 w-5 text-emerald-500" />
          <span>{skills.techHeading}</span>
        </h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category, idx) => {
            const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
            const spanLast = idx === skills.categories.length - 1 ? 'md:col-span-2 lg:col-span-3' : '';

            return (
              <div
                key={category.name}
                className={`glass-card rounded-2xl border border-slate-200 bg-white p-6 ${spanLast}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {category.name}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:bg-[#090b0e]/80 dark:text-slate-200 dark:hover:border-emerald-400/50 dark:hover:text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="glass-card mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <Users className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              {skills.softHeading}
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.softSkills.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-[#090b0e]/80 dark:text-slate-200"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}