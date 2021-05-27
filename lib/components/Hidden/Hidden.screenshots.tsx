import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Hidden } from './Hidden';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768, 1200],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'Hidden below tablet',
      Example: () => (
        <>
          <Box paddingBottom="small">
            <Text>The following line is hidden below tablet:</Text>
          </Box>
          <Hidden below="tablet">
            <Text>Hidden below tablet.</Text>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden below desktop',
      Example: () => (
        <>
          <Box paddingBottom="small">
            <Text>The following line is hidden below desktop:</Text>
          </Box>
          <Hidden below="desktop">
            <Text>Hidden below desktop.</Text>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden above mobile',
      Example: () => (
        <>
          <Box paddingBottom="small">
            <Text>The following line is hidden above mobile:</Text>
          </Box>
          <Hidden above="mobile">
            <Text>Hidden above mobile.</Text>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden above tablet',
      Example: () => (
        <>
          <Box paddingBottom="small">
            <Text>The following line is hidden above tablet:</Text>
          </Box>
          <Hidden above="tablet">
            <Text>Hidden above tablet.</Text>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden on print',
      Example: () => (
        <>
          <Box paddingBottom="small">
            <Text>The following line is hidden on print:</Text>
          </Box>
          <Hidden print>
            <Text>Hidden on print.</Text>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden on Screen',
      Example: () => (
        <>
          <Box paddingBottom="small">
            <Text>The following line is hidden on screen:</Text>
          </Box>
          <Hidden screen>
            <Text>Hidden on screen.</Text>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden below tablet (inline)',
      Example: () => (
        <Text>
          The following text node is hidden below tablet:{' '}
          <Hidden below="tablet">Hidden below tablet.</Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden below desktop (inline)',
      Example: () => (
        <Text>
          The following text node is hidden below desktop:{' '}
          <Hidden below="desktop">Hidden below desktop.</Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden above mobile (inline)',
      Example: () => (
        <Text>
          The following text node is hidden above mobile:{' '}
          <Hidden above="mobile">Hidden above mobile.</Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden above tablet (inline)',
      Example: () => (
        <Text>
          The following text node is hidden above tablet:{' '}
          <Hidden above="tablet">Hidden above tablet.</Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden on print (inline)',
      Example: () => (
        <Text>
          The following text node is hidden on print:{' '}
          <Hidden print>Hidden on print.</Hidden>
        </Text>
      ),
    },
    {
      label: 'Hidden on screen (inline)',
      Example: () => (
        <Text>
          The following text node is hidden on screen:{' '}
          <Hidden screen>Hidden on screen.</Hidden>
        </Text>
      ),
    },
  ],
};
