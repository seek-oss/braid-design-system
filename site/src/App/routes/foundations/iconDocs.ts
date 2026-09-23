export const iconographyPath = '/foundations/iconography';

export const isIconDocsName = (name: string) => name.startsWith('Icon');

export const iconDocsPath = (
  iconName: string,
  page?: 'props' | 'releases' | 'snippets',
) => `${iconographyPath}/${iconName}${page ? `/${page}` : ''}`;
