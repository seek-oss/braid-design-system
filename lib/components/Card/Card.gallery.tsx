import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Card, Text, Stack, Tiles } from '../';
import source from '../../utils/source.macro';
import { Placeholder } from '../../playroom/components';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    Example: () =>
      source(
        <Card>
          <Placeholder height={100} />
        </Card>,
      ),
  },
  {
    label: 'Tones',
    Example: () =>
      source(
        <Tiles space="large" columns={{ mobile: 1, tablet: 2 }}>
          <Stack space="small">
            <Text size="xsmall" tone="secondary">
              PROMOTE
            </Text>
            <Card tone="promote">
              <Placeholder height={100} />
            </Card>
          </Stack>

          <Stack space="small">
            <Text size="xsmall" tone="secondary">
              FORMACCENT
            </Text>
            <Card tone="formAccent">
              <Placeholder height={100} />
            </Card>
          </Stack>
        </Tiles>,
      ),
  },
  {
    label: 'Rounded corners',
    Example: () =>
      source(
        <Tiles space="large" columns={{ mobile: 1, tablet: 2 }}>
          <Stack space="small">
            <Text size="xsmall" tone="secondary">
              DEFAULT
            </Text>
            <Card>
              <Placeholder height={100} />
            </Card>
          </Stack>

          <Stack space="small">
            <Text size="xsmall" tone="secondary">
              ROUNDED
            </Text>
            <Card rounded>
              <Placeholder height={100} />
            </Card>
          </Stack>
        </Tiles>,
      ),
  },
];
