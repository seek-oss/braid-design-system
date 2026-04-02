import source from '@braid-design-system/source.macro';

import type { Snippets } from '../../../../components/private/Snippets';
import {
  Actions,
  Button,
  ButtonIcon,
  Column,
  Columns,
  Divider,
  Heading,
  IconEdit,
  PageBlock,
  Stack,
  Text,
} from '../../../../playroom/components';

export const snippets: Snippets = [
  {
    group: 'Sections',
    name: 'Divided list',
    code: source(
      <PageBlock width="medium">
        <Stack space="medium">
          <Heading level="3">Heading (optional)</Heading>

          {[
            {
              title: 'Item 1',
              description: 'Lorem ipsum',
            },
            {
              title: 'Item 2',
              description: 'Consectetur adipiscing',
            },
            {
              title: 'Item 3',
              description: 'Vel odio',
            },
          ].map((item) => (
            <>
              <Columns space="small">
                <Column>
                  <Stack space="small">
                    <Text component="h4" weight="strong">
                      {item.title}
                    </Text>
                    <Text tone="secondary">{item.description}</Text>
                  </Stack>
                </Column>
                <Column width="content">
                  <ButtonIcon
                    variant="transparent"
                    icon={<IconEdit />}
                    label="Edit"
                  />
                </Column>
              </Columns>
              <Divider />
            </>
          ))}

          <Actions>
            <Button>Action (optional)</Button>
          </Actions>
        </Stack>
      </PageBlock>,
    ),
  },
];
