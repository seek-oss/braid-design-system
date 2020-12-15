import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Heading, Box, IconLink, Link } from '../../../../lib/components';
import { HeadingProps } from '../../../../lib/components/Heading/Heading';
import * as styleRefs from './LinkableHeading.treat';

interface LinkableHeadingProps {
  level?: HeadingProps['level'];
  children: string;
}

const slugify = (string: string) => string.replace(/ /g, '-').toLowerCase();

export const LinkableHeading = ({
  children,
  level = '3',
}: LinkableHeadingProps) => {
  const styles = useStyles(styleRefs);
  const slug = slugify(children);

  return (
    <Box className={styles.linkableHeading}>
      <Box id={slug} position="absolute" />
      <Link href={`#${slug}`}>
        <Heading level={level}>
          {children}{' '}
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
  );
};
