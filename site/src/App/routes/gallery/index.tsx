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
  Link,
  TextDropdown,
} from '../../../../../lib/components';
import { Logo } from '../../Logo/Logo';
import { useThemeSettings, ThemeToggle } from '../../ThemeSetting';
import { IconButton } from '../../../../../lib/components/iconButtons/IconButton';
import { SVGProps } from '../../../../../lib/components/icons/SVGTypes';
import useIcon, { UseIconProps } from '../../../../../lib/hooks/useIcon';
import { Gallery, galleryComponentNames } from './Gallery';
import { GalleryPanel } from './GalleryPanel';
import * as styleRefs from './gallery.treat';

type FitToScreenDimensions = {
  x: number;
  y: number;
  scale: number;
};

const IconFitToScreenSvg = ({ title, titleId, ...props }: SVGProps) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 5a1 1 0 00-1 1v12a1 1 0 002 0V6a1 1 0 00-1-1zm18 0a1 1 0 00-1 1v12a1 1 0 002 0V6a1 1 0 00-1-1zm-2.077 6.618a.999.999 0 00-.217-.326l-1.999-1.999a1 1 0 00-1.414 1.414l.293.293H8.414l.293-.293a1 1 0 00-1.414-1.414l-2 2a1 1 0 000 1.414l2 2a1 1 0 001.414-1.414L8.414 13h7.172l-.293.293a1 1 0 101.414 1.414l1.999-1.999a1.003 1.003 0 00.217-1.09z" />
  </svg>
);

const IconFitToScreen = (props: UseIconProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconFitToScreenSvg} {...iconProps} />;
};

const zoomStep = 0.2;
const jumpToPlaceholder = 'Jump to';
const componentList = [jumpToPlaceholder].concat(galleryComponentNames);

const GalleryPage = () => {
  const styles = useStyles(styleRefs);
  const { ready: themeReady } = useThemeSettings();
  const [status, setStatus] = useState<'loading' | 'measuring' | 'done'>(
    'loading',
  );

  const contentRef = useRef<HTMLDivElement | null>(null);
  const zoomInRef = useRef<HTMLButtonElement | null>(null);
  const zoomOutRef = useRef<HTMLButtonElement | null>(null);
  const panzoomRef = useRef<ReturnType<typeof panzoom> | null>(null);

  const [jumpTo, setJumpTo] = useState(jumpToPlaceholder);
  const [zoom, setZoom] = useState(1);
  const [
    fitToScreenDimensions,
    setFitToScreenDimensions,
  ] = useState<FitToScreenDimensions | null>(null);

  const calculateFitToScreenDimensions = (
    contentEl: HTMLDivElement,
  ): FitToScreenDimensions => {
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
    if (themeReady && fitToScreenDimensions) {
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
          const dimensions = calculateFitToScreenDimensions(contentRef.current);
          panzoomRef.current.setMinZoom(dimensions.scale);
          setFitToScreenDimensions(dimensions);
        }
      };

      window.addEventListener('keydown', keyboardZoomHandler);
      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('keydown', keyboardZoomHandler);
        window.removeEventListener('resize', resizeHandler);
      };
    }
  }, [themeReady, fitToScreenDimensions]);

  const zoomOut = () => {
    if (panzoomRef.current) {
      const { scale } = panzoomRef.current.getTransform();
      const newScale = Math.ceil(scale / zoomStep) * zoomStep - zoomStep;
      const roundedNew = Math.round(newScale * 100) / 100;
      const roundedOld = Math.round(scale * 100) / 100;

      panzoomRef.current.smoothZoomAbs(
        document.documentElement.clientWidth / 2,
        document.documentElement.clientHeight / 2,
        roundedNew === roundedOld ? roundedNew - zoomStep : roundedNew,
      );
    }
  };

  const zoomIn = () => {
    if (panzoomRef.current) {
      const { scale } = panzoomRef.current.getTransform();
      const newScale = Math.floor(scale / zoomStep) * zoomStep + zoomStep;
      const roundedNew = Math.round(newScale * 100) / 100;
      const roundedOld = Math.round(scale * 100) / 100;

      panzoomRef.current.smoothZoomAbs(
        document.documentElement.clientWidth / 2,
        document.documentElement.clientHeight / 2,
        roundedNew === roundedOld ? roundedNew + zoomStep : roundedNew,
      );
    }
  };

  const fitToScreen = useCallback(() => {
    if (panzoomRef.current && fitToScreenDimensions) {
      panzoomRef.current.zoomAbs(0, 0, fitToScreenDimensions.scale);
      panzoomRef.current.moveTo(
        fitToScreenDimensions.x,
        fitToScreenDimensions.y,
      );
    }
  }, [fitToScreenDimensions]);

  useEffect(() => {
    if (status !== 'loading' && contentRef.current) {
      const contentEl = contentRef.current;
      const dimensions = calculateFitToScreenDimensions(contentEl);

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

      setFitToScreenDimensions(dimensions);

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
        <GalleryPanel top left space="medium">
          <Box
            component={Link}
            cursor="pointer"
            title="Back to documentation"
            href="/"
          >
            <Logo iconOnly height={28} width={28} />
          </Box>
          <ThemeToggle size="small" weight="strong" />
        </GalleryPanel>

        <GalleryPanel bottom right>
          <Box paddingX="xsmall">
            <Text size="small" tone="secondary">
              <TextDropdown
                id="search"
                label="Jump to component"
                options={componentList}
                value={jumpTo}
                onBlur={() => {
                  setJumpTo(jumpToPlaceholder);
                }}
                onChange={(name) => {
                  setJumpTo(name);

                  if (panzoomRef.current && name !== jumpToPlaceholder) {
                    const component = document.querySelector<HTMLDivElement>(
                      `[data-braid-component-name=${name}]`,
                    );
                    if (component) {
                      const viewportWidth =
                        document.documentElement.clientWidth;
                      const viewportHeight =
                        document.documentElement.clientHeight;
                      const clientRect = component.getBoundingClientRect();

                      const xScale = viewportWidth / (clientRect.width / zoom);
                      const yScale =
                        viewportHeight / (clientRect.height / zoom);
                      const scale = Math.min(xScale, yScale);

                      const xOffset =
                        (viewportWidth - component.offsetWidth * scale) / 2;
                      const yOffset =
                        (viewportHeight - component.offsetHeight * scale) / 2;

                      const targetX =
                        -(component.offsetLeft - Math.max(xOffset, 0)) * scale;
                      const targetY =
                        -(component.offsetTop - Math.max(yOffset, 0)) * scale;

                      panzoomRef.current.moveTo(targetX, targetY);
                      panzoomRef.current.zoomAbs(targetX, targetY, scale);
                    }
                  }
                }}
              />
            </Text>
          </Box>
          <Box aria-hidden style={{ opacity: 0.3 }}>
            <Text tone="secondary">|</Text>
          </Box>
          <IconButton
            label="Fit to screen"
            onClick={fitToScreen}
            keyboardAccessible
          >
            {(iconProps) => <IconFitToScreen {...iconProps} />}
          </IconButton>
          <IconButton
            ref={zoomOutRef}
            label="Zoom Out"
            onClick={zoomOut}
            keyboardAccessible
          >
            {(iconProps) => <IconMinus {...iconProps} />}
          </IconButton>
          <Box userSelect="none">
            <Text size="small" tone="secondary">
              {Math.round(zoom * 100)}%
            </Text>
          </Box>
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
