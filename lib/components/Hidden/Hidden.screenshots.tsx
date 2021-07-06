import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Hidden } from './Hidden';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768, 992, 1200],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'Hidden below tablet',
      Example: () => (
        <>
          <Text>The following line is hidden below tablet:</Text>
          <Hidden below="tablet">
            <Box paddingTop="small">
              <Text>Hidden below tablet.</Text>
            </Box>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden below desktop',
      Example: () => (
        <>
          <Text>The following line is hidden below desktop:</Text>
          <Hidden below="desktop">
            <Box paddingTop="small">
              <Text>Hidden below desktop.</Text>
            </Box>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden below wide',
      Example: () => (
        <>
          <Text>The following line is hidden below wide:</Text>
          <Hidden below="wide">
            <Box paddingTop="small">
              <Text>Hidden below wide.</Text>
            </Box>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden above mobile',
      Example: () => (
        <>
          <Text>The following line is hidden above mobile:</Text>
          <Hidden above="mobile">
            <Box paddingTop="small">
              <Text>Hidden above mobile.</Text>
            </Box>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden above tablet',
      Example: () => (
        <>
          <Text>The following line is hidden above tablet:</Text>
          <Hidden above="tablet">
            <Box paddingTop="small">
              <Text>Hidden above tablet.</Text>
            </Box>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden above desktop',
      Example: () => (
        <>
          <Text>The following line is hidden above desktop:</Text>
          <Hidden above="desktop">
            <Box paddingTop="small">
              <Text>Hidden above desktop.</Text>
            </Box>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden on print',
      Example: () => (
        <>
          <Text>The following line is hidden on print:</Text>
          <Hidden print>
            <Box paddingTop="small">
              <Text>Hidden on print.</Text>
            </Box>
          </Hidden>
        </>
      ),
    },
    {
      label: 'Hidden on Screen',
      Example: () => (
        <>
          <Text>The following line is hidden on screen:</Text>
          <Hidden screen>
            <Box paddingTop="small">
              <Text>Hidden on screen.</Text>
            </Box>
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
      label: 'Hidden below wide (inline)',
      Example: () => (
        <Text>
          The following text node is hidden below wide:{' '}
          <Hidden below="wide">Hidden below wide.</Hidden>
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
      label: 'Hidden above desktop (inline)',
      Example: () => (
        <Text>
          The following text node is hidden above desktop:{' '}
          <Hidden above="desktop">Hidden above desktop.</Hidden>
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
