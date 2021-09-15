import React, { FormEvent, useContext } from 'react';
import assert from 'assert';
import { Overlay } from '../private/Overlay/Overlay';
import { Box } from '../Box/Box';
import { IconChevron } from '../icons';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './TextDropdown.css';

interface TextDropdownOption<Value> {
  text: string;
  value: Value;
}
type TextDropdownValue<Value> = Value | TextDropdownOption<Value>;

export interface TextDropdownProps<Value> {
  id: string;
  value: Value;
  onChange: (value: Value) => void;
  onBlur?: () => void;
  options: TextDropdownValue<Value>[];
  label: string;
  data?: DataAttributeMap;
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
  onBlur,
  options,
  label,
  data,
}: TextDropdownProps<Value>) {
  assert(
    (() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inText = useContext(TextContext);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inHeading = useContext(HeadingContext);

      return inText || inHeading;
    })(),
    'TextDropdown components must be rendered within a Text or Heading component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TextDropdown',
  );

  const parsedOptions = options.map(parseSimpleToComplexOption);
  const [currentText] = parsedOptions.filter((o) => value === o.value);

  if (!currentText || !currentText.text) {
    throw new Error(
      `The provided value of "${value}" does not exist in the provided \`options\` list.`,
    );
  }

  return (
    <Box
      display="inlineBlock"
      position="relative"
      {...(data ? buildDataAttributes(data) : undefined)}
    >
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
        opacity={0}
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
        onBlur={onBlur}
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
