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
  'guides' | 'foundations' | 'components' | 'patterns' | 'styles';

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
    id: 'guides',
    label: 'Guides',
    href: '/guides',
    pathPrefixes: ['/guides'],
  },
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
    pathPrefixes: ['/patterns', '/templates'],
  },
  {
    id: 'styles',
    label: 'Styles',
    href: '/css',
    pathPrefixes: ['/css'],
  },
] as const satisfies readonly NavSection[];

const isWithin = (pathname: string, path: string) =>
  pathname === path || pathname.startsWith(`${path}/`);

/**
 * The top-level section a pathname belongs to, used to highlight the header
 * link and to choose which side navigation content to show.
 */
export const getActiveSection = (pathname: string) =>
  navSections.find(({ pathPrefixes }) =>
    pathPrefixes.some((prefix) => isWithin(pathname, prefix)),
  );

/**
 * Whether a navigation item should render as active.
 *
 * Items match their own page and anything nested below it, so `/components` is
 * active on `/components/Box/props`. Pass `exact` for section landing links,
 * which would otherwise stay active across the whole section.
 */
export const isNavItemActive = (
  pathname: string,
  path: string,
  { exact = false }: { exact?: boolean } = {},
) => (exact ? pathname === path : isWithin(pathname, path));
