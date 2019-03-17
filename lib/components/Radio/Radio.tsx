import React, { ReactNode, AllHTMLAttributes, useState } from 'react';
import classnames from 'classnames';
import getCheckboxRadioSize from '../private/getCheckboxRadioSize';
import { px } from '../../atoms/utils/toUnit';
import { ThemeConsumer } from '../ThemeConsumer/ThemeConsumer';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { FieldMessage } from '../FieldMessage/FieldMessage';
import styles from './Radio.css.js';

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
export interface RadioProps
  extends Required<Pick<InputProps, RequiredInputProps>>,
    Pick<InputProps, OptionalInputProps> {
  label: ReactNode;
  tone?: 'neutral' | 'critical' | 'positive';
  message?: ReactNode | false;
}

export const Radio = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  tone = 'neutral',
  message,
  children,
}: RadioProps) => {
  const [hovered, setHovered] = useState(false);
  const fieldMessageId = `${id}-message`;

  return (
    <ThemeConsumer>
      {theme => {
        const radioSize = getCheckboxRadioSize(theme);
        return (
          <div>
            <input
              className={styles.realRadio}
              type="radio"
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
                  style={{
                    width: px(radioSize),
                    height: px(radioSize),
                    marginTop: px(
                      (theme.tokens.touchableRows * theme.tokens.rowHeight -
                        radioSize) /
                        2,
                    ),
                  }}
                  className={styles.radioContainer}
                  marginRight="medium"
                >
                  <Box
                    boxShadow="borderStandard"
                    style={{ opacity: hovered ? 0 : 1 }}
                    className={styles.radio}
                  />
                  <Box
                    boxShadow="borderFormAccent"
                    className={classnames(styles.radio, styles.radioHover)}
                  />
                  <Box
                    boxShadow="outlineFocus"
                    transition="fast"
                    className={classnames(styles.radio, styles.radioFocus)}
                  />
                  <Box
                    backgroundColor="inputDisabled"
                    boxShadow="borderStandard"
                    transition="fast"
                    className={classnames(styles.radio, styles.radioDisabled)}
                  />
                  <Box
                    boxShadow="borderCritical"
                    transition="fast"
                    style={{ opacity: tone === 'critical' ? 1 : 0 }}
                    className={classnames(styles.radio, styles.radioCritical)}
                  />
                  <Box
                    backgroundColor={
                      disabled ? 'formAccentDisabled' : 'formAccent'
                    }
                    transition="fast"
                    width="full"
                    className={styles.radioIcon}
                  />
                </Box>
                <Box
                  paddingTop="standardTouchableText"
                  paddingBottom="standardTouchableText"
                >
                  <Text
                    baseline={false}
                    color={textColorForState(disabled, hovered)}
                  >
                    {label}
                  </Text>
                </Box>
              </Box>
              {children ? (
                <Box
                  paddingLeft="medium"
                  paddingBottom="medium"
                  className={styles.children}
                  style={{ marginLeft: px(radioSize) }}
                >
                  {children}
                </Box>
              ) : null}
            </div>
            <FieldMessage id={fieldMessageId} tone={tone} message={message} />
          </div>
        );
      }}
    </ThemeConsumer>
  );
};
