import {
  Box,
  Dialog,
  TextField,
  IconSearch,
  Bleed,
} from 'braid-src/lib/components';
import { ScrollContainer } from 'braid-src/lib/components/private/ScrollContainer/ScrollContainer';
import { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from 'react-router';

import { SearchResults } from './SearchResults';
import {
  getSearchItems,
  groupSearchResults,
  type SearchItem,
} from './getSearchItems';
import { dialogAdjust } from './jumpTo.css';

interface JumpToModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JumpToModal = ({ isOpen, onClose }: JumpToModalProps) => {
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
      <Bleed horizontal="large">
        <ScrollContainer direction="vertical">
          <Box ref={resultsRef} paddingY="small" style={{ height: '40vh' }}>
            <Box paddingX="large">
              <SearchResults
                searchQuery={searchQuery}
                groupedResults={groupedResults}
                flatResults={flatResults}
                selectedIndex={selectedIndex}
                onSelectIndex={setSelectedIndex}
                onNavigate={(path) => {
                  navigate(path);
                  onClose();
                }}
              />
            </Box>
          </Box>
        </ScrollContainer>
      </Bleed>
    </Dialog>
  );
};
