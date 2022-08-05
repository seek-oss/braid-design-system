import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import source from '../../utils/source.macro';
import { Badge, Card, Inline, Heading, Text, TextLink, Strong } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Card rounded>
        <Inline space="medium" align="center">
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
        </Inline>
      </Card>,
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
      background: 'surface',
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
      label: 'Vertical bleed',
      description: (
        <Fragment>
          <Text>
            With the <Strong>bleedY</Strong> prop, you can allow the background
            colour to bleed out into the surrounding layout.
          </Text>
          <Text>
            For example, we can align a badge to a{' '}
            <TextLink href="/components/Heading">Heading</TextLink> element
            using an <TextLink href="/components/Inline">Inline</TextLink>, even
            though the badge is actually taller than the heading. If we didn’t
            use the <Strong>bleedY</Strong> prop in this case, the badge would
            introduce unwanted space above and below the heading.
          </Text>
        </Fragment>
      ),
      background: 'surface',
      Example: () =>
        source(
          <Inline space="xsmall" alignY="center">
            <Heading level="4">Heading</Heading>
            <Badge tone="positive" bleedY>
              New
            </Badge>
          </Inline>,
        ),
    },
  ],
};

export default docs;
