import assert from 'assert';
import React, { Fragment, ReactNode, AllHTMLAttributes } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box, BoxProps } from '../../Box/Box';
import { useBackgroundLightness } from '../../Box/BackgroundContext';
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
import { mergeIds } from '../mergeIds';
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
  prefix?: string;
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
    prefix: ReactNode,
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
  prefix,
  required,
}: InternalFieldProps) => {
  assert(
    prefix === undefined || typeof prefix === 'string',
    'Prefix must be a string',
  );

  const styles = useStyles(styleRefs);

  const messageId = `${id}-message`;
  const descriptionId = description ? `${id}-description` : undefined;
  const fieldBackground = disabled ? 'inputDisabled' : 'input';
  const showFieldBorder =
    useBackgroundLightness() === 'light' && (tone !== 'critical' || disabled);

  const hasValue = typeof value === 'string' ? value.length > 0 : value != null;

  const overlays = (
    <Fragment>
      <FieldOverlay
        variant={disabled ? 'disabled' : 'default'}
        visible={showFieldBorder}
      />
      <FieldOverlay
        variant="critical"
        visible={tone === 'critical' && !disabled}
      />
      <FieldOverlay variant="focus" className={styles.focusOverlay} />
      <FieldOverlay variant="hover" className={styles.hoverOverlay} />
    </Fragment>
  );

  const fieldPadding = 'small';

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
          descriptionId={descriptionId}
        />
      ) : null}

      <Box
        position="relative"
        background={fieldBackground}
        borderRadius="standard"
        display="flex"
        className={secondaryIcon ? styles.secondaryIconSpace : undefined}
      >
        {children(
          overlays,
          {
            id,
            name,
            background: fieldBackground,
            width: 'full',
            paddingLeft: fieldPadding,
            paddingRight: secondaryIcon ? undefined : fieldPadding,
            borderRadius: 'standard',
            outline: 'none',
            'aria-describedby': mergeIds(
              ariaDescribedBy,
              message || secondaryMessage ? messageId : undefined,
              descriptionId,
            ),
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
              icon && !prefix ? styles.iconSpace : null,
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
          prefix ? (
            <Box
              component="label"
              htmlFor={id}
              display="flex"
              paddingLeft={icon ? undefined : fieldPadding}
              height="touchable"
              flexShrink={0}
              className={icon ? styles.iconSpace : null}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Text tone="secondary" baseline={false}>
                  {prefix}
                </Text>
              </Box>
              <Box padding={fieldPadding} paddingRight="none" height="full">
                <Box height="full" className={styles.verticalDivider} />
              </Box>
            </Box>
          ) : null,
        )}
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
