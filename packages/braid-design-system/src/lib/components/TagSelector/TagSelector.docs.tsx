import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import { TagSelector } from './TagSelector';
import { Text, TextLink } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ id, setDefaultState, getState, setState, resetState }) =>
    source(
      <>
        {setDefaultState('value', '')}
        {setDefaultState('selectedTags', [])}

        <TagSelector
          id={id}
          options={[
            { description: 'Apples', id: '1' },
            { description: 'Bananas', id: '2' },
            { description: 'Oranges', id: '3' },
            { description: 'Pears', id: '4' },
          ]}
          selectedTags={getState('selectedTags')}
          label="Label"
          value={getState('value')}
          noOptionsMessage="No options"
          onSelect={(selectedTag) => {
            setState('selectedTags', [
              ...getState('selectedTags'),
              selectedTag,
            ]);
            resetState('value');
          }}
          onRemove={(removedTag) => {
            const selectedTags = getState('selectedTags').slice();
            const index = selectedTags.indexOf(removedTag);
            if (index !== -1) {
              selectedTags.splice(index, 1);
              setState('selectedTags', selectedTags);
            }
          }}
          onChange={() => setState('value')}
          onClear={() => resetState('value')}
        />
      </>,
    ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-1.2/#combobox">
        WAI-ARIA Combobox Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    {
      name: 'Autosuggest',
      description: 'For lists with a single select option',
    },
    {
      name: 'Checkbox',
      description: 'For selecting multiple options',
    },
    {
      name: 'Tag',
      description: 'For free tags',
    },
  ],
  // Todo - example with pre-selected tags
  // Todo - example with custom tags
};

export default docs;
