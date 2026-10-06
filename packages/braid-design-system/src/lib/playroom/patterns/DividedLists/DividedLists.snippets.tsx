import source from '@braid-design-system/source.macro';

import type { PatternSnippets } from '../../../components/private/Snippets';
import {
  ButtonIcon,
  Column,
  Columns,
  Divider,
  Heading,
  IconEdit,
  Stack,
  Text,
} from '../../components';

export const snippets: PatternSnippets = [
  {
    group: 'Patterns',
    name: 'Divided list',
    code: () =>
      source(
        <Stack space="xlarge">
          <Heading level="2">Heading</Heading>
          <Stack space="large">
            {[
              {
                title: 'Strong text lorem ipsum',
                description: 'Secondary text dolor sit amet',
              },
              {
                title: 'Strong text',
                description: 'Secondary text consectetur adipiscing',
              },
              {
                title: 'Strong text ipsum',
                description: 'Secondary text vel odio',
              },
            ].map((item) => (
              <Stack key={item.title} space="large">
                <Columns space="small">
                  <Column>
                    <Stack space="small">
                      <Text weight="strong">{item.title}</Text>
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
              </Stack>
            ))}
          </Stack>
        </Stack>,
      ),
  },
];
