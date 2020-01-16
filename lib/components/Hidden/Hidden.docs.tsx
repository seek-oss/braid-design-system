import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Hidden } from './Hidden';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320, 768, 1200],
  examples: [
    {
      label: 'Hidden below tablet',
      Example: () => (
        <Stack space="small">
          <Text>The following line is hidden below tablet:</Text>
          <Hidden below="tablet">
            <Text>Hidden below tablet.</Text>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: 'Hidden below desktop',
      Example: () => (
        <Stack space="small">
          <Text>The following line is hidden below desktop:</Text>
          <Hidden below="desktop">
            <Text>Hidden below desktop.</Text>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: 'Hidden above mobile',
      Example: () => (
        <Stack space="small">
          <Text>The following line is hidden above mobile:</Text>
          <Hidden above="mobile">
            <Text>Hidden above mobile.</Text>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: 'Hidden above tablet',
      Example: () => (
        <Stack space="small">
          <Text>The following line is hidden above tablet:</Text>
          <Hidden above="tablet">
            <Text>Hidden above tablet.</Text>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: 'Hidden on print',
      Example: () => (
        <Stack space="small">
          <Text>The following line is hidden on print:</Text>
          <Hidden print>
            <Text>Hidden on print.</Text>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: 'Hidden on Screen',
      Example: () => (
        <Stack space="small">
          <Text>The following line is hidden on screen:</Text>
          <Hidden screen>
            <Text>Hidden on screen.</Text>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: 'Hidden below tablet (inline)',
      Example: () => (
        <Text>
          The following text node is hidden below tablet:{' '}
          <Hidden inline below="tablet">
            Hidden below tablet.
          </Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden below desktop (inline)',
      Example: () => (
        <Text>
          The following text node is hidden below desktop:{' '}
          <Hidden inline below="desktop">
            Hidden below desktop.
          </Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden above mobile (inline)',
      Example: () => (
        <Text>
          The following text node is hidden above mobile:{' '}
          <Hidden inline above="mobile">
            Hidden above mobile.
          </Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden above tablet (inline)',
      Example: () => (
        <Text>
          The following text node is hidden above tablet:{' '}
          <Hidden inline above="tablet">
            Hidden above tablet.
          </Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden on print (inline)',
      Example: () => (
        <Text>
          The following text node is hidden on print:{' '}
          <Hidden inline print>
            Hidden on print.
          </Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden on screen (inline)',
      Example: () => (
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
