import React, {
  forwardRef,
  useState,
  AllHTMLAttributes,
  useRef,
  UIEvent,
  useCallback,
  FormEvent,
} from 'react';
import { Box } from '../Box/Box';
import { formatRanges } from './formatRanges';
import {
  Field,
  FieldBaseProps,
  FieldLabelVariant,
} from '../private/Field/Field';
import { getCharacterLimitStatus } from '../private/Field/getCharacterLimitStatus';
import * as styles from './Textarea.css';

type NativeTextareaProps = AllHTMLAttributes<HTMLTextAreaElement>;

export type TextareaBaseProps = Omit<
  FieldBaseProps,
  'value' | 'labelId' | 'secondaryMessage' | 'icon' | 'prefix'
> & {
  value: NonNullable<NativeTextareaProps['value']>;
  onChange: NonNullable<NativeTextareaProps['onChange']>;
  onBlur?: NativeTextareaProps['onBlur'];
  onFocus?: NativeTextareaProps['onFocus'];
  onPaste?: NativeTextareaProps['onPaste'];
  placeholder?: NativeTextareaProps['placeholder'];
  highlightRanges?: Array<{
    start: number;
    end?: number;
  }>;
  characterLimit?: number;
  lines?: number;
  lineLimit?: number;
  grow?: boolean;
};
export type TextareaLabelProps = FieldLabelVariant;
export type TextareaProps = TextareaBaseProps & TextareaLabelProps;

const pxToInt = (str: string | null) =>
  typeof str === 'string' ? parseInt(str.replace('px', ''), 10) : 0;

const calculateLines = (
  target: HTMLTextAreaElement,
  lines: number,
  lineLimit?: number,
) => {
  const { paddingBottom, paddingTop, lineHeight } =
    window.getComputedStyle(target);

  // If line height is not a pixel value (e.g. 'normal' or unitless),
  // bail out of grow behaviour as we cannot calculate accurately.
  if (!lineHeight.endsWith('px')) {
    return lines;
  }

  const padding = pxToInt(paddingTop) + pxToInt(paddingBottom);
  const currentRows = Math.floor(
    (target.scrollHeight - padding) / pxToInt(lineHeight),
  );

  if (target && target.value === '') {
    return lines;
  }

  return typeof lineLimit === 'number' && currentRows > lineLimit
    ? lineLimit
    : currentRows;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      value,
      onChange,
      onBlur,
      onFocus,
      onPaste,
      placeholder,
      characterLimit,
      highlightRanges: highlightRangesProp = [],
      lines = 3,
      lineLimit,
      grow = true,
      ...restProps
    },
    ref,
  ) => {
    const [rows, setRows] = useState(lines);
    const highlightsRef = useRef<HTMLDivElement>(null);
    const updateScroll = useCallback(
      (scrollTop: number) => {
        if (highlightsRef.current) {
          highlightsRef.current.scrollTop = scrollTop;
        }
      },
      [highlightsRef],
    );

    const inputLength = String(value).length;
    const excessCharactersRange =
      characterLimit && inputLength > characterLimit
        ? [{ start: characterLimit }]
        : [];

    const highlightRanges = [...excessCharactersRange, ...highlightRangesProp];
    const hasHighlights = highlightRanges.length > 0;

    return (
      <Field
        {...restProps}
        value={value}
        icon={undefined}
        prefix={undefined}
        labelId={undefined}
        secondaryMessage={
          characterLimit
            ? getCharacterLimitStatus({
                value,
                characterLimit,
              })
            : null
        }
      >
        {(overlays, { className, borderRadius, background, ...fieldProps }) => (
          <Box
            position="relative"
            width="full"
            zIndex={0}
            background={background}
            borderRadius={borderRadius}
          >
            {hasHighlights ? (
              <Box
                ref={highlightsRef}
                position="absolute"
                overflow="hidden"
                pointerEvents="none"
                height="full"
                aria-hidden="true"
                top={0}
                left={0}
                className={[styles.highlights, className]}
                {...fieldProps}
              >
                {formatRanges(String(value), highlightRanges)}
              </Box>
            ) : null}
            <Box
              component="textarea"
              position="relative"
              zIndex={1}
              rows={rows}
              value={value}
              onChange={(e: FormEvent<HTMLTextAreaElement>) => {
                if (grow) {
                  setRows(calculateLines(e.currentTarget, lines, lineLimit));
                }
                if (typeof onChange === 'function') {
                  onChange(e);
                }
                if (hasHighlights) {
                  updateScroll(e.currentTarget.scrollTop);
                }
              }}
              onBlur={onBlur}
              onFocus={onFocus}
              onPaste={onPaste}
              onScroll={
                hasHighlights
                  ? (event: UIEvent<HTMLTextAreaElement>) =>
                      updateScroll(event.currentTarget.scrollTop)
                  : undefined
              }
              placeholder={!restProps.disabled ? placeholder : undefined}
              className={[styles.field, className]}
              {...fieldProps}
              ref={ref}
            />
            {overlays}
          </Box>
        )}
      </Field>
    );
  },
);

Textarea.displayName = 'Textarea';
