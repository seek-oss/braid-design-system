import type { TemplateDocs } from 'site/types';

import { Strong, Text } from '../../../../playroom/components';

import { snippets } from './Form.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: 'Form',
  description: (
    <Text>
      Standard form layout patterns for building well-structured forms. Provides
      two variants: a <Strong>basic</Strong> layout for simple forms and a{' '}
      <Strong>validation-aware</Strong> layout that reserves message space to
      prevent layout shifts when errors appear.
    </Text>
  ),
  usage: (
    <>
      <Text>
        Use the <Strong>basic</Strong> variant for simple forms where validation
        errors are unlikely or where layout shift on error is acceptable.
      </Text>
      <Text>
        Use the <Strong>validation</Strong> variant for forms that are more
        likely to show inline validation errors. The{' '}
        <Strong>reserveMessageSpace</Strong> prop on each field prevents content
        shifting when messages appear.
      </Text>
    </>
  ),
  Example: () => primarySnippet.code,
};

export default docs;
