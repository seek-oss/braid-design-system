import React, { Fragment, ReactNode, AllHTMLAttributes } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box, BoxProps } from '../../Box/Box';
import {
  BackgroundProvider,
  useBackgroundLightness,
} from '../../Box/BackgroundContext';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import { Stack } from '../../Stack/Stack';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { useText, useTouchableSpace } from '../../../hooks/typography';
import { Text } from '../../Text/Text';
import * as styleRefs from './Field.treat';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldProps {
  id: NonNullable<FormElementProps['id']>;
  value?: FormElementProps['value'];
  labelId?: string;
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
  'aria-describedby'?: FormElementProps['aria-describedby'];
  data?: DataAttributeMap;
  autoFocus?: boolean;
  icon?: ReactNode;
  required?: boolean;
}

type PassthroughProps =
  | 'id'
  | 'name'
  | 'disabled'
  | 'autoComplete'
  | 'autoFocus';
interface FieldRenderProps extends Pick<FieldProps, PassthroughProps> {
  background: BoxProps['background'];
  borderRadius: BoxProps['borderRadius'];
  width: BoxProps['width'];
  paddingLeft: BoxProps['paddingLeft'];
  paddingRight: BoxProps['paddingRight'];
  outline: BoxProps['outline'];
  'aria-describedby'?: string;
  'aria-required'?: boolean;
  className: string;
}

interface InternalFieldProps extends FieldProps {
  secondaryIcon?: ReactNode;
  children(
    overlays: ReactNode,
    props: FieldRenderProps,
    icon: ReactNode,
    secondaryIcon: ReactNode,
  ): ReactNode;
}

export const Field = ({
  id,
  value,
  labelId,
  name,
  disabled,
  autoComplete,
  label,
  secondaryLabel,
  tertiaryLabel,
  description,
  children,
  message,
  secondaryMessage,
  reserveMessageSpace = false,
  tone,
  'aria-describedby': ariaDescribedBy,
  data,
  secondaryIcon,
  autoFocus,
  icon,
  required,
}: InternalFieldProps) => {
  const styles = useStyles(styleRefs);

  const messageId = `${id}-message`;
  const fieldBackground = disabled ? 'inputDisabled' : 'input';
  const showFieldBorder = useBackgroundLightness() === 'light';

  const hasValue = typeof value === 'string' ? value.length > 0 : value != null;

  const overlays = (
    <Fragment>
      <FieldOverlay variant="default" visible={showFieldBorder} />
      <FieldOverlay
        variant="critical"
        visible={tone === 'critical' && !disabled}
      />
      <FieldOverlay variant="focus" className={styles.focusOverlay} />
      <FieldOverlay variant="hover" className={styles.hoverOverlay} />
    </Fragment>
  );

  return (
    <Stack space="xsmall">
      {label ? (
        <FieldLabel
          id={labelId}
          htmlFor={id}
          label={label}
          secondaryLabel={secondaryLabel}
          tertiaryLabel={tertiaryLabel}
          description={description}
        />
      ) : null}

      <Box
        position="relative"
        className={secondaryIcon ? styles.secondaryIconSpace : null}
      >
        <BackgroundProvider value={fieldBackground}>
          {children(
            overlays,
            {
              id,
              name,
              background: fieldBackground,
              width: 'full',
              paddingLeft: 'small',
              paddingRight: secondaryIcon ? undefined : 'small',
              borderRadius: 'standard',
              outline: 'none',
              ...((message || ariaDescribedBy) && {
                'aria-describedby': ariaDescribedBy || messageId,
              }),
              'aria-required': required,
              disabled,
              autoComplete,
              autoFocus,
              ...buildDataAttributes(data),
              className: classnames(
                styles.field,
                styles.placeholderColor,
                useText({
                  backgroundContext: fieldBackground,
                  tone: hasValue ? 'neutral' : 'secondary',
                  size: 'standard',
                  baseline: false,
                }),
                useTouchableSpace('standard'),
                icon ? styles.iconSpace : null,
              ),
            },
            icon ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                height="touchable"
                width="touchable"
                pointerEvents="none"
                top={0}
                left={0}
              >
                <Text baseline={false}>{icon}</Text>
              </Box>
            ) : null,
            secondaryIcon ? (
              <Box
                position="absolute"
                width="touchable"
                height="touchable"
                display="flex"
                alignItems="center"
                justifyContent="center"
                top={0}
                right={0}
              >
                {secondaryIcon}
              </Box>
            ) : null,
          )}
        </BackgroundProvider>
      </Box>

      {message || secondaryMessage || reserveMessageSpace ? (
        <FieldMessage
          id={messageId}
          tone={tone}
          disabled={disabled}
          message={message}
          secondaryMessage={secondaryMessage}
          reserveMessageSpace={reserveMessageSpace}
        />
      ) : null}
    </Stack>
  );
};
