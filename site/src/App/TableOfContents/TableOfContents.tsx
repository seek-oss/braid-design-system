import { Box, Stack, Text } from 'braid-src/lib/components';
import { Fragment, useEffect, useMemo, useState } from 'react';

import * as styles from './TableOfContents.css';

interface TableOfContentsProps {
  readonly rootId: string;
}

interface TocItem {
  readonly id: string;
  readonly label: string;
  readonly isSub: boolean;
}

const getHeadingAnchors = (root: HTMLElement | null): TocItem[] => {
  if (!root) {
    return [];
  }

  const anchors = Array.from(
    root.querySelectorAll('a[id][href^="#"]'),
  ) as HTMLAnchorElement[];

  return anchors.map((anchor) => {
    const label = anchor.textContent ? anchor.textContent.trim() : anchor.id;
    const firstElement = anchor.firstElementChild;
    const isSub =
      (firstElement && firstElement.tagName === 'H4') ||
      Boolean(anchor.querySelector('h4'));

    return {
      id: anchor.id,
      label,
      isSub,
    };
  });
};

export const TableOfContents = ({ rootId }: TableOfContentsProps) => {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const rootEl = document.getElementById(rootId);
    if (!rootEl) {
      return;
    }
    const observer = new MutationObserver(() => {
      setItems(getHeadingAnchors(rootEl));
    });
    observer.observe(rootEl, { childList: true, subtree: true });
    setItems(getHeadingAnchors(rootEl));
    return () => observer.disconnect();
  }, [rootId]);

  const handleClick = (_event: React.MouseEvent, id: string) => {
    try {
      window.history.pushState(null, '', `#${id}`);
    } catch {}
  };

  const content = useMemo(() => items, [items]);

  useEffect(() => {
    if (content.length === 0) {
      return;
    }

    const anchors: HTMLElement[] = content
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const computeActive = () => {
      // Pick the topmost visible heading in the viewport
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
        // If no headings intersect the viewport, choose the nearest above the viewport
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
  }, [content]);

  return (
    <Box className={styles.root}>
      <Stack space="medium">
        <Text weight="strong" size="small">
          On this page
        </Text>
        <Stack space="medium">
          {content.length > 0 ? (
            content.map(({ id, label, isSub }) => (
              <Fragment key={id}>
                <TocItemLink
                  href={`#${id}`}
                  label={label}
                  active={activeId === id}
                  isSub={isSub}
                  onClick={(e) => handleClick(e, id)}
                />
              </Fragment>
            ))
          ) : (
            <Text tone="secondary" size={tocItemTextSize}>
              No headings
            </Text>
          )}
        </Stack>
      </Stack>
    </Box>
  );
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
}) => {
  const [hovered, setHovered] = useState(false);
  let tone: 'promote' | 'neutral' | 'secondary' = 'secondary';
  if (active) {
    tone = 'promote';
  } else if (hovered) {
    tone = 'neutral';
  }

  return (
    <Box
      component="a"
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: 'none' }}
      paddingLeft={isSub ? 'small' : undefined}
    >
      <Text size={tocItemTextSize} tone={tone}>
        {label}
      </Text>
    </Box>
  );
};
