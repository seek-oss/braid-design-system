import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Columns, Column } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  screenshotWidths: [320, 768, 1200],
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
      docsSite: false,
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
      docsSite: false,
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
      docsSite: false,
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
        'Collapse below tablet with responsive space and `none` below tablet, e.g. ["none", "gutter"]',
      docsSite: false,
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
        'Collapse below desktop with responsive space and `none` below desktop, e.g. ["none", "xsmall", gutter"]',
      docsSite: false,
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
        'Collapse below tablet with responsive space and `none` above mobile, e.g. ["small", "none"]',
      docsSite: false,
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
        'Collapse below desktop with responsive space and `none` above tablet, e.g. ["small", "medium, "none"]',
      docsSite: false,
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
      docsSite: false,
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
  ],
};

export default docs;
