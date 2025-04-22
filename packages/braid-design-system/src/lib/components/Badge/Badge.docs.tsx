import source from '@braid-design-system/source.macro';
import { Fragment } from 'react';
import type { ComponentDocs } from 'site/types';

import {
  Badge,
  Box,
  Inline,
  Text,
  TextLink,
  Strong,
  Stack,
  Columns,
  Column,
  Toggle,
  ButtonIcon,
  IconOverflow,
  Divider,
} from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Stack space="medium" align="center">
        <Inline space="medium" collapseBelow="desktop" align="center">
          <Badge tone="positive">Positive</Badge>
          <Badge tone="promote">Promote</Badge>
          <Badge tone="info">Info</Badge>
          <Badge tone="neutral">Neutral</Badge>
          <Badge tone="caution">Caution</Badge>
          <Badge tone="critical">Critical</Badge>
        </Inline>
        <Inline space="medium" collapseBelow="desktop" align="center">
          <Badge weight="strong" tone="positive">
            Positive
          </Badge>
          <Badge weight="strong" tone="promote">
            Promote
          </Badge>
          <Badge weight="strong" tone="info">
            Info
          </Badge>
          <Badge weight="strong" tone="neutral">
            Neutral
          </Badge>
          <Badge weight="strong" tone="caution">
            Caution
          </Badge>
          <Badge weight="strong" tone="critical">
            Critical
          </Badge>
        </Inline>
      </Stack>,
    ),
  alternatives: [
    {
      name: 'Tag',
      description: 'For user-provided content.',
    },
  ],
  additional: [
    {
      label: 'Visual Weight',
      description: (
        <Text>
          For greater contrast, you can set the <Strong>weight</Strong> prop to{' '}
          <Strong>strong</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="medium" align="center">
            <Badge weight="strong" tone="positive">
              Positive
            </Badge>
            <Badge weight="strong" tone="promote">
              Promote
            </Badge>
            <Badge weight="strong" tone="info">
              Info
            </Badge>
            <Badge weight="strong" tone="neutral">
              Neutral
            </Badge>
            <Badge weight="strong" tone="caution">
              Caution
            </Badge>
            <Badge weight="strong" tone="critical">
              Critical
            </Badge>
          </Inline>,
        ),
    },
    {
      label: 'Inlining with text',
      description: (
        <Text>
          When aligning badges inline alongside flowing text, it is recommended
          to place the badge inside the{' '}
          <TextLink href="/component/Text">Text</TextLink> (or{' '}
          <TextLink href="/component/Heading">Heading</TextLink>) component.
        </Text>
      ),
      Example: () =>
        source(
          <Text>
            Text content{' '}
            <Badge tone="positive" weight="strong">
              Badge
            </Badge>
          </Text>,
        ),
    },
    {
      label: 'Vertical bleed',
      description: (
        <Fragment>
          <Text>
            With the <Strong>bleedY</Strong> prop, you can allow the background
            colour to bleed out into the surrounding layout.
          </Text>
          <Text>
            For example, if we consider aligning a badge alongside other content
            in a <TextLink href="/components/Columns">Columns</TextLink> layout.
            With the badge being taller than the neighbouring content, it adds
            undesired white space to each row. By applying the{' '}
            <Strong>bleedY</Strong> prop, the space between rows remains
            declarative and consistent regardless of the presence of the badge.
          </Text>
        </Fragment>
      ),
      code: false,
      Example: ({ setDefaultState, getState, toggleState }) =>
        source(
          <>
            {setDefaultState('bleed', true)}

            <Stack space="large">
              <Toggle
                label="Bleed"
                align="right"
                on={getState('bleed')}
                onChange={() => toggleState('bleed')}
              />
              <Stack space="medium">
                <Divider />
                {new Array(3).fill('').map((_, index) => (
                  <Fragment key={index}>
                    <Box boxShadow="borderCriticalLight">
                      <Columns space="medium" alignY="center">
                        <Column width="content">
                          <Badge tone="positive" bleedY={getState('bleed')}>
                            Badge
                          </Badge>
                        </Column>
                        <Column>
                          <Text>
                            <TextLink href="">Title link</TextLink>
                          </Text>
                        </Column>
                        <Column width="content">
                          <ButtonIcon
                            id="icon"
                            variant="transparent"
                            size="small"
                            label="Options"
                            icon={<IconOverflow />}
                          />
                        </Column>
                      </Columns>
                    </Box>
                    <Divider />
                  </Fragment>
                ))}
              </Stack>
            </Stack>
          </>,
        ),
    },
    dataAttributeDocs({
      code: `
        <Badge
          data={{ testid: 'badge-1' }}
          // => data-testid="badge-1"
        >
          ...
        </Badge>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
