import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Pagination } from '../';
import { LinkProps } from '../Link/Link';
import { defaultPageLimit } from './Pagination';

const linkProps = (): LinkProps => ({ href: '#' });

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: `First page, where total < ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={defaultPageLimit - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `First page, where total = ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={defaultPageLimit}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `First page, where total > ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={defaultPageLimit + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Center page, where total < ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={Math.round((defaultPageLimit - 3) / 2)}
          total={defaultPageLimit - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Center page, where total = ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={Math.round(defaultPageLimit / 2)}
          total={defaultPageLimit}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Center page, where total > ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={Math.round((defaultPageLimit + 3) / 2)}
          total={defaultPageLimit + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Last page, where total < ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={defaultPageLimit - 3}
          total={defaultPageLimit - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Last page, where total = ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={defaultPageLimit}
          total={defaultPageLimit}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Last page, where total > ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={defaultPageLimit + 3}
          total={defaultPageLimit + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Second page, where total > ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={2}
          total={defaultPageLimit + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Second last page, where total > ${defaultPageLimit}`,
      Example: () => (
        <Pagination
          label="Label"
          page={defaultPageLimit + 3 - 1}
          total={defaultPageLimit + 3}
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
          total={defaultPageLimit - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: 'With pageLimit set to 1, on first page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={10}
          linkProps={linkProps}
          pageLimit={1}
        />
      ),
    },
    {
      label: 'With pageLimit set to 1, on last page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={10}
          total={10}
          linkProps={linkProps}
          pageLimit={1}
        />
      ),
    },
    {
      label: 'With pageLimit set to 2, on first page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={10}
          linkProps={linkProps}
          pageLimit={2}
        />
      ),
    },
    {
      label: 'With pageLimit set to 2, on last page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={10}
          total={10}
          linkProps={linkProps}
          pageLimit={2}
        />
      ),
    },
    {
      label: 'With pageLimit set to 3, on first page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={10}
          linkProps={linkProps}
          pageLimit={3}
        />
      ),
    },
    {
      label: 'With pageLimit set to 3, on last page',
      background: 'surface',
      Example: () => (
        <Pagination
          label="Label"
          page={10}
          total={10}
          linkProps={linkProps}
          pageLimit={3}
        />
      ),
    },
  ],
};
