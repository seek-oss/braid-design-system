import source from '@braid-design-system/source.macro';

import type { TemplateSnippets } from '../../../../components/private/Snippets';
import {
  Actions,
  Box,
  Button,
  Card,
  Heading,
  PageBlock,
  Stack,
  Text,
} from '../../../../playroom/components';

export const snippets: TemplateSnippets = [
  {
    group: 'Sections',
    name: 'Card list',
    code: source(
      <PageBlock width="medium">
        <Stack space="medium">
          <Heading level="3">Heading (optional)</Heading>

          <Stack component="ul" space="small">
            {[
              {
                title: 'Item 1',
                subTitle: 'Ea proident nulla veniam',
                description: 'Lorem ipsum',
                date: '2d ago',
              },
              {
                title: 'Item 2',
                subTitle: 'Occaecat ad sunt elit',
                description: 'Consectetur adipiscing',
                date: '6d ago',
              },
              {
                title: 'Item 3',
                subTitle: 'Commodo exercitation nisi laborum',
                description: 'Vel odio',
                date: '3w ago',
              },
            ].map((item) => (
              <Box component="li" key={item.title}>
                <Card component="article">
                  <Stack space="medium">
                    <Stack space="small">
                      <Heading level="4">{item.title}</Heading>
                      <Text>{item.subTitle}</Text>
                    </Stack>
                    <Text>{item.description}</Text>
                    <Text tone="secondary">{item.date}</Text>
                  </Stack>
                </Card>
              </Box>
            ))}
          </Stack>

          <Actions>
            <Button>Action (optional)</Button>
          </Actions>
        </Stack>
      </PageBlock>,
    ),
  },
];
