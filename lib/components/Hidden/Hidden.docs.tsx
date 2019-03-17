import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { Hidden } from './Hidden';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Hidden on Mobile',
      render: () => (
        <Fragment>
          <Text>The following line is hidden on mobile:</Text>
          <Hidden mobile>
            <Text>Hidden on mobile.</Text>
          </Hidden>
        </Fragment>
      ),
    },
    {
      label: 'Hidden on Desktop',
      render: () => (
        <Fragment>
          <Text>The following line is hidden on desktop:</Text>
          <Hidden desktop>
            <Text>Hidden on desktop.</Text>
          </Hidden>
        </Fragment>
      ),
    },
    {
      label: 'Hidden on Print',
      render: () => (
        <Fragment>
          <Text>The following line is hidden on print:</Text>
          <Hidden print>
            <Text>Hidden on print.</Text>
          </Hidden>
        </Fragment>
      ),
    },
    {
      label: 'Hidden on Screen',
      render: () => (
        <Fragment>
          <Text>The following line is hidden on screen:</Text>
          <Hidden screen>
            <Text>Hidden on screen.</Text>
          </Hidden>
        </Fragment>
      ),
    },
    {
      label: 'Hidden on Mobile (Inline)',
      render: () => (
        <Text>
          The following text node is hidden on mobile:{' '}
          <Hidden inline mobile>
            Hidden on mobile.
          </Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden on Desktop (Inline)',
      render: () => (
        <Text>
          The following text node is hidden on desktop:{' '}
          <Hidden inline desktop>
            Hidden on desktop.
          </Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden on Print (Inline)',
      render: () => (
        <Text>
          The following text node is hidden on print:{' '}
          <Hidden inline print>
            Hidden on print.
          </Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden on Screen (Inline)',
      render: () => (
        <Text>
          The following text node is hidden on screen:{' '}
          <Hidden inline screen>
            Hidden on screen.
          </Hidden>
        </Text>
      ),
    },
  ],
};

export default docs;
