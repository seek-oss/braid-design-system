import { Stack, Text } from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { Fragment, useContext } from 'react';

import { PageTitle } from '../Seo/PageTitle';

import { DocExample } from './DocExample';
import { DocsContext } from './DocNavigation';

export const DocSnippets = () => {
  const { docsName, snippets } = useContext(DocsContext);

  return (
    <>
      <PageTitle title={`${docsName} Snippets`} />

      <Stack space="xxlarge">
        {snippets &&
          snippets.map(({ group, name, code, Container = Fragment }) => (
            <Stack space="medium" key={`${group}_${name}`}>
              <Text tone="secondary">{name}</Text>
              <PlayroomStateProvider>
                <DocExample
                  Example={() => ({
                    code: code.code,
                    value: <Container>{code.value}</Container>,
                  })}
                  showCodeByDefault={false}
                />
              </PlayroomStateProvider>
            </Stack>
          ))}
      </Stack>
    </>
  );
};
