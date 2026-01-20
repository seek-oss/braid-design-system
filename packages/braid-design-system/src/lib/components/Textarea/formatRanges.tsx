import parseHighlights from 'autosuggest-highlight/parse';
import type { ReactElement } from 'react';

import { Highlight } from './Highlight/Highlight';
import type { TextareaProps } from './Textarea';

type ReactChild = ReactElement | string | number;

export const formatRanges = (
  value: string,
  highlightRanges: TextareaProps['highlightRanges'],
  tone: 'critical' | 'caution',
): ReactChild[] => {
  if (highlightRanges && value) {
    let lastEnd = 0;

    const validatedAndSortedRanges = highlightRanges
      // sort ranges by start index
      .sort((a, b) => (a.start > b.start ? 1 : -1))
      .reduce(
        (acc, { end, start }) => {
          const resolvedEnd = end || value.length;

          // skip range if end character is less than start character
          if (resolvedEnd <= start) {
            return acc;
          }

          // handle overlapping ranges
          const adjustedRange: Array<{
            start: number;
            end: number | undefined;
          }> = [];
          if (resolvedEnd > lastEnd) {
            adjustedRange.push({
              // if overlapping, start from end of last range otherwise start from specified range
              start: start < lastEnd ? lastEnd : start,
              end,
            });
            lastEnd = resolvedEnd;
          }

          return [...acc, ...adjustedRange];
        },
        [] as NonNullable<TextareaProps['highlightRanges']>,
      );

    return parseHighlights(
      value,
      validatedAndSortedRanges.map(({ start, end }) => [
        start,
        end || value.length,
      ]),
    ).reduce((acc, { text, highlight }, i) => {
      if (text) {
        acc.push(
          highlight ? (
            <Highlight key={i} tone={tone}>
              {text}
            </Highlight>
          ) : (
            text
          ),
        );
      }
      return acc;
    }, [] as ReactChild[]);
  }

  return [value];
};
