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
import { Fragment, useContext, useEffect, useMemo, useState } from 'react';

import { PageTitle } from '../Seo/PageTitle';

import { DocExample } from './DocExample';
import { DocsContext } from './DocNavigation';
import { DocSection } from './DocSection';
import { type TocItem, TocItemLink } from './DocToC';

import * as styles from './DocDetails.css';

const sectionSpacing = 'medium';
const activeViewPortDistance = 50;

const useScrollSpy = (anchorIds: string[], updateUrl = true) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!anchorIds.length) {
      return;
    }

    const handleScroll = () => {
      const anchors: HTMLElement[] = anchorIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));

      const withinRange = anchors
        .map((el) => {
          const top = el.getBoundingClientRect().top;
          return { el, top };
        })
        .filter(({ top }) => top >= 0 && top <= activeViewPortDistance);

      if (withinRange.length > 0) {
        const newActiveId = withinRange[0].el.id;
        setActiveId(newActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [anchorIds, updateUrl]);

  return activeId;
};

export const DocDetails = () => {
  const { docs, docsName } = useContext(DocsContext);

  const slugify = (string: string) =>
    string
      .replace(/[\s?]/g, '-')
      .replace('--', '-')
      .replace(/-$/, '')
      .toLowerCase();

  const hasAlternatives =
    docs && 'alternatives' in docs && docs.alternatives.length > 0;
  const hasAccessibility =
    docs && 'accessibility' in docs && docs.accessibility;

  const { additionalItems } = useMemo<{
    additionalItems: readonly TocItem[];
    appearanceItems: readonly TocItem[];
    layoutItems: readonly TocItem[];
    statesItems: readonly TocItem[];
    usageItems: readonly TocItem[];
  }>(() => {
    if (!docs) {
      return {
        additionalItems: [],
        appearanceItems: [],
        layoutItems: [],
        statesItems: [],
        usageItems: [],
      };
    }
    const additionalItemsArray: TocItem[] = [];
    const appearanceItemsArray: TocItem[] = [];
    const layoutItemsArray: TocItem[] = [];
    const statesItemsArray: TocItem[] = [];
    const usageItemsArray: TocItem[] = [];

    docs.additional?.forEach((example) => {
      if (example.label) {
        additionalItemsArray.push({
          id: slugify(example.label),
          label: example.label,
        });
      }
    });

    return {
      additionalItems: additionalItemsArray,
      appearanceItems: appearanceItemsArray,
      layoutItems: layoutItemsArray,
      statesItems: statesItemsArray,
      usageItems: usageItemsArray,
    };
  }, [docs]);

  const anchorIds = useMemo(() => {
    const ids: string[] = [];
    if (hasAlternatives) {
      ids.push('alternatives');
    }
    if (hasAccessibility) {
      ids.push('accessibility');
    }
    ids.push(...additionalItems.map(({ id }) => id));
    return ids;
  }, [hasAlternatives, hasAccessibility, additionalItems]);

  const activeId = useScrollSpy(anchorIds);

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

              {'alternatives' in docs ? (
                <Stack space={sectionSpacing}>
                  <LinkableHeading level="3">Alternatives</LinkableHeading>
                  <List space={sectionSpacing}>
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
                <Stack space={sectionSpacing}>
                  <LinkableHeading level="3">Accessibility</LinkableHeading>
                  {docs.accessibility}
                </Stack>
              ) : null}

              {docs.docSections &&
                Object.entries(docs.docSections).map(
                  ([sectionKey, sectionExamples]) => (
                    <Stack key={sectionKey} space="medium">
                      <LinkableHeading level="2" label={sectionKey}>
                        {/* This is pretty hacky */}
                        {sectionKey.charAt(0).toUpperCase() +
                          sectionKey.slice(1)}
                      </LinkableHeading>
                      {sectionExamples.map(
                        (example: { label?: string }, index: number) => (
                          <DocSection
                            key={index}
                            section={example}
                            sectionSpacing={sectionSpacing}
                          />
                        ),
                      )}
                    </Stack>
                  ),
                )}

              {(docs.additional || []).map((example, index) => (
                <DocSection
                  key={index}
                  section={example}
                  sectionSpacing={sectionSpacing}
                />
              ))}
            </Stack>
          </Stack>
        </Box>
        <Box className={styles.root}>
          <Stack space="medium">
            <Text weight="strong" size="small">
              On this page
            </Text>
            <Box component="nav">
              <Stack space="medium" component="ul">
                <>
                  {hasAlternatives ? (
                    <Box component="li">
                      <TocItemLink
                        href="#alternatives"
                        label="Alternatives"
                        active={activeId === 'alternatives'}
                        onClick={(e) => handleTocClick(e, 'alternatives')}
                      />
                    </Box>
                  ) : null}

                  {hasAccessibility ? (
                    <Box component="li">
                      <TocItemLink
                        href="#accessibility"
                        label="Accessibility"
                        active={activeId === 'accessibility'}
                        onClick={(e) => handleTocClick(e, 'accessibility')}
                      />
                    </Box>
                  ) : null}

                  {/* {hasAppearance ? (
                    <Stack component="li" space="small">
                      <TocItemLink
                        href="#appearance"
                        label="Appearance"
                        active={activeId === 'appearance'}
                        onClick={(e) => handleTocClick(e, 'appearance')}
                      />
                      {appearanceItems.length > 0 ? (
                        <Stack component="ul" space="small">
                          {appearanceItems.map(({ id, label }) => (
                            <Box component="li" key={id}>
                              <TocItemLink
                                href={`#${id}`}
                                label={label}
                                active={activeId === id}
                                isChild={true}
                                onClick={(e) => handleTocClick(e, id)}
                              />
                            </Box>
                          ))}
                        </Stack>
                      ) : null}
                    </Stack>
                  ) : null}

                  {hasStates ? (
                    <Stack component="li" space="small">
                      <TocItemLink
                        href="#states"
                        label="States"
                        active={activeId === 'states'}
                        onClick={(e) => handleTocClick(e, 'states')}
                      />
                      {statesItems.length > 0 ? (
                        <Stack component="ul" space="small">
                          {statesItems.map(({ id, label }) => (
                            <Box component="li" key={id}>
                              <TocItemLink
                                href={`#${id}`}
                                label={label}
                                active={activeId === id}
                                isChild={true}
                                onClick={(e) => handleTocClick(e, id)}
                              />
                            </Box>
                          ))}
                        </Stack>
                      ) : null}
                    </Stack>
                  ) : null}

                  {hasLayout ? (
                    <Stack component="li" space="small">
                      <TocItemLink
                        href="#layout"
                        label="Layout"
                        active={activeId === 'layout'}
                        onClick={(e) => handleTocClick(e, 'layout')}
                      />
                      {layoutItems.length > 0 ? (
                        <Stack component="ul" space="small">
                          {layoutItems.map(({ id, label }) => (
                            <Box component="li" key={id}>
                              <TocItemLink
                                href={`#${id}`}
                                label={label}
                                active={activeId === id}
                                isChild={true}
                                onClick={(e) => handleTocClick(e, id)}
                              />
                            </Box>
                          ))}
                        </Stack>
                      ) : null}
                    </Stack>
                  ) : null} */}

                  {additionalItems.map(({ id, label }) => (
                    <Fragment key={id}>
                      <TocItemLink
                        href={`#${id}`}
                        label={label}
                        active={activeId === id}
                        onClick={(e) => handleTocClick(e, id)}
                      />
                    </Fragment>
                  ))}
                </>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  ) : null;
};
