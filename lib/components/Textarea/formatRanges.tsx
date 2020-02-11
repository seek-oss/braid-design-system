import React, { ReactChild } from 'react';
import flatten from 'lodash/flatten';
import { TextareaProps } from './Textarea';
import { Highlight, HighlightProps } from './Highlight/Highlight';

type Range = TextareaProps['highlightRanges'];

interface TextToHighlight {
  text: string;
  tone?: HighlightProps['tone'];
}

export const formatRanges = (
  value: string,
  highlightRanges: NonNullable<Range>,
): ReactChild[] => {
  if (highlightRanges && value) {
    const textToHighlight: TextToHighlight[] = [];
    const splitText: string[] = [];

    highlightRanges.forEach((range, i) => {
      const { start, end, tone } = range;
      const highlightedText = value.slice(start, end);
      if (highlightedText) {
        textToHighlight.push({ text: highlightedText, tone });
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
            return [
              text,
              <Highlight key={i} tone={textToHighlight[i].tone || 'critical'}>
                {textToHighlight[i].text}
              </Highlight>,
            ];
          }
          return [text];
        }
        return text;
      }),
    ).filter(item => item !== null && item !== '');
  }

  return [value];
};
