import React, { ReactChild } from 'react';
import flatten from 'lodash/flatten';
import { TextareaProps } from './Textarea';
import { Highlight } from './Highlight/Highlight';

export const formatRanges = (
  value: string,
  highlightRanges: TextareaProps['highlightRanges'],
): ReactChild[] => {
  if (highlightRanges && value) {
    const textToHighlight: string[] = [];
    const splitText: string[] = [];

    highlightRanges.forEach((range, i) => {
      const { start, end } = range;
      const highlightedText = value.slice(start, end);
      if (highlightedText) {
        textToHighlight.push(highlightedText);
      }
      if (i === 0) {
        splitText.push(value.slice(0, start));
      }
      if (highlightRanges[i + 1]) {
        splitText.push(
          end ? value.slice(end, highlightRanges[i + 1].start) : '',
        );
      } else {
        splitText.push(end ? value.slice(end, value.length) : '');
      }
    });

    return flatten(
      splitText.map((text, i) => {
        if (i !== splitText.length - 1) {
          if (textToHighlight[i]) {
            return [text, <Highlight key={i}>{textToHighlight[i]}</Highlight>];
          }
          return [text];
        }
        return text;
      }),
    ).filter(item => item !== null && item !== '');
  }

  return [value];
};
