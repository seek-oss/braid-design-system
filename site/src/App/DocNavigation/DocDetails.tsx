import { CategoryHeading, TitleLink } from '@braid-design-system/docs-ui';
import {
  Box,
  Stack,
  List,
  TextLink,
  Secondary,
  Text,
  Heading,
} from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { useContext, useMemo } from 'react';

import { PageTitle } from '../Seo/PageTitle';

import { DocExample } from './DocExample';
import { DocsContext } from './DocNavigation';
import { DocSection } from './DocSection';
import { Toc, type TocSection } from './DocToC';

import * as styles from './DocDetails.css';

const headingSpacing = 'large';
const innerSectionSpacing = 'xxlarge';
const outerSectionSpacing = 'xxlarge';

const getSectionHeading = (sectionKey: string): string => {
  switch (sectionKey) {
    case 'appearance':
      return 'Appearance';
    case 'layout':
      return 'Layout';
    case 'interaction':
      return 'Interaction';
    case 'bestPractices':
      return 'Best practices';
    default:
      return sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);
  }
};

const slugify = (string: string) =>
  string
    .replace(/[\s?]/g, '-')
    .replace('--', '-')
    .replace(/-$/, '')
    .toLowerCase();

const hasContent = (example: {
  description?: unknown;
  code?: unknown;
  Example?: unknown;
}) => Boolean(example.description || example.code || example.Example);

export const DocDetails = () => {
  const { docs, docsName } = useContext(DocsContext);

  const hasBestPractices = Boolean(
    docs?.docSections?.bestPractices?.some(hasContent),
  );

  /*
    Build the ToC sections
      - Accessibility
      - Each docSection and their children. When bestPractices is present,
        alternatives is nested as a child within it.
      - Each additional section. Additional is kept
        as for now as it's where most content sits currently,
        but will likely be deprecated in the future as we
        align content to the docSection structure.
      - Alternatives (top-level when no bestPractices section, otherwise nested within it)

  */
  const tocSections = useMemo(() => {
    if (!docs) {
      return [];
    }

    const sections: TocSection[] = [];

    if ('accessibility' in docs && docs.accessibility) {
      sections.push({
        id: 'accessibility',
        label: 'Accessibility',
        href: '#accessibility',
      });
    }

    if (docs.docSections) {
      Object.entries(docs.docSections).forEach(
        ([sectionKey, docSectionChildren]) => {
          const hasAnyContent = docSectionChildren.some(hasContent);
          if (!hasAnyContent) {
            return;
          }

          const heading = getSectionHeading(sectionKey);
          const sectionId = slugify(sectionKey);

          const children = docSectionChildren
            .filter((child: { label?: string }): child is { label: string } =>
              Boolean(child.label),
            )
            .map((child: { label: string }) => {
              const childId = slugify(child.label);
              return {
                id: childId,
                label: child.label,
                href: `#${childId}`,
              };
            });

          if (sectionKey === 'bestPractices') {
            const bestPracticesChildren: TocSection[] = [...children];

            if ('alternatives' in docs && docs.alternatives.length > 0) {
              bestPracticesChildren.push({
                id: 'alternatives',
                label: 'Alternatives',
                href: '#alternatives',
              });
            }

            sections.push({
              id: sectionId,
              label: heading,
              href: `#${sectionId}`,
              children:
                bestPracticesChildren.length > 0
                  ? bestPracticesChildren
                  : undefined,
            });
          } else {
            sections.push({
              id: sectionId,
              label: heading,
              href: `#${sectionId}`,
              children: children.length > 0 ? children : undefined,
            });
          }
        },
      );
    }

    docs.additional?.forEach((child) => {
      if (child.label) {
        const id = slugify(child.label);
        sections.push({
          id,
          label: child.label,
          href: `#${id}`,
        });
      }
    });

    if (
      !hasBestPractices &&
      'alternatives' in docs &&
      docs.alternatives.length > 0
    ) {
      sections.push({
        id: 'alternatives',
        label: 'Alternatives',
        href: '#alternatives',
      });
    }

    return sections;
  }, [docs, hasBestPractices]);

  const handleTocClick = (_event: React.MouseEvent, id: string) => {
    try {
      window.history.pushState(null, '', `#${id}`);
    } catch {}
  };

  return docs ? (
    <>
      <PageTitle title={docsName} />
      <Box display="flex" gap="xlarge">
        <Box flexGrow={1}>
          <Stack space="xxlarge">
            <Stack space={outerSectionSpacing}>
              {docs.description ? (
                <Stack space={innerSectionSpacing}>{docs.description}</Stack>
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

              {'accessibility' in docs && docs.accessibility ? (
                <Stack space={headingSpacing}>
                  <Heading level="3">
                    <TitleLink>Accessibility</TitleLink>
                  </Heading>
                  {docs.accessibility}
                </Stack>
              ) : null}

              {docs.docSections &&
                Object.entries(docs.docSections)
                  .filter(([, docSectionChildren]) =>
                    docSectionChildren.some(hasContent),
                  )
                  .map(([sectionKey, docSectionChildren]) => {
                    const heading = getSectionHeading(sectionKey);
                    return (
                      <Stack key={sectionKey} space="medium">
                        <CategoryHeading component="h2">
                          <TitleLink copyable label={heading}>
                            {heading}
                          </TitleLink>
                        </CategoryHeading>

                        <Stack space={innerSectionSpacing}>
                          {docSectionChildren.map(
                            (example: { label?: string }, index: number) => (
                              <DocSection
                                key={index}
                                section={example}
                                headingSpacing={headingSpacing}
                              />
                            ),
                          )}
                          {sectionKey === 'bestPractices' &&
                          'alternatives' in docs &&
                          docs.alternatives.length > 0 ? (
                            <Stack space={headingSpacing}>
                              <Heading level="3">
                                <TitleLink label="Alternatives">
                                  Alternatives
                                </TitleLink>
                              </Heading>

                              <List space="medium">
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
                      </Stack>
                    );
                  })}

              {(docs.additional || []).map((example, index) => (
                <DocSection
                  key={index}
                  section={example}
                  headingSpacing={headingSpacing}
                />
              ))}

              {'alternatives' in docs &&
              !hasBestPractices &&
              docs.alternatives.length > 0 ? (
                <Stack space={headingSpacing}>
                  <Heading level="3">
                    <TitleLink label="Alternatives">Alternatives</TitleLink>
                  </Heading>
                  <List space="medium">
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
          </Stack>
        </Box>
        <Box className={styles.toc}>
          <Toc sections={tocSections} onTocClick={handleTocClick} />
        </Box>
      </Box>
    </>
  ) : null;
};
