import { type MutableRefObject, type ReactNode, useRef } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Box } from '../..';
import type { BoxProps } from '../../Box/Box';
import { Placeholder } from '../Placeholder/Placeholder';

import { Popover, type PopoverProps } from './Popover';

const triggerHeight = 44;
const triggerWidth = 150;

const popoverWidth = 200;
const popoverHeight = 88;

const defaultProps = {
  open: true,
  lockPlacement: true,
  role: false,
} as const;

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

  return (
    <Box
      display="flex"
      justifyContent={justifyContent}
      style={{
        [popoverPlacement === 'top' ? 'paddingTop' : 'paddingBottom']:
          popoverHeight * 1.5,
      }}
    >
      <Box ref={triggerRef}>
        <Placeholder
          label="Trigger"
          height={triggerHeight}
          width={triggerWidth}
        />
      </Box>
      {children({ triggerRef })}
    </Box>
  );
};

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'Bottom placement, left aligned',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
            <Popover
              {...defaultProps}
              triggerRef={triggerRef}
              placement="bottom"
              align="left"
            >
              <Placeholder
                label="Popover"
                height={popoverHeight}
                width={popoverWidth}
              />
            </Popover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Bottom placement, center aligned',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
            <Popover
              {...defaultProps}
              triggerRef={triggerRef}
              placement="bottom"
              align="center"
            >
              <Placeholder
                label="Popover"
                height={popoverHeight}
                width={popoverWidth}
              />
            </Popover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Bottom placement, right aligned',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
            <Popover
              {...defaultProps}
              triggerRef={triggerRef}
              placement="bottom"
              align="right"
            >
              <Placeholder
                label="Popover"
                height={popoverHeight}
                width={popoverWidth}
              />
            </Popover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Bottom placement with small offset',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
            <Popover
              {...defaultProps}
              triggerRef={triggerRef}
              placement="bottom"
              offsetSpace="small"
            >
              <Placeholder
                label="Popover"
                height={popoverHeight}
                width={popoverWidth}
              />
            </Popover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Bottom placement with medium offset',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
            <Popover
              {...defaultProps}
              triggerRef={triggerRef}
              placement="bottom"
              offsetSpace="medium"
            >
              <Placeholder
                label="Popover"
                height={popoverHeight}
                width={popoverWidth}
              />
            </Popover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Bottom placement with large offset',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
            <Popover
              {...defaultProps}
              triggerRef={triggerRef}
              placement="bottom"
              offsetSpace="large"
            >
              <Placeholder
                label="Popover"
                height={popoverHeight}
                width={popoverWidth}
              />
            </Popover>
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
              <Popover
                {...defaultProps}
                triggerRef={triggerRef}
                placement={placement}
                align="left"
              >
                <Placeholder
                  label="Popover"
                  height={popoverHeight}
                  width={popoverWidth}
                />
              </Popover>
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
              <Popover
                {...defaultProps}
                triggerRef={triggerRef}
                placement={placement}
                align="center"
              >
                <Placeholder
                  label="Popover"
                  height={popoverHeight}
                  width={popoverWidth}
                />
              </Popover>
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
              <Popover
                {...defaultProps}
                triggerRef={triggerRef}
                placement={placement}
                align="right"
              >
                <Placeholder
                  label="Popover"
                  height={popoverHeight}
                  width={popoverWidth}
                />
              </Popover>
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
              <Popover
                {...defaultProps}
                triggerRef={triggerRef}
                placement={placement}
                offsetSpace="small"
              >
                <Placeholder
                  label="Popover"
                  height={popoverHeight}
                  width={popoverWidth}
                />
              </Popover>
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
              <Popover
                {...defaultProps}
                triggerRef={triggerRef}
                placement={placement}
                offsetSpace="medium"
              >
                <Placeholder
                  label="Popover"
                  height={popoverHeight}
                  width={popoverWidth}
                />
              </Popover>
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
              <Popover
                {...defaultProps}
                triggerRef={triggerRef}
                placement={placement}
                offsetSpace="large"
              >
                <Placeholder
                  label="Popover"
                  height={popoverHeight}
                  width={popoverWidth}
                />
              </Popover>
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
            <Popover {...defaultProps} triggerRef={triggerRef} align="right">
              <Placeholder
                label="Popover"
                height={popoverHeight}
                width={popoverWidth}
              />
            </Popover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Left aligned at right edge',
      Example: () => (
        <Wrapper justifyContent="flexEnd">
          {({ triggerRef }) => (
            <Popover {...defaultProps} triggerRef={triggerRef} align="left">
              <Placeholder
                label="Popover"
                height={popoverHeight}
                width={popoverWidth}
              />
            </Popover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Content width',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
            <Popover {...defaultProps} triggerRef={triggerRef} width="content">
              <Placeholder label="Popover" height={popoverHeight} />
            </Popover>
          )}
        </Wrapper>
      ),
    },
    {
      label: 'Full width',
      Example: () => (
        <Wrapper>
          {({ triggerRef }) => (
            <Popover {...defaultProps} triggerRef={triggerRef} width="full">
              <Placeholder label="Popover" height={popoverHeight} />
            </Popover>
          )}
        </Wrapper>
      ),
    },
  ],
};
