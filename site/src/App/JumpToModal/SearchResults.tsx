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
  if (flatResults.length === 0) {
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
          {searchQuery.trim()
            ? 'No results found.'
            : 'Matching pages will appear here.'}
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
              <Box marginBottom="xsmall" component="li">
                <CategoryHeading component="h2">{category}</CategoryHeading>
              </Box>
              {items.map((item) => {
                const globalIndex = flatResults.findIndex(
                  (r) => r.path === item.path,
                );
                const isSelected = globalIndex === selectedIndex;

                return (
                  <Box key={item.path} component="li">
                    <Bleed horizontal="small">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="spaceBetween"
                        gap="small"
                      >
                        <Box>
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
                  </Box>
                );
              })}
            </Stack>
          );
        },
      )}
    </Stack>
  );
};
