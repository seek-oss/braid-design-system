import React, { Fragment } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Box, Button, IconNewWindow, Stack, Text } from '../../components';
import { Actions } from './Actions';
import { TextLink } from '../TextLink/TextLink';
import { backgrounds } from '../../utils/docsHelpers';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Standard Actions',
      Example: () => (
        <Actions>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button variant="transparent">Button 3</Button>
        </Actions>
      ),
    },
    {
      label: 'Small Actions',
      Example: () => (
        <Actions size="small">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button variant="transparent">Button 3</Button>
        </Actions>
      ),
    },
    {
      label: 'Standard with TextLink (Deprecated)',
      Example: () => (
        <Actions size="small">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>
      ),
    },
    {
      label: 'Small with TextLink (Deprecated)',
      Example: () => (
        <Actions size="small">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>
      ),
    },
    {
      label: 'Actions Contrast (Deprecated)',
      Example: () => (
        <Fragment>
          {backgrounds.sort().map((background, i) => (
            <Box key={i} background={background} padding="xsmall">
              <Stack space="xsmall">
                <Text size="small">{background}</Text>
                <Actions>
                  <Button tone="brandAccent">Solid</Button>
                  <TextLink href="#">
                    Transparent <IconNewWindow />
                  </TextLink>
                </Actions>
              </Stack>
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
