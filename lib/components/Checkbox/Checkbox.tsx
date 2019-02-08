import React, { Component, ReactNode, AllHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Omit } from 'utility-types';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import getCheckboxRadioSize from '../private/getCheckboxRadioSize';
import Box from '../Box/Box';
import Text from '../Text/Text';
import FieldMessage from '../FieldMessage/FieldMessage';
import TickIcon from '../icons/TickIcon/TickIcon';
import styles from './Checkbox.css.js';
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

export interface CheckboxProps
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

export default class Checkbox extends Component<CheckboxProps, State> {
  static displayName = 'Checkbox';

  constructor(props: CheckboxProps) {
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
            variant,
            id,
            checked,
            label,
            disabled = false,
            className,
            style,
            inputProps,
            labelProps,
            tone,
            message,
            messageProps,
            children,
            ...restProps
          } = this.props;
          const { hovered } = this.state;

          const inChecklistCard = variant === 'inChecklistCard';
          const fieldMessageId = `${id}-message`;
          const checkboxSize = getCheckboxRadioSize(theme);

          return (
            <Box
              {...(inChecklistCard && tone === 'critical'
                ? { borderWidth: 'standard', borderColor: 'critical' }
                : {})}
              backgroundColor={
                inChecklistCard && (checked || hovered) && !disabled
                  ? 'selection'
                  : undefined
              }
              paddingBottom={inChecklistCard ? 'xsmall' : undefined}
              style={style}
            >
              <input
                className={styles.realCheckbox}
                type="checkbox"
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
                        paddingTop: 'xsmall'
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
                    marginRight={inChecklistCard ? 'medium' : 'small'}
                    className={styles.checkboxContainer}
                    style={{
                      width: px(checkboxSize),
                      height: px(checkboxSize),
                      marginTop: px(
                        (theme.tokens.interactionRows * theme.tokens.rowHeight -
                          checkboxSize) /
                          2
                      )
                    }}
                  >
                    <Box
                      backgroundColor="input"
                      borderWidth="standard"
                      className={classnames(
                        styles.checkbox,
                        theme.atoms.borderRadius.standard
                      )}
                    />
                    <Box
                      backgroundColor="input"
                      borderColor="formAccent"
                      borderWidth="standard"
                      className={classnames(
                        styles.checkbox,
                        styles.checkboxHover,
                        theme.atoms.borderRadius.standard
                      )}
                    />
                    <Box
                      backgroundColor="input"
                      className={classnames(
                        styles.checkbox,
                        styles.checkboxFocus,
                        theme.atoms.boxShadow.focus,
                        theme.atoms.borderRadius.standard,
                        theme.atoms.transition.fast
                      )}
                    />
                    <Box
                      backgroundColor="input"
                      borderColor="formAccent"
                      borderWidth="standard"
                      className={classnames(
                        styles.checkbox,
                        styles.checkboxChecked,
                        theme.atoms.backgroundColor.formAccent,
                        theme.atoms.borderRadius.standard,
                        theme.atoms.transition.fast
                      )}
                    />
                    <Box
                      backgroundColor="inputDisabled"
                      borderWidth="standard"
                      className={classnames(
                        styles.checkbox,
                        styles.checkboxDisabled,
                        theme.atoms.borderRadius.standard,
                        theme.atoms.transition.fast
                      )}
                    />
                    {!inChecklistCard ? (
                      <Box
                        borderColor="critical"
                        borderWidth="standard"
                        style={{
                          opacity: tone === 'critical' ? 1 : 0
                        }}
                        className={classnames(
                          styles.checkbox,
                          styles.checkboxCritical,
                          theme.atoms.borderRadius.standard,
                          theme.atoms.transition.fast
                        )}
                      />
                    ) : null}
                    <TickIcon
                      size="fill"
                      className={classnames(
                        styles.checkboxIcon,
                        theme.atoms.fill.white,
                        theme.atoms.transition.fast
                      )}
                    />
                  </Box>
                  <Text
                    size="interaction"
                    color={textColorForState(disabled, hovered)}
                    {...(checked && children ? { weight: 'strong' } : {})}
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
                      paddingLeft={inChecklistCard ? 'medium' : 'small'}
                      paddingBottom="small"
                      className={styles.children}
                      style={{ marginLeft: px(checkboxSize) }}
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
            </Box>
          );
        }}
      </ThemeConsumer>
    );
  }
}
