import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Heading, Box, TextLink } from '../../../../lib/components';
import { HeadingProps } from '../../../../lib/components/Heading/Heading';
import * as styleRefs from './LinkableHeading.treat';

interface LinkableHeadingProps {
  level?: HeadingProps['level'];
  children: string;
}

const slugify = (string: string) => string.replace(/ /, '-').toLowerCase();

export const LinkableHeading = ({
  children,
  level = '3',
}: LinkableHeadingProps) => {
  const styles = useStyles(styleRefs);
  const slug = slugify(children);

  return (
    <Box className={styles.linkableHeading}>
      <Box id={slug} position="absolute" />
      <Heading level={level}>
        {children}{' '}
        <Box
          component="span"
          transition="fast"
          opacity={0}
          className={styles.hashLink}
        >
          <TextLink href={`#${slug}`}>#</TextLink>
        </Box>
      </Heading>
    </Box>
  );
};
