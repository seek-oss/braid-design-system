/**
 * Single source of truth for the site's top-level navigation sections.
 *
 * This drives:
 *  - the header navigation ({@link file://./Navigation/Navigation.tsx})
 *  - the contextual side navigation ({@link file://./SideNavigation/SideNavigation.tsx})
 *
 * Keep this file free of React/runtime imports so it stays cheap to import
 * anywhere (including build-time config).
 */

export type NavSectionId =
  'foundations' | 'components' | 'patterns' | 'templates' | 'styles';

export interface NavSection {
  /** Stable identifier used to switch side-nav content. */
  id: NavSectionId;
  /** Label shown in the header and side navigation. */
  label: string;
  /** Landing route for the section. */
  href: string;
  /** Path prefixes that mark this section as active. */
  pathPrefixes: readonly string[];
}

export const navSections = [
  {
    id: 'foundations',
    label: 'Foundations',
    href: '/foundations',
    pathPrefixes: ['/foundations'],
  },
  {
    id: 'components',
    label: 'Components',
    href: '/components',
    pathPrefixes: ['/components'],
  },
  {
    id: 'patterns',
    label: 'Patterns',
    href: '/patterns',
    pathPrefixes: ['/patterns'],
  },
  {
    id: 'templates',
    label: 'Templates',
    href: '/templates',
    pathPrefixes: ['/templates'],
  },
  {
    id: 'styles',
    label: 'Styles',
    href: '/css',
    pathPrefixes: ['/css'],
  },
] as const satisfies readonly NavSection[];
