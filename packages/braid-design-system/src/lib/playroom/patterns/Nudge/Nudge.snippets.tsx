import source from '@braid-design-system/source.macro';

import type { PatternSnippets } from '../../../components/private/Snippets';
import {
  Box,
  Button,
  ButtonIcon,
  Column,
  Columns,
  Heading,
  IconClear,
  Inline,
  Placeholder,
  Stack,
  Text,
  TextLinkButton,
} from '../../components';

export const snippets: PatternSnippets = [
  {
    group: 'Patterns',
    name: 'Nudge',
    code: ({ responsiveValue }) =>
      source(
        <Box background="formAccentSoft" padding="gutter" borderRadius="large">
          <Columns reverse space="gutter" collapseBelow="tablet">
            <Column width="content">
              <Columns space="xsmall">
                <Column>
                  <Box
                    background="surface"
                    borderRadius="full"
                    padding={{ mobile: 'small', tablet: 'medium' }}
                    display="inlineBlock"
                  >
                    <Placeholder
                      shape="round"
                      label="illo"
                      width={responsiveValue({
                        mobile: '80px',
                        tablet: '96px',
                      })}
                      height={responsiveValue({
                        mobile: '80px',
                        tablet: '96px',
                      })}
                    />
                  </Box>
                </Column>
                <Column width="content">
                  <ButtonIcon
                    variant="transparent"
                    icon={<IconClear />}
                    label="Close"
                    bleed
                  />
                </Column>
              </Columns>
            </Column>
            <Column>
              <Stack space="medium">
                <Heading level="4">Create a nudge today</Heading>
                <Text>
                  Use a nudge to drive specific behaviour that leads to better
                  outcomes for customers or SEEK.
                </Text>
                <Inline space="xsmall">
                  <Button>Create nudge</Button>
                  <Button variant="transparent">Learn more</Button>
                </Inline>
              </Stack>
            </Column>
          </Columns>
        </Box>,
      ),
  },
  {
    group: 'Patterns',
    name: 'Nudge (small)',
    code: ({ responsiveValue }) =>
      source(
        <Box background="formAccentSoft" padding="gutter" borderRadius="large">
          <Columns reverse space="gutter" collapseBelow="tablet">
            <Column width="content">
              <Columns space="xsmall">
                <Column>
                  <Box
                    background="surface"
                    borderRadius="full"
                    padding={{ mobile: 'xsmall', tablet: 'small' }}
                    display="inlineBlock"
                  >
                    <Placeholder
                      shape="round"
                      label="illo"
                      width={responsiveValue({
                        mobile: '72px',
                        tablet: '80px',
                      })}
                      height={responsiveValue({
                        mobile: '72px',
                        tablet: '80px',
                      })}
                    />
                  </Box>
                </Column>
                <Column width="content">
                  <ButtonIcon
                    variant="transparent"
                    icon={<IconClear />}
                    label="Close"
                    bleed
                  />
                </Column>
              </Columns>
            </Column>
            <Column>
              <Stack space="small">
                <Text size="large" weight="strong">
                  Create a small nudge
                </Text>
                <Text size="small">
                  Use a nudge to drive specific behaviour that leads to better
                  outcomes for customers or SEEK.
                </Text>
                <Inline space="none">
                  <Button size="small">Create nudge</Button>
                </Inline>
              </Stack>
            </Column>
          </Columns>
        </Box>,
      ),
  },
  {
    group: 'Patterns',
    name: 'Nudge (xsmall)',
    code: () =>
      source(
        <Box background="formAccentSoft" padding="gutter" borderRadius="large">
          <Columns reverse space="medium" collapseBelow="tablet">
            <Column width="content">
              <Columns space="xsmall">
                <Column>
                  <Box
                    background="surface"
                    borderRadius="full"
                    padding={{ mobile: 'xxsmall', tablet: 'xsmall' }}
                    display="inlineBlock"
                  >
                    <Placeholder
                      shape="round"
                      label="illo"
                      width="72px"
                      height="72px"
                    />
                  </Box>
                </Column>
                <Column width="content">
                  <ButtonIcon
                    variant="transparent"
                    icon={<IconClear />}
                    label="Close"
                    bleed
                  />
                </Column>
              </Columns>
            </Column>
            <Column>
              <Stack space="small">
                <Text weight="strong">Create an xsmall nudge</Text>
                <Text size="small">
                  Use a nudge to drive specific behaviour that leads to better
                  outcomes for customers or SEEK.
                </Text>
                <Text size="small">
                  <TextLinkButton>Create nudge</TextLinkButton>
                </Text>
              </Stack>
            </Column>
          </Columns>
        </Box>,
      ),
  },
];
