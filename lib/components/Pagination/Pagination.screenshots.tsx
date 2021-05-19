import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Pagination } from '../';
import { LinkProps } from '../Link/Link';
import { maxPages } from './paginate';

const linkProps = (): LinkProps => ({ href: '#' });

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: `First page, where total < ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={maxPages - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `First page, where total = ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={maxPages}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `First page, where total > ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={maxPages + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Center page, where total < ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={Math.round((maxPages - 3) / 2)}
          total={maxPages - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Center page, where total = ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={Math.round(maxPages / 2)}
          total={maxPages}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Center page, where total > ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={Math.round((maxPages + 3) / 2)}
          total={maxPages + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Last page, where total < ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={maxPages - 3}
          total={maxPages - 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Last page, where total = ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={maxPages}
          total={maxPages}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Last page, where total > ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={maxPages + 3}
          total={maxPages + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Second page, where total > ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={2}
          total={maxPages + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: `Second last page, where total > ${maxPages}`,
      Example: () => (
        <Pagination
          label="Label"
          page={maxPages + 3 - 1}
          total={maxPages + 3}
          linkProps={linkProps}
        />
      ),
    },
    {
      label: 'On a card background',
      background: 'card',
      Example: () => (
        <Pagination
          label="Label"
          page={1}
          total={maxPages - 3}
          linkProps={linkProps}
        />
      ),
    },
  ],
};
