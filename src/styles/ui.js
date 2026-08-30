/**
 * Shared class recipes so every view keeps the same visual language.
 * Deliberately restrained: a card uses a border OR a soft shadow, never a heavy
 * border + heavy shadow + strong background change at the same time.
 */
export const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400";

export const CARD =
  "rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/60";

export const CARD_INTERACTIVE = `${CARD} transition-colors duration-200 hover:border-blue-800/50 dark:hover:border-blue-400/50`;

/**
 * Type scale. Only three sizes carry meaning:
 *   BODY  15px (16px from `sm`)  — anything meant to be read
 *   META  13px                   — dates, counters, secondary metadata
 *   EYEBROW 11px                 — uppercase micro-labels only
 * Nothing below 11px: 10px text was unreadable on real screens.
 */
export const EYEBROW =
  "text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-600 dark:text-gray-400";

export const TITLE = "font-bold text-gray-900 dark:text-white";

export const BODY =
  "text-[15px] leading-[1.6] text-gray-700 dark:text-gray-300 sm:text-base";

// gray-400 on a dark card sits under 4.5:1; gray-300 keeps small text legible.
export const META = "text-[13px] leading-normal text-gray-600 dark:text-gray-300";

export const CHIP =
  "inline-flex items-center rounded-full border border-gray-200 bg-gray-100/80 px-2.5 py-1 text-xs font-medium leading-none text-gray-700 dark:border-gray-800 dark:bg-gray-800/60 dark:text-gray-200";

export const CHIP_ACCENT =
  "inline-flex items-center rounded-full border border-blue-800/25 bg-blue-50 px-2.5 py-1 text-xs font-semibold leading-none text-blue-900 dark:border-blue-400/25 dark:bg-blue-950/60 dark:text-blue-300";

export const BTN =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 sm:px-5";

export const BTN_PRIMARY = `${BTN} ${FOCUS} bg-blue-900 text-white hover:bg-blue-800 dark:bg-blue-400 dark:text-black dark:hover:bg-blue-300`;

export const BTN_SECONDARY = `${BTN} ${FOCUS} border border-gray-300 text-gray-800 hover:border-gray-500 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white`;

export const LINK_ARROW = `inline-flex items-center gap-1.5 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 ${FOCUS} rounded`;

/** Vertical rhythm of a view section. Tightened on mobile on purpose. */
export const SECTION = "py-10 sm:py-14";
