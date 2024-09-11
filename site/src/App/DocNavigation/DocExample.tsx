import React, { type ReactNode } from 'react';
import { Stack } from 'braid-src/lib/components';
import { useSourceFromExample } from '../useSourceFromExample/useSourceFromExample';
import type { ComponentExample } from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);

interface DocExampleProps {
  id: string;
  Example?: ComponentExample['Example'];
  code?: ComponentExample['code'];
  Container?: ComponentExample['Container'];
  background?: ComponentExample['background'];
  showCodeByDefault?: ComponentExample['showCodeByDefault'];
  playroom?: ComponentExample['playroom'];
}
export const DocExample = ({
  id,
  Example,
  code,
  Container = DefaultContainer,
  background,
  showCodeByDefault = false,
  playroom,
}: DocExampleProps) => {
  const { code: codeAsString, value } = useSourceFromExample(id, {
    Example,
    code,
  });

  return (
    <Stack space={background === false ? 'medium' : 'xxsmall'}>
      {value ? (
        <ThemedExample
          background={background || undefined}
          transparent={background === false}
        >
          <Container>{value}</Container>
        </ThemedExample>
      ) : null}
      {code !== false && codeAsString ? (
        <Code collapsedByDefault={!showCodeByDefault} playroom={playroom}>
          {codeAsString}
        </Code>
      ) : null}
    </Stack>
  );
};
