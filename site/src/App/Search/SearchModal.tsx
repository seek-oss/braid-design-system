import { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import {
  Box,
  Dialog,
  Stack,
  TextField,
  Text,
  IconSearch,
  Bleed,
} from 'braid-src/lib/components';

import {
  getSearchItems,
  groupSearchResults,
  type SearchItem,
} from './getSearchItems';

import { searchItem, searchItemActive } from './SearchModal.css';

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
      if (!isOpen) return;

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
          setSelectedIndex((prev) =>
            flatResults.length === 0
              ? 0
              : prev === 0
                ? flatResults.length - 1
                : prev - 1,
          );
          break;
        case 'Enter':
          if (flatResults[selectedIndex]) {
            navigate(flatResults[selectedIndex].path);
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
      width="small"
      title=""
      closeLabel="Close search"
    >
      <TextField
        icon={<IconSearch />}
        ref={inputRef}
        label="What do you want to find?"
        placeholder="Search Foundations, Components, CSS, Logic..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setSelectedIndex(0);
        }}
      />

      <Box ref={resultsRef} paddingY="small">
        {flatResults.length === 0 && searchQuery.trim() ? (
          <Text align="center" tone="secondary">
            No results found
          </Text>
        ) : !searchQuery.trim() ? (
          <Text align="center" tone="secondary">
            Start typing to search...
          </Text>
        ) : (
          <Bleed horizontal="large">
            <Box paddingX="large">
              <Stack space="large">
                {(['Foundations', 'Components', 'CSS', 'Logic'] as const).map(
                  (category) => {
                    const items = groupedResults[category];
                    if (items.length === 0) return null;

                    return (
                      <Stack key={category} space="small">
                        <Text weight="strong" size="small" tone="neutral">
                          {category}
                        </Text>

                        {items.map((item) => {
                          const globalIndex = flatResults.findIndex(
                            (r) => r.path === item.path,
                          );
                          const isSelected = globalIndex === selectedIndex;

                          return (
                            <Stack space="small">
                              <Box
                                padding="small"
                                key={item.path}
                                data-index={globalIndex}
                                className={
                                  isSelected
                                    ? [searchItemActive, searchItem]
                                    : searchItem
                                }
                                onClick={() => {
                                  navigate(item.path);
                                  onClose();
                                }}
                                onMouseEnter={() =>
                                  setSelectedIndex(globalIndex)
                                }
                              >
                                <Text size="standard">{item.name}</Text>
                              </Box>
                            </Stack>
                          );
                        })}
                      </Stack>
                    );
                  },
                )}
              </Stack>
            </Box>
          </Bleed>
        )}
      </Box>
    </Dialog>
  );
};
