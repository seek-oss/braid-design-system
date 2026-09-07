export type PatternKind = 'pattern' | 'how-to';

export interface PatternEntry {
  slug: string;
  title: string;
  description: string;
  kind: PatternKind;
}

export const patternCatalog: PatternEntry[] = [
  {
    slug: 'bulk-actions',
    title: 'Bulk actions',
    kind: 'pattern',
    description:
      'Allows users to select multiple items in a list and apply the same action to all of them.',
  },
  {
    slug: 'divided-list',
    title: 'Divided list',
    kind: 'pattern',
    description:
      'Displays a list of related items separated by dividers, for easy scannability.',
  },
  {
    slug: 'empty-state',
    title: 'Empty state',
    kind: 'pattern',
    description:
      'Displays a message in place of content when none is available, guiding users on what to do next.',
  },
  {
    slug: 'error-state',
    title: 'Error state',
    kind: 'pattern',
    description:
      'Displays a message when an expected action fails, alerting users to the problem and how to proceed.',
  },
  {
    slug: 'filters',
    title: 'Filters',
    kind: 'pattern',
    description:
      'Allows users to narrow down content or data by one or more criteria, making relevant items easier to find.',
  },
  {
    slug: 'forms',
    title: 'Forms',
    kind: 'pattern',
    description:
      'Displays a structured set of input fields that guides users through entering, validating, and submitting information.',
  },
  {
    slug: 'messages-to-users',
    title: 'Messages to users',
    kind: 'pattern',
    description:
      'Represents a group of patterns and components used to communicate conditions, events, or responses to user actions.',
  },
  {
    slug: 'nudge',
    title: 'Nudge',
    kind: 'pattern',
    description:
      'Displays a prominent, actionable message that drives users toward a specific behaviour relevant to their current context.',
  },
  {
    slug: 'secondary-information',
    title: 'Secondary information',
    kind: 'pattern',
    description:
      'Represents a group of components and patterns used to reveal non-critical, supplementary information without cluttering the primary content.',
  },
  {
    slug: 'service-outage-banner',
    title: 'Service outage banner',
    kind: 'pattern',
    description:
      'Informs users of an existing or upcoming outage or reduced service level, affecting the whole system or specific products.',
  },
  {
    slug: 'skeleton-loader',
    title: 'Skeleton loader',
    kind: 'pattern',
    description:
      'Displays visual placeholders that mimic real content while it loads, giving the impression of faster, progressive loading.',
  },
  {
    slug: 'social-share',
    title: 'Social share',
    kind: 'pattern',
    description:
      'Allows users to share content, such as a job ad or article, to their social networks or with specific individuals.',
  },
  {
    slug: 'content-density',
    title: 'Tailoring content density',
    kind: 'how-to',
    description:
      'How to adjust the size and spacing of components to create a more airy or more condensed UI.',
  },
  {
    slug: 'wide-screen-layouts',
    title: 'Wide-screen layouts',
    kind: 'how-to',
    description:
      'How to tailor page width and layout to balance readability, scannability, and adaptability across devices.',
  },
];

export const patternHref = (slug: string) => `/patterns/${slug}`;

export const getPatternEntry = (slug: string): PatternEntry => {
  const entry = patternCatalog.find((item) => item.slug === slug);

  if (!entry) {
    throw new Error(`Unknown pattern slug: ${slug}`);
  }

  return entry;
};

export const patternEntries = patternCatalog.filter(
  (entry) => entry.kind === 'pattern',
);

export const howToEntries = patternCatalog.filter(
  (entry) => entry.kind === 'how-to',
);

export const toLandingCard = (entry: PatternEntry) => ({
  href: patternHref(entry.slug),
  label: entry.title,
  description: entry.description,
});
