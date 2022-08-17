import React, { useState, useEffect } from 'react';
import { parseToHsl, setLightness } from 'polished';

import { PageTitle } from '../../Seo/PageTitle';
import { Box } from 'braid-design-system';
import { Logo } from '../../Logo/Logo';
import { useThemeSettings } from '../../ThemeSetting';
import { Gallery } from './Gallery';
import { darkMode } from 'braid-design-system/lib/css/atoms/sprinkles.css';
import * as styles from './gallery.css';

const useBackgroundColor = () => {
  const { theme } = useThemeSettings();
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains(darkMode);

    if (isDark) {
      setBgColor(theme.color.background.bodyDark);
    } else {
      const backgroundColor =
        theme.color.background[theme.name === 'docs' ? 'neutralLight' : 'body'];
      const { lightness } = parseToHsl(backgroundColor);
      setBgColor(
        lightness < 0.96
          ? setLightness(0.96, backgroundColor)
          : backgroundColor,
      );
    }
  }, [theme]);

  return bgColor;
};

export const GalleryPage = () => {
  const [ready, setReady] = useState(false);
  const backgroundColor = useBackgroundColor();

  useEffect(() => {
    setTimeout(() => setReady(true), 100);
  }, []);

  return (
    <Box
      position="fixed"
      inset={0}
      style={{ backgroundColor: ready ? backgroundColor : undefined }}
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
        inset={0}
        background="body"
        transition="fast"
        opacity={ready ? 0 : undefined}
        pointerEvents={ready ? 'none' : undefined}
      >
        <Box className={styles.loader}>
          <Logo tone="secondary" iconOnly height="100%" width="100%" />
        </Box>
      </Box>
    </Box>
  );
};
