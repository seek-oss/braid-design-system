import type { TemplateDocs } from 'site/types';

import { Text, TextLink } from '../../../components';

import { snippets } from './SteppedSection.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      A multi-step navigation pattern within a section, using a{' '}
      <TextLink href="/components/Stepper">Stepper</TextLink> to track progress
      and display step-specific content.
    </Text>
  ),
  usage: (
    <Text>
      Use for guided multi-step task flows — such as multi-page forms or
      onboarding sequences — where tracking position and progress is important
      to the user.
    </Text>
  ),
  Example: () => primarySnippet.code,
};

export default docs;
