import React, { ReactNode } from 'react';
import { Heading, Box, IconLink, Link } from '../../../../lib/components';
import { HeadingProps } from '../../../../lib/components/Heading/Heading';
import * as styles from './LinkableHeading.css';

type LinkableHeadingProps = {
  level?: HeadingProps['level'];
  component?: HeadingProps['component'];
} & ({ children: string } | { children: ReactNode; label: string });

const slugify = (string: string) =>
  string
    .replace(/[\s?]/g, '-')
    .replace('--', '-')
    .replace(/-$/, '')
    .toLowerCase();

export const LinkableHeading = ({
  level = '3',
  component,
  ...restProps
}: LinkableHeadingProps) => {
  const label = 'label' in restProps ? restProps.label : restProps.children;
  const slug = slugify(label);

  return (
    <Box display="flex">
      <Box className={styles.linkableHeading} display="inlineBlock">
        <Box id={slug} position="absolute" />
        <Link href={`#${slug}`}>
          <Heading level={level} component={component}>
            {restProps.children}{' '}
            <Box
              component="span"
              transition="fast"
              marginLeft="xxsmall"
              opacity={0}
              className={styles.hashLink}
            >
              <IconLink />
            </Box>
          </Heading>
        </Link>
      </Box>
    </Box>
  );
};
