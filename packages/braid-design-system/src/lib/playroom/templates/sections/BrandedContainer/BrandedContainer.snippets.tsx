import source from '@braid-design-system/source.macro';

import type { Snippets } from '../../../../components/private/Snippets';
import {
  Box,
  ContentBlock,
  Heading,
  PageBlock,
  Stack,
  Strong,
  Text,
} from '../../../../playroom/components';

export const snippets: Snippets = [
  {
    group: 'Sections',
    name: 'Branded container',
    description: 'Full bleed',
    code: source(
      <Box background="brand" paddingY="xlarge">
        <PageBlock width="medium">
          <Stack space="large">
            <Heading level="2">Heading</Heading>

            <Text>
              Combines a <Strong>Heading level 2</Strong> with a{' '}
              <Strong>large Stack</Strong> spacing content groups within the
              section.
              <br />
              Uses a <Strong>PageBlock</Strong> inside the section to maintain
              screen gutters on small screens.
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis cursus quam nec volutpat. In hac habitasse platea
              dictumst. Praesent egestas erat id mollis imperdiet. Vestibulum
              non commodo nisi, sed tempus magna. Duis a malesuada diam.
            </Text>
          </Stack>
        </PageBlock>
      </Box>,
    ),
  },
  {
    group: 'Sections',
    name: 'Branded container',
    description: 'Rounded from desktop (full bleed below)',
    code: source(
      <Box paddingX={{ desktop: 'gutter' }}>
        <ContentBlock width="large">
          <Box
            background="brand"
            paddingY="xlarge"
            borderRadius={{ desktop: 'xlarge' }}
          >
            <PageBlock width="medium">
              <Stack space="large">
                <Heading level="2">Heading</Heading>

                <Text>
                  Combines a <Strong>Heading level 2</Strong> with a{' '}
                  <Strong>large Stack</Strong> spacing content groups within the
                  section.
                  <br />
                  Uses a <Strong>PageBlock</Strong> inside the section to
                  maintain screen gutters on small screens.
                </Text>

                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  convallis cursus quam nec volutpat. In hac habitasse platea
                  dictumst. Praesent egestas erat id mollis imperdiet.
                  Vestibulum non commodo nisi, sed tempus magna. Duis a
                  malesuada diam.
                </Text>
              </Stack>
            </PageBlock>
          </Box>
        </ContentBlock>
      </Box>,
    ),
  },
];
