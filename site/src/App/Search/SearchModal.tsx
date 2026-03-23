import {
  Box,
  Dialog,
  Stack,
  TextField,
  Text,
  IconSearch,
  Bleed,
  ButtonLink,
} from 'braid-src/lib/components';
import { ScrollContainer } from 'braid-src/lib/components/private/ScrollContainer/ScrollContainer';
import { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from 'react-router';

import {
  getSearchItems,
  groupSearchResults,
  type SearchItem,
} from './getSearchItems';

import { uppercase } from './SearchModal.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const searchItems = useMemo(() => getSearchItems(), []);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    return searchItems.filter((item) =>
      item.name.toLowerCase().includes(query),
    );
  }, [searchQuery, searchItems]);

  const groupedResults = useMemo(
    () => groupSearchResults(filteredItems),
    [filteredItems],
  );

  const flatResults = useMemo(() => {
    const results: SearchItem[] = [];
    const categoryOrder = [
      'Foundations',
      'Components',
      'CSS',
      'Logic',
    ] as const;

    categoryOrder.forEach((category) => {
      results.push(...groupedResults[category]);
    });

    return results;
  }, [groupedResults]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
      // Wait for Dialog animation to complete before focusing
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        return;
      }

      switch (e.key) {
        case 'Escape':
          onClose();
          e.preventDefault();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            flatResults.length === 0 ? 0 : (prev + 1) % flatResults.length,
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => {
            if (flatResults.length === 0) {
              return 0;
            }
            if (prev === 0) {
              return flatResults.length - 1;
            }
            return prev - 1;
          });
          break;
        case 'Enter':
          if (flatResults[selectedIndex]) {
            const selectedItem = flatResults[selectedIndex];
            const targetPath =
              e.shiftKey && selectedItem.hasProps
                ? `${selectedItem.path}/props`
                : selectedItem.path;
            navigate(targetPath);
            onClose();
          }
          e.preventDefault();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, flatResults, selectedIndex, navigate, onClose]);

  // Scroll the selected item into view
  useEffect(() => {
    if (resultsRef.current && flatResults.length > 0) {
      const selectedElement = resultsRef.current.querySelector(
        `[data-index="${selectedIndex}"]`,
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, flatResults.length]);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      width="medium"
      title="Jump to"
      closeLabel="Close search"
    >
      <TextField
        icon={<IconSearch />}
        ref={inputRef}
        label=""
        placeholder="Search Foundations, Components, CSS, Logic..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setSelectedIndex(0);
        }}
      />

      <Box ref={resultsRef} paddingY="small" style={{ height: '40vh' }}>
        {(() => {
          if (flatResults.length === 0 && searchQuery.trim()) {
            return (
              <Text align="center" tone="secondary">
                No results found
              </Text>
            );
          }

          if (!searchQuery.trim()) {
            return (
              <Text align="center" tone="secondary">
                Start typing to search...
              </Text>
            );
          }

          return (
            <ScrollContainer direction="vertical">
              <Bleed horizontal="large">
                <Box paddingX="large">
                  <Stack space="large">
                    {(
                      ['Foundations', 'Components', 'CSS', 'Logic'] as const
                    ).map((category) => {
                      const items = groupedResults[category];
                      if (items.length === 0) {
                        return null;
                      }

                      return (
                        <Stack key={category} space="small" component="ul">
                          <Box className={uppercase} component="li">
                            <Text size="xsmall" weight="medium" component="h2">
                              {category}
                            </Text>
                          </Box>

                          {items.map((item) => {
                            const globalIndex = flatResults.findIndex(
                              (r) => r.path === item.path,
                            );
                            const isSelected = globalIndex === selectedIndex;

                            return (
                              <Box
                                key={item.path}
                                component="li"
                                display="flex"
                                alignItems="center"
                                gap="small"
                              >
                                <ButtonLink
                                  variant={isSelected ? 'soft' : 'transparent'}
                                  tone="formAccent"
                                  size="small"
                                  href={item.path}
                                  onClick={() => {
                                    navigate(item.path);
                                    onClose();
                                  }}
                                  onMouseEnter={() =>
                                    setSelectedIndex(globalIndex)
                                  }
                                  data-index={globalIndex}
                                >
                                  {item.name}
                                </ButtonLink>
                                <Text size="xsmall" tone="secondary">
                                  {item.hasProps && 'Shift+Enter for props'}
                                </Text>
                              </Box>
                            );
                          })}
                        </Stack>
                      );
                    })}
                  </Stack>
                </Box>
              </Bleed>
            </ScrollContainer>
          );
        })()}
      </Box>
    </Dialog>
  );
};
