import React from 'react';
import classnames from 'classnames';
import withTheme from '../private/withTheme';
import getCheckboxRadioSize from '../private/getCheckboxRadioSize';
import Box from '../Box/Box';
import Text from '../Text/Text';
import FieldMessage from '../FieldMessage/FieldMessage';
import styles from './Radio.css.js';

const textColorForState = ({ disabled, hovered }) => {
  if (disabled) {
    return 'secondary';
  }

  if (hovered) {
    return 'formAccent';
  }

  return 'default';
};

class Radio extends React.Component {
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
      label,
      checked,
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
    const radioSize = getCheckboxRadioSize(theme);

    return (
      <div
        className={classnames({
          [className]: className,
          [theme.atoms.backgroundColor.highlight]:
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
                  paddingTop: 'smallest',
                  paddingBottom: 'smallest'
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
              style={{
                width: `${radioSize}px`,
                height: `${radioSize}px`,
                marginTop: `${(theme.tokens.interactionRows *
                  theme.tokens.rowHeight -
                  radioSize) /
                  2}px`
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
                backgroundColor={disabled ? 'formAccentDisabled' : 'formAccent'}
                className={classnames(
                  styles.radioIcon,
                  theme.atoms.transition.fast
                )}
              />
            </Box>
            <Text
              size="interaction"
              baseline={false}
              color={textColorForState({ disabled, hovered })}
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
                style={{ marginLeft: `${radioSize}px` }}
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

Radio.displayName = 'Radio';

export default withTheme(Radio);
