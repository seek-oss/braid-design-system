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
      'Bulk actions allow users to apply the same action to multiple items at once. Bulk actions are likely to be used in conjunction with a list of Cards or a Divided List.',
  },
  {
    slug: 'divided-lists',
    title: 'Divided lists',
    kind: 'pattern',
    description:
      'Use a divided list to display a group of related items consecutively in an organised way. Divided lists allow users to easily scan, locate, edit and take action on individual list items. Divided lists can contain various types of information including text, images and CTAs.',
  },
  {
    slug: 'empty-states',
    title: 'Empty states',
    kind: 'pattern',
    description:
      'An empty state occurs when there is no data available at the present time. An empty state can be used to give the user clues about what they might see when there is data, and/or to explain what they should do next.',
  },
  {
    slug: 'error-states',
    title: 'Error states',
    kind: 'pattern',
    description:
      'An error state occurs when the website or app fails to complete an expected action. The error state is shown after the user has requested the action and alerts them that a problem has occurred.',
  },
  {
    slug: 'filters',
    title: 'Filters',
    kind: 'pattern',
    description:
      'Filters allow users to manipulate content or data on a page. Filters can be used to narrow down items in a list or arrange data to gain insights.',
  },
  {
    slug: 'forms',
    title: 'Forms',
    kind: 'pattern',
    description:
      'A form is a collection of input fields that allow users to enter data or configure options. A form can be simple or complex, and may be displayed in a variety of ways such as a dedicated page, sidebar or dialog depending on the use case and situation.',
  },
  {
    slug: 'messages-to-users',
    title: 'Messages to users',
    kind: 'pattern',
    description:
      'A message is a communication to the user displayed in the UI. A message is different to normal text as it is generally time-sensitive and triggered by an event (such as a change in system condition or a user action). Use messages to communicate conditions, indicate an event, or show responses to user actions.',
  },
  {
    slug: 'nudge',
    title: 'Nudge',
    kind: 'pattern',
    description:
      'A prominent message that encourages the user to take a specific action on something relevant at that moment. A nudge is always actionable and drives desired behaviour.',
  },
  {
    slug: 'revealing-secondary-information',
    title: 'Revealing secondary information',
    kind: 'pattern',
    description:
      'Secondary information is any non-critical, optional or supplementary information that might be useful for the user. This can include short definitions of terms or phrases, and explanatory copy that provides extra context.',
  },
  {
    slug: 'service-outage-banners',
    title: 'Service outage banners',
    kind: 'pattern',
    description:
      'Service outage banners inform users of upcoming interruptions to SEEK products and services. This can include outages to the entire system or to specific products, as well as disruptions to the usual level of service such as slower response times.',
  },
  {
    slug: 'skeleton-loader',
    title: 'Skeleton loader',
    kind: 'pattern',
    description:
      'A skeleton loader displays placeholder elements to represent actual content while it loads. This gives candidates and hirers the impression that content is loading quickly and progressively, even if the actual data is yet to appear.',
  },
  {
    slug: 'social-share',
    title: 'Social share',
    kind: 'pattern',
    description:
      'Social share allows users to broadcast SEEK content to their social networks for connections, groups, or specific individuals to view. Examples of SEEK content may include job ads, candidate profiles or blog articles.',
  },
  {
    slug: 'data-vis-palette',
    title: 'Data vis palette',
    kind: 'how-to',
    description:
      'A carefully curated, accessible and flexible colour palette to be used in SEEK data visualisations. We estimate it will satisfy over 80% of our current data visualisation prerequisites. It is also designed to support future dark mode ambitions.',
  },
  {
    slug: 'content-density',
    title: 'Tailoring content density',
    kind: 'how-to',
    description:
      'This post walks through the basic fundamentals of how to tailor content density through size and spacing of Braid components.',
  },
  {
    slug: 'wide-screen-layouts',
    title: 'Wide-screen layouts',
    kind: 'how-to',
    description:
      'This post contains considerations, best practice, and practical examples for teams using Braid components to create wide-screen layouts.',
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
