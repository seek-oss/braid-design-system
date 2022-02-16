import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Columns, Column } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768, 992, 1200],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'No space',
      Example: () => (
        <Columns space="none">
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Custom space, e.g. small',
      Example: () => (
        <Columns space="small">
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Responsive space, e.g. ["small", "large"]',
      Example: () => (
        <Columns space={['small', 'large']}>
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Responsive space with `none` below tablet, e.g. ["none", "gutter"]',
      Example: () => (
        <Columns space={['none', 'gutter']}>
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Responsive space with `none` above mobile, e.g. ["small", "none"]',
      Example: () => (
        <Columns space={['small', 'none']}>
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Vertically align to center',
      Example: () => (
        <Columns space="small" alignY="center">
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={100} />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Vertically align to bottom',
      Example: () => (
        <Columns space="small" alignY="bottom">
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={100} />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Responsive alignment (e.g. top on mobile, center on tablet upwards)',
      Example: () => (
        <Columns space="small" alignY={['top', 'center']}>
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={100} />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Alignment + collapse',
      Example: () => (
        <Columns space="small" collapseBelow="tablet" alignY="center">
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={100} />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Collapse below tablet',
      Example: () => (
        <Columns space="small" collapseBelow="tablet">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Collapse below desktop',
      Example: () => (
        <Columns space="small" collapseBelow="desktop">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Collapse below wide',
      Example: () => (
        <Columns space="small" collapseBelow="wide">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Collapse below tablet with custom space, e.g. "small"',
      Example: () => (
        <Columns space="small" collapseBelow="tablet">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Collapse below desktop with custom space, e.g. "small"',
      Example: () => (
        <Columns space="small" collapseBelow="desktop">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Collapse below wide with custom space, e.g. "small"',
      Example: () => (
        <Columns space="small" collapseBelow="wide">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below tablet with responsive space, e.g. ["small", "large"]',
      Example: () => (
        <Columns space={['small', 'large']} collapseBelow="tablet">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below desktop with responsive space, e.g. ["small", "medium", "xlarge"]',
      Example: () => (
        <Columns space={['small', 'medium', 'xlarge']} collapseBelow="desktop">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below wide with responsive space, e.g. ["xsmall", "small", "medium", "xlarge"]',
      Example: () => (
        <Columns
          space={['xsmall', 'small', 'medium', 'xlarge']}
          collapseBelow="wide"
        >
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below tablet with responsive space and `none` below tablet, e.g. ["none", "gutter"]',
      Example: () => (
        <Columns space={['none', 'gutter']} collapseBelow="tablet">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below desktop with responsive space and `none` below desktop, e.g. ["none", "xsmall", "gutter"]',
      Example: () => (
        <Columns space={['none', 'xsmall', 'gutter']} collapseBelow="desktop">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below wide with responsive space and `none` below wide, e.g. { mobile: "none", tablet: "xsmall", wide: "gutter" }',
      Example: () => (
        <Columns
          space={{ mobile: 'none', tablet: 'xsmall', wide: 'gutter' }}
          collapseBelow="wide"
        >
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below tablet with responsive space and `none` above mobile, e.g. ["small", "none"]',
      Example: () => (
        <Columns space={['small', 'none']} collapseBelow="tablet">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below desktop with responsive space and `none` above tablet, e.g. ["small", "medium", "none"]',
      Example: () => (
        <Columns space={['small', 'medium', 'none']} collapseBelow="desktop">
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below wide with responsive space and `none` above desktop, e.g. ["small", "medium", "large", "none"]',
      Example: () => (
        <Columns
          space={['small', 'medium', 'large', 'none']}
          collapseBelow="wide"
        >
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Reverse',
      Example: () => (
        <Columns space="small" reverse>
          <Column>
            <Placeholder height={60} label="First" />
          </Column>
          <Column>
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Test: Collapsed "content" columns should be full width when setting "alignY"',
      Example: () => (
        <Columns space="small" alignY="bottom" collapseBelow="tablet">
          <Column>
            <Placeholder height={60} label="No width" />
          </Column>
          <Column width="1/2">
            <Placeholder height={100} label="1/2 width" />
          </Column>
          <Column width="content">
            <Placeholder height={140} label="Content width" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Test - collapseBelow + align: On mobile should be vertical and left aligned, on tablet should be horizontal and centre aligned, on desktop should be horizontal and right aligned',
      Example: () => (
        <Columns
          space="small"
          collapseBelow="tablet"
          align={['left', 'center', 'right']}
        >
          <Column width="1/3">
            <Placeholder height={60} label="First" />
          </Column>
          <Column width="1/3">
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Test - collapseBelow + align: On mobile should be vertical and left aligned, on tablet should be horizontal and centre aligned, on desktop should be horizontal and right aligned',
      Example: () => (
        <Columns
          space="small"
          collapseBelow="desktop"
          align={['left', 'center', 'right']}
        >
          <Column width="1/3">
            <Placeholder height={60} label="First" />
          </Column>
          <Column width="1/3">
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be reversed horizontally and centre aligned, on desktop should be reversed horizontally and right aligned, on wide should be reversed horizontally and centre aligned',
      Example: () => (
        <Columns
          space="small"
          collapseBelow="tablet"
          align={['left', 'center', 'right', 'center']}
          reverse
        >
          <Column width="1/3">
            <Placeholder height={60} label="First" />
          </Column>
          <Column width="1/3">
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be reversed horizontally and right aligned, on wide should be reversed horizontally and center aligned',
      Example: () => (
        <Columns
          space="small"
          collapseBelow="desktop"
          align={['left', 'center', 'right', 'center']}
          reverse
        >
          <Column width="1/3">
            <Placeholder height={60} label="First" />
          </Column>
          <Column width="1/3">
            <Placeholder height={60} label="Second" />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Test - component span with no explicit Column children',
      Example: () => (
        <Columns space="small" component="span">
          <Placeholder height={60} label="First" />
          <Placeholder height={60} label="Second" />
        </Columns>
      ),
    },
    {
      label: 'Test - component span with a one explict Column and one not',
      Example: () => (
        <Columns space="small" component="span">
          <Column width="content">
            <Placeholder height={60} label="First" />
          </Column>
          <Placeholder height={60} label="Second" />
        </Columns>
      ),
    },
  ],
};
