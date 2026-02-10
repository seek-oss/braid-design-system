import { Text, Box, Stack } from 'braid-src/lib/components';
import { useEffect, useState } from 'react';

export type TocItem = {
  readonly id: string;
  readonly label: string;
  readonly isChild?: boolean;
};

export type TocSection = {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly children?: ReadonlyArray<{
    readonly id: string;
    readonly label: string;
    readonly href: string;
  }>;
};

const tocItemTextSize = 'xsmall';
const SCROLL_THRESHOLD = 100; // Distance from top of viewport to consider a section "active"

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
    paddingLeft={isChild ? 'small' : undefined}
    display="block"
  >
    <Text
      size={tocItemTextSize}
      weight={isActive ? 'strong' : undefined}
      tone={isActive ? 'brandAccent' : undefined}
    >
      {children}
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
      // Collect all section IDs (both parent and children)
      const allIds: string[] = [];
      sections.forEach((section) => {
        allIds.push(section.id);
        if (section.children) {
          section.children.forEach((child) => {
            allIds.push(child.id);
          });
        }
      });

      // Find the section that is currently near the top of the viewport
      // We want to keep the last section that has passed the threshold as active
      let currentActiveId = '';
      for (const id of allIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section has passed the threshold (top is above it), mark it as active
          if (rect.top <= SCROLL_THRESHOLD) {
            currentActiveId = id;
          }
        }
      }

      setActiveId(currentActiveId);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
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
                      href={child.href}
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
