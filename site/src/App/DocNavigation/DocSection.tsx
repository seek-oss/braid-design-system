import { TitleLink } from '@braid-design-system/docs-ui';
import {
  Stack,
  Badge,
  Heading,
  Bleed,
  HiddenVisually,
} from 'braid-src/lib/components';
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
}) => {
  const { deprecated } = section;
  return (
    <Stack space="small">
      {deprecated ? (
        <Bleed left="xsmall">
          <Badge tone="caution">Deprecated</Badge>
        </Bleed>
      ) : undefined}
      <Stack space={headingSpacing}>
        {section.label ? (
          <Heading level="3">
            <TitleLink label={section.label} copyable>
              {section.label}
              {deprecated ? (
                <HiddenVisually>, deprecated</HiddenVisually>
              ) : null}
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
};
