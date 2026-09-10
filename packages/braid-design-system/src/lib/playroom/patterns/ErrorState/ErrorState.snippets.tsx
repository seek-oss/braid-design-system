import source from '@braid-design-system/source.macro';

import type { PatternSnippets } from '../../../components/private/Snippets';
import {
  Actions,
  Button,
  Card,
  ContentBlock,
  Heading,
  Notice,
  Placeholder,
  Stack,
  Text,
  TextLink,
  Tiles,
} from '../../components';

export const snippets: PatternSnippets = [
  {
    group: 'Patterns',
    name: 'Error state (full page)',
    code: ({ responsiveValue }) =>
      source(
        <ContentBlock width="small">
          <Stack align="center" space={{ mobile: 'medium', desktop: 'large' }}>
            <Placeholder
              shape="round"
              width={responsiveValue({
                mobile: '96px',
                tablet: '128px',
                desktop: '192px',
              })}
              height={responsiveValue({
                mobile: '96px',
                tablet: '128px',
                desktop: '192px',
              })}
            />
            <Stack space="medium" align="center">
              <Heading level="2" weight="weak" align="center">
                How an error might look
              </Heading>
              <Text tone="secondary" align="center">
                This is a center aligned example with a short summary. You can
                use a button or <TextLink href="#">a TextLink</TextLink> to suit
                your needs.
              </Text>
              <Actions>
                <Button variant="ghost">Button</Button>
              </Actions>
            </Stack>
          </Stack>
        </ContentBlock>,
      ),
  },
  {
    group: 'Patterns',
    name: 'Error state (inline)',
    code: () =>
      source(
        <Tiles columns={{ mobile: 1, tablet: 3 }} space="small">
          <Card height="full">
            <Stack space="large">
              <Heading level="4">Widget title</Heading>
              <Text>
                Widget content lorem ipsum dolor sit amet, consectetur
                adipiscing elit amet.
              </Text>
            </Stack>
          </Card>
          <Card height="full">
            <Stack space="large">
              <Heading level="4">Widget title</Heading>
              <Notice tone="critical">
                <Text>
                  We can&rsquo;t load this data right now. Please check back
                  later.
                </Text>
              </Notice>
            </Stack>
          </Card>
          <Card height="full">
            <Stack space="large">
              <Heading level="4">Widget title</Heading>
              <Text>
                Widget content lorem ipsum dolor sit amet, consectetur
                adipiscing elit amet.
              </Text>
            </Stack>
          </Card>
        </Tiles>,
      ),
  },
];
