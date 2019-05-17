import React, { ReactNode, AllHTMLAttributes } from 'react';
import { FieldTone } from '../../../themes/theme';
import { useClassNames } from 'sku/treat';
import { useTheme } from '../ThemeContext';
import { Box, BoxProps } from '../../Box/Box';
import { FieldLabel } from '../../FieldLabel/FieldLabel';
import { FieldMessage } from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import styles from './Field.css.js';
import useTypography from '../../../hooks/useTypography';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldProps {
  id: NonNullable<FormElementProps['id']>;
  name?: FormElementProps['name'];
  label?: string;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  description?: string;
  message?: ReactNode | false;
  secondaryMessage?: ReactNode;
  tone?: FieldTone;
}

type PassthroughProps = 'id' | 'name';
interface FieldRenderProps extends Pick<FieldProps, PassthroughProps> {
  backgroundColor: BoxProps['backgroundColor'];
  'aria-describedby': string;
  className: string;
}

interface InternalFieldProps extends FieldProps {
  children(props: FieldRenderProps): ReactNode;
}

export const Field = ({
  id,
  name,
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
          backgroundColor: 'input',
          'aria-describedby': messageId,
          className: useClassNames(
            styles.field,
            useTypography({ size: 'standard', baseline: false }),
            atoms.color.neutral,
          ),
        })}
        <FieldOverlay variant="focus" className={styles.focusOverlay} />
        <FieldOverlay variant="hover" className={styles.hoverOverlay} />
      </Box>
      <FieldMessage
        id={messageId}
        tone={tone}
        message={message}
        secondaryMessage={secondaryMessage}
      />
    </Box>
  );
};
