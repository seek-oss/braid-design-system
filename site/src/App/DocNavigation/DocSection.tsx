import { TitleLink } from '@braid-design-system/docs-ui';
import { Stack, Badge, Heading, Bleed } from 'braid-src/lib/components';
import type { ResponsiveSpace } from 'braid-src/lib/css/atoms/atoms';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';

import type { ComponentExample } from '../../types';

import { DocExample } from './DocExample';

export const DocSection = ({
  section,
  headingSpacing = 'medium',
}: {
  section: ComponentExample;
  headingSpacing?: ResponsiveSpace;
}) => (
  <Stack space="small">
    {section.deprecated ? (
      <Bleed left="xsmall">
        <Badge
          tone="caution"
          id={section.label ? `deprecated-${section.label}` : undefined}
          aria-hidden="true"
        >
          Deprecated
        </Badge>
      </Bleed>
    ) : undefined}
    <Stack space={headingSpacing}>
      {section.label ? (
        <Heading
          level="3"
          aria-describedby={
            section.deprecated ? `deprecated-${section.label}` : undefined
          }
        >
          <TitleLink label={section.label} copyable>
            {section.label}
          </TitleLink>
        </Heading>
      ) : null}
      {section.description ?? null}
      {section.code || section.Example ? (
        <PlayroomStateProvider>
          <DocExample
            code={section.code}
            Example={section.Example}
            Container={section.Container}
            background={section.background}
            showCodeByDefault={
              section.showCodeByDefault || section.Example === undefined
            }
            playroom={section.playroom}
          />
        </PlayroomStateProvider>
      ) : null}
    </Stack>
  </Stack>
);
