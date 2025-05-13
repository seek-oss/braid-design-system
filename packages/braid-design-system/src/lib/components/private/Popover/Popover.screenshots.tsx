import { type MutableRefObject, type ReactNode, useRef } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Box } from '../..';
import type { BoxProps } from '../../Box/Box';
import { Placeholder } from '../Placeholder/Placeholder';

import { Popover, type PopoverProps } from './Popover';

const placeholderHeight = 44;
const triggerWidth = 150;
const popoverWidth = 200;

const Wrapper = ({
  children,
  popoverPlacement = 'bottom',
  justifyContent = 'center',
}: {
  children: (props: {
    triggerRef: MutableRefObject<HTMLButtonElement | null>;
  }) => ReactNode;
  popoverPlacement?: PopoverProps['placement'];
  justifyContent?: BoxProps['justifyContent'];
}) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wrapperPadding = 'xxlarge';

  return (
    <Box
      display="flex"
      justifyContent={justifyContent}
      paddingTop={popoverPlacement === 'top' ? wrapperPadding : undefined}
      paddingBottom={popoverPlacement === 'bottom' ? wrapperPadding : undefined}
    >
      <Box ref={triggerRef}>
        <Placeholder
          label="Trigger"
          height={placeholderHeight}
          width={triggerWidth}
        />
      </Box>
      {children({ triggerRef })}
    </Box>
  );
};

const ScreenshotPopover = ({
  ...props
}: Omit<PopoverProps, 'open' | 'lockPlacement' | 'role'>) => (
  <Popover open lockPlacement role={false} {...props} />
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Bottom placement, right aligned',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
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
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Bottom placement, center aligned',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
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
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Bottom placement, right aligned',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
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
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Bottom placement with small offset',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
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
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Bottom placement with medium offset',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
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
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Bottom placement with large offset',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
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
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Top placement, left aligned',
      Example: () => {
        const placement = 'top';
        return (
          <Wrapper popoverPlacement={placement}>
            {({ triggerRef }) => (
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement={placement}
                align="left"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            )}
          </Wrapper>
        );
      },
    },
    {
      label: 'Top placement, center aligned',
      Example: () => {
        const placement = 'top';
        return (
          <Wrapper popoverPlacement={placement}>
            {({ triggerRef }) => (
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement={placement}
                align="center"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            )}
          </Wrapper>
        );
      },
    },
    {
      label: 'Top placement, right aligned',
      Example: () => {
        const placement = 'top';
        return (
          <Wrapper popoverPlacement={placement}>
            {({ triggerRef }) => (
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement={placement}
                align="right"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            )}
          </Wrapper>
        );
      },
    },
    {
      label: 'Top placement with small offset',
      Example: () => {
        const placement = 'top';
        return (
          <Wrapper popoverPlacement={placement}>
            {({ triggerRef }) => (
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement={placement}
                offsetSpace="small"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            )}
          </Wrapper>
        );
      },
    },
    {
      label: 'Top placement with medium offset',
      Example: () => {
        const placement = 'top';
        return (
          <Wrapper popoverPlacement={placement}>
            {({ triggerRef }) => (
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement={placement}
                offsetSpace="medium"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            )}
          </Wrapper>
        );
      },
    },
    {
      label: 'Top placement with large offset',
      Example: () => {
        const placement = 'top';
        return (
          <Wrapper popoverPlacement={placement}>
            {({ triggerRef }) => (
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement={placement}
                offsetSpace="large"
              >
                <Placeholder
                  label="Popover"
                  height={placeholderHeight}
                  width={popoverWidth}
                />
              </ScreenshotPopover>
            )}
          </Wrapper>
        );
      },
    },
    {
      label: 'Right aligned at left edge',
      Example: () => (
        <Wrapper justifyContent="flexStart">
          {({ triggerRef }) => (
            <ScreenshotPopover triggerRef={triggerRef} align="right">
              <Placeholder
                label="Popover"
                height={placeholderHeight}
                width={popoverWidth}
              />
            </ScreenshotPopover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Left aligned at right edge',
      Example: () => (
        <Wrapper justifyContent="flexEnd">
          {({ triggerRef }) => (
            <ScreenshotPopover triggerRef={triggerRef} align="left">
              <Placeholder
                label="Popover"
                height={placeholderHeight}
                width={popoverWidth}
              />
            </ScreenshotPopover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Content width',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
            <ScreenshotPopover triggerRef={triggerRef} width="content">
              <Placeholder label="Popover" height={placeholderHeight} />
            </ScreenshotPopover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Full width',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
            <ScreenshotPopover triggerRef={triggerRef} width="full">
              <Placeholder label="Popover" height={placeholderHeight} />
            </ScreenshotPopover>
          )}
        </Wrapper>
      ),
    },
  ],
};
