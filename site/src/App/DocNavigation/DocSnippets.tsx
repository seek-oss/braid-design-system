import { Stack, Text, BraidProvider } from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { useContext } from 'react';

import { PageTitle } from '../Seo/PageTitle';
import { useThemeSettings } from '../ThemeSetting';

import { DocExample } from './DocExample';
import { DocsContext } from './DocNavigation';

export const DocSnippets = () => {
  const { theme } = useThemeSettings();
  const { docsName, snippets } = useContext(DocsContext);

  return (
    <>
      <PageTitle title={`${docsName} Snippets`} />

      <Stack space="xxlarge">
        {snippets &&
          snippets.map(({ group, name, code }) => (
            <Stack space="medium" key={`${group}_${name}`}>
              <Text tone="secondary">{name}</Text>
              <BraidProvider styleBody={false} theme={theme}>
                <PlayroomStateProvider>
                  <DocExample
                    id={`$group}_${name}`}
                    Example={() => code}
                    showCodeByDefault={false}
                  />
                </PlayroomStateProvider>
              </BraidProvider>
            </Stack>
          ))}
      </Stack>
    </>
  );
};
