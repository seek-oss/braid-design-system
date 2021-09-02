import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import { Rating, Stack, Inline, Text, Strong, TextLink } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () => source(<Rating size="large" rating={3} />),
  alternatives: [],
  additional: [
    {
      label: 'Sizing',
      description: (
        <Text>
          Follows the same sizing rules as the{' '}
          <TextLink href="/components/Text">Text</TextLink> component.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="gutter">
            <Inline space="small">
              <Rating size="large" rating={3} />
              <Text tone="secondary" size="large">
                large
              </Text>
            </Inline>
            <Inline space="small">
              <Rating size="standard" rating={3} />
              <Text tone="secondary" size="standard">
                standard
              </Text>
            </Inline>
            <Inline space="small">
              <Rating size="small" rating={3} />
              <Text tone="secondary" size="small">
                small
              </Text>
            </Inline>
            <Inline space="small">
              <Rating size="xsmall" rating={3} />
              <Text tone="secondary" size="xsmall">
                xsmall
              </Text>
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Hiding the text rating',
      description: (
        <Text>
          The text rating can be hidden by setting{' '}
          <Strong>showTextRating</Strong> to <Strong>false</Strong>.
        </Text>
      ),
      Example: () =>
        source(<Rating size="large" rating={4.2} showTextRating={false} />),
    },
  ],
};

export default docs;
