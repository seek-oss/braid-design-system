import React, { ReactNode, AllHTMLAttributes, useState } from 'react';
import { useClassNames } from 'sku/treat';
import getCheckboxRadioSize from '../private/getCheckboxRadioSize';
import { px } from '../../atoms/utils/toUnit';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { FieldMessage } from '../FieldMessage/FieldMessage';
import { TickIcon } from '../icons/TickIcon/TickIcon';
import styles from './Checkbox.css.js';
import { useTheme } from '../private/ThemeContext';
import { FieldTone } from '../../themes/theme';

const textColorForState = (disabled: boolean, hovered: boolean) => {
  if (disabled) {
    return 'secondary';
  }

  if (hovered) {
    return 'formAccent';
  }

  return 'neutral';
};

type InputProps = AllHTMLAttributes<HTMLInputElement>;
type RequiredInputProps = 'id' | 'checked' | 'onChange';
type OptionalInputProps = 'disabled' | 'children';
export interface CheckboxProps
  extends Required<Pick<InputProps, RequiredInputProps>>,
    Pick<InputProps, OptionalInputProps> {
  label: ReactNode;
  tone?: FieldTone;
  message?: ReactNode | false;
  children?: ReactNode;
}

export const Checkbox = ({
  id,
  checked,
  onChange,
  label,
  disabled = false,
  tone,
  message,
  children,
}: CheckboxProps) => {
  const [hovered, setHovered] = useState(false);
  const fieldMessageId = `${id}-message`;
  const theme = useTheme();
  const checkboxSize = getCheckboxRadioSize(theme);

  return (
    <div>
      <input
        className={styles.realCheckbox}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-describedby={fieldMessageId}
      />
      <div className={styles.content}>
        <Box
          component="label"
          className={styles.label}
          htmlFor={id}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          <Box
            backgroundColor="input"
            borderRadius="standard"
            marginRight="small"
            className={styles.checkboxContainer}
            style={{
              width: px(checkboxSize),
              height: px(checkboxSize),
              marginTop: px(
                (theme.tokens.touchableRows * theme.tokens.rowHeight -
                  checkboxSize) /
                  2,
              ),
            }}
          >
            <Box
              boxShadow="borderStandard"
              borderRadius="standard"
              className={styles.checkbox}
            />
            <Box
              boxShadow="borderFormAccent"
              borderRadius="standard"
              className={useClassNames(styles.checkbox, styles.checkboxHover)}
            />
            <Box
              boxShadow="outlineFocus"
              borderRadius="standard"
              transition="fast"
              className={useClassNames(styles.checkbox, styles.checkboxFocus)}
            />
            <Box
              backgroundColor="formAccent"
              borderRadius="standard"
              transition="fast"
              className={useClassNames(styles.checkbox, styles.checkboxChecked)}
            />
            <Box
              backgroundColor="inputDisabled"
              boxShadow="borderStandard"
              borderRadius="standard"
              transition="fast"
              className={useClassNames(
                styles.checkbox,
                styles.checkboxDisabled,
              )}
            />
            <Box
              boxShadow="borderCritical"
              borderRadius="standard"
              transition="fast"
              style={{
                opacity: tone === 'critical' ? 1 : 0,
              }}
              className={useClassNames(
                styles.checkbox,
                styles.checkboxCritical,
              )}
            />
            <Box transition="fast" width="full" className={styles.checkboxIcon}>
              <TickIcon size="fill" fill="white" />
            </Box>
          </Box>
          <Box
            paddingTop="standardTouchableText"
            paddingBottom="standardTouchableText"
          >
            <Text
              baseline={false}
              color={textColorForState(disabled, hovered)}
              {...(checked && children ? { weight: 'strong' } : {})}
            >
              {label}
            </Text>
          </Box>
        </Box>
        {children ? (
          <Box
            paddingLeft="small"
            paddingBottom="small"
            className={styles.children}
            style={{ marginLeft: px(checkboxSize) }}
          >
            {children}
          </Box>
        ) : null}
      </div>
      <FieldMessage id={fieldMessageId} tone={tone} message={message} />
    </div>
  );
};
