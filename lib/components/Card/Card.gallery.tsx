import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Card, Text, Stack, Tiles } from '../';
import source from '../../utils/source.macro';
import { Placeholder } from '../../playroom/components';

export const galleryItems: ComponentExample[] = [
  {
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
        <Tiles space="large" columns={[1, 2]}>
          <Stack space="small">
            <Text size="xsmall" tone="secondary">
              INFO
            </Text>
            <Card tone="info">
              <Placeholder height={100} />
            </Card>
          </Stack>

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
    label: 'Radius',
    Example: () =>
      source(
        <Tiles space="large" columns={[1, 2]}>
          <Stack space="small">
            <Text size="xsmall" tone="secondary">
              NONE
            </Text>
            <Card radius="none">
              <Placeholder height={100} />
            </Card>
          </Stack>

          <Stack space="small">
            <Text size="xsmall" tone="secondary">
              STANDARD
            </Text>
            <Card radius="standard">
              <Placeholder height={100} />
            </Card>
          </Stack>
        </Tiles>,
      ),
  },
];
