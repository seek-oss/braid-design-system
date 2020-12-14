import React from 'react';
import { ComponentDetail } from '../../../site/src/types';
import { Card, Text, TextLink, Strong } from '../';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

const docs: ComponentDetail = {
  category: 'Layout',
  migrationGuide: true,
  Example: () =>
    source(
      <Card>
        <Placeholder label="This content is inside a card" height={60} />
      </Card>,
    ),
  alternatives: [
    {
      name: 'Box',
      description: 'For custom layouts.',
    },
  ],
  additional: [
    {
      label: 'Development considerations',
      description: (
        <Text>
          The design of this component may change in the future, so please
          ensure that you only use it where card semantics make sense. An easy
          way to check this is to imagine that your card has rounded corners and
          a shadow—would the design still work correctly, or would it look
          broken? If it’s the latter, consider using a{' '}
          <TextLink href="/components/Box">Box</TextLink> with a{' '}
          <Strong>background</Strong> of <Strong>{'"card"'}</Strong> instead.
        </Text>
      ),
    },
  ],
};

export default docs;
