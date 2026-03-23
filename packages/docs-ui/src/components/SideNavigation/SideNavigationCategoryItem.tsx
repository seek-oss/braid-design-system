import { type FC, type ReactNode, useContext, useId, useState } from 'react';

import { Box, Spread, Stack, Text } from 'braid-design-system';
import { IconChevron } from 'braid-design-system';

import {
  SideNavigationCategoryContext,
  validTones,
} from './SideNavigationCategoryContext';

import * as styles from './SideNavigationCategoryItem.css';

const defaultSize = 'large';

export interface SideNavigationCategoryItemProps {
  label: string;
  children: ReactNode;
  size?: 'xsmall' | 'small' | 'standard' | 'large';
  tone?: (typeof validTones)[number];
  weight?: 'regular' | 'medium' | 'strong';
}

export const SideNavigationCategoryItem: FC<
  SideNavigationCategoryItemProps
> = ({ label, children, size: sizeProp, tone: toneProp, weight: weightProp }) => {
  const categoryContext = useContext(SideNavigationCategoryContext);
  const contentId = useId();
  const [expanded, setExpanded] = useState(false);

  const size = categoryContext?.size ?? sizeProp ?? defaultSize;
  const tone = categoryContext?.tone ?? toneProp ?? 'neutral';
  const weight = categoryContext?.weight ?? weightProp ?? 'medium';

  const itemSpace =
    size === 'xsmall' || size === 'small' ? 'small' : 'medium';

  return (
    <Stack space={itemSpace}>
      <Box position="relative" display="flex">
        <Box
          component="button"
          type="button"
          cursor="pointer"
          className={[styles.button, styles.focusRing]}
          width="full"
          textAlign="left"
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {/*
            This seemingly pointless use of Box makes button overflow visible in Safari.
            https://stackoverflow.com/questions/41100273/overflowing-button-text-is-being-clipped-in-safari
          */}
          <Box component="span" position="relative">
            <Spread component="span" space={itemSpace}>
              <Text size={size} weight={weight} tone={tone}>
                {label}
              </Text>
              <Text
                size={size}
                weight={weight}
                tone={tone === 'neutral' ? 'secondary' : tone}
              >
                <IconChevron direction={expanded ? 'up' : 'down'} />
              </Text>
            </Spread>
          </Box>
        </Box>
      </Box>
      <Box
        id={contentId}
        display={expanded ? 'block' : 'none'}
        role="region"
        aria-label={label}
      >
        {children}
      </Box>
    </Stack>
  );
};
