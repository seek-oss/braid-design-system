import { LinkableHeading } from '@braid-design-system/docs-ui';
import {
  Box,
  Stack,
  List,
  TextLink,
  Secondary,
  Text,
} from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { useCallback, useContext, useMemo } from 'react';

import { PageTitle } from '../Seo/PageTitle';

import { DocExample } from './DocExample';
import { DocsContext } from './DocNavigation';
import { DocSection } from './DocSection';
import { type TocSection, Toc } from './DocToc';

import * as styles from './DocDetails.css';

const headingSpacing = 'medium';
const innerSectionSpacing = 'medium';
const outerSectionSpacing = 'xxlarge';

const getSectionHeading = (sectionKey: string): string => {
  switch (sectionKey) {
    case 'appearance':
      return 'Appearance';
    case 'states':
      return 'States';
    case 'layout':
      return 'Layout';
    case 'usage':
      return 'Usage';
    default:
      return sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);
  }
};

export const DocDetails = () => {
  const { docs, docsName } = useContext(DocsContext);

  const slugify = useCallback(
    (string: string) =>
      string
        .replace(/[\s?]/g, '-')
        .replace('--', '-')
        .replace(/-$/, '')
        .toLowerCase(),
    [],
  );

  const hasContent = useCallback(
    (example: { description?: unknown; code?: unknown; Example?: unknown }) =>
      Boolean(example.description || example.code || example.Example),
    [],
  );

  const tocSections = useMemo<readonly TocSection[]>(() => {
    if (!docs) {
      return [];
    }

    const sections: TocSection[] = [];

    // Add Alternatives section
    if ('alternatives' in docs && docs.alternatives.length > 0) {
      sections.push({
        id: 'alternatives',
        label: 'Alternatives',
        href: '#alternatives',
      });
    }

    // Add Accessibility section
    if ('accessibility' in docs && docs.accessibility) {
      sections.push({
        id: 'accessibility',
        label: 'Accessibility',
        href: '#accessibility',
      });
    }

    // Add doc sections (appearance, states, layout, usage)
    if (docs.docSections) {
      Object.entries(docs.docSections).forEach(
        ([sectionKey, docSectionChildren]) => {
          // Skip sections where all children have no content
          const hasAnyContent = docSectionChildren.some(hasContent);
          if (!hasAnyContent) {
            return;
          }

          const heading = getSectionHeading(sectionKey);

          const children = docSectionChildren
            .filter(
              (example: { label?: string }): example is { label: string } =>
                Boolean(example.label),
            )
            .map((example: { label: string }) => {
              const exampleId = slugify(example.label);
              return {
                id: exampleId,
                label: example.label,
                href: `#${exampleId}`,
              };
            });

          sections.push({
            id: sectionKey,
            label: heading,
            href: `#${sectionKey}`,
            children: children.length > 0 ? children : undefined,
          });
        },
      );
    }

    // Add additional items
    docs.additional?.forEach((example) => {
      if (example.label) {
        const id = slugify(example.label);
        sections.push({
          id,
          label: example.label,
          href: `#${id}`,
        });
      }
    });

    return sections;
  }, [docs, slugify, hasContent]);

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

              {'alternatives' in docs ? (
                <Stack space={innerSectionSpacing}>
                  <LinkableHeading level="3">Alternatives</LinkableHeading>
                  <List space={innerSectionSpacing}>
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

              {'accessibility' in docs ? (
                <Stack space={innerSectionSpacing}>
                  <LinkableHeading level="3">Accessibility</LinkableHeading>
                  {docs.accessibility}
                </Stack>
              ) : null}

              {docs.docSections &&
                Object.entries(docs.docSections)
                  .filter(([, docSectionChildren]) =>
                    docSectionChildren.some(hasContent),
                  )
                  .map(([sectionKey, docSectionChildren]) => (
                    <Stack key={sectionKey} space={outerSectionSpacing}>
                      <LinkableHeading level="2" label={sectionKey}>
                        {getSectionHeading(sectionKey)}
                      </LinkableHeading>
                      {docSectionChildren.map(
                        (example: { label?: string }, index: number) => (
                          <DocSection
                            key={index}
                            section={example}
                            headingSpacing={headingSpacing}
                          />
                        ),
                      )}
                    </Stack>
                  ))}

              {(docs.additional || []).map((example, index) => (
                <DocSection
                  key={index}
                  section={example}
                  headingSpacing={headingSpacing}
                />
              ))}
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
