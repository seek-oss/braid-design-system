import React, { Component, ReactNode, AllHTMLAttributes } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import getCheckboxRadioSize from '../private/getCheckboxRadioSize';
import Box from '../Box/Box';
import Text from '../Text/Text';
import FieldMessage from '../FieldMessage/FieldMessage';
import TickIcon from '../icons/TickIcon/TickIcon';
import styles from './Checkbox.css.js';
import { px } from '../../atoms/utils/toUnit';

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
  tone?: 'neutral' | 'critical' | 'positive';
  message?: ReactNode | false;
  children?: ReactNode;
}

interface State {
  hovered: boolean;
}

export default class Checkbox extends Component<CheckboxProps, State> {
  static displayName = 'Checkbox';

  constructor(props: CheckboxProps) {
    super(props);

    this.state = {
      hovered: false,
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({ hovered: true });
  }

  handleMouseOut() {
    this.setState({ hovered: false });
  }

  render() {
    return (
      <ThemeConsumer>
        {theme => {
          const {
            id,
            checked,
            onChange,
            label,
            disabled = false,
            tone,
            message,
            children,
          } = this.props;
          const { hovered } = this.state;

          const fieldMessageId = `${id}-message`;
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
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                >
                  <Box
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
                      backgroundColor="input"
                      borderWidth="standard"
                      borderColor="standard"
                      borderRadius="standard"
                      className={styles.checkbox}
                    />
                    <Box
                      backgroundColor="input"
                      borderColor="formAccent"
                      borderWidth="standard"
                      borderRadius="standard"
                      className={classnames(
                        styles.checkbox,
                        styles.checkboxHover,
                      )}
                    />
                    <Box
                      backgroundColor="input"
                      boxShadow="focus"
                      borderRadius="standard"
                      transition="fast"
                      className={classnames(
                        styles.checkbox,
                        styles.checkboxFocus,
                      )}
                    />
                    <Box
                      backgroundColor="formAccent"
                      borderRadius="standard"
                      transition="fast"
                      className={classnames(
                        styles.checkbox,
                        styles.checkboxChecked,
                      )}
                    />
                    <Box
                      backgroundColor="inputDisabled"
                      borderWidth="standard"
                      borderColor="standard"
                      borderRadius="standard"
                      transition="fast"
                      className={classnames(
                        styles.checkbox,
                        styles.checkboxDisabled,
                      )}
                    />
                    <Box
                      borderColor="critical"
                      borderWidth="standard"
                      borderRadius="standard"
                      transition="fast"
                      style={{
                        opacity: tone === 'critical' ? 1 : 0,
                      }}
                      className={classnames(
                        styles.checkbox,
                        styles.checkboxCritical,
                      )}
                    />
                    <Box
                      transition="fast"
                      width="full"
                      className={styles.checkboxIcon}
                    >
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
              {message !== false ? (
                <FieldMessage
                  id={fieldMessageId}
                  tone={tone}
                  message={message}
                />
              ) : null}
            </div>
          );
        }}
      </ThemeConsumer>
    );
  }
}
