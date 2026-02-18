import { Text, Box, Stack } from 'braid-src/lib/components';
import { useEffect, useState } from 'react';

import { textHover, tocItem, tocItemActive } from './DocDetails.css';

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
const scrollThreshold = 100;

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
  <Box
    component="a"
    href={href}
    onClick={onClick}
    display="block"
    paddingLeft={isChild ? 'large' : 'medium'}
    className={[tocItem, isActive && tocItemActive]}
    paddingY="small"
  >
    <Text size={tocItemTextSize} tone={isActive ? 'neutral' : 'secondary'}>
      <span className={textHover}>{children}</span>
    </Text>
  </Box>
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
          if (rect.top <= scrollThreshold) {
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
        <Stack space="none" component="ul">
          {sections.map((section) => (
            <Stack component="li" key={section.id} space="none">
              <TocItemLink
                href={section.href}
                label={section.label}
                isActive={activeId === section.id}
                onClick={(e) => onTocClick(e, section.id)}
              >
                {section.label}
              </TocItemLink>

              {section.children && section.children.length > 0 ? (
                <Stack component="ul" space="none">
                  {section.children.map((child) => (
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
                  ))}
                </Stack>
              ) : null}
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};
