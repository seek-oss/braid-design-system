import React, { ReactNode, AllHTMLAttributes } from 'react';
import { FieldTone } from '../../../themes/theme';
import { useClassNames } from 'sku/treat';
import { useTheme } from '../ThemeContext';
import { Box, BoxProps } from '../../Box/Box';
import { FieldLabel } from '../../FieldLabel/FieldLabel';
import { FieldMessage } from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import * as styles from './Field.treat';
import { useText } from '../../../hooks/typography';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldProps {
  id: NonNullable<FormElementProps['id']>;
  name?: FormElementProps['name'];
  disabled?: FormElementProps['disabled'];
  label?: string;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  description?: string;
  message?: ReactNode | false;
  secondaryMessage?: ReactNode;
  tone?: FieldTone;
}

type PassthroughProps = 'id' | 'name' | 'disabled';
interface FieldRenderProps extends Pick<FieldProps, PassthroughProps> {
  backgroundColor: BoxProps['backgroundColor'];
  boxShadow: BoxProps['boxShadow'];
  borderRadius: BoxProps['borderRadius'];
  width: BoxProps['width'];
  paddingLeft: BoxProps['paddingLeft'];
  paddingRight: BoxProps['paddingRight'];
  'aria-describedby': string;
  className: string;
}

interface InternalFieldProps extends FieldProps {
  children(props: FieldRenderProps): ReactNode;
}

export const Field = ({
  id,
  name,
  disabled = false,
  label,
  secondaryLabel,
  tertiaryLabel,
  description,
  children,
  message,
  secondaryMessage,
  tone = 'neutral',
}: InternalFieldProps) => {
  const { atoms } = useTheme();
  const messageId = `${id}-message`;

  return (
    <Box>
      <FieldLabel
        id={id}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
        description={description}
      />
      <Box className={styles.fieldContainer}>
        {children({
          id,
          name,
          backgroundColor: disabled ? 'inputDisabled' : 'input',
          boxShadow:
            tone === 'critical' && !disabled
              ? 'borderCritical'
              : 'borderStandard',
          width: 'full',
          paddingLeft: 'small',
          paddingRight: 'small',
          borderRadius: 'standard',
          'aria-describedby': messageId,
          disabled,
          className: useClassNames(
            styles.field,
            useText({ size: 'standard', baseline: false }),
            atoms.color.neutral,
          ),
        })}
        <FieldOverlay variant="focus" className={styles.focusOverlay} />
        <FieldOverlay variant="hover" className={styles.hoverOverlay} />
      </Box>
      <FieldMessage
        id={messageId}
        tone={disabled ? 'neutral' : tone}
        message={disabled ? '' : message}
        secondaryMessage={secondaryMessage}
      />
    </Box>
  );
};
