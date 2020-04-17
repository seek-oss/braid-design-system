import React, { FormEvent, useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import { Overlay } from '../private/Overlay/Overlay';
import { Box } from '../Box/Box';
import { IconChevron } from '../icons';
import * as styleRefs from './TextDropdown.treat';
import TextContext from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';

interface TextDropdownOption<Value> {
  text: string;
  value: Value;
}
type TextDropdownValue<Value> = Value | TextDropdownOption<Value>;

export interface TextDropdownProps<Value> {
  id: string;
  value: Value;
  onChange: (value: Value) => void;
  options: TextDropdownValue<Value>[];
  label: string;
}

export function parseSimpleToComplexOption<Value>(
  option: TextDropdownProps<Value>['options'][number],
) {
  return typeof option !== 'string' &&
    typeof option !== 'number' &&
    'text' in option &&
    'value' in option
    ? option
    : { value: option, text: String(option) };
}

export function TextDropdown<Value>({
  id,
  value,
  onChange,
  options,
  label,
}: TextDropdownProps<Value>) {
  const styles = useStyles(styleRefs);

  if (process.env.NODE_ENV !== 'production') {
    // NODE_ENV is static so hook call is not conditional
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inText = useContext(TextContext);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inHeading = useContext(HeadingContext);

    if (!inText && !inHeading) {
      throw new Error(
        'TextDropdown components must be rendered within a Text or Heading component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TextDropdown',
      );
    }
  }

  const parsedOptions = options.map(parseSimpleToComplexOption);
  const [currentText] = parsedOptions.filter((o) => value === o.value);

  if (!currentText || !currentText.text) {
    throw new Error(
      `The provided value of "${value}" does not exist in the provided \`options\` list.`,
    );
  }

  return (
    <Box display="inlineBlock" position="relative">
      <Box pointerEvents="none" userSelect="none">
        {currentText.text} <IconChevron alignY="lowercase" />
      </Box>

      <Box
        component="select"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        width="full"
        className={styles.select}
        aria-label={label}
        title={label}
        id={id}
        value={String(value)}
        onChange={(ev: FormEvent<HTMLSelectElement>) => {
          if (typeof onChange === 'function') {
            const newValue =
              parsedOptions[ev.currentTarget.selectedIndex].value;
            onChange(newValue as Value);
          }
        }}
      >
        <optgroup label={label}>
          {parsedOptions.map((option) => (
            <option value={String(option.value)} key={String(option.value)}>
              {option.text}
            </option>
          ))}
        </optgroup>
      </Box>

      <Overlay
        boxShadow="outlineFocus"
        borderRadius="standard"
        transition="fast"
        onlyVisibleForKeyboardNavigation
        className={styles.focusOverlay}
      />
    </Box>
  );
}
