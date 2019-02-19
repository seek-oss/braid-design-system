import React, { Component, ReactNode, AllHTMLAttributes } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import getCheckboxRadioSize from '../private/getCheckboxRadioSize';
import Box from '../Box/Box';
import Text from '../Text/Text';
import FieldMessage from '../FieldMessage/FieldMessage';
import styles from './Radio.css.js';
import { px } from '../../themes/utils/toUnit';

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

interface State {
  hovered: boolean;
}

export default class Radio extends Component<RadioProps, State> {
  static displayName = 'Radio';

  constructor(props: RadioProps) {
    super(props);

    this.state = {
      hovered: false
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
            label,
            checked,
            onChange,
            disabled = false,
            tone = 'neutral',
            message,
            children
          } = this.props;

          const { hovered } = this.state;

          const fieldMessageId = `${id}-message`;
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
                  className={classnames({
                    [styles.label]: true
                  })}
                  style={{
                    minHeight: px(
                      theme.tokens.rowHeight * theme.tokens.interactionRows
                    )
                  }}
                  htmlFor={id}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                >
                  <Box
                    style={{
                      width: px(radioSize),
                      height: px(radioSize),
                      marginTop: px(
                        (theme.tokens.interactionRows * theme.tokens.rowHeight -
                          radioSize) /
                          2
                      )
                    }}
                    className={styles.radioContainer}
                    marginRight="medium"
                  >
                    <Box
                      backgroundColor="input"
                      borderWidth="standard"
                      style={{ opacity: hovered ? 0 : 1 }}
                      className={styles.radio}
                    />
                    <Box
                      backgroundColor="input"
                      borderColor="formAccent"
                      borderWidth="standard"
                      className={classnames(styles.radio, styles.radioHover)}
                    />
                    <Box
                      backgroundColor="input"
                      className={classnames(
                        styles.radio,
                        styles.radioFocus,
                        theme.atoms.boxShadow.focus,
                        theme.atoms.transition.fast
                      )}
                    />
                    <Box
                      backgroundColor="inputDisabled"
                      borderWidth="standard"
                      className={classnames(
                        styles.radio,
                        styles.radioDisabled,
                        theme.atoms.transition.fast
                      )}
                    />
                    <Box
                      borderColor="critical"
                      borderWidth="standard"
                      style={{ opacity: tone === 'critical' ? 1 : 0 }}
                      className={classnames(
                        styles.radio,
                        styles.radioCritical,
                        theme.atoms.transition.fast
                      )}
                    />
                    <Box
                      backgroundColor={
                        disabled ? 'formAccentDisabled' : 'formAccent'
                      }
                      className={classnames(
                        styles.radioIcon,
                        theme.atoms.transition.fast
                      )}
                    />
                  </Box>
                  <Text
                    size="interaction"
                    color={textColorForState(disabled, hovered)}
                  >
                    {label}
                  </Text>
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
