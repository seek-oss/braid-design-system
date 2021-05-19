import React, { Fragment } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import {
  Actions,
  Box,
  Button,
  Heading,
  IconNewWindow,
  IconChevron,
  Stack,
  Text,
  TextLink,
} from '../';
import { backgrounds } from '../../utils/docsHelpers';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
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
      label: 'TextLink inside Actions (Deprecated)',
      Example: () => (
        <Actions>
          <Button>Button</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>
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
      label: 'TextLink inside Actions with icon (Deprecated)',
      Example: () => (
        <Actions>
          <Button>Button</Button>
          <TextLink href="#">
            TextLink <IconChevron direction="right" />
          </TextLink>
        </Actions>
      ),
    },
    {
      label: 'TextLink Contrast',
      Example: () => (
        <Fragment>
          {backgrounds.map((background, i) => (
            <Box key={i} background={background}>
              <Stack space="none">
                <Text baseline={false}>
                  {background}{' '}
                  <TextLink href="#">
                    with default weight <IconNewWindow />
                  </TextLink>
                </Text>
                <Text baseline={false}>
                  {background}{' '}
                  <TextLink href="#" weight="regular">
                    with regular weight <IconNewWindow />
                  </TextLink>
                </Text>
                <Text baseline={false}>
                  {background}{' '}
                  <TextLink href="#" weight="weak">
                    with weak weight <IconNewWindow />
                  </TextLink>
                </Text>
              </Stack>
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
