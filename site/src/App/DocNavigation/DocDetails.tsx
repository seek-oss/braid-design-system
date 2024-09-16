import React, { useContext } from 'react';
import {
  Stack,
  List,
  TextLink,
  Secondary,
  Text,
  Badge,
} from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { LinkableHeading } from '@braid-design-system/docs-ui';
import { PageTitle } from '../Seo/PageTitle';
import { DocsContext } from './DocNavigation';
import { DocExample } from './DocExample';

export const DocDetails = () => {
  const { docs, docsName } = useContext(DocsContext);

  return docs ? (
    <>
      <PageTitle title={docsName} />
      <Stack space="xxlarge">
        {'Example' in docs && docs.Example ? (
          <PlayroomStateProvider>
            <DocExample
              id={`${docsName}_example`}
              Example={docs.Example}
              background={docs.examplebackground}
              showCodeByDefault={docs.category === 'Logic'}
            />
          </PlayroomStateProvider>
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
                  <TextLink
                    hitArea="large"
                    href={`/${alt.section || 'components'}/${alt.name}`}
                  >
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
              <LinkableHeading
                level="3"
                badge={
                  example.deprecated ? (
                    <Badge tone="caution">Deprecated</Badge>
                  ) : undefined
                }
              >
                {example.label}
              </LinkableHeading>
            ) : null}
            {example.description ?? null}
            {example.code || example.Example ? (
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
            ) : null}
          </Stack>
        ))}
      </Stack>
    </>
  ) : null;
};
