import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useStyles } from 'sku/treat';
import { Inline, Box, Text } from '../../../../lib/components';
import { Overlay } from '../../../../lib/components/private/Overlay/Overlay';
import * as icons from '../../../../lib/components/icons';
import * as styleRefs from './Iconography.treat';
import { BoxProps } from '../../../../lib/components/Box/Box';

type IconName = keyof typeof icons;

const BraidLink = ({ href, children }: BoxProps) => (
  <Box component="a" href={href}>
    {children}
  </Box>
);

export const Iconography = () => {
  const styles = useStyles(styleRefs);
  const iconNames = Object.keys(icons).map(icon => icon as IconName);

  return (
    <Inline space="large">
      {iconNames.map(icon => {
        const IconComponent = icons[icon];

        return (
          <ReactRouterLink
            component={BraidLink}
            key={icon}
            to={`/components/${icon}`}
          >
            <Box
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="center"
              paddingX="small"
              paddingY="medium"
              cursor="pointer"
              className={styles.iconContainer}
            >
              <Box height="touchable" className={styles.icon}>
                <IconComponent size="fill" />
              </Box>
              <Box paddingTop="medium">
                <Text tone="secondary" size="small">
                  {icon}
                </Text>
              </Box>
              <Overlay
                boxShadow="borderStandard"
                borderRadius="standard"
                className={styles.overlay}
              />
              <Overlay
                boxShadow="medium"
                borderRadius="standard"
                className={styles.overlay}
              />
            </Box>
          </ReactRouterLink>
        );
      })}
    </Inline>
  );
};
