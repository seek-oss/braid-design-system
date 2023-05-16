import React, { type ReactNode } from 'react';
import { BraidProvider, Stack } from 'braid-src/lib/components';
import { useSourceFromExample } from '../useSourceFromExample/useSourceFromExample';
import type { ComponentExample } from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';
import docsTheme from 'braid-src/entries/themes/docs';

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
    <BraidProvider styleBody={false} theme={docsTheme}>
      <Stack space="xxsmall">
        {value ? (
          <ThemedExample background={background}>
            <Container>{value}</Container>
          </ThemedExample>
        ) : null}
        {codeAsString ? (
          <Code collapsedByDefault={!showCodeByDefault} playroom={playroom}>
            {codeAsString}
          </Code>
        ) : null}
      </Stack>
    </BraidProvider>
  );
};
