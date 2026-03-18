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
}

export const getSearchItems = (): SearchItem[] => {
  const items: SearchItem[] = [];

  // Foundations
  Object.entries(foundations).forEach(([path, foundation]) => {
    items.push({
      name: foundation.title,
      path,
      category: 'Foundations',
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
    });
  });

  // CSS
  documentedCss.forEach((doc) => {
    items.push({
      name: doc.name,
      path: `/css/${doc.name}`,
      category: 'CSS',
    });
  });

  // Logic
  if (categorisedComponents.Logic) {
    categorisedComponents.Logic.forEach((doc) => {
      items.push({
        name: doc.name,
        path: `/components/${doc.name}`,
        category: 'Logic',
      });
    });
  }

  return items;
};

export const groupSearchResults = (items: SearchItem[]) => {
  const groups: Record<SearchItem['category'], SearchItem[]> = {
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
