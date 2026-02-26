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
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const updateActiveSection = () => {
      /*
        We determine the next potential active section by testing which title has just crossed the top 1/3 parallel of the viewport.
        This 'feels' more natural than the top of the viewport as it's where the user's eye is most likely resting as they read/scoll.
        
        However if the previous title is still visible, we hold off on setting the new section as active until the previous has scrolled
        out of view. This guards against short sections being skipped over if they're shorter than 1/3 of the viewport height.
      */
      const activeThreshold = window.innerHeight / 3;
      const anchorIds: string[] = [];
      let currentActiveSection = '';

      sections.forEach((section) => {
        anchorIds.push(section.id);
        if (section.children) {
          section.children.forEach((child) => {
            anchorIds.push(child.id);
          });
        }
      });

      for (let i = anchorIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(anchorIds[i]);
        if (!element) {
          continue;
        }

        const isInActiveZone =
          element.getBoundingClientRect().top <= activeThreshold;
        const previousElement =
          i > 0 ? document.getElementById(anchorIds[i - 1]) : null;
        const previousSectionHasLeft =
          !previousElement || previousElement.getBoundingClientRect().top < 0;

        if (isInActiveZone && previousSectionHasLeft) {
          currentActiveSection = anchorIds[i];
          break;
        }
      }
      setActiveSection(currentActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
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
                isActive={activeSection === section.id}
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
                        isActive={activeSection === child.id}
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
