import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import { TagSelector } from './TagSelector';
import { Strong, Text, TextLink } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ id, setDefaultState, getState, setState, resetState }) =>
    source(
      <>
        {setDefaultState('value', '')}
        {setDefaultState('selectedTags', [
          { description: 'Apples', id: '1' },
          { description: 'Bananas', id: '2' },
        ])}

        <TagSelector
          id={id}
          tagOptions={[
            { description: 'Apples', id: '1' },
            { description: 'Bananas', id: '2' },
            { description: 'Oranges', id: '3' },
            { description: 'Pears', id: '4' },
          ]}
          selectedTags={getState('selectedTags')}
          label="Label"
          value={getState('value')}
          noOptionsMessage="No options available"
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
          onChange={setState('value')}
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
  additional: [
    {
      label: 'Custom tags',
      description: (
        <Text>
          To allow any tags to be entered, <Strong>customTags</Strong> can be
          enabled.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value1', '')}
            {setDefaultState('selectedTags1', [
              { description: 'Never', id: '5' },
              { description: 'Gonna', id: '6' },
              { description: 'Give', id: '7' },
              { description: 'You', id: '8' },
              { description: 'Up', id: '9' },
            ])}

            <TagSelector
              customTags
              id={`${id}_1`}
              tagOptions={[
                { description: 'Apples', id: '1' },
                { description: 'Bananas', id: '2' },
                { description: 'Oranges', id: '3' },
                { description: 'Pears', id: '4' },
              ]}
              selectedTags={getState('selectedTags1')}
              label="Label"
              value={getState('value1')}
              noOptionsMessage="No options available"
              onSelect={(selectedTag1) => {
                setState('selectedTags1', [
                  ...getState('selectedTags1'),
                  selectedTag1,
                ]);
                resetState('value1');
              }}
              onRemove={(removedTag1) => {
                const selectedTags1 = getState('selectedTags1').slice();
                const index = selectedTags1.indexOf(removedTag1);
                if (index !== -1) {
                  selectedTags1.splice(index, 1);
                  setState('selectedTags1', selectedTags1);
                }
              }}
              onChange={setState('value1')}
              onClear={() => resetState('value1')}
            />
          </>,
        ),
    },
    {
      label: 'Hidden field label',
      description: (
        <Text>
          In cases where the field label should be visually hidden, you can
          provide an <Strong>aria-label</Strong> instead.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value2', '')}
            {setDefaultState('selectedTags2', [])}

            <TagSelector
              id={`${id}_2`}
              tagOptions={[
                { description: 'Apples', id: '1' },
                { description: 'Bananas', id: '2' },
                { description: 'Oranges', id: '3' },
                { description: 'Pears', id: '4' },
              ]}
              selectedTags={getState('selectedTags2')}
              aria-label="Label"
              value={getState('value2')}
              noOptionsMessage="No options available"
              onSelect={(selectedTag1) => {
                setState('selectedTags2', [
                  ...getState('selectedTags2'),
                  selectedTag1,
                ]);
                resetState('value2');
              }}
              onRemove={(removedTag1) => {
                const selectedTags2 = getState('selectedTags2').slice();
                const index = selectedTags2.indexOf(removedTag1);
                if (index !== -1) {
                  selectedTags2.splice(index, 1);
                  setState('selectedTags2', selectedTags2);
                }
              }}
              onChange={setState('value2')}
              onClear={() => resetState('value2')}
            />
          </>,
        ),
    },
  ],
};

export default docs;
