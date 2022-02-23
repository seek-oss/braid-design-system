import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Pagination } from '../';
import { LinkProps } from '../Link/Link';
import { defaultVisiblePageLimit } from './Pagination';

const linkProps = (): LinkProps => ({ href: '#' });

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: `First page, where total < ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={defaultVisiblePageLimit - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `First page, where total = ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={defaultVisiblePageLimit}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `First page, where total > ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={defaultVisiblePageLimit + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Center page, where total < ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={Math.round((defaultVisiblePageLimit - 3) / 2)}
          total={defaultVisiblePageLimit - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Center page, where total = ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={Math.round(defaultVisiblePageLimit / 2)}
          total={defaultVisiblePageLimit}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Center page, where total > ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={Math.round((defaultVisiblePageLimit + 3) / 2)}
          total={defaultVisiblePageLimit + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Last page, where total < ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={defaultVisiblePageLimit - 3}
          total={defaultVisiblePageLimit - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Last page, where total = ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={defaultVisiblePageLimit}
          total={defaultVisiblePageLimit}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Last page, where total > ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={defaultVisiblePageLimit + 3}
          total={defaultVisiblePageLimit + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Second page, where total > ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={2}
          total={defaultVisiblePageLimit + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Second last page, where total > ${defaultVisiblePageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={defaultVisiblePageLimit + 3 - 1}
          total={defaultVisiblePageLimit + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: 'On a surface',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={defaultVisiblePageLimit - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: 'With visiblePageLimit set to 1, on first page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={10}
          linkProps={linkProps}
          visiblePageLimit={1}
        />
      ),
    },
    {
      label: 'With visiblePageLimit set to 1, on last page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={10}
          total={10}
          linkProps={linkProps}
          visiblePageLimit={1}
        />
      ),
    },
    {
      label: 'With visiblePageLimit set to 2, on first page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={10}
          linkProps={linkProps}
          visiblePageLimit={2}
        />
      ),
    },
    {
      label: 'With visiblePageLimit set to 2, on last page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={10}
          total={10}
          linkProps={linkProps}
          visiblePageLimit={2}
        />
      ),
    },
    {
      label: 'With visiblePageLimit set to 3, on first page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={10}
          linkProps={linkProps}
          visiblePageLimit={3}
        />
      ),
    },
    {
      label: 'With visiblePageLimit set to 3, on last page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={10}
          total={10}
          linkProps={linkProps}
          visiblePageLimit={3}
        />
      ),
    },
  ],
};
