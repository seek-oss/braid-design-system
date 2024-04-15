import React from 'react';
import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import { TagSelector } from './TagSelector';
import { Heading, Stack } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () => {
    const [standardSelectedTags, setStandardSelectedTags] = React.useState<
      string[]
    >([]);
    const standardOptions = ['this', 'that', 'the other', 'another one'];

    const [preSelectedTags, setPreSelectedTags] = React.useState<string[]>([
      'first',
      'second',
      'third',
    ]);
    const preOptions = ['this', 'that', 'the other', 'another one'];

    return source(
      <Stack space="xxlarge">
        <Stack space="small">
          <Heading level="2">Standard Tag Selector</Heading>
          <TagSelector
            options={standardOptions}
            selectedTags={standardSelectedTags}
            onSelect={(tag) => {
              setStandardSelectedTags((tags) =>
                tags.includes(tag)
                  ? tags.filter((t) => t !== tag)
                  : [...tags, tag],
              );
            }}
          />
        </Stack>
        <Stack space="small">
          <Heading level="2">Tag Selector with pre-selections</Heading>
          <TagSelector
            options={preOptions}
            selectedTags={preSelectedTags}
            onSelect={(tag) => {
              setPreSelectedTags((tags) =>
                tags.includes(tag)
                  ? tags.filter((t) => t !== tag)
                  : [...tags, tag],
              );
            }}
          />
        </Stack>
      </Stack>,
    );
  },
  alternatives: [
    {
      name: 'Tag',
      description: '...',
    },
  ],
};

export default docs;
