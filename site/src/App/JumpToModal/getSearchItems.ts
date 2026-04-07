import {
  categorisedComponents,
  documentedComponents,
  documentedCss,
} from '../navigationHelpers';
import foundations from '../routes/foundations';

export interface SearchItem {
  name: string;
  path: string;
  category: 'Foundations' | 'Components' | 'CSS' | 'Logic';
  hasProps: boolean;
}

export const getSearchItems = (): SearchItem[] => {
  const items: SearchItem[] = [];

  // Foundations
  Object.entries(foundations).forEach(([path, foundation]) => {
    items.push({
      name: foundation.title,
      path,
      category: 'Foundations',
      hasProps: false,
    });
  });

  // Components (excluding Logic)
  const componentsList = documentedComponents.filter(
    ({ category }) => category !== 'Logic',
  );
  componentsList.forEach((doc) => {
    items.push({
      name: doc.name,
      path: `/components/${doc.name}`,
      category: 'Components',
      hasProps: true,
    });
  });

  // CSS
  documentedCss.forEach((doc) => {
    items.push({
      name: doc.name,
      path: `/css/${doc.name}`,
      category: 'CSS',
      hasProps: false,
    });
  });

  // Logic
  if (categorisedComponents.Logic) {
    categorisedComponents.Logic.forEach((doc) => {
      items.push({
        name: doc.name,
        path: `/components/${doc.name}`,
        category: 'Logic',
        hasProps: false,
      });
    });
  }

  return items;
};

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
