import { LinkableHeading } from '@braid-design-system/docs-ui';
import {
  Box,
  Stack,
  List,
  TextLink,
  Secondary,
  Text,
  Badge,
} from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { Fragment, useContext, useEffect, useMemo, useState } from 'react';

import { PageTitle } from '../Seo/PageTitle';

import { DocExample } from './DocExample';
import { DocsContext } from './DocNavigation';

import * as styles from './DocDetails.css';

export const DocDetails = () => {
  const { docs, docsName } = useContext(DocsContext);
  const sectionSpacing = 'large';

  const hasAlternatives =
    docs && 'alternatives' in docs && docs.alternatives.length > 0;
  const hasAccessibility =
    docs && 'accessibility' in docs && docs.accessibility;

  type TocItem = {
    readonly id: string;
    readonly label: string;
    readonly isSub: boolean;
  };

  const slugify = (string: string) =>
    string
      .replace(/[\s?]/g, '-')
      .replace('--', '-')
      .replace(/-$/, '')
      .toLowerCase();

  const tocItems = useMemo<readonly TocItem[]>(() => {
    if (!docs) {
      return [];
    }

    const items: TocItem[] = [];

    (docs.additional || []).forEach((example) => {
      if (example.label) {
        items.push({
          id: slugify(example.label),
          label: example.label,
          isSub: example.primaryHeading === false,
        });
      }
    });

    return items;
  }, [docs]);

  const anchorIds = useMemo(() => {
    const ids: string[] = [];
    if (hasAlternatives) {
      ids.push('alternatives');
    }
    if (hasAccessibility) {
      ids.push('accessibility');
    }
    ids.push(...tocItems.map(({ id }) => id));
    return ids;
  }, [hasAlternatives, hasAccessibility, tocItems]);

  const hasHeadings =
    hasAlternatives || hasAccessibility || tocItems.length > 0;

  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!anchorIds.length) {
      return;
    }

    const anchors: HTMLElement[] = anchorIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const computeActive = () => {
      const viewportH =
        window.innerHeight || document.documentElement.clientHeight;

      const visible = anchors
        .map((el) => ({ el, rect: el.getBoundingClientRect() }))
        .filter(({ rect }) => rect.top < viewportH && rect.bottom > 0)
        .sort((a, b) => a.rect.top - b.rect.top);

      let next: string | null = null;
      if (visible.length > 0) {
        next = visible[0].el.id;
      } else if (anchors.length > 0) {
        const above = anchors
          .map((el) => ({ el, top: el.getBoundingClientRect().top }))
          .filter(({ top }) => top <= 0)
          .sort((a, b) => b.top - a.top);
        next = (above[0]?.el || anchors[0]).id;
      }

      setActiveId(next);
    };

    const io = new IntersectionObserver(() => computeActive(), {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    });
    anchors.forEach((a) => io.observe(a));

    computeActive();
    return () => io.disconnect();
  }, [anchorIds]);

  const handleTocClick = (_event: React.MouseEvent, id: string) => {
    try {
      window.history.pushState(null, '', `#${id}`);
    } catch {}
  };

  const tocItemTextSize = 'xsmall';

  const TocItemLink = ({
    href,
    label,
    active,
    isSub,
    onClick,
  }: {
    href: string;
    label: string;
    active: boolean;
    isSub: boolean;
    onClick: (e: React.MouseEvent) => void;
  }) => (
    <Box
      component="a"
      href={href}
      onClick={onClick}
      style={{ textDecoration: 'none' }}
      paddingLeft={isSub ? 'small' : undefined}
    >
      <Text size={tocItemTextSize}>
        <Box
          component="span"
          className={active ? styles.tocItemLabelActive : styles.tocItemLabel}
        >
          {label}
        </Box>
      </Text>
    </Box>
  );

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
            </Stack>

            {hasAlternatives && 'alternatives' in docs ? (
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

            {hasAccessibility && 'accessibility' in docs ? (
              <Stack space={sectionSpacing}>
                <LinkableHeading level="3">Accessibility</LinkableHeading>
                {docs.accessibility}
              </Stack>
            ) : null}

            {(docs.additional || []).map((example, index) => (
              <Stack space={sectionSpacing} key={index}>
                {example.label ? (
                  <LinkableHeading
                    level={example.primaryHeading === false ? '4' : '3'}
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
                        example.showCodeByDefault ||
                        example.Example === undefined
                      }
                      playroom={example.playroom}
                    />
                  </PlayroomStateProvider>
                ) : null}
              </Stack>
            ))}
          </Stack>
        </Box>
        <Box className={styles.root}>
          <Stack space="medium">
            <Text weight="strong" size="small">
              On this page
            </Text>
            <Stack space="medium">
              {hasHeadings ? (
                <>
                  {hasAlternatives ? (
                    <TocItemLink
                      href="#alternatives"
                      label="Alternatives"
                      active={activeId === 'alternatives'}
                      isSub={false}
                      onClick={(e) => handleTocClick(e, 'alternatives')}
                    />
                  ) : null}
                  {hasAccessibility ? (
                    <TocItemLink
                      href="#accessibility"
                      label="Accessibility"
                      active={activeId === 'accessibility'}
                      isSub={false}
                      onClick={(e) => handleTocClick(e, 'accessibility')}
                    />
                  ) : null}
                  {tocItems.map(({ id, label, isSub }) => (
                    <Fragment key={id}>
                      <TocItemLink
                        href={`#${id}`}
                        label={label}
                        active={activeId === id}
                        isSub={isSub}
                        onClick={(e) => handleTocClick(e, id)}
                      />
                    </Fragment>
                  ))}
                </>
              ) : (
                <Text tone="secondary" size={tocItemTextSize}>
                  No headings
                </Text>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  ) : null;
};
