import React, { ReactNode } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Bleed, Box, Stack, Text } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <Box padding="xlarge" boxShadow="borderNeutral">
    <Box position="relative">
      {children}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        boxShadow="borderNeutral"
      />
    </Box>
  </Box>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768, 992, 1200],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'On all sides',
      Container,
      Example: () => (
        <Bleed space="large">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
    {
      label: 'Horizontally',
      Container,
      Example: () => (
        <Bleed horizontal="large">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
    {
      label: 'Vertically',
      Container,
      Example: () => (
        <Bleed vertical="large">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
    {
      label: 'To the top',
      Container,
      Example: () => (
        <Bleed top="large">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
    {
      label: 'To the bottom',
      Container,
      Example: () => (
        <Bleed bottom="large">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
    {
      label: 'To the left',
      Container,
      Example: () => (
        <Bleed left="large">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
    {
      label: 'To the right',
      Container,
      Example: () => (
        <Bleed right="large">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
    {
      label: 'Responsive single dimension',
      Container,
      Example: () => (
        <Bleed
          top={{
            mobile: 'small',
            tablet: 'medium',
            desktop: 'large',
            wide: 'xlarge',
          }}
          bottom={{
            mobile: 'xlarge',
            tablet: 'large',
            desktop: 'medium',
            wide: 'small',
          }}
          left={{
            mobile: 'small',
            tablet: 'medium',
            desktop: 'large',
            wide: 'xlarge',
          }}
          right={{
            mobile: 'xlarge',
            tablet: 'large',
            desktop: 'medium',
            wide: 'small',
          }}
        >
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
    {
      label: 'Responsive on axis',
      Container,
      Example: () => (
        <Bleed
          horizontal={{
            mobile: 'small',
            tablet: 'medium',
            desktop: 'large',
            wide: 'xlarge',
          }}
          vertical={{
            mobile: 'xlarge',
            tablet: 'large',
            desktop: 'medium',
            wide: 'small',
          }}
        >
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
    {
      label: 'Responsive space',
      Container,
      Example: () => (
        <Bleed
          space={{
            mobile: 'small',
            tablet: 'medium',
            desktop: 'large',
            wide: 'xlarge',
          }}
        >
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
    {
      label: 'Test - left trumps horizontal and space',
      Container,
      Example: () => (
        <Bleed left="xlarge" horizontal="medium" space="xsmall">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            paddingLeft="xxlarge"
            display="flex"
            alignItems="center"
            style={{ height: 150 }}
          >
            <Stack space="small">
              <Text>Left: xlarge</Text>
              <Text>Right: medium</Text>
              <Text>Top: xsmall</Text>
              <Text>Bottom: xsmall</Text>
            </Stack>
          </Box>
        </Bleed>
      ),
    },
    {
      label: 'Test - right trumps horizontal and space',
      Container,
      Example: () => (
        <Bleed right="xlarge" horizontal="medium" space="xsmall">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            paddingLeft="xlarge"
            display="flex"
            alignItems="center"
            style={{ height: 150 }}
          >
            <Stack space="small">
              <Text>Left: medium</Text>
              <Text>Right: xlarge</Text>
              <Text>Top: xsmall</Text>
              <Text>Bottom: xsmall</Text>
            </Stack>
          </Box>
        </Bleed>
      ),
    },
    {
      label: 'Test - horizontal trumps space',
      Container,
      Example: () => (
        <Bleed horizontal="xlarge" space="xsmall">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            paddingLeft="xxlarge"
            display="flex"
            alignItems="center"
            style={{ height: 150 }}
          >
            <Stack space="small">
              <Text>Left: xlarge</Text>
              <Text>Right: xlarge</Text>
              <Text>Top: xsmall</Text>
              <Text>Bottom: xsmall</Text>
            </Stack>
          </Box>
        </Bleed>
      ),
    },
    {
      label: 'Test - top trumps vertical and space',
      Container,
      Example: () => (
        <Bleed top="xlarge" vertical="medium" space="xsmall">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            paddingLeft="large"
            display="flex"
            alignItems="center"
            style={{ height: 150 }}
          >
            <Stack space="small">
              <Text>Left: xsmall</Text>
              <Text>Right: xsmall</Text>
              <Text>Top: xlarge</Text>
              <Text>Bottom: medium</Text>
            </Stack>
          </Box>
        </Bleed>
      ),
    },
    {
      label: 'Test - bottom trumps vertical and space',
      Container,
      Example: () => (
        <Bleed bottom="xlarge" vertical="medium" space="xsmall">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            paddingLeft="large"
            display="flex"
            alignItems="center"
            style={{ height: 150 }}
          >
            <Stack space="small">
              <Text>Left: xsmall</Text>
              <Text>Right: xsmall</Text>
              <Text>Top: medium</Text>
              <Text>Bottom: xlarge</Text>
            </Stack>
          </Box>
        </Bleed>
      ),
    },
    {
      label: 'Test - vertical trumps space',
      Container,
      Example: () => (
        <Bleed vertical="xlarge" space="xsmall">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            paddingLeft="large"
            display="flex"
            alignItems="center"
            style={{ height: 150 }}
          >
            <Stack space="small">
              <Text>Left: xsmall</Text>
              <Text>Right: xsmall</Text>
              <Text>Top: xlarge</Text>
              <Text>Bottom: xlarge</Text>
            </Stack>
          </Box>
        </Bleed>
      ),
    },
    {
      label: 'Test - Content should be relative to bleed container',
      Example: () => (
        <Box padding="large" background="surface">
          <Bleed vertical="gutter">
            <Box
              background="criticalLight"
              boxShadow="borderCritical"
              style={{ height: 150 }}
            />
            <Box
              position="absolute"
              top={0}
              right={0}
              background="positive"
              style={{ height: 40, width: 40 }}
            />
          </Bleed>
        </Box>
      ),
    },
    {
      label: 'Test - Span',
      Container,
      Example: () => (
        <Bleed component="span" space="large">
          <Box
            background="criticalLight"
            boxShadow="borderCritical"
            style={{ height: 150 }}
          />
        </Bleed>
      ),
    },
  ],
};
