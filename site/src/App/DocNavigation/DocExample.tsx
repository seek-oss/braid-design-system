import { Stack } from 'braid-src/lib/components';
import type { ReactNode } from 'react';

import type { ComponentExample } from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';
import { useSourceFromExample } from '../useSourceFromExample/useSourceFromExample';

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);

interface DocExampleProps {
  Example?: ComponentExample['Example'];
  code?: ComponentExample['code'];
  Container?: ComponentExample['Container'];
  background?: ComponentExample['background'];
  showCodeByDefault?: ComponentExample['showCodeByDefault'];
  playroom?: ComponentExample['playroom'];
}
export const DocExample = ({
  Example,
  code,
  Container = DefaultContainer,
  background,
  showCodeByDefault = false,
  playroom,
}: DocExampleProps) => {
  const { code: codeAsString, value } = useSourceFromExample({
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
