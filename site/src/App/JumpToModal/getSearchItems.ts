import {
  categorisedComponents,
  documentedComponents,
  documentedCss,
} from '../navigationHelpers';
import { foundationNavItems } from '../routes/foundations';
import {
  howToEntries,
  patternChildEntries,
  patternEntries,
  patternHref,
} from '../routes/patterns/catalog';

export const searchCategories = [
  'Foundations',
  'Components',
  'Patterns',
  'How to',
  'CSS',
  'Logic',
] as const;

export type SearchCategory = (typeof searchCategories)[number];

export interface SearchItem {
  name: string;
  path: string;
  category: SearchCategory;
  hasProps: boolean;
}

export const searchItems: SearchItem[] = [
  // Foundations
  ...foundationNavItems.map((item) => ({
    name: item.name,
    path: item.path,
    category: 'Foundations' as const,
    hasProps: false,
  })),

  // Components (excluding Logic)
  ...documentedComponents
    .filter(({ category }) => category !== 'Logic')
    .map((doc) => ({
      name: doc.name,
      path: `/components/${doc.name}`,
      category: 'Components' as const,
      hasProps: true,
    })),

  // Patterns
  ...[...patternEntries, ...patternChildEntries].map((entry) => ({
    name: entry.title,
    path: patternHref(entry.slug),
    category: 'Patterns' as const,
    hasProps: false,
  })),

  // How to
  ...howToEntries.map((entry) => ({
    name: entry.title,
    path: patternHref(entry.slug),
    category: 'How to' as const,
    hasProps: false,
  })),

  // CSS
  ...documentedCss.map((doc) => ({
    name: doc.name,
    path: `/css/${doc.name}`,
    category: 'CSS' as const,
    hasProps: false,
  })),

  // Logic
  ...(categorisedComponents.Logic ?? []).map((doc) => ({
    name: doc.name,
    path: `/components/${doc.name}`,
    category: 'Logic' as const,
    hasProps: false,
  })),
];

export type GroupedResults = Record<SearchCategory, SearchItem[]>;

export const groupSearchResults = (items: SearchItem[]): GroupedResults => {
  const groups = Object.fromEntries(
    searchCategories.map((category) => [category, [] as SearchItem[]]),
  ) as GroupedResults;

  items.forEach((item) => {
    groups[item.category].push(item);
  });

  return groups;
};
