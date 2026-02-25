import { Text, Box, Stack, Link } from 'braid-src/lib/components';
import { useEffect, useState } from 'react';

import {
  textHover,
  tocItem,
  tocItemActive,
  tocItemChild,
} from './DocDetails.css';

export interface TocItem {
  id: string;
  label: string;
  isChild?: boolean;
  href?: string;
}

export interface TocSection {
  id: string;
  label: string;
  href: string;
  children?: TocItem[];
}

const tocItemTextSize = 'xsmall';

const TocItemLink = ({
  href,
  isChild,
  isActive,
  onClick,
  children,
}: {
  href: string;
  label?: string;
  isChild?: boolean;
  isActive?: boolean;
  onClick: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={[tocItem, isChild && tocItemChild, isActive && tocItemActive]}
  >
    <Text size={tocItemTextSize} tone={isActive ? 'neutral' : 'secondary'}>
      <span className={textHover}>{children}</span>
    </Text>
  </Link>
);

export const Toc = ({
  sections,
  onTocClick,
}: {
  sections: readonly TocSection[];
  onTocClick: (event: React.MouseEvent, id: string) => void;
}) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const anchorIds: string[] = [];
      sections.forEach((section) => {
        anchorIds.push(section.id);
        if (section.children) {
          section.children.forEach((child) => {
            anchorIds.push(child.id);
          });
        }
      });

      let currentActiveId = '';
      for (const id of anchorIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            currentActiveId = id;
          }
        }
      }
      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <Stack space="medium">
      <Text size="xsmall" tone="secondary" weight="medium">
        On this page
      </Text>
      <Box component="nav">
        <Box component="ul">
          {sections.map((section) => (
            <Box component="li" key={section.id}>
              <TocItemLink
                href={section.href}
                label={section.label}
                isActive={activeId === section.id}
                onClick={(e) => onTocClick(e, section.id)}
              >
                {section.label}
              </TocItemLink>

              {section.children && section.children.length > 0 ? (
                <Box component="ul">
                  {section.children.map((child) => (
                    <Box component="li" key={child.id}>
                      <TocItemLink
                        key={child.id}
                        label={child.label}
                        href={`#${child.id}`}
                        isChild={true}
                        isActive={activeId === child.id}
                        onClick={(e) => onTocClick(e, child.id)}
                      >
                        {child.label}
                      </TocItemLink>
                    </Box>
                  ))}
                </Box>
              ) : null}
            </Box>
          ))}
        </Box>
      </Box>
    </Stack>
  );
};
