import { LinkableHeading } from '@braid-design-system/docs-ui';
import { Stack, Badge } from 'braid-src/lib/components';
import type { ResponsiveSpace } from 'braid-src/lib/css/atoms/atoms';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';

import type { ComponentExample } from '../../types';

import { DocExample } from './DocExample';

export const DocSection = ({
  section,
  heading,
  sectionSpacing,
}: {
  section: ComponentExample;
  heading?: string;
  sectionSpacing: ResponsiveSpace;
}) => (
  <Stack space={sectionSpacing}>
    {heading ? (
      <>
        <LinkableHeading level="2">{heading}</LinkableHeading>
      </>
    ) : null}
    {section.label ? (
      <LinkableHeading
        level="3"
        badge={
          section.deprecated ? (
            <Badge tone="caution">Deprecated</Badge>
          ) : undefined
        }
      >
        {section.label}
      </LinkableHeading>
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
);
