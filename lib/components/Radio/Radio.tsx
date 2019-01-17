import React, { Component, ReactNode, AllHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Omit } from 'utility-types';
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

export interface RadioProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'label'> {
  variant?: 'default' | 'inChecklistCard';
  id: string;
  checked: boolean;
  label: ReactNode;
  disabled?: boolean;
  inputProps?: object;
  labelProps?: object;
  tone?: 'neutral' | 'critical' | 'positive';
  message?: ReactNode | false;
  messageProps?: object;
  children?: ReactNode;
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
            variant = 'default',
            id,
            label,
            checked,
            disabled = false,
            className,
            style,
            inputProps,
            labelProps,
            tone = 'neutral',
            message,
            messageProps,
            children,
            ...restProps
          } = this.props;

          const { hovered } = this.state;

          const inChecklistCard = variant === 'inChecklistCard';
          const fieldMessageId = `${id}-message`;
          const radioSize = getCheckboxRadioSize(theme);

          return (
            <div
              className={classnames(className, {
                [theme.atoms.paddingBottom.xsmall]: inChecklistCard,
                [theme.atoms.backgroundColor.selection]:
                  inChecklistCard && (checked || hovered) && !disabled
              })}
              style={style}
            >
              <input
                className={styles.realRadio}
                type="radio"
                id={id}
                checked={checked}
                disabled={disabled}
                aria-describedby={fieldMessageId}
                {...restProps}
                {...inputProps}
              />
              <div className={styles.content}>
                <Box
                  component="label"
                  {...(inChecklistCard
                    ? {
                        paddingLeft: 'gutter',
                        paddingRight: 'gutter',
                        paddingTop: 'xxsmall',
                        paddingBottom: 'xxsmall'
                      }
                    : {})}
                  className={classnames({
                    [styles.label]: true
                  })}
                  style={{
                    minHeight: px(
                      theme.tokens.rowHeight * theme.tokens.interactionRows
                    )
                  }}
                  htmlFor={id}
                  {...labelProps}
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
                    paddingLeft={inChecklistCard ? 'gutter' : 'none'}
                    paddingRight={inChecklistCard ? 'gutter' : 'none'}
                  >
                    <Box
                      paddingLeft="medium"
                      paddingBottom="medium"
                      className={styles.children}
                      style={{ marginLeft: px(radioSize) }}
                    >
                      {children}
                    </Box>
                  </Box>
                ) : null}
              </div>
              {message !== false ? (
                <Box
                  paddingLeft={inChecklistCard ? 'gutter' : 'none'}
                  paddingRight={inChecklistCard ? 'gutter' : 'none'}
                >
                  <FieldMessage
                    id={fieldMessageId}
                    tone={tone}
                    message={message}
                    {...messageProps}
                  />
                </Box>
              ) : null}
            </div>
          );
        }}
      </ThemeConsumer>
    );
  }
}
