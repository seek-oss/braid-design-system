import { LinkableHeading } from '@braid-design-system/docs-ui';
import {
  Stack,
  List,
  TextLink,
  Secondary,
  Text,
  Badge,
} from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { useContext } from 'react';

import { PageTitle } from '../Seo/PageTitle';

import { DocExample } from './DocExample';
import { DocsContext } from './DocNavigation';

export const DocDetails = () => {
  const { docs, docsName } = useContext(DocsContext);
  const sectionSpacing = 'large';

  return docs ? (
    <>
      <PageTitle title={docsName} />
      <Stack space="xxlarge">
        <Stack space={sectionSpacing}>
          {docs.description ? (
            <Stack space={sectionSpacing}>{docs.description}</Stack>
          ) : null}

          {'Example' in docs && docs.Example ? (
            <PlayroomStateProvider>
              <DocExample
                Example={docs.Example}
                background={docs.examplebackground}
                showCodeByDefault={docs.category === 'Logic'}
              />
            </PlayroomStateProvider>
          ) : null}
        </Stack>

        {'accessibility' in docs && docs.accessibility ? (
          <Stack space={sectionSpacing}>
            <LinkableHeading level="3">Accessibility</LinkableHeading>
            {docs.accessibility}
          </Stack>
        ) : null}

        {(docs.additional || []).map((example, index) => (
          <Stack space={sectionSpacing} key={index}>
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

        {'alternatives' in docs && docs.alternatives.length > 0 ? (
          <Stack space={sectionSpacing}>
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
      </Stack>
    </>
  ) : null;
};
