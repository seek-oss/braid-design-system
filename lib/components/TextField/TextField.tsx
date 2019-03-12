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

// We need a type assertion for each entry in the array
// so that TypeScript can generate a union type.
// We can clean this up once this is released (scheduled for TypeScript 3.4):
// https://github.com/Microsoft/TypeScript/pull/29510
const allowedTypes = [
  'text' as 'text',
  'password' as 'password',
  'email' as 'email',
  'search' as 'search',
  'number' as 'number',
  'tel' as 'tel',
  'url' as 'url',
];

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
  type?: typeof allowedTypes[number];
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
                type={allowedTypes.indexOf(type) >= 0 ? type : undefined}
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
