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
