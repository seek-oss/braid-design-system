import type { PatternDocs } from '../../../types';

import bulkActions from './docs/bulk-actions';
import {
  howToEntries,
  patternCatalog,
  patternEntries,
  patternHref,
} from './catalog';
import contentDensity from './docs/content-density';
import dataVisPalette from './docs/data-vis-palette';
import dividedLists from './docs/divided-lists';
import emptyStates from './docs/empty-states';
import errorMessages from './docs/error-messages';
import errorStates from './docs/error-states';
import filters from './docs/filters';
import forms from './docs/forms';
import messagesToUsers from './docs/messages-to-users';
import nudge from './docs/nudge';
import secondaryInformation from './docs/secondary-information';
import serviceOutageBanners from './docs/service-outage-banners';
import skeletonLoader from './docs/skeleton-loader';
import socialShare from './docs/social-share';
import wideScreenLayouts from './docs/wide-screen-layouts';

const patternDocsBySlug: Record<string, PatternDocs> = {
  'bulk-actions': bulkActions,
  'divided-list': dividedLists,
  'empty-state': emptyStates,
  'error-messages': errorMessages,
  'error-state': errorStates,
  filters,
  forms,
  'messages-to-users': messagesToUsers,
  nudge,
  'secondary-information': secondaryInformation,
  'service-outage-banner': serviceOutageBanners,
  'skeleton-loader': skeletonLoader,
  'social-share': socialShare,
  'data-vis-palette': dataVisPalette,
  'content-density': contentDensity,
  'wide-screen-layouts': wideScreenLayouts,
};

const catalogSlugs = patternCatalog.map((entry) => entry.slug);
const docsSlugs = Object.keys(patternDocsBySlug);
const missingDocs = catalogSlugs.filter((slug) => !patternDocsBySlug[slug]);
const extraDocs = docsSlugs.filter((slug) => !catalogSlugs.includes(slug));

if (missingDocs.length > 0 || extraDocs.length > 0) {
  throw new Error(
    [
      missingDocs.length > 0
        ? `Catalog entries missing docs: ${missingDocs.join(', ')}`
        : null,
      extraDocs.length > 0
        ? `Pattern docs missing catalog entries: ${extraDocs.join(', ')}`
        : null,
    ]
      .filter(Boolean)
      .join('\n'),
  );
}

export const getPatternDocs = (slug: string): PatternDocs => {
  const docs = patternDocsBySlug[slug];

  if (!docs) {
    throw new Error(`Unknown pattern slug: ${slug}`);
  }

  return docs;
};

export const patternNavItems = patternEntries.map((entry) => ({
  name: entry.title,
  path: patternHref(entry.slug),
}));

export const howToNavItems = howToEntries.map((entry) => ({
  name: entry.title,
  path: patternHref(entry.slug),
}));
