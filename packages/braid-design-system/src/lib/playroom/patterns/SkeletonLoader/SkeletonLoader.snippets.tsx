import source from '@braid-design-system/source.macro';

import type { PatternSnippets } from '../../../components/private/Snippets';
import { Box, Card, Stack } from '../../components';

export const snippets: PatternSnippets = [
  {
    group: 'Patterns',
    name: 'Skeleton loader',
    code: ({ vars }) =>
      source(
        <Card>
          <Stack space="medium">
            <Stack space="xsmall">
              <Box
                background="neutralLight"
                borderRadius="standard"
                style={{
                  height: vars.space.xxlarge,
                  width: vars.space.xxxlarge,
                }}
              />
              <Box
                background="neutralLight"
                borderRadius="full"
                style={{ height: vars.space.medium, width: '60%' }}
              />
            </Stack>
            <Stack space="xsmall">
              <Box
                background="neutralLight"
                borderRadius="full"
                style={{ height: vars.space.xsmall, width: '90%' }}
              />
              <Box
                background="neutralLight"
                borderRadius="full"
                style={{ height: vars.space.xsmall, width: '90%' }}
              />
              <Box
                background="neutralLight"
                borderRadius="full"
                style={{ height: vars.space.xsmall, width: '60%' }}
              />
            </Stack>
            <Box
              background="neutralLight"
              borderRadius="standard"
              style={{ height: '40px', width: vars.space.xxxlarge }}
            />
          </Stack>
        </Card>,
      ),
  },
];
