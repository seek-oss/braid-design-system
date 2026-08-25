import {
  categorisedComponents,
  documentedComponents,
  documentedCss,
} from '../navigationHelpers';
import { foundationNavItems } from '../routes/foundations';

export interface SearchItem {
  name: string;
  path: string;
  category: 'Foundations' | 'Components' | 'CSS' | 'Logic';
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

export type GroupedResults = Record<SearchItem['category'], SearchItem[]>;

export const groupSearchResults = (items: SearchItem[]): GroupedResults => {
  const groups: GroupedResults = {
    Foundations: [],
    Components: [],
    CSS: [],
    Logic: [],
  };

  items.forEach((item) => {
    groups[item.category].push(item);
  });

  return groups;
};
