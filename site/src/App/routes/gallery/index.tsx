import React, { useState, useEffect } from 'react';
import { parseToHsl, setLightness } from 'polished';

import { Page } from '../../../types';
import { PageTitle } from '../../Seo/PageTitle';
import { Box } from '../../../../../lib/components';
import { Logo } from '../../Logo/Logo';
import { useThemeSettings } from '../../ThemeSetting';
import { Gallery } from './Gallery';
import * as styles from './gallery.css';

const useBackgroundColor = () => {
  const { theme } = useThemeSettings();
  const backgroundColor =
    theme.color.background[theme.name === 'docs' ? 'neutralLight' : 'body'];

  const { lightness } = parseToHsl(backgroundColor);

  return lightness < 0.96
    ? setLightness(0.96, backgroundColor)
    : backgroundColor;
};

const GalleryPage = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setReady(true), 100);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
      style={{ backgroundColor: useBackgroundColor() }}
    >
      <PageTitle title="Gallery" />

      {ready ? <Gallery /> : null}

      {/* Loader */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="sticky"
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        top={0}
        background="body"
        transition="fast"
        opacity={ready ? 0 : undefined}
        pointerEvents={ready ? 'none' : undefined}
      >
        <Box className={styles.loader}>
          <Logo iconOnly height="100%" width="100%" />
        </Box>
      </Box>
    </Box>
  );
};

const page: Page = {
  title: 'Gallery',
  exact: true,
  component: GalleryPage,
};

export default {
  '/gallery': page,
};
