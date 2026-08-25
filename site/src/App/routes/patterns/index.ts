import type { Page } from '../../../types';

import bulkActions from './bulk-actions';
import {
  howToEntries,
  patternCatalog,
  patternEntries,
  patternHref,
} from './catalog';
import contentDensity from './content-density';
import dataVisPalette from './data-vis-palette';
import dividedLists from './divided-lists';
import emptyStates from './empty-states';
import errorStates from './error-states';
import filters from './filters';
import forms from './forms';
import messagesToUsers from './messages-to-users';
import nudge from './nudge';
import revealingSecondaryInformation from './revealing-secondary-information';
import serviceOutageBanners from './service-outage-banners';
import skeletonLoader from './skeleton-loader';
import socialShare from './social-share';
import wideScreenLayouts from './wide-screen-layouts';

// Quoted keys are extracted by sku.routes.ts for pre-rendering.
const routes: Record<string, Page> = {
  '/patterns/bulk-actions': bulkActions,
  '/patterns/divided-lists': dividedLists,
  '/patterns/empty-states': emptyStates,
  '/patterns/error-states': errorStates,
  '/patterns/filters': filters,
  '/patterns/forms': forms,
  '/patterns/messages-to-users': messagesToUsers,
  '/patterns/nudge': nudge,
  '/patterns/revealing-secondary-information': revealingSecondaryInformation,
  '/patterns/service-outage-banners': serviceOutageBanners,
  '/patterns/skeleton-loader': skeletonLoader,
  '/patterns/social-share': socialShare,
  '/patterns/data-vis-palette': dataVisPalette,
  '/patterns/content-density': contentDensity,
  '/patterns/wide-screen-layouts': wideScreenLayouts,
};

const catalogPaths = patternCatalog.map((entry) => patternHref(entry.slug));
const routePaths = Object.keys(routes);
const missingPages = catalogPaths.filter((path) => !routes[path]);
const extraPages = routePaths.filter((path) => !catalogPaths.includes(path));

if (missingPages.length > 0 || extraPages.length > 0) {
  throw new Error(
    [
      missingPages.length > 0
        ? `Catalog entries missing pages: ${missingPages.join(', ')}`
        : null,
      extraPages.length > 0
        ? `Pattern pages missing catalog entries: ${extraPages.join(', ')}`
        : null,
    ]
      .filter(Boolean)
      .join('\n'),
  );
}

export default routes;

export const patternNavItems = patternEntries.map((entry) => ({
  name: entry.title,
  path: patternHref(entry.slug),
}));

export const howToNavItems = howToEntries.map((entry) => ({
  name: entry.title,
  path: patternHref(entry.slug),
}));
