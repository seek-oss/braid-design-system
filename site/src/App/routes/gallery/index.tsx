import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useStyles } from 'sku/react-treat';
import panzoom from 'panzoom';

import { Page } from '../../../types';
import { PageTitle } from '../../Seo/PageTitle';
import {
  Text,
  Box,
  IconAdd,
  IconMinus,
  IconRefresh,
} from '../../../../../lib/components';
import { Logo } from '../../Logo/Logo';
import { useThemeSettings, ThemeToggle } from '../../ThemeSetting';
import { IconButton } from '../../../../../lib/components/iconButtons/IconButton';
import { Gallery } from './Gallery';
import { GalleryPanel } from './GalleryPanel';
import * as styleRefs from './gallery.treat';

type ResetDimensions = {
  x: number;
  y: number;
  scale: number;
};

const GalleryPage = () => {
  const styles = useStyles(styleRefs);
  const { ready: themeReady } = useThemeSettings();
  const [status, setStatus] = useState<'loading' | 'measuring' | 'done'>(
    'loading',
  );

  const contentRef = useRef<HTMLElement | null>(null);
  const zoomInRef = useRef<HTMLButtonElement | null>(null);
  const zoomOutRef = useRef<HTMLButtonElement | null>(null);
  const panzoomRef = useRef<ReturnType<typeof panzoom> | null>(null);

  const [zoom, setZoom] = useState(1);
  const [
    resetDimensions,
    setResetDimensions,
  ] = useState<ResetDimensions | null>(null);

  const calculateResetDimensions = (
    contentEl: HTMLElement,
  ): ResetDimensions => {
    const screenBuffer = 0.005;
    const xScale = document.documentElement.clientWidth / contentEl.scrollWidth;
    const yScale =
      document.documentElement.clientHeight / contentEl.scrollHeight;
    const scale = Math.min(xScale, yScale) - screenBuffer;

    return {
      x:
        (document.documentElement.clientWidth - contentEl.scrollWidth * scale) /
        2,
      y:
        (document.documentElement.clientHeight -
          contentEl.scrollHeight * scale) /
        2,
      scale,
    };
  };

  useEffect(() => {
    if (themeReady && resetDimensions) {
      setStatus('done');

      const keyboardZoomHandler = (e: KeyboardEvent) => {
        const cmdOrCtrl = navigator.platform.match('Mac')
          ? e.metaKey
          : e.ctrlKey;

        const plus = e.keyCode === 187;
        const minus = e.keyCode === 189;

        if (cmdOrCtrl && (plus || minus)) {
          e.preventDefault();
          e.stopPropagation();

          if (plus && zoomInRef.current) {
            zoomInRef.current.focus();
          }

          if (minus && zoomOutRef.current) {
            zoomOutRef.current.focus();
          }
        }
      };

      const resizeHandler = () => {
        if (contentRef.current && panzoomRef.current) {
          const dimensions = calculateResetDimensions(contentRef.current);
          panzoomRef.current.setMinZoom(dimensions.scale);
          setResetDimensions(dimensions);
        }
      };

      window.addEventListener('keydown', keyboardZoomHandler);
      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('keydown', keyboardZoomHandler);
        window.removeEventListener('resize', resizeHandler);
      };
    }
  }, [themeReady, resetDimensions]);

  const zoomOut = () => {
    if (panzoomRef.current) {
      panzoomRef.current.smoothZoom(
        document.documentElement.clientWidth / 2,
        document.documentElement.clientHeight / 2,
        0.5,
      );
    }
  };

  const zoomIn = () => {
    if (panzoomRef.current) {
      panzoomRef.current.smoothZoom(
        document.documentElement.clientWidth / 2,
        document.documentElement.clientHeight / 2,
        1.5,
      );
    }
  };

  const reset = useCallback(() => {
    if (panzoomRef.current && resetDimensions) {
      panzoomRef.current.zoomAbs(0, 0, resetDimensions.scale);
      panzoomRef.current.moveTo(resetDimensions.x, resetDimensions.y);
    }
  }, [resetDimensions]);

  useEffect(() => {
    if (status !== 'loading' && contentRef.current) {
      const contentEl = contentRef.current;
      const dimensions = calculateResetDimensions(contentEl);

      panzoomRef.current = panzoom(contentEl, {
        maxZoom: 20,
        minZoom: dimensions.scale,
        zoomDoubleClickSpeed: 1,
        beforeMouseDown: (e) =>
          // @ts-expect-error
          /^(a|button|select)$/i.test(e.target.tagName) ||
          // @ts-expect-error
          e.target.getAttribute('role') === 'button',
      });

      panzoomRef.current.on('zoom', () => {
        if (panzoomRef.current) {
          setZoom(panzoomRef.current.getTransform().scale);
        }
      });

      panzoomRef.current.zoomAbs(dimensions.x, dimensions.y, dimensions.scale);

      setResetDimensions(dimensions);

      return () => {
        panzoomRef.current?.dispose();
      };
    }
  }, [status]);

  useEffect(() => setStatus('measuring'), []);

  return (
    <Box position="fixed" top={0} bottom={0} left={0} right={0}>
      <PageTitle title="Gallery" />

      <Box
        transition="fast"
        opacity={status === 'done' ? undefined : 0}
        className={styles.delayPanels}
      >
        <GalleryPanel top right>
          <ThemeToggle size="small" weight="regular" />
        </GalleryPanel>

        <GalleryPanel bottom right>
          <IconButton label="Reset" onClick={reset} keyboardAccessible>
            {(iconProps) => <IconRefresh {...iconProps} />}
          </IconButton>
          <IconButton
            ref={zoomOutRef}
            label="Zoom Out"
            onClick={zoomOut}
            keyboardAccessible
          >
            {(iconProps) => <IconMinus {...iconProps} />}
          </IconButton>
          <Text size="small" tone="secondary">
            {Math.round(zoom * 100)}%
          </Text>
          <IconButton
            ref={zoomInRef}
            label="Zoom In"
            onClick={zoomIn}
            keyboardAccessible
          >
            {(iconProps) => <IconAdd {...iconProps} />}
          </IconButton>
        </GalleryPanel>
      </Box>

      {/* Components */}
      {status !== 'loading' ? (
        <Box
          outline="none"
          transition="fast"
          opacity={status === 'done' ? undefined : 0}
          className={styles.moveCursor}
        >
          <Box ref={contentRef} userSelect="none">
            <Gallery />
          </Box>
        </Box>
      ) : null}

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
        opacity={status === 'done' ? 0 : undefined}
        pointerEvents={status === 'done' ? 'none' : undefined}
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
