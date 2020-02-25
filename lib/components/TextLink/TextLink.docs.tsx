import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Actions,
  Box,
  Button,
  Heading,
  IconNewWindow,
  IconChevron,
  Text,
  TextLink,
} from '../';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Text Link',
      Example: () => (
        <Text>
          <TextLink href="" hitArea="large">
            Text link
          </TextLink>
        </Text>
      ),
    },
    {
      label: 'Text Link in a sentence',
      Example: () => (
        <Text>
          The last word of a sentence is a{' '}
          <TextLink href="">text link.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Visited Text Link',
      Example: () => (
        <Text>
          The last word of a sentence is a{' '}
          <TextLink href="" showVisited>
            visited link.
          </TextLink>
        </Text>
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
      label: 'Small Text Link',
      Example: () => (
        <Text size="small">
          The last word of a sentence is a{' '}
          <TextLink href="">text link.</TextLink>
        </Text>
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
      label: 'Heading Level 1 Link',
      Example: () => (
        <Heading level="1">
          The last word of this heading is a <TextLink href="">link.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Heading Level 2 Link',
      Example: () => (
        <Heading level="2">
          The last word of this heading is a <TextLink href="">link.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Heading Level 3 Link',
      Example: () => (
        <Heading level="3">
          The last word of this heading is a <TextLink href="">link.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Heading Level 4 Link',
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
            {[undefined, ...backgrounds.sort()].map((background, i) => (
              <Box key={i} background={background}>
                <Text baseline={false}>
                  {background || 'No background'}{' '}
                  <TextLink href="">
                    with link <IconNewWindow />
                  </TextLink>
                </Text>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
  snippets: [
    {
      name: 'Inline link',
      code: (
        <Text>
          <TextLink href="">Link text</TextLink>
        </Text>
      ),
    },
    {
      name: 'Large hit area',
      code: (
        <Text>
          <TextLink href="" hitArea="large">
            Large hit area
          </TextLink>
        </Text>
      ),
    },
    {
      name: 'Visited',
      code: (
        <Text>
          <TextLink href="" showVisited>
            Visited link
          </TextLink>
        </Text>
      ),
    },
  ],
};

export default docs;
