import type { TemplateDocs } from 'site/types';

import { Strong, Text } from '../../../../playroom/components';

import { snippets } from './BrandedContainer.snippets';

const primarySnippet = snippets[0];

const docs: TemplateDocs = {
  title: primarySnippet.name,
  description: (
    <Text>
      A full-bleed section using the brand background colour, providing a
      prominent visual treatment. Supports both an edge-to-edge and a{' '}
      <Strong>rounded-from-desktop</Strong> variant.
    </Text>
  ),
  usage: (
    <>
      <Text>
        Use for prominent sections requiring brand colour treatment, such as
        hero areas, calls to action, or marketing callouts.
      </Text>
      <Text>
        Use the <Strong>full bleed</Strong> variant for maximum visual impact.
        Use the <Strong>rounded from desktop</Strong> variant when a softer
        treatment that respects page gutters on larger screens is preferred.
      </Text>
    </>
  ),
  Example: () => primarySnippet.code,
};

export default docs;
