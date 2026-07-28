/**
 * Single source of truth for the site's top-level navigation sections.
 *
 * This drives:
 *  - the header navigation ({@link file://./Navigation/Navigation.tsx})
 *  - the contextual side navigation ({@link file://./SideNavigation/SideNavigation.tsx})
 *  - the section cards on the landing page ({@link file://./routes/home/index.tsx})
 *
 * Keep this file free of React/runtime imports so it stays cheap to import
 * anywhere (including build-time config).
 */

export type NavSectionId =
  | 'foundations'
  | 'components'
  | 'patterns'
  | 'templates'
  | 'styles';

export interface NavSection {
  /** Stable identifier used to switch side-nav content. */
  id: NavSectionId;
  /** Label shown in the header and side navigation. */
  label: string;
  /** Landing route for the section. */
  href: string;
  /** Path prefixes that mark this section as active. */
  pathPrefixes: readonly string[];
  /** Short summary used for the landing page section cards. */
  description: string;
}

export const navSections = [
  {
    id: 'foundations',
    label: 'Foundations',
    href: '/foundations',
    pathPrefixes: ['/foundations', '/guides'],
    description:
      'Core concepts like layout, tones and iconography, plus workflow guides.',
  },
  {
    id: 'components',
    label: 'Components',
    href: '/components',
    pathPrefixes: ['/components'],
    description: 'The full suite of React components available in Braid.',
  },
  {
    id: 'patterns',
    label: 'Patterns',
    href: '/patterns',
    pathPrefixes: ['/patterns'],
    description:
      'Reusable patterns composing components into common experiences.',
  },
  {
    id: 'templates',
    label: 'Templates',
    href: '/templates',
    pathPrefixes: ['/templates'],
    description: 'Page-level starting points for building new screens.',
  },
  {
    id: 'styles',
    label: 'Styles',
    href: '/css',
    pathPrefixes: ['/css'],
    description: 'Low-level CSS utilities and styling primitives.',
  },
] as const satisfies readonly NavSection[];
