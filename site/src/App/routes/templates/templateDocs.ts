export const templatePathPrefix = '/patterns/templates';

export const templateGroupPath = (groupName: string) =>
  `${templatePathPrefix}/${groupName}`;

export const templateDetailPath = (groupName: string, templateName: string) =>
  `${templatePathPrefix}/${groupName}/${templateName}`;

export const templateLandingCards = [
  {
    href: templateGroupPath('layouts'),
    label: 'Layouts',
    description: 'Full-page structural starting points for new screens.',
  },
  {
    href: templateGroupPath('sections'),
    label: 'Sections',
    description: 'Composable content blocks to drop into page layouts.',
  },
];
