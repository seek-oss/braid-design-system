import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  BackgroundProvider,
  Text,
  Box,
  TextLink,
  Strong,
  Stack,
} from '../../../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Logic',
  Example: () =>
    source(
      <Box padding="medium" style={{ backgroundColor: '#3d0080' }}>
        <BackgroundProvider type="dark">
          <Text>Text on custom dark background</Text>
        </BackgroundProvider>
      </Box>,
    ),
  alternatives: [],
  additional: [
    {
      label: 'Development considerations',
      description: (
        <>
          <Text>
            When <TextLink href="/components/Text">Text</TextLink> placed on a
            dark background, it may be inverted based on the{' '}
            <TextLink href="/components/Text#contrast">
              contrast rules of Text.
            </TextLink>
          </Text>
          <Text>
            If using custom backgrounds or images, the behaviour no longer
            works. This can be reinstated by wrapping the content with a{' '}
            <Strong>BackgroundProvider</Strong> and specifying whether it is{' '}
            <Strong>dark</Strong> or <Strong>light</Strong>.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Box padding="medium" style={{ backgroundColor: '#3d0080' }}>
              <BackgroundProvider type="dark">
                <Text>Text on custom dark background</Text>
              </BackgroundProvider>
            </Box>
            <Box padding="medium" style={{ backgroundColor: '#c8cfff' }}>
              <BackgroundProvider type="light">
                <Text>Text on custom light background</Text>
              </BackgroundProvider>
            </Box>
          </Stack>,
        ),
    },
  ],
};

export default docs;
