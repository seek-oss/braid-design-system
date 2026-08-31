import {
  KeyboardShortcut,
  CategoryHeading,
} from '@braid-design-system/docs-ui';
import {
  Box,
  Stack,
  Text,
  Bleed,
  ButtonLink,
  Spread,
} from 'braid-design-system';
import type { ReactNode } from 'react';

import {
  searchCategories,
  type GroupedResults,
  type SearchItem,
} from './getSearchItems';

interface SearchResultsProps {
  searchQuery: string;
  groupedResults: GroupedResults;
  flatResults: SearchItem[];
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
  onNavigate: (path: string) => void;
  placeholder?: ReactNode;
}

export const SearchResults = ({
  searchQuery,
  groupedResults,
  flatResults,
  selectedIndex,
  onSelectIndex,
  onNavigate,
  placeholder,
}: SearchResultsProps) => {
  if (flatResults.length === 0) {
    if (!searchQuery.trim()) {
      return <>{placeholder}</>;
    }

    return (
      <Box
        background="neutralLight"
        padding="xxxlarge"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="full"
        borderRadius="standard"
      >
        <Text tone="secondary" size="xsmall" align="center">
          No results found.
        </Text>
      </Box>
    );
  }

  return (
    <Stack space="large" test-id="search-results">
      {searchCategories.map((category) => {
        const items = groupedResults[category];
        if (items.length === 0) {
          return null;
        }

        return (
          <Stack space="xsmall" key={category}>
            <CategoryHeading component="h2">{category}</CategoryHeading>
            <Stack space="xxsmall" component="ul">
              {items.map((item) => {
                const globalIndex = flatResults.findIndex(
                  (r) => r.path === item.path,
                );
                const isSelected = globalIndex === selectedIndex;

                return (
                  <Box key={item.path} component="li">
                    <Bleed left="small">
                      <Spread space="small" alignY="center">
                        <ButtonLink
                          variant={isSelected ? 'soft' : 'transparent'}
                          tone="formAccent"
                          size="small"
                          href={item.path}
                          onClick={() => onNavigate(item.path)}
                          onMouseEnter={() => onSelectIndex(globalIndex)}
                          data-index={globalIndex}
                        >
                          {item.name}
                        </ButtonLink>

                        {item.hasProps && isSelected && (
                          <KeyboardShortcut
                            keys={['⇧', '⏎']}
                            shortcutLabel="Props"
                          />
                        )}
                      </Spread>
                    </Bleed>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
