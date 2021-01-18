import React, {
  forwardRef,
  useState,
  ReactNode,
  AllHTMLAttributes,
  useRef,
  UIEvent,
  useCallback,
  FormEvent,
} from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { formatRanges } from './formatRanges';
import { Field, FieldProps } from '../private/Field/Field';
import * as styleRefs from './Textarea.treat';

type NativeTextareaProps = AllHTMLAttributes<HTMLTextAreaElement>;
export interface TextareaProps
  extends Omit<FieldProps, 'labelId' | 'secondaryMessage' | 'icon' | 'prefix'> {
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
}

const renderCount = ({
  characterLimit,
  value = '',
}: Pick<TextareaProps, 'characterLimit' | 'value'>): ReactNode => {
  const inputLength = String(value).length;

  if (
    typeof characterLimit === 'undefined' ||
    inputLength < Math.ceil((characterLimit * 0.7) / 10) * 10
  ) {
    return null;
  }

  const diff = characterLimit - inputLength;
  const valid = diff >= 0;

  return (
    <Text size="small" tone={valid ? 'secondary' : 'critical'}>
      {diff}
    </Text>
  );
};

const pxToInt = (str: string | null) =>
  typeof str === 'string' ? parseInt(str.replace('px', ''), 10) : 0;

const calculateLines = (
  target: HTMLTextAreaElement,
  lines: number,
  lineLimit?: number,
) => {
  const { paddingBottom, paddingTop, lineHeight } = window.getComputedStyle(
    target,
  );

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

const NamedTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      value,
      onChange,
      onBlur,
      onFocus,
      onPaste,
      placeholder,
      characterLimit,
      highlightRanges,
      lines = 3,
      lineLimit,
      grow = true,
      ...restProps
    },
    ref,
  ) => {
    const styles = useStyles(styleRefs);
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
    const hasHighlights = Boolean(highlightRanges);

    return (
      <Field
        {...restProps}
        value={value}
        icon={undefined}
        prefix={undefined}
        labelId={undefined}
        secondaryMessage={renderCount({
          characterLimit,
          value,
        })}
      >
        {(overlays, { className, borderRadius, background, ...fieldProps }) => (
          <Box
            position="relative"
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
                width="full"
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
              placeholder={placeholder}
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

NamedTextarea.displayName = 'Textarea';

export const Textarea = NamedTextarea;
