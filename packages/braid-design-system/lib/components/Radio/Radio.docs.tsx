import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import { Stack, Radio, Text, TextLink } from '../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: false,
  deprecationWarning: (
    <Text weight="medium">
      This component has been deprecated. Use{' '}
      <TextLink href="/components/RadioGroup">RadioGroup</TextLink> instead.
    </Text>
  ),
  Example: ({ id, getState, setState }) =>
    source(
      <Stack space="small">
        <Radio
          id={`${id}_1`}
          checked={getState('value') === 1}
          onChange={() => setState('value', 1)}
          label="One"
        />
        <Radio
          id={`${id}_2`}
          checked={getState('value') === 2}
          onChange={() => setState('value', 2)}
          label="Two"
        />
        <Radio
          id={`${id}_3`}
          checked={getState('value') === 3}
          onChange={() => setState('value', 3)}
          label="Three"
        />
      </Stack>,
    ),
  alternatives: [],
};

export default docs;
