import React, { useContext } from 'react';
import {
  Stack,
  BraidProvider,
  List,
  TextLink,
  Secondary,
  Text,
} from 'braid-design-system/lib/components';
import { PlayroomStateProvider } from 'braid-design-system/lib/playroom/playroomState';
import { LinkableHeading } from '../LinkableHeading/LinkableHeading';
import { PageTitle } from '../Seo/PageTitle';
import { useThemeSettings } from '../ThemeSetting';
import { DocsContext } from './DocNavigation';
import { DocExample } from './DocExample';

export const DocDetails = () => {
  const { theme } = useThemeSettings();
  const { docs, docsName } = useContext(DocsContext);

  return docs ? (
    <>
      <PageTitle title={docsName} />
      <Stack space="xxlarge">
        {'Example' in docs && docs.Example ? (
          <BraidProvider styleBody={false} theme={theme}>
            <PlayroomStateProvider>
              <DocExample
                id={`${docsName}_example`}
                Example={docs.Example}
                showCodeByDefault={docs.category === 'Logic'}
              />
            </PlayroomStateProvider>
          </BraidProvider>
        ) : null}

        {docs.description ? (
          <Stack space="large">{docs.description}</Stack>
        ) : null}

        {'alternatives' in docs && docs.alternatives.length > 0 ? (
          <Stack space="large">
            <LinkableHeading level="3">Alternatives</LinkableHeading>
            <List space="large">
              {docs.alternatives.map((alt) => (
                <Text key={`${alt.name}`}>
                  <TextLink href={`/components/${alt.name}`}>
                    {alt.name}
                  </TextLink>{' '}
                  <Secondary>— {alt.description}</Secondary>
                </Text>
              ))}
            </List>
          </Stack>
        ) : null}

        {'accessibility' in docs && docs.accessibility ? (
          <Stack space="large">
            <LinkableHeading level="3">Accessibility</LinkableHeading>
            {docs.accessibility}
          </Stack>
        ) : null}

        {(docs.additional || []).map((example, index) => (
          <Stack space="large" key={index}>
            {example.label ? (
              <LinkableHeading level="3">{example.label}</LinkableHeading>
            ) : null}
            {example.description ?? null}
            {example.code || example.Example ? (
              <BraidProvider styleBody={false} theme={theme}>
                <PlayroomStateProvider>
                  <DocExample
                    id={String(index)}
                    code={example.code}
                    Example={example.Example}
                    Container={example.Container}
                    background={example.background}
                    showCodeByDefault={
                      example.showCodeByDefault || example.Example === undefined
                    }
                    playroom={example.playroom}
                  />
                </PlayroomStateProvider>
              </BraidProvider>
            ) : null}
          </Stack>
        ))}
      </Stack>
    </>
  ) : null;
};
