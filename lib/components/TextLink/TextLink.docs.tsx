import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { TextLink } from './TextLink';
import { Text } from '../Text/Text';
import { Heading } from '../Heading/Heading';
import { Actions } from '../Actions/Actions';
import { Button } from '../Button/Button';
import { IconChevron } from '../icons';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';
import { Box } from '../Box/Box';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Text Link',
      Example: () => (
        <Text>
          The last word of a sentence is a{' '}
          <TextLink href="">text link.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Block Text Link',
      Example: () => (
        <TextLink href="">
          <Text>Text Link</Text>
        </TextLink>
      ),
    },
    {
      label: 'Text Link inside Actions',
      Example: () => (
        <Actions>
          <Button>Button</Button>
          <TextLink href="">Text Link</TextLink>
        </Actions>
      ),
    },
    {
      label: 'Large Text Link',
      Example: () => (
        <Text size="large">
          The last word of a sentence is a{' '}
          <TextLink href="">text link.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Large Block Text Link',
      Example: () => (
        <TextLink href="">
          <Text size="large">Text Link</Text>
        </TextLink>
      ),
    },
    {
      label: 'Small Text Link',
      Example: () => (
        <Text size="small">
          The last word of a sentence is a{' '}
          <TextLink href="">text link.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Small Block Text Link',
      Example: () => (
        <TextLink href="">
          <Text size="small">Text Link</Text>
        </TextLink>
      ),
    },
    {
      label: 'Xsmall Text Link',
      Example: () => (
        <Text size="xsmall">
          The last word of a sentence is a{' '}
          <TextLink href="">text link.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Xsmall Block Text Link',
      Example: () => (
        <TextLink href="">
          <Text size="xsmall">Text Link</Text>
        </TextLink>
      ),
    },
    {
      label: 'Heading Level 1 Link',
      Example: () => (
        <TextLink href="">
          <Heading level="1">Heading link.</Heading>
        </TextLink>
      ),
    },
    {
      label: 'Heading Level 1 Link (Inline)',
      Example: () => (
        <Heading level="1">
          The last word of this heading is a <TextLink href="">link.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Heading Level 2 Link',
      Example: () => (
        <TextLink href="">
          <Heading level="2">Heading link.</Heading>
        </TextLink>
      ),
    },
    {
      label: 'Heading Level 2 Link (Inline)',
      Example: () => (
        <Heading level="2">
          The last word of this heading is a <TextLink href="">link.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Heading Level 3 Link',
      Example: () => (
        <TextLink href="">
          <Heading level="3">Heading link.</Heading>
        </TextLink>
      ),
    },
    {
      label: 'Heading Level 3 Link (Inline)',
      Example: () => (
        <Heading level="3">
          The last word of this heading is a <TextLink href="">link.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Heading Level 4 Link',
      Example: () => (
        <TextLink href="">
          <Heading level="4">Heading link.</Heading>
        </TextLink>
      ),
    },
    {
      label: 'Heading Level 4 Link (Inline)',
      Example: () => (
        <Heading level="4">
          The last word of this heading is a <TextLink href="">link.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Text Link with icon',
      docsSite: false,
      Example: () => (
        <Text>
          The last word of a sentence is a{' '}
          <TextLink href="">
            text link
            <IconChevron direction="right" />
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'Block Text Link with icon',
      docsSite: false,
      Example: () => (
        <TextLink href="">
          <Text>
            Text Link <IconChevron direction="right" />
          </Text>
        </TextLink>
      ),
    },
    {
      label: 'Text Link inside Actions with icon',
      docsSite: false,
      Example: () => (
        <Actions>
          <Button>Button</Button>
          <TextLink href="">
            Text Link <IconChevron direction="right" />
          </TextLink>
        </Actions>
      ),
    },
    {
      label: 'TextLink Contrast',
      docsSite: false,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map(background => (
              <Box background={background} key={background}>
                <Text baseline={false}>
                  {background} <TextLink href="">with link</TextLink>
                </Text>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
};

export default docs;
