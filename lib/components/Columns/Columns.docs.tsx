import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Columns, Column } from '../';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
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
  ],
};

export default docs;
