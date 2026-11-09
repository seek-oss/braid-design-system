import assert from 'assert';

export type ChatMessageSentDate = Date | string | number;

const millisecondsPerDay = 24 * 60 * 60 * 1000;

const relativeDayFormat = new Intl.RelativeTimeFormat(undefined, {
  numeric: 'auto',
});

const dateFormat = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' });

/**
 * Parses a `sentDate` the same way `ChatMessage` does, and throws if it is not a valid date.
 * Returns `undefined` when no date is set.
 */
export const parseSentDate = (
  sentDate: ChatMessageSentDate | undefined,
): Date | undefined => {
  if (sentDate === undefined) {
    return undefined;
  }

  const date = new Date(sentDate);

  assert(
    !isNaN(date.getTime()),
    `sentDate of "${sentDate}" is not a valid date.`,
  );

  return date;
};

/**
 * The local calendar day as `YYYY-MM-DD`. Two dates share a key when they fall on the same local day.
 */
export const getDayKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

// Whole days between two local calendar days, unaffected by daylight saving.
const dayNumber = (date: Date) =>
  Math.round(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) /
      millisecondsPerDay,
  );

const titleCase = (text: string) =>
  text.charAt(0).toLocaleUpperCase() + text.slice(1);

/**
 * "Today" or "Yesterday" for the current and previous local day, otherwise a date in the reader's locale.
 */
export const formatDayLabel = (date: Date, now: Date = new Date()): string => {
  const daysAgo = dayNumber(now) - dayNumber(date);

  if (daysAgo === 0 || daysAgo === 1) {
    return titleCase(relativeDayFormat.format(0 - daysAgo, 'day'));
  }

  return dateFormat.format(date);
};
