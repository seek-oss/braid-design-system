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
      <Box
        background="neutralSoft"
        padding="xxxlarge"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="full"
      >
        <Text tone="secondary" size="xsmall" align="center">
          No results found.
        </Text>
      </Box>
    );
  }

  if (!searchQuery.trim()) {
    return (
      <Box
        background="neutralSoft"
        padding="xxxlarge"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="full"
      >
        <Text tone="secondary" size="xsmall" align="center">
          Matching pages will appear here.
        </Text>
      </Box>
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
