import React, {
  type ReactNode,
  type ComponentProps,
  type ReactElement,
} from 'react';
import { Heading, Box, IconLink, Link, type Badge } from 'braid-design-system';
import * as styles from './LinkableHeading.css';

type BadgeProps = ComponentProps<typeof Badge>;
type HeadingProps = ComponentProps<typeof Heading>;

type LinkableHeadingProps = {
  level?: HeadingProps['level'];
  component?: HeadingProps['component'];
  badge?: ReactElement<BadgeProps>;
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
  badge,
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
            {badge ? (
              <Box component="span" paddingRight="xsmall">
                {restProps.children}
              </Box>
            ) : (
              restProps.children
            )}
            {badge}
            <Box
              component="span"
              transition="fast"
              marginLeft="xsmall"
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
