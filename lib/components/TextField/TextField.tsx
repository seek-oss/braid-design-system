import React, {
  Component,
  ReactNode,
  AllHTMLAttributes,
  Fragment,
} from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import Box from '../Box/Box';
import FieldLabel from '../FieldLabel/FieldLabel';
import FieldMessage from '../FieldMessage/FieldMessage';
import classnames from 'classnames';
import styles from './TextField.css.js';

const allowedTypes = {
  text: 'text',
  password: 'password',
  email: 'email',
  search: 'search',
  number: 'number',
  tel: 'tel',
  url: 'url',
};

type InputProps = AllHTMLAttributes<HTMLInputElement>;
type RequiredInputProps = 'id' | 'value' | 'onChange';
interface TextFieldProps
  extends Required<Pick<InputProps, RequiredInputProps>> {
  label?: string;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  placeholder?: string;
  message?: ReactNode | false;
  tone?: 'neutral' | 'critical' | 'positive';
  type?: keyof typeof allowedTypes;
}

export default class TextField extends Component<TextFieldProps> {
  static displayName = 'TextField';

  render() {
    const {
      id,
      label,
      secondaryLabel,
      tertiaryLabel,
      placeholder,
      message,
      tone = 'neutral',
      value,
      type = 'text',
      onChange,
    } = this.props;

    return (
      <ThemeConsumer>
        {theme => (
          <Fragment>
            {label ? (
              <FieldLabel
                id={id}
                secondaryLabel={secondaryLabel}
                tertiaryLabel={tertiaryLabel}
              >
                {label}
              </FieldLabel>
            ) : null}
            <Box className={styles.root}>
              <Box
                component="input"
                type={allowedTypes[type]}
                id={id}
                backgroundColor="input"
                boxShadow={
                  tone === 'critical' ? 'borderCritical' : 'borderStandard'
                }
                width="full"
                paddingLeft="small"
                paddingRight="small"
                paddingTop="standardTouchableText"
                paddingBottom="standardTouchableText"
                borderRadius="standard"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={classnames(
                  styles.input,
                  theme.atoms.fontFamily.text,
                  theme.atoms.fontSize.standard,
                  theme.atoms.color.neutral,
                )}
              />
              <Box
                className={styles.focusOverlay}
                boxShadow="outlineFocus"
                borderRadius="standard"
                paddingTop="standardTouchableText"
                paddingBottom="standardTouchableText"
              />
            </Box>
            {message === false ? null : (
              <FieldMessage tone={tone} message={message} />
            )}
          </Fragment>
        )}
      </ThemeConsumer>
    );
  }
}
