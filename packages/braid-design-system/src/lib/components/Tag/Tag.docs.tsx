import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Inline,
  Tag,
  Strong,
  Text,
  TextLink,
  Stack,
  IconLanguage,
  IconTag,
  Heading,
  Box,
  Autosuggest,
  filterSuggestions,
} from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <>
      <Text>
        A text based element for displaying user-provided data or selections.
      </Text>
    </>
  ),
  Example: () =>
    source(
      <Inline space="small">
        <Tag>One</Tag>
        <Tag>Two</Tag>
        <Tag>Three</Tag>
      </Inline>,
    ),
  alternatives: [{ name: 'Badge', description: 'For static labels.' }],
  additional: [
    {
      label: 'Size',
      description: (
        <>
          <Text>
            You can tailor the size of the tag via the <Strong>size</Strong>{' '}
            prop, which accepts either <Strong>standard</Strong> or{' '}
            <Strong>small</Strong>.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                STANDARD
              </Text>
              <Inline space="small" alignY="center">
                <Tag>One</Tag>
                <Tag>Two</Tag>
                <Tag>Three</Tag>
              </Inline>
            </Stack>
            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                SMALL
              </Text>
              <Inline space="xsmall" alignY="center">
                <Tag size="small">One</Tag>
                <Tag size="small">Two</Tag>
                <Tag size="small">Three</Tag>
              </Inline>
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Icons',
      description: (
        <>
          <Text>
            For differentiation or to help communicate the meaning of the tag,
            an <Strong>icon</Strong> can be provided. This will be placed to the
            left of the text.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Tag icon={<IconTag />}>One</Tag>
            <Tag icon={<IconTag />}>Two</Tag>
            <Tag icon={<IconTag />}>Three</Tag>
          </Inline>,
        ),
    },
    {
      label: 'Actionable tags',
      description: (
        <>
          <Text>
            Tags can be made actionable to support either being “cleared” or
            “added”.
          </Text>

          <Text>
            By providing an <Strong>onClear</Strong> handler and a{' '}
            <Strong>clearLabel</Strong>, a{' '}
            <TextLink href="/components/ButtonIcon">ButtonIcon</TextLink>{' '}
            component with a clear icon will be added to the right of the tag
            label.
          </Text>

          <Text>
            Alternatively, providing an <Strong>onAdd</Strong> handler and an{' '}
            <Strong>addLabel</Strong> will insert a{' '}
            <TextLink href="/components/ButtonIcon">ButtonIcon</TextLink>{' '}
            component with an add icon to the right of the tag label.
          </Text>

          <Text tone="promote" id="translations">
            <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
            <Strong>aria-label</Strong> for the button can be customised by
            providing the relevant <Strong>clearLabel</Strong> or{' '}
            <Strong>addLabel</Strong> prop.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, getState, setState }) => {
        const { code, value } = source(
          <>
            {setDefaultState('selected', ['One', 'Two', 'Three'])}

            <Stack space="large">
              <Stack space="small">
                <Text size="xsmall" tone="secondary">
                  ADDABLE
                </Text>
                <Inline space="small" alignY="center">
                  {['One', 'Two', 'Three', 'Four', 'Five']
                    .filter((tag) => !getState('selected').includes(tag))
                    .map((tag) => (
                      <Tag
                        key={tag}
                        onAdd={() =>
                          setState('selected', [...getState('selected'), tag])
                        }
                        addLabel={`Add "${tag}"`}
                      >
                        {tag}
                      </Tag>
                    ))}
                </Inline>
              </Stack>
              <Stack space="small">
                <Text size="xsmall" tone="secondary">
                  CLEARABLE
                </Text>
                <Inline space="small" alignY="center">
                  {getState('selected').map((selectedTag: string) => (
                    <Tag
                      key={selectedTag}
                      onClear={() => {
                        setState(
                          'selected',
                          getState('selected').filter(
                            (tag: string) => tag !== selectedTag,
                          ),
                        );
                      }}
                      clearLabel={`Clear "${selectedTag}"`}
                    >
                      {selectedTag}
                    </Tag>
                  ))}
                </Inline>
              </Stack>
            </Stack>
          </>,
        );

        return {
          code: code.replaceAll(': string', ''),
          value,
        };
      },
    },
    {
      label: 'Interaction patterns',
      description: (
        <>
          <Text>
            Use actionable tags to allow users to input data, make selections,
            define search criteria or filter content. Common patterns include
            selecting from a list or entering text in a form field. Below are
            examples of each.
          </Text>
        </>
      ),
    },
    {
      description: (
        <Stack space="large">
          <Heading level="4">Selecting from a list</Heading>
          <Text>Allows users to select items from a predefined list.</Text>
        </Stack>
      ),
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('selected', [
              'Arabic',
              'English',
              'French',
              'Mandarin',
            ])}
            {setDefaultState('available', [
              'Cantonese',
              'German',
              'Hindi',
              'Indonesian Bahasa',
              'Korean',
              'Maori',
              'Spanish',
              'Urdu',
            ])}
            {/* Create queue of tags to animate */}
            {setDefaultState('newlyAdded', [])}
            {setDefaultState('newlyCleared', [])}
            {/* Define animation CSS */}
            <style>
              {`
@keyframes scaleBounce {
50% { transform: scale(1.1) }
}
.bounce {
animation: 350ms ease-in-out scaleBounce;
}
`}
            </style>

            <Stack space="xlarge">
              <Stack space="small">
                <Text>Available languages</Text>
                {getState('available').length === 0 ? (
                  <Text tone="secondary">No available languages.</Text>
                ) : (
                  <Inline space="xsmall" alignY="center">
                    {getState('available').map((availableTag: string) => (
                      <Box
                        key={availableTag}
                        className={
                          // Add animation class to tag if in the queue
                          getState('newlyCleared').includes(availableTag)
                            ? 'bounce'
                            : undefined
                        }
                      >
                        <Tag
                          key={availableTag}
                          onAdd={() => {
                            setState(
                              'available',
                              getState('available').filter(
                                (tag: string) => tag !== availableTag,
                              ),
                            );

                            setState('selected', [
                              availableTag,
                              ...getState('selected'),
                            ]);

                            // Add tag to animation queue
                            setState('newlyAdded', [
                              availableTag,
                              ...getState('newlyAdded'),
                            ]);
                            // After 400ms (animation is 350ms), remove the tag from the queue
                            setTimeout(() => {
                              setState(
                                'newlyAdded',
                                getState('newlyAdded').filter(
                                  (addedTag: string) =>
                                    addedTag !== availableTag,
                                ),
                              );
                            }, 400);
                          }}
                          addLabel={`Add "${availableTag}"`}
                          id={`add-${availableTag}`}
                        >
                          {availableTag}
                        </Tag>
                      </Box>
                    ))}
                  </Inline>
                )}
              </Stack>

              <Stack space="small">
                <Text>Selected languages</Text>
                {getState('selected').length === 0 ? (
                  <Text tone="secondary">No selected languages.</Text>
                ) : (
                  <Inline space="xsmall" alignY="center">
                    {getState('selected').map((selectedTag: string) => (
                      <Box
                        key={selectedTag}
                        className={
                          // Add animation class to tag if in the queue
                          getState('newlyAdded').includes(selectedTag)
                            ? 'bounce'
                            : undefined
                        }
                      >
                        <Tag
                          onClear={() => {
                            setState(
                              'selected',
                              getState('selected').filter(
                                (tag: string) => tag !== selectedTag,
                              ),
                            );

                            setState('available', [
                              ...getState('available'),
                              selectedTag,
                            ]);

                            // Add tag to animation queue
                            setState('newlyCleared', [
                              selectedTag,
                              ...getState('newlyCleared'),
                            ]);
                            // After 400ms (animation is 350ms), remove the tag from the queue
                            setTimeout(() => {
                              setState(
                                'newlyCleared',
                                getState('newlyCleared').filter(
                                  (clearedTag: string) =>
                                    clearedTag !== selectedTag,
                                ),
                              );
                            }, 400);
                          }}
                          clearLabel={`Clear "${selectedTag}"`}
                          id={`clear-${selectedTag}`}
                        >
                          {selectedTag}
                        </Tag>
                      </Box>
                    ))}
                  </Inline>
                )}
              </Stack>
            </Stack>
          </>,
        ),
    },
    {
      description: (
        <Stack space="large">
          <Heading level="4">Form field input</Heading>
          <Text>
            Allows users to select items from a predefined list, enter their own
            items, or a combination of both. The example below uses an{' '}
            <TextLink href="/components/Autosuggest">Autosuggest</TextLink>{' '}
            field to surface a predefined list, however additional approaches
            can be created using inputs such as{' '}
            <TextLink href="/components/Dropdown">Dropdown</TextLink> or{' '}
            <TextLink href="/components/TextField">TextField</TextLink>.
          </Text>
        </Stack>
      ),
      Example: ({ setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('selected', ['English', 'Indonesian Bahasa'])}
            {setDefaultState(
              'languages',
              [
                'Arabic',
                'Cantonese',
                'English',
                'German',
                'Hindi',
                'Indonesian Bahasa',
                'Korean',
                'Maori',
                'Spanish',
              ].filter((tag) => !getState('selected').includes(tag)),
            )}
            {setDefaultState('language', { text: '' })}

            {/* Create queue of tags to animate */}
            {setDefaultState('newlyAdded', [])}
            {/* Define animation CSS */}
            <style>
              {`
@keyframes scaleBounce {
50% { transform: scale(1.1) }
}
.bounce {
animation: 350ms ease-in-out scaleBounce;
}
`}
            </style>

            <Stack space="small">
              <Autosuggest
                noSuggestionsMessage={
                  getState('selected').length === 9
                    ? 'All languages selected'
                    : 'No matching languages'
                }
                id="Language"
                label="Languages"
                aria-label="Language"
                icon={<IconLanguage />}
                placeholder="Enter a language"
                suggestions={filterSuggestions(
                  getState('languages').map((language: string) => ({
                    text: language,
                    value: language,
                  })),
                )}
                value={getState('language')}
                onChange={(newValue) => {
                  if (getState('languages').includes(newValue.value)) {
                    resetState('language');
                    setState('selected', [
                      ...getState('selected'),
                      newValue.value,
                    ]);

                    // Add tag to animation queue
                    setState('newlyAdded', [
                      newValue.text,
                      ...getState('newlyAdded'),
                    ]);
                    // After 400ms (animation is 350ms), remove the tag from the queue
                    setTimeout(() => {
                      setState(
                        'newlyAdded',
                        getState('newlyAdded').filter(
                          (addedTag: string) => addedTag !== newValue.text,
                        ),
                      );
                    }, 400);
                  } else {
                    setState('language', newValue);
                  }
                }}
              />

              {getState('selected').length === 0 ? (
                <Text tone="secondary">No languages selected.</Text>
              ) : (
                <Inline space="xsmall" alignY="center">
                  {getState('selected').map((selectedTag: string) => (
                    <Box
                      key={selectedTag}
                      className={
                        // Add animation class to tag if in the queue
                        getState('newlyAdded').includes(selectedTag)
                          ? 'bounce'
                          : undefined
                      }
                    >
                      <Tag
                        onClear={() => {
                          setState(
                            'selected',
                            getState('selected').filter(
                              (tag: string) => tag !== selectedTag,
                            ),
                          );
                        }}
                        clearLabel={`Clear "${selectedTag}"`}
                        id={`clear-${selectedTag}`}
                      >
                        {selectedTag}
                      </Tag>
                    </Box>
                  ))}
                </Inline>
              )}
            </Stack>
          </>,
        ),
    },
    dataAttributeDocs({
      code: `
        <Tag
          data={{ testid: 'tag-1' }}
          // => data-testid="tag-1"
        />
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
