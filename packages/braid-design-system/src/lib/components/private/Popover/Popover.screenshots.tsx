import { useRef } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Box, Inline } from '../..';
import { Placeholder } from '../Placeholder/Placeholder';

import { Popover, type PopoverProps } from './Popover';

const ScreenshotPopover = ({
  ...props
}: Omit<PopoverProps, 'open' | 'lockPlacement'>) => (
  <Popover open lockPlacement {...props} />
);

const placeholderHeight = 44;
const triggerWidth = 150;
const popoverWidth = 200;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Bottom placement, right aligned',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingBottom="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="bottom"
                align="left"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Bottom placement, center aligned',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingBottom="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="bottom"
                align="center"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Bottom placement, right aligned',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingBottom="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="bottom"
                align="right"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Bottom placement with small offset',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingBottom="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="bottom"
                offsetSpace="small"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Bottom placement with medium offset',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingBottom="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="bottom"
                offsetSpace="medium"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Bottom placement with large offset',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingBottom="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="bottom"
                offsetSpace="large"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Top placement, left aligned',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingTop="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="top"
                align="left"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Top placement, center aligned',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingTop="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="top"
                align="center"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Top placement, right aligned',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingTop="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="top"
                align="right"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Top placement with small offset',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingTop="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="top"
                offsetSpace="small"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Top placement with medium offset',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingTop="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="top"
                offsetSpace="medium"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Top placement with large offset',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingTop="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="top"
                offsetSpace="large"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Right aligned at left edge',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingBottom="xxlarge">
            <Inline space="none" align="left">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="bottom"
                align="right"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Left aligned at right edge',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingBottom="xxlarge">
            <Inline space="none" align="right">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement="bottom"
                align="left"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Content width',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingBottom="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover triggerRef={triggerRef} width="content">
                <Placeholder label="Popover" height={placeholderHeight} />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
    {
      label: 'Full width',
      Example: () => {
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
          <Box paddingBottom="xxlarge">
            <Inline space="none" align="center">
              <Box ref={triggerRef}>
                <Placeholder
                  label="Trigger"
                  height={placeholderHeight}
                  width={triggerWidth}
                />
              </Box>
              <ScreenshotPopover triggerRef={triggerRef} width="full">
                <Placeholder label="Popover" height={placeholderHeight} />
              </ScreenshotPopover>
            </Inline>
          </Box>
        );
      },
    },
  ],
};
