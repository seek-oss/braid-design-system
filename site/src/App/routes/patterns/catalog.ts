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
    description: 'Apply the same action to multiple items at once.',
  },
  {
    slug: 'divided-lists',
    title: 'Divided lists',
    kind: 'pattern',
    description:
      'Display related items in a consecutive list that’s easy to scan and act on.',
  },
  {
    slug: 'empty-states',
    title: 'Empty states',
    kind: 'pattern',
    description: 'Show what to expect or do next when there’s no data yet.',
  },
  {
    slug: 'error-states',
    title: 'Error states',
    kind: 'pattern',
    description: 'Alert users when a requested action couldn’t be completed.',
  },
  {
    slug: 'filters',
    title: 'Filters',
    kind: 'pattern',
    description: 'Let users narrow or rearrange content on a page.',
  },
  {
    slug: 'forms',
    title: 'Forms',
    kind: 'pattern',
    description:
      'Collect input through a set of fields on a page, sidebar or dialog.',
  },
  {
    slug: 'messages-to-users',
    title: 'Messages to users',
    kind: 'pattern',
    description:
      'Communicate time-sensitive conditions, events or responses in the UI.',
  },
  {
    slug: 'nudge',
    title: 'Nudge',
    kind: 'pattern',
    description:
      'Prompt a relevant, actionable next step at the moment it matters.',
  },
  {
    slug: 'secondary-information',
    title: 'Secondary information',
    kind: 'pattern',
    description:
      'Offer optional extra context, such as definitions or explanatory copy.',
  },
  {
    slug: 'service-outage-banners',
    title: 'Service outage banners',
    kind: 'pattern',
    description: 'Warn users about upcoming interruptions or reduced service.',
  },
  {
    slug: 'skeleton-loader',
    title: 'Skeleton loader',
    kind: 'pattern',
    description:
      'Show placeholder content so a page feels like it’s loading progressively.',
  },
  {
    slug: 'social-share',
    title: 'Social share',
    kind: 'pattern',
    description: 'Let users broadcast SEEK content to their social networks.',
  },
  {
    slug: 'data-vis-palette',
    title: 'Data vis palette',
    kind: 'how-to',
    description:
      'Use SEEK’s accessible colour palette for data visualisations.',
  },
  {
    slug: 'content-density',
    title: 'Tailoring content density',
    kind: 'how-to',
    description:
      'Adjust size and spacing of Braid components to tailor content density.',
  },
  {
    slug: 'wide-screen-layouts',
    title: 'Wide-screen layouts',
    kind: 'how-to',
    description:
      'Considerations and examples for building wide-screen layouts with Braid.',
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
