import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDetails } from '../../../site/src/types';
import { Rating, Stack, Text, Strong, TextLink } from '../';

const docs: ComponentDetails = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="gutter">
        <Rating size="large" rating={3} />
        <Rating size="standard" rating={3} />
        <Rating size="small" rating={3} />
        <Rating size="xsmall" rating={3} />
      </Stack>,
    ),
  alternatives: [],
  additional: [
    {
      label: 'Design considerations',
      description: (
        <Text>
          Follows the same sizing rules as the{' '}
          <TextLink href="/components/Text">Text</TextLink> component.
        </Text>
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
