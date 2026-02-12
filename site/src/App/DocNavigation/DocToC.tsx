import { Text, Box, Stack } from 'braid-src/lib/components';
import { useEffect, useState } from 'react';

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
    style={{
      textDecoration: 'none',
    }}
    paddingLeft={isChild ? 'medium' : undefined}
    display="block"
  >
    <Text size={tocItemTextSize} tone={isActive ? 'neutral' : 'secondary'}>
      | {children}
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
      <Text weight="strong" size="small">
        On this page
      </Text>
      <Box component="nav">
        <Stack space="medium" component="ul">
          {sections.map((section) => (
            <Stack component="li" key={section.id} space="small">
              <TocItemLink
                href={section.href}
                label={section.label}
                isActive={activeId === section.id}
                onClick={(e) => onTocClick(e, section.id)}
              >
                {section.label}
              </TocItemLink>

              {section.children && section.children.length > 0 ? (
                <Stack component="ul" space="small">
                  {section.children.map((child) => (
                    <TocItemLink
                      key={child.id}
                      label={child.label}
                      href={child.id}
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
