import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { ContentBlock } from '../';
import source from '../../utils/source.macro';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  Example: () =>
    source(
      <ContentBlock width="small">
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  description: (
    <Text>
      Provides a container that both centers and constrains the maximum width of
      the content it wraps.
    </Text>
  ),
  alternatives: [],
  additional: [
    {
      label: 'Maximum width',
      description: (
        <Text>
          Use the <Strong>width</Strong> prop to adjust the maximum width of the
          container.
        </Text>
      ),
      Example: () =>
        source(
          <ContentBlock width="xsmall">
            <Placeholder height={100} />
          </ContentBlock>,
        ),
    },
  ],
};

export default docs;
