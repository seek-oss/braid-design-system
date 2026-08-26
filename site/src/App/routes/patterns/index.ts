import type { PatternDocs } from '../../../types';

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
import secondaryInformation from './secondary-information';
import serviceOutageBanners from './service-outage-banners';
import skeletonLoader from './skeleton-loader';
import socialShare from './social-share';
import wideScreenLayouts from './wide-screen-layouts';

const patternDocsBySlug: Record<string, PatternDocs> = {
  'bulk-actions': bulkActions,
  'divided-lists': dividedLists,
  'empty-states': emptyStates,
  'error-states': errorStates,
  filters,
  forms,
  'messages-to-users': messagesToUsers,
  nudge,
  'secondary-information': secondaryInformation,
  'service-outage-banners': serviceOutageBanners,
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
