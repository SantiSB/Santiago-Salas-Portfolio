import { useState } from "react";
import { t, UI } from "../../i18n";
import { CAPABILITIES } from "../../data/capabilities";
import { CARD, CHIP, FOCUS } from "../../styles/ui";

const ALL = "all";

export default function SkillsToolbox({ lang = "en" }) {
  const [active, setActive] = useState(ALL);

  const groups =
    active === ALL
      ? CAPABILITIES
      : CAPABILITIES.filter((group) => group.id === active);

  const total = CAPABILITIES.reduce((sum, group) => sum + group.items.length, 0);
  const shown = groups.reduce((sum, group) => sum + group.items.length, 0);

  const filterClass = (isActive) =>
    `rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${FOCUS} ${
      isActive
        ? "border-blue-800 bg-blue-900 text-white dark:border-blue-400 dark:bg-blue-400 dark:text-black"
        : "border-gray-300 text-gray-700 hover:border-blue-800/50 hover:text-blue-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400/50 dark:hover:text-blue-300"
    }`;

  return (
    <div>
      <div
        role="group"
        aria-label={t(UI.skillsView.title, lang)}
        className="flex flex-wrap gap-2"
      >
        <button
          type="button"
          aria-pressed={active === ALL}
          onClick={() => setActive(ALL)}
          className={filterClass(active === ALL)}
        >
          {t(UI.skillsView.all, lang)}
        </button>
        {CAPABILITIES.map((group) => (
          <button
            key={group.id}
            type="button"
            aria-pressed={active === group.id}
            onClick={() => setActive(group.id)}
            className={filterClass(active === group.id)}
          >
            {t(group.title, lang)}
          </button>
        ))}
      </div>

      <p
        aria-live="polite"
        className="mt-3 text-xs text-gray-600 dark:text-gray-400"
      >
        {shown} / {total} {t(UI.skillsView.count, lang)}
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <section key={group.id} className={`p-5 ${CARD}`}>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-blue-900 dark:text-blue-400">
              {t(group.title, lang)}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item, index) => (
                <li key={index}>
                  <span className={CHIP}>{t(item, lang)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
