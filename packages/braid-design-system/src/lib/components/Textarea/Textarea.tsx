import {
  type AllHTMLAttributes,
  type UIEvent,
  forwardRef,
  useState,
  useRef,
  useCallback,
  type ChangeEvent,
} from 'react';

import { Box } from '../Box/Box';
import {
  type FieldBaseProps,
  type FieldLabelVariant,
  Field,
} from '../private/Field/Field';
import { getCharacterLimitStatus } from '../private/Field/getCharacterLimitStatus';

import { formatRanges } from './formatRanges';

import * as styles from './Textarea.css';

type NativeTextareaProps = AllHTMLAttributes<HTMLTextAreaElement>;

export type TextareaBaseProps = Omit<
  FieldBaseProps,
  'value' | 'secondaryMessage' | 'icon' | 'prefix'
> & {
  value: NonNullable<NativeTextareaProps['value']>;
  onChange: NonNullable<NativeTextareaProps['onChange']>;
  onBlur?: NativeTextareaProps['onBlur'];
  onFocus?: NativeTextareaProps['onFocus'];
  onPaste?: NativeTextareaProps['onPaste'];
  placeholder?: NativeTextareaProps['placeholder'];
  spellCheck?: NativeTextareaProps['spellCheck'];
  highlightRanges?: Array<{
    start: number;
    end?: number;
  }>;
  characterLimit?: number;
  lines?: number;
  lineLimit?: number;
  // Todo - rename to autoResize in v35 major, as it now supports growing and shrinking.
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

  // If a height is set, the user has manually resized the textarea
  // Bail out of auto-resizing behaviour to preserve the user preference
  if (target.style.height) {
    return lines;
  }

  const padding = pxToInt(paddingTop) + pxToInt(paddingBottom);

  // Reset the height to 0 to calculate the full scroll height
  target.style.height = '0';
  target.style.minHeight = '0';
  const scrollHeight = target.scrollHeight;

  // Unset the height so it is auto-sized again
  target.style.height = '';
  target.style.minHeight = '';
  const currentRows = Math.floor(
    (scrollHeight - padding) / pxToInt(lineHeight),
  );

  if (target && target.value === '') {
    return lines;
  }

  const linesWithLimitApplied =
    lineLimit != null ? Math.min(currentRows, lineLimit) : currentRows;
  return Math.max(linesWithLimitApplied, lines);
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
      tone,
      spellCheck,
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
    const hasExceededCharacterLimit =
      characterLimit && inputLength > characterLimit;
    const highlightTone =
      !hasExceededCharacterLimit && (tone === 'critical' || tone === 'caution')
        ? tone
        : 'critical';
    const highlightRanges = hasExceededCharacterLimit
      ? [{ start: characterLimit }]
      : highlightRangesProp;
    const hasHighlights = highlightRanges.length > 0;

    return (
      <Field
        {...restProps}
        componentName="Textarea"
        tone={tone}
        value={value}
        icon={undefined}
        prefix={undefined}
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
                {formatRanges(String(value), highlightRanges, highlightTone)}
              </Box>
            ) : null}
            <Box
              component="textarea"
              position="relative"
              zIndex={1}
              rows={rows}
              value={value}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
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
              spellCheck={spellCheck}
              className={[styles.field, className]}
              borderRadius={borderRadius}
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
