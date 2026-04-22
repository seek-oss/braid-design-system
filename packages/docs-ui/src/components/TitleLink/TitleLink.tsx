import { Box, IconLink, Link } from 'braid-design-system';
import type { ReactNode } from 'react';

import * as styles from './TitleLink.css';

type TitleLink = {} & (
  | { children: string }
  | { children: ReactNode; label: string }
);

const slugify = (string: string) =>
  string
    .replace(/[\s?]/g, '-')
    .replace('--', '-')
    .replace(/-$/, '')
    .toLowerCase();

export const TitleLink = ({ ...restProps }: TitleLink) => {
  const label = 'label' in restProps ? restProps.label : restProps.children;
  const slug = slugify(label);

  return (
    <Link id={slug} href={`#${slug}`} className={styles.titleLink}>
      {restProps.children}
      <Box
        component="span"
        transition="fast"
        opacity={0}
        className={styles.hashLink}
      >
        <IconLink />
      </Box>
    </Link>
  );
};
