import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import {
  Loader,
  Columns,
  Column,
  Stack,
  Inline,
  Text,
  TextLink,
  Strong,
  Button,
} from '../';
import source from '../../utils/source.macro';
import { animationDelayValueInMs } from './Loader.css';
import { IconLanguage } from '../icons';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () => source(<Loader />),
  accessibility: (
    <>
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices/#alert">
          WAI-ARIA Alert Pattern
        </TextLink>
        , announcing its presence using an{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria/#aria-live">
          assertive
        </TextLink>{' '}
        level of importance, ensuring the same level of feedback is provided to
        screen reader users.
      </Text>

      <Text tone="promote" id="translations">
        <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
        announced message can be customised by providing the{' '}
        <Strong>aria-label</Strong> prop.
      </Text>
    </>
  ),
  alternatives: [],
  additional: [
    {
      label: 'Sizes',
      description: (
        <Text>
          Loader sizes are designed to match the cap-height of the corresponding{' '}
          <TextLink href="/components/TextLink">Text</TextLink> size. This is
          particularly useful if you need to show a loading indicator while a
          piece of text is loading.
        </Text>
      ),
      Example: () =>
        source(
          <Columns space="xlarge" collapseBelow="tablet">
            <Column>
              <Stack space="medium" align="center">
                <Text size="large" weight="medium" tone="secondary">
                  Large
                </Text>
                <Loader size="large" />
              </Stack>
            </Column>

            <Column>
              <Stack space="medium" align="center">
                <Text size="standard" weight="medium" tone="secondary">
                  Standard
                </Text>
                <Loader size="standard" />
              </Stack>
            </Column>

            <Column>
              <Stack space="medium" align="center">
                <Text size="small" weight="medium" tone="secondary">
                  Small
                </Text>
                <Loader size="small" />
              </Stack>
            </Column>

            <Column>
              <Stack space="medium" align="center">
                <Text size="xsmall" weight="medium" tone="secondary">
                  Xsmall
                </Text>
                <Loader size="xsmall" />
              </Stack>
            </Column>
          </Columns>,
        ),
    },
    {
      label: 'Delayed visibility',
      description: (
        <Text>
          If content loads quickly, users are likely to see a quick flash of the
          loading indicator. In order to reduce this visual noise, you can opt
          to delay the visibility of the loader by {animationDelayValueInMs}
          ms via the <Strong>delayVisibility</Strong> prop.
        </Text>
      ),
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('counter', 0)}

            <Stack space="large" dividers>
              <Loader delayVisibility key={getState('counter')} />

              <Inline space="medium">
                <Button
                  onClick={() => setState('counter', getState('counter') + 1)}
                >
                  Replay
                </Button>
              </Inline>
            </Stack>
          </>,
        ),
    },
  ],
};

export default docs;
