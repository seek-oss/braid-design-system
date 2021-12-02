import React, { Fragment } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import {
  Heading,
  IconNewWindow,
  IconChevron,
  Text,
  TextLink,
  Columns,
  Column,
} from '../';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../Box/Box';
import { backgrounds } from '../../utils/docsHelpers';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [768],
  examples: [
    {
      label: 'Regular TextLink',
      Example: () => (
        <Text>
          <TextLink href="#" hitArea="large">
            TextLink
          </TextLink>
        </Text>
      ),
    },
    {
      label: 'Regular TextLink in a sentence',
      Example: () => (
        <Text>
          This sentence contains a <TextLink href="#">TextLink.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Weak TextLink in a sentence',
      Example: () => (
        <Text>
          This sentence contains a{' '}
          <TextLink href="#" weight="weak">
            weak TextLink
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'TextLink in secondary text',
      Example: () => (
        <Text tone="secondary">
          This sentence contains a <TextLink href="#">TextLink.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Visited TextLink',
      Example: () => (
        <Text>
          This sentence contains a{' '}
          <TextLink href="" showVisited>
            visited TextLink.
          </TextLink>
        </Text>
      ),
    },
    {
      label: 'TextLink on dark background',
      background: 'brand',
      Example: () => (
        <Text>
          This sentence contains a <TextLink href="#">TextLink.</TextLink>
        </Text>
      ),
    },
    {
      label: 'TextLink inside large Text',
      Example: () => (
        <Text size="large">
          This sentence contains a <TextLink href="#">TextLink.</TextLink>
        </Text>
      ),
    },
    {
      label: 'TextLink inside Heading',
      Example: () => (
        <Heading level="3">
          This heading contains a <TextLink href="#">TextLink.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'TextLink inside weak Heading',
      Example: () => (
        <Heading level="3" weight="weak">
          This heading contains a <TextLink href="#">TextLink.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Weak TextLink inside Heading',
      Example: () => (
        <Heading level="3">
          This heading contains a{' '}
          <TextLink href="#" weight="weak">
            weak TextLink.
          </TextLink>
        </Heading>
      ),
    },
    {
      label: 'Weak TextLink inside weak Heading',
      Example: () => (
        <Heading level="3" weight="weak">
          This heading contains a{' '}
          <TextLink href="#" weight="weak">
            weak TextLink.
          </TextLink>
        </Heading>
      ),
    },
    {
      label: 'TextLink with icon',
      Example: () => (
        <Text>
          This sentence contains a{' '}
          <TextLink href="#">
            TextLink
            <IconChevron direction="right" />
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'TextLink Contrast',
      Example: () => (
        <Fragment>
          {backgrounds.map((background, i) => (
            <Box key={i} background={background} padding="small">
              <Columns space="xlarge">
                <Column>
                  <Text>{background}</Text>
                </Column>
                <Column width="content">
                  <Text>
                    <TextLink href="#">
                      Default <IconNewWindow />
                    </TextLink>
                  </Text>
                </Column>
                <Column width="content">
                  <Text>
                    <TextLink href="#" weight="regular">
                      Regular <IconNewWindow />
                    </TextLink>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <TextLink href="#" weight="weak">
                      Weak <IconNewWindow />
                    </TextLink>
                  </Text>
                </Column>
              </Columns>
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
