import React, { useContext } from 'react';
import {
  Stack,
  BraidProvider,
  List,
  TextLink,
  Secondary,
  Text,
  Columns,
  Column,
  Box,
  ButtonLink,
  Inline,
} from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { LinkableHeading, slugify } from '../LinkableHeading/LinkableHeading';
import { PageTitle } from '../Seo/PageTitle';
import { useThemeSettings } from '../ThemeSetting';
import { DocsContext } from './DocNavigation';
import { DocExample } from './DocExample';

import { leftAlignedAnchors } from './DocDetails.css';

const SubNavButton = ({ text, href }: { text: string; href: string }) => (
  // Disgusting hack
  <Box className={leftAlignedAnchors}>
    <Inline space="medium" alignY="center">
      <ButtonLink tone="neutral" size="small" variant="transparent" href={href}>
        {text}
      </ButtonLink>
    </Inline>
  </Box>
);

export const DocDetails = () => {
  const { theme } = useThemeSettings();
  const { docs, docsName } = useContext(DocsContext);

  if (!docs) {
    return null;
  }

  const hasAlternatives =
    'alternatives' in docs && docs.alternatives.length > 0;

  const hasAccessibility = 'accessibility' in docs && docs.accessibility;
  return (
    <Columns space="xlarge" collapseBelow="wide">
      <Column>
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

          {hasAlternatives ? (
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

          {hasAccessibility ? (
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
                        example.showCodeByDefault ||
                        example.Example === undefined
                      }
                      playroom={example.playroom}
                    />
                  </PlayroomStateProvider>
                </BraidProvider>
              ) : null}
            </Stack>
          ))}
        </Stack>
      </Column>

      <Column width="1/4">
        <Box style={{ position: 'sticky', top: 32 }} id="stickybox">
          <Stack space="none">
            {hasAlternatives ? (
              <SubNavButton text="Alternatives" href="#alternatives" />
            ) : null}

            {hasAccessibility ? (
              <SubNavButton text="Accessibility" href="#accessibility" />
            ) : null}

            {(docs.additional ?? []).map((example) => {
              if (!example.label) {
                return null;
              }

              const labelSlug = slugify(example.label);

              return (
                <SubNavButton text={example.label} href={`#${labelSlug}`} />
              );
            })}
          </Stack>
        </Box>
      </Column>
    </Columns>
  );
};
