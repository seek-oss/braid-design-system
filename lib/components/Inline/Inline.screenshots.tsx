import React, { Fragment, ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Box, Inline } from '../';
import { spaces } from '../../utils/docsHelpers';

const Container = ({ children }: { children: ReactNode }) => (
  <Box style={{ maxWidth: '240px' }}>{children}</Box>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768, 992, 1200],
  screenshotOnlyInWireframe: true,
  examples: [
    ...spaces.map((space) => ({
      label: `Space: ${space}`,
      Container,
      Example: () => (
        <Inline space={space}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    })),
    {
      label: "Responsive space, e.g. ['xxsmall', 'medium']",
      Container,
      Example: () => (
        <Inline space={['xxsmall', 'medium']}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Align horizontally to center',
      Container,
      Example: () => (
        <Inline space="small" align="center">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Align horizontally to right',
      Container,
      Example: () => (
        <Inline space="small" align="right">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label:
        'Responsive alignment (e.g. center on mobile, left from tablet upwards)',
      Container,
      Example: () => (
        <Inline space="small" align={['center', 'left']}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Align vertically',
      Container,
      Example: () => (
        <Inline space="small" alignY="center">
          <Placeholder width={48} height={40} />
          <Placeholder width={48} height={100} />
          <Placeholder width={48} height={60} />
        </Inline>
      ),
    },
    {
      label: 'Collapse below tablet',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="tablet">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Collapse below desktop',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Collapse below wide',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="wide">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label:
        'Collapse below desktop with responsive space (e.g. "xxsmall" on mobile, "small" on tablet, "large" on desktop)',
      Container,
      Example: () => (
        <Inline space={['xxsmall', 'medium', 'large']} collapseBelow="desktop">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label:
        'Collapse below wide with responsive space (e.g. "xxsmall" on mobile, "small" on tablet, "large" on desktop, "xlarge" on wide)',
      Container,
      Example: () => (
        <Inline
          space={['xxsmall', 'medium', 'large', 'xlarge']}
          collapseBelow="wide"
        >
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Collapse below desktop with alignment (e.g. "center")',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop" align="center">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label:
        'Test - collapseBelow + align: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be horizontal and right aligned',
      Container,
      Example: () => (
        <Inline
          space="small"
          collapseBelow="desktop"
          align={['left', 'center', 'right']}
        >
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label:
        'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be reversed horizontally and centre aligned, on desktop should be reversed horizontally and right aligned',
      Container,
      Example: () => (
        <Inline
          space="small"
          collapseBelow="tablet"
          align={['left', 'center', 'right']}
          reverse
        >
          <Placeholder width={48} height={48} label="1" />
          <Placeholder width={48} height={48} label="2" />
          <Placeholder width={48} height={48} label="3" />
          <Placeholder width={48} height={48} label="4" />
          <Placeholder width={48} height={48} label="5" />
          <Placeholder width={48} height={48} label="6" />
        </Inline>
      ),
    },
    {
      label:
        'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be reversed horizontally and right aligned',
      Container,
      Example: () => (
        <Inline
          space="small"
          collapseBelow="desktop"
          align={['left', 'center', 'right']}
          reverse
        >
          <Placeholder width={48} height={48} label="1" />
          <Placeholder width={48} height={48} label="2" />
          <Placeholder width={48} height={48} label="3" />
          <Placeholder width={48} height={48} label="4" />
          <Placeholder width={48} height={48} label="5" />
          <Placeholder width={48} height={48} label="6" />
        </Inline>
      ),
    },
    {
      label:
        'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be vertical and right aligned, on wide should be reversed horizontally and centre aligned',
      Container,
      Example: () => (
        <Inline
          space="small"
          collapseBelow="wide"
          align={['left', 'center', 'right', 'center']}
          reverse
        >
          <Placeholder width={48} height={48} label="1" />
          <Placeholder width={48} height={48} label="2" />
          <Placeholder width={48} height={48} label="3" />
          <Placeholder width={48} height={48} label="4" />
          <Placeholder width={48} height={48} label="5" />
          <Placeholder width={48} height={48} label="6" />
        </Inline>
      ),
    },
    {
      label:
        'Test - Should flatten fragments (6 placeholders should be evenly spaced)',
      Container,
      Example: () => (
        <Inline space="small">
          <Fragment>
            <Fragment>
              <Placeholder width={48} height={48} />
            </Fragment>
            <Fragment>
              <Placeholder width={48} height={48} />
            </Fragment>
          </Fragment>
          <Fragment>
            <Fragment>
              <Placeholder width={48} height={48} />
              <Placeholder width={48} height={48} />
              <Fragment>
                <Placeholder width={48} height={48} />
              </Fragment>
            </Fragment>
          </Fragment>
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
  ],
};
