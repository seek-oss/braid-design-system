import React from 'react';
import classnames from 'classnames';
import withTheme from '../private/withTheme';
import getCheckboxRadioSize from '../private/getCheckboxRadioSize';
import Box from '../Box/Box';
import Text from '../Text/Text';
import FieldMessage from '../FieldMessage/FieldMessage';
import TickIcon from '../icons/TickIcon/TickIcon';
import styles from './Checkbox.css.js';

const textColorForState = ({ disabled, hovered }) => {
  if (disabled) {
    return 'secondary';
  }

  if (hovered) {
    return 'formAccent';
  }

  return 'neutral';
};

class Checkbox extends React.Component {
  constructor(props) {
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
    const {
      theme,
      variant = 'default',
      id,
      checked,
      label,
      disabled,
      className,
      style = {},
      inputProps,
      labelProps,
      tone,
      message,
      messageProps,
      children,
      ...props
    } = this.props;
    const { hovered } = this.state;

    const inChecklistCard = variant === 'inChecklistCard';
    const fieldMessageId = `${id}-message`;
    const checkboxSize = getCheckboxRadioSize(theme);

    return (
      <div
        className={classnames({
          [className]: className,
          [theme.atoms.paddingBottom.smaller]: inChecklistCard,
          [theme.atoms.backgroundColor.selection]:
            inChecklistCard && (checked || hovered) && !disabled
        })}
        style={style}
      >
        <input
          className={styles.realCheckbox}
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          aria-describedby={fieldMessageId}
          {...props}
          {...inputProps}
        />
        <div className={styles.content}>
          <Box
            component="label"
            {...(inChecklistCard
              ? {
                  paddingLeft: 'gutter',
                  paddingRight: 'gutter',
                  paddingTop: 'smaller'
                }
              : {})}
            className={classnames({
              [styles.label]: true
            })}
            style={{
              minHeight: `${theme.tokens.rowHeight *
                theme.tokens.interactionRows}px`
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
                width: `${checkboxSize}px`,
                height: `${checkboxSize}px`,
                marginTop: `${(theme.tokens.interactionRows *
                  theme.tokens.rowHeight -
                  checkboxSize) /
                  2}px`
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
              <TickIcon
                width="100%"
                height="100%"
                className={classnames(
                  styles.checkboxIcon,
                  theme.atoms.fill.white,
                  theme.atoms.transition.fast
                )}
              />
            </Box>
            <Text
              size="interaction"
              baseline={false}
              color={textColorForState({ disabled, hovered })}
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
                style={{ marginLeft: `${checkboxSize}px` }}
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
  }
}

Checkbox.displayName = 'Checkbox';

export default withTheme(Checkbox);
