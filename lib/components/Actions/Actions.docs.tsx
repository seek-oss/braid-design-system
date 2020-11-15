import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Actions,
  Button,
  TextLink,
  Box,
  Stack,
  Text,
  IconNewWindow,
} from '../';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320, 768],
  description: (
    <Stack space="large">
      <Text>Typically used for actions at the end of forms.</Text>
      <Text>
        Should only contain{' '}
        <TextLink href="/components/Button">Button,</TextLink>{' '}
        <TextLink href="/components/ButtonLink">ButtonLink,</TextLink>{' '}
        <TextLink href="/components/TextLink">TextLink</TextLink> and{' '}
        <TextLink href="/components/TextLinkButton">TextLinkButton</TextLink>{' '}
        elements.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Actions with Strong Button and TextLink',
      Example: () => (
        <Actions>
          <Button weight="strong">Strong</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>
      ),
    },
    {
      label: 'Actions with Regular Button and Weak Button',
      Example: () => (
        <Actions>
          <Button weight="regular">Regular</Button>
          <Button weight="weak">Weak</Button>
        </Actions>
      ),
    },
    {
      label: 'Actions with Weak Buttons and Regular Button',
      Example: () => (
        <Actions>
          <Button weight="weak">Weak</Button>
          <Button weight="weak">Weak</Button>
          <Button weight="regular">Regular</Button>
        </Actions>
      ),
    },
    {
      label: 'Actions Contrast',
      docsSite: false,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map((background, i) => (
              <Box key={i} background={background} padding="xsmall">
                <Stack space="xsmall">
                  <Text size="small">{background}</Text>
                  <Actions>
                    <Button weight="strong">Strong</Button>
                    <TextLink href="#">
                      TextLink <IconNewWindow />
                    </TextLink>
                  </Actions>
                </Stack>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
};

export default docs;
