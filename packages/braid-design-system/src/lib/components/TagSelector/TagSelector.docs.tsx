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
              { description: 'Foo', id: '5' },
              { description: 'Bar', id: '6' },
              { description: 'Baz', id: '7' },
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
      label: 'Placeholder prompt',
      description: (
        <Text>
          Providing a <Strong>placeholder</Strong> will display a prompt to the
          user when there is no input value.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value2', '')}
            {setDefaultState('selectedTags2', [
              { description: 'Apples', id: '1' },
              { description: 'Bananas', id: '2' },
            ])}

            <TagSelector
              id={`${id}_2`}
              tagOptions={[
                { description: 'Apples', id: '1' },
                { description: 'Bananas', id: '2' },
                { description: 'Oranges', id: '3' },
                { description: 'Pears', id: '4' },
              ]}
              selectedTags={getState('selectedTags2')}
              label="Label"
              placeholder="Enter text"
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
            {setDefaultState('value3', '')}
            {setDefaultState('selectedTags3', [])}

            <TagSelector
              id={`${id}_3`}
              tagOptions={[
                { description: 'Apples', id: '1' },
                { description: 'Bananas', id: '2' },
                { description: 'Oranges', id: '3' },
                { description: 'Pears', id: '4' },
              ]}
              selectedTags={getState('selectedTags3')}
              aria-label="Label"
              value={getState('value3')}
              noOptionsMessage="No options available"
              onSelect={(selectedTag1) => {
                setState('selectedTags3', [
                  ...getState('selectedTags3'),
                  selectedTag1,
                ]);
                resetState('value3');
              }}
              onRemove={(removedTag1) => {
                const selectedTags3 = getState('selectedTags3').slice();
                const index = selectedTags3.indexOf(removedTag1);
                if (index !== -1) {
                  selectedTags3.splice(index, 1);
                  setState('selectedTags3', selectedTags3);
                }
              }}
              onChange={setState('value3')}
              onClear={() => resetState('value3')}
            />
          </>,
        ),
    },
  ],
};

export default docs;
