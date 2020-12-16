import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Actions,
  Box,
  Button,
  Inline,
  Stack,
  Strong,
  Text,
  TextLink,
} from '../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Text>
        <TextLink href="#" hitArea="large">
          TextLink
        </TextLink>
      </Text>,
    ),
  alternatives: [
    {
      name: 'TextLinkButton',
      description: 'For a semantic button that looks like a link.',
    },
    {
      name: 'ButtonLink',
      description: 'For a semantic link that looks like a button.',
    },
  ],
  additional: [
    {
      label: 'Note',
      description: (
        <Text>
          This component must be nested within a{' '}
          <TextLink href="/components/Text">Text</TextLink> or{' '}
          <TextLink href="/components/Heading">Heading</TextLink> or{' '}
          <TextLink href="/components/Actions">Actions</TextLink> component.
        </Text>
      ),
    },
    {
      label: 'Visited links',
      description: (
        <Text>
          To communicate a link as being already visited, set the{' '}
          <Strong>showVisited</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Text>
            This sentence contains a{' '}
            <TextLink href="" showVisited>
              visited TextLink.
            </TextLink>
          </Text>,
        ),
    },
    {
      label: 'Design considerations',
      description: (
        <Text>
          By default, a TextLink uses colour and underline on hover to create
          affordance. Optionally you can decrease their visual weight by setting{' '}
          <Strong>weight</Strong> to <Strong>weak</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Text>
            This sentence contains a{' '}
            <TextLink href="#" weight="weak">
              weak TextLink
            </TextLink>
            .
          </Text>,
        ),
    },
    {
      label: 'Development considerations',
      description: (
        <>
          <Text>
            By default renders a native <Strong>a</Strong> element, but this can
            be customised via the <Strong>linkComponent</Strong> prop on{' '}
            <TextLink href="/components/BraidProvider">BraidProvider</TextLink>.
          </Text>
          <Text>
            In addition, when inside of an{' '}
            <TextLink href="/components/Actions">Actions</TextLink> component a
            TextLink uses a different layout and focus style to better align
            with the other <TextLink href="/components/Button">Button</TextLink>{' '}
            and <TextLink href="/components/TextLink">TextLink</TextLink>{' '}
            elements in the container.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Actions>
            <Button>Button</Button>
            <TextLink href="#">TextLink</TextLink>
          </Actions>,
        ),
    },
    {
      label: 'Contextual design',
      description: (
        <>
          <Text>
            To avoid clashing colours, when on a background other than{' '}
            <Strong>card</Strong>, TextLink will default its{' '}
            <Strong>weight</Strong> to <Strong>weak</Strong>. In addition, when
            placed on a dark background, it may be inverted based on the{' '}
            <TextLink href="/components/Text#contrast">
              contrast rules of Text.
            </TextLink>
          </Text>
          <Text>
            This behaviour can be overridden by specifying a{' '}
            <Strong>weight</Strong> of <Strong>regular</Strong>.
          </Text>
        </>
      ),
      background: 'card',
      Example: () =>
        source(
          <Stack space="large">
            <Inline space="small" align="center" alignY="center">
              <Box
                background="promoteLight"
                padding="small"
                borderRadius="standard"
              >
                <Text>
                  <TextLink href="#">promoteLight</TextLink>
                </Text>
              </Box>
              <Box
                background="infoLight"
                padding="small"
                borderRadius="standard"
              >
                <Text>
                  <TextLink href="#">infoLight</TextLink>
                </Text>
              </Box>
              <Box
                background="positiveLight"
                padding="small"
                borderRadius="standard"
              >
                <Text>
                  <TextLink href="#">positiveLight</TextLink>
                </Text>
              </Box>
              <Box
                background="cautionLight"
                padding="small"
                borderRadius="standard"
              >
                <Text>
                  <TextLink href="#">cautionLight</TextLink>
                </Text>
              </Box>
              <Box
                background="criticalLight"
                padding="small"
                borderRadius="standard"
              >
                <Text>
                  <TextLink href="#">criticalLight</TextLink>
                </Text>
              </Box>
            </Inline>

            <Inline space="small" align="center" alignY="center">
              <Box background="promote" padding="small" borderRadius="standard">
                <Text>
                  <TextLink href="#">promote</TextLink>
                </Text>
              </Box>
              <Box background="info" padding="small" borderRadius="standard">
                <Text>
                  <TextLink href="#">info</TextLink>
                </Text>
              </Box>
              <Box
                background="positive"
                padding="small"
                borderRadius="standard"
              >
                <Text>
                  <TextLink href="#">positive</TextLink>
                </Text>
              </Box>
              <Box background="caution" padding="small" borderRadius="standard">
                <Text>
                  <TextLink href="#">caution</TextLink>
                </Text>
              </Box>
              <Box
                background="critical"
                padding="small"
                borderRadius="standard"
              >
                <Text>
                  <TextLink href="#">critical</TextLink>
                </Text>
              </Box>
            </Inline>
          </Stack>,
        ),
    },
  ],
};

export default docs;
