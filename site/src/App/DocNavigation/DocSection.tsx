import { TitleLink } from '@braid-design-system/docs-ui';
import { Stack, Badge, Heading, Box } from 'braid-src/lib/components';
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
  <Stack space={headingSpacing}>
    {section.label ? (
      <TitleLink label={section.label}>
        <Heading level="3">
          {section.label}
          {section.deprecated ? (
            <Box component="span" marginLeft="small">
              <Badge tone="caution">Deprecated</Badge>
            </Box>
          ) : undefined}
        </Heading>
      </TitleLink>
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
