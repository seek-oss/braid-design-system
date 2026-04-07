import { KeyboardShortcut } from '@braid-design-system/docs-ui';
import { Box, Stack, Text, Bleed, ButtonLink } from 'braid-src/lib/components';

import { CategoryHeading } from '../CategoryHeading/CategoryHeading';

import type { GroupedResults, SearchItem } from './getSearchItems';

interface SearchResultsProps {
  searchQuery: string;
  groupedResults: GroupedResults;
  flatResults: SearchItem[];
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
  onNavigate: (path: string) => void;
}

export const SearchResults = ({
  searchQuery,
  groupedResults,
  flatResults,
  selectedIndex,
  onSelectIndex,
  onNavigate,
}: SearchResultsProps) => {
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
        Start typing to search&hellip;
      </Text>
    );
  }

  return (
    <Stack space="large">
      {(['Foundations', 'Components', 'CSS', 'Logic'] as const).map(
        (category) => {
          const items = groupedResults[category];
          if (items.length === 0) {
            return null;
          }

          return (
            <Stack key={category} space="xxsmall" component="ul">
              <Box marginBottom="xsmall">
                <CategoryHeading>{category}</CategoryHeading>
              </Box>
              {items.map((item) => {
                const globalIndex = flatResults.findIndex(
                  (r) => r.path === item.path,
                );
                const isSelected = globalIndex === selectedIndex;

                return (
                  <Bleed horizontal="small" key={item.path}>
                    <Box
                      component="li"
                      display="flex"
                      alignItems="center"
                      justifyContent="spaceBetween"
                      gap="small"
                    >
                      <Box display="flex">
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
                      </Box>

                      {item.hasProps && isSelected && (
                        <KeyboardShortcut
                          keys={['⇧', '⏎']}
                          shortcutLabel="Props"
                        />
                      )}
                    </Box>
                  </Bleed>
                );
              })}
            </Stack>
          );
        },
      )}
    </Stack>
  );
};
