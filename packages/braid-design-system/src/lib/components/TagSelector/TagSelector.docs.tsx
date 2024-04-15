import React from 'react';
import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import { type Tag, TagSelector } from './TagSelector';
import { Heading, Stack } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () => {
    const [standardSelectedTags, setStandardSelectedTags] = React.useState<
      Tag[]
    >([]);
    const standardOptions = [
      { description: 'this', id: 'thisStandardOptions' },
      { description: 'that', id: 'thatStandardOptions' },
      { description: 'the other', id: 'theOtherStandardOptions' },
      { description: 'another one', id: 'anotherOneStandardOptions' },
    ];

    const [preSelectedTags, setPreSelectedTags] = React.useState<Tag[]>([
      { description: 'first', id: 'firstPreSelected' },
      { description: 'second', id: 'secondPreSelected' },
      { description: 'third', id: 'thirdPreSelected' },
    ]);
    const preOptions = [
      { description: 'this', id: 'thisPreOptions' },
      { description: 'that', id: 'thatPreOptions' },
      { description: 'the other', id: 'theOtherPreOptions' },
      { description: 'another one', id: 'anotherOnePreOptions' },
    ];

    return source(
      <Stack space="xxlarge">
        <Stack space="small">
          <Heading level="2">Standard Tag Selector</Heading>
          <TagSelector
            options={standardOptions}
            selectedTags={standardSelectedTags}
            onSelect={(tag) => {
              console.log(`selected ${tag.description}`); // eslint-disable-line no-console
              setStandardSelectedTags((tags) =>
                tags.some((t) => t.id === tag.id)
                  ? tags.filter((t) => t.id !== tag.id)
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
              console.log(`selected ${tag.description}`); // eslint-disable-line no-console
              setPreSelectedTags((tags) =>
                tags.some((t) => t.id === tag.id)
                  ? tags.filter((t) => t.id !== tag.id)
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
