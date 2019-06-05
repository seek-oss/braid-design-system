import React, { ReactNode, AllHTMLAttributes, forwardRef } from 'react';
import { useClassNames } from 'sku/treat';
import { Box, BoxProps } from '../../Box/Box';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import * as styles from './Field.treat';
import { useText, useTouchableSpace } from '../../../hooks/typography';
import mapKeys from 'lodash/mapKeys';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldProps {
  id: NonNullable<FormElementProps['id']>;
  name?: FormElementProps['name'];
  disabled?: FormElementProps['disabled'];
  autoComplete?: FormElementProps['autoComplete'];
  label?: FieldLabelProps['label'];
  secondaryLabel?: FieldLabelProps['secondaryLabel'];
  tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
  description?: FieldLabelProps['description'];
  message?: FieldMessageProps['message'];
  secondaryMessage?: FieldMessageProps['secondaryMessage'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  tone?: FieldMessageProps['tone'];
  data?: object;
}

type PassthroughProps = 'id' | 'name' | 'disabled' | 'autoComplete';
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
  children(props: FieldRenderProps, ref): ReactNode;
}

export const Field = forwardRef(
  (
    {
      id,
      name,
      disabled = false,
      autoComplete,
      label,
      secondaryLabel,
      tertiaryLabel,
      description,
      children,
      message,
      secondaryMessage,
      reserveMessageSpace = true,
      tone = 'neutral',
      data,
    }: InternalFieldProps,
    ref,
  ) => {
    const messageId = `${id}-message`;
    let dataAttributes = {};

    if (data) {
      dataAttributes = mapKeys(data, (_, attrName) => `data-${attrName}`);
    }

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
          {children(
            {
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
              autoComplete,
              ...dataAttributes,
              className: useClassNames(
                styles.field,
                useText({ size: 'standard', baseline: false }),
                useTouchableSpace('standard'),
              ),
            },
            ref,
          )}
          <FieldOverlay variant="focus" className={styles.focusOverlay} />
          <FieldOverlay variant="hover" className={styles.hoverOverlay} />
        </Box>
        <FieldMessage
          id={messageId}
          tone={tone}
          disabled={disabled}
          message={message}
          secondaryMessage={secondaryMessage}
          reserveMessageSpace={reserveMessageSpace}
        />
      </Box>
    );
  },
);
