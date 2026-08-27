import source from '@braid-design-system/source.macro';
import {
  Actions,
  Button,
  ButtonIcon,
  CheckboxStandalone,
  Column,
  Columns,
  Dialog,
  Divider,
  Heading,
  IconDelete,
  IconDownload,
  IconSort,
  Inline,
  List,
  Stack,
  Strong,
  Text,
  TextLink,
} from 'braid-design-system';

import type { PatternDocs } from '../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      Allows users to select multiple items in a list and apply the same action
      to all of them.
    </Text>
  ),
  alternatives: [
    {
      name: 'Checkbox',
      description: 'To allow users to make multiple selections',
    },
    {
      name: 'Card',
      description:
        'To provide a summary and entry point to more detailed information',
    },
    {
      name: 'divided-list',
      section: 'patterns',
      description:
        'To display a group of related items consecutively in an organised way',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Anatomy',
        description: (
          <>
            <Text>
              Bulk actions consist of standalone{' '}
              <TextLink href="/components/Checkbox#standalone">
                Checkboxes
              </TextLink>{' '}
              with{' '}
              <TextLink href="/components/Checkbox#tri-state-support">
                tri-state support
              </TextLink>
              , paired with relevant CTAs most likely in the form of{' '}
              <TextLink href="/components/Button">Buttons</TextLink> or{' '}
              <TextLink href="/components/ButtonIcon">ButtonIcons</TextLink>.
            </Text>
            <Text>An isolated example of bulk actions:</Text>
          </>
        ),
        Example: ({ setDefaultState, getState, setState, toggleState }) =>
          source(
            <>
              {setDefaultState('one', false)}
              {setDefaultState('two', false)}
              {setDefaultState('three', false)}
              <Stack space="large">
                <Inline space="medium" alignY="center">
                  <CheckboxStandalone
                    aria-label="Select all"
                    checked={[
                      getState('one'),
                      getState('two'),
                      getState('three'),
                    ]}
                    onChange={({ currentTarget: { checked } }) => {
                      setState('one', checked);
                      setState('two', checked);
                      setState('three', checked);
                    }}
                  />
                  {getState('one') || getState('two') || getState('three') ? (
                    <Inline space="large">
                      <ButtonIcon
                        bleed
                        icon={<IconDownload />}
                        label="Action 1"
                      />
                      <ButtonIcon
                        bleed
                        icon={<IconDelete />}
                        label="Action 2"
                      />
                    </Inline>
                  ) : null}
                </Inline>
                <Columns space="small">
                  <Column width="content">
                    <Text>
                      <CheckboxStandalone
                        aria-label="one"
                        checked={getState('one')}
                        onChange={() => toggleState('one')}
                      />
                    </Text>
                  </Column>
                  <Column>
                    <Text>Item 1</Text>
                  </Column>
                </Columns>
                <Columns space="small">
                  <Column width="content">
                    <Text>
                      <CheckboxStandalone
                        aria-label="two"
                        checked={getState('two')}
                        onChange={() => toggleState('two')}
                      />
                    </Text>
                  </Column>
                  <Column>
                    <Text>Item 2</Text>
                  </Column>
                </Columns>
                <Columns space="small">
                  <Column width="content">
                    <Text>
                      <CheckboxStandalone
                        aria-label="three"
                        checked={getState('three')}
                        onChange={() => toggleState('three')}
                      />
                    </Text>
                  </Column>
                  <Column>
                    <Text>Item 3</Text>
                  </Column>
                </Columns>
              </Stack>
            </>,
          ),
      },
      {
        description: (
          <Text>
            An example in the context of a{' '}
            <TextLink href="/patterns/divided-list">Divided List</TextLink>:
          </Text>
        ),
        Example: ({
          setDefaultState,
          getState,
          setState,
          toggleState,
          showToast,
          responsiveValue,
        }) =>
          source(
            <>
              {setDefaultState('one', false)}
              {setDefaultState('two', false)}
              {setDefaultState('three', false)}
              {setDefaultState('dialog', false)}
              <Stack space="large">
                <Stack space="small">
                  <Heading level="2">List heading</Heading>
                  <Text tone="secondary">3 lorem ipsum</Text>
                </Stack>
                <Stack space="small">
                  <Columns space="none" alignY="center">
                    <Column>
                      <Inline space="medium" alignY="center">
                        <CheckboxStandalone
                          aria-label="Select all"
                          checked={[
                            getState('one'),
                            getState('two'),
                            getState('three'),
                          ]}
                          onChange={({ currentTarget: { checked } }) => {
                            setState('one', checked);
                            setState('two', checked);
                            setState('three', checked);
                          }}
                        />
                        {getState('one') ||
                        getState('two') ||
                        getState('three') ? (
                          <Inline space="large">
                            <ButtonIcon
                              bleed
                              icon={<IconDownload />}
                              label="Download selected"
                              onClick={() =>
                                showToast({
                                  key: '1',
                                  message: 'Positive toast',
                                  tone: 'positive',
                                })
                              }
                            />
                            <ButtonIcon
                              bleed
                              icon={<IconDelete />}
                              label="Delete selected"
                              onClick={() => toggleState('dialog')}
                            />
                          </Inline>
                        ) : null}
                      </Inline>
                    </Column>
                    <Column>
                      <Inline space="none" align="right">
                        <ButtonIcon
                          bleed={responsiveValue({
                            mobile: false,
                            tablet: true,
                          })}
                          variant="soft"
                          icon={<IconSort />}
                          label="Sort"
                        />
                      </Inline>
                    </Column>
                  </Columns>
                  <Stack space="large">
                    <Divider />
                    <Columns space="small">
                      <Column width="content">
                        <Text>
                          <CheckboxStandalone
                            aria-label="one"
                            checked={getState('one')}
                            onChange={() => toggleState('one')}
                          />
                        </Text>
                      </Column>
                      <Column>
                        <Stack space="small">
                          <Text weight="strong">List item 1</Text>
                          <Text tone="secondary">A line of secondary text</Text>
                        </Stack>
                      </Column>
                      <Column width="content">
                        <Inline space="medium">
                          <ButtonIcon
                            variant="transparent"
                            icon={<IconDownload />}
                            label="Download"
                            onClick={() =>
                              showToast({
                                key: '3',
                                message: 'Positive toast',
                                tone: 'positive',
                              })
                            }
                          />
                          <ButtonIcon
                            variant="transparent"
                            icon={<IconDelete />}
                            label="Delete"
                            onClick={() => toggleState('dialog')}
                          />
                        </Inline>
                      </Column>
                    </Columns>
                    <Divider />
                    <Columns space="small">
                      <Column width="content">
                        <Text>
                          <CheckboxStandalone
                            aria-label="two"
                            checked={getState('two')}
                            onChange={() => toggleState('two')}
                          />
                        </Text>
                      </Column>
                      <Column>
                        <Stack space="small">
                          <Text weight="strong">List item 2</Text>
                          <Text tone="secondary">A line of secondary text</Text>
                        </Stack>
                      </Column>
                      <Column width="content">
                        <Inline space="medium">
                          <ButtonIcon
                            variant="transparent"
                            icon={<IconDownload />}
                            label="Download"
                            onClick={() =>
                              showToast({
                                key: '4',
                                message: 'Positive toast',
                                tone: 'positive',
                              })
                            }
                          />
                          <ButtonIcon
                            variant="transparent"
                            icon={<IconDelete />}
                            label="Delete"
                            onClick={() => toggleState('dialog')}
                          />
                        </Inline>
                      </Column>
                    </Columns>
                    <Divider />
                    <Columns space="small">
                      <Column width="content">
                        <Text>
                          <CheckboxStandalone
                            aria-label="three"
                            checked={getState('three')}
                            onChange={() => toggleState('three')}
                          />
                        </Text>
                      </Column>
                      <Column>
                        <Stack space="small">
                          <Text weight="strong">List item 3</Text>
                          <Text tone="secondary">A line of secondary text</Text>
                        </Stack>
                      </Column>
                      <Column width="content">
                        <Inline space="medium">
                          <ButtonIcon
                            variant="transparent"
                            icon={<IconDownload />}
                            label="Download"
                            onClick={() =>
                              showToast({
                                key: '5',
                                message: 'Positive toast',
                                tone: 'positive',
                              })
                            }
                          />
                          <ButtonIcon
                            variant="transparent"
                            icon={<IconDelete />}
                            label="Delete"
                            onClick={() => toggleState('dialog')}
                          />
                        </Inline>
                      </Column>
                    </Columns>
                    <Divider />
                  </Stack>
                </Stack>
              </Stack>
              <Dialog
                title="Dialog title"
                open={getState('dialog')}
                onClose={() => toggleState('dialog')}
              >
                <Stack space="large">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit?
                  </Text>
                  <Actions>
                    <Button
                      tone="critical"
                      variant="solid"
                      icon={<IconDelete />}
                      onClick={() => {
                        toggleState('dialog');
                        showToast({
                          tone: 'positive',
                          message: 'Positive toast',
                        });
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="transparent"
                      onClick={() => toggleState('dialog')}
                    >
                      Cancel
                    </Button>
                  </Actions>
                </Stack>
              </Dialog>
            </>,
          ),
      },
    ],
    bestPractices: [
      {
        label: 'General best practice',
        description: (
          <List space="large">
            <Text>
              Use a <Strong>CheckboxStandalone</Strong> for selection and
              provide each with an <Strong>aria-label</Strong> or{' '}
              <Strong>aria-labelledby</Strong> property to maintain
              accessibility.
            </Text>
            <Text>Align checkboxes to the left of the list.</Text>
            <Text>
              Hide bulk actions and surface them once a selection has been made.
            </Text>
            <Text>
              Avoid surfacing bulk actions when no selection is made. This keeps
              the UI clean by reducing unnecessary clutter.
            </Text>
            <Text>
              If an action requires the user to confirm, such as a destructive
              action like “Delete”, consider surfacing this within a{' '}
              <TextLink href="/components/Dialog">Dialog</TextLink>.
            </Text>
            <Text>
              Once an action has been completed, consider surfacing a{' '}
              <TextLink href="/components/useToast">Toast</TextLink>{' '}
              confirmation message.
            </Text>
          </List>
        ),
      },
    ],
  },
};

export default docs;
