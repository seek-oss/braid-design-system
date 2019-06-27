import React, {
  ReactNode,
  AllHTMLAttributes,
  forwardRef,
  useState,
  ChangeEvent,
} from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Omit } from 'utility-types';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Field, FieldProps } from '../private/Field/Field';
import * as styleRefs from './Textarea.treat';

type NativeTextareaProps = AllHTMLAttributes<HTMLTextAreaElement>;
interface TextareaProps extends Omit<FieldProps, 'secondaryMessage'> {
  value: NonNullable<NativeTextareaProps['value']>;
  onChange: NonNullable<NativeTextareaProps['onChange']>;
  onBlur?: NativeTextareaProps['onBlur'];
  onFocus?: NativeTextareaProps['onFocus'];
  placeholder?: NativeTextareaProps['placeholder'];
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
  lineLimit: TextareaProps['lineLimit'],
) => {
  const { paddingBottom, paddingTop, lineHeight } = window.getComputedStyle(
    target,
  );

  const padding = pxToInt(paddingTop) + pxToInt(paddingBottom);
  const currentRows = Math.floor(
    (target.scrollHeight - padding) / pxToInt(lineHeight),
  );

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
      placeholder,
      characterLimit,
      lines = 3,
      lineLimit,
      grow = true,
      ...restProps
    },
    ref,
  ) => {
    const styles = useStyles(styleRefs);
    const [rows, setRows] = useState(lines);

    return (
      <Field
        {...restProps}
        ref={ref}
        secondaryMessage={renderCount({
          characterLimit,
          value,
        })}
      >
        {({ className, ...fieldProps }, fieldRef) => (
          <Box
            component="textarea"
            rows={rows}
            value={value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              if (grow) {
                setRows(calculateLines(e.target, lineLimit));
              }
              if (typeof onChange === 'function') {
                onChange(e);
              }
            }}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            className={classnames(styles.field, className)}
            {...fieldProps}
            ref={fieldRef}
          />
        )}
      </Field>
    );
  },
);
