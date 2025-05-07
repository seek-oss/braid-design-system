import { Stack, Text } from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { useContext } from 'react';

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
          snippets.map(({ group, name, code }) => (
            <Stack space="medium" key={`${group}_${name}`}>
              <Text tone="secondary">{name}</Text>
              <PlayroomStateProvider>
                <DocExample Example={() => code} showCodeByDefault={false} />
              </PlayroomStateProvider>
            </Stack>
          ))}
      </Stack>
    </>
  );
};
