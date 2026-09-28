import source from '@braid-design-system/source.macro';

import type { TemplateSnippets } from '../../../../components/private/Snippets';
import {
  Actions,
  Box,
  Button,
  Card,
  Heading,
  IconBookmark,
  IconNote,
  MenuItem,
  OverflowMenu,
  PageBlock,
  Spread,
  Stack,
  Text,
} from '../../../../playroom/components';

export const snippets: TemplateSnippets = [
  {
    group: 'Sections',
    name: 'Card list',
    code: () =>
      source(
        <PageBlock width="medium">
          <Stack space="medium">
            <Heading level="3">Heading (optional)</Heading>
            <Stack component="ul" space="small">
              {[1, 2, 3].map((item) => (
                <Box component="li" key={item}>
                  <Card component="article">
                    <Stack space="medium">
                      <Stack space="small">
                        <Spread space="small">
                          <Heading level="4">Heading level 4</Heading>
                          <OverflowMenu label="Options">
                            <MenuItem icon={<IconNote />}>Menu item 1</MenuItem>
                            <MenuItem icon={<IconBookmark />}>
                              Menu item 2
                            </MenuItem>
                          </OverflowMenu>
                        </Spread>
                        <Text>Standard text</Text>
                      </Stack>
                      <Text>
                        Standard text lorem ipsum dolor sit amet consectetur
                        adipiscing elit. Vivamus iaculis ut neque sit amet
                        egestas.
                      </Text>
                      <Text tone="secondary">Standard, secondary text</Text>
                      <Actions>
                        <Button>Button</Button>
                      </Actions>
                    </Stack>
                  </Card>
                </Box>
              ))}
            </Stack>
          </Stack>
        </PageBlock>,
      ),
  },
];
