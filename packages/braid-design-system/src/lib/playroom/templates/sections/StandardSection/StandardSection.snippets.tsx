import source from '@braid-design-system/source.macro';

import type { TemplateSnippets } from '../../../../components/private/Snippets';
import {
  Actions,
  Button,
  Heading,
  PageBlock,
  Stack,
  Strong,
  Text,
} from '../../../../playroom/components';

export const snippets: TemplateSnippets = [
  {
    group: 'Sections',
    name: 'Standard Section',
    code: source(
      <PageBlock width="medium">
        <Stack space="medium">
          <Stack space="small">
            <Heading level="3">Heading</Heading>

            <Text tone="secondary">
              Subtitle (optional, consider using secondary tone to avoid
              clashing with content below)
            </Text>
          </Stack>

          <Text>
            Combines a <Strong>Heading level 3</Strong> with a{' '}
            <Strong>medium Stack</Strong> spacing content groups within the
            section.
          </Text>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis cursus quam nec volutpat. In hac habitasse platea
            dictumst. Praesent egestas erat id mollis imperdiet. Vestibulum non
            commodo nisi, sed tempus magna. Duis a malesuada diam.
          </Text>

          <Actions>
            <Button>Action (optional)</Button>
          </Actions>
        </Stack>
      </PageBlock>,
    ),
  },
];
