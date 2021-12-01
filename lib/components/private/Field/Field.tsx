import assert from 'assert';
import React, { Fragment, ReactNode, AllHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Box, BoxProps } from '../../Box/Box';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import { Stack } from '../../Stack/Stack';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { useText, touchableText } from '../../../hooks/typography';
import { Text } from '../../Text/Text';
import { mergeIds } from '../mergeIds';
import * as styles from './Field.css';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;

export type FieldLabelVariant =
  | {
      'aria-labelledby': string;
      secondaryLabel?: never;
      tertiaryLabel?: never;
      description?: never;
    }
  | {
      'aria-label': string;
      secondaryLabel?: never;
      tertiaryLabel?: never;
      description?: never;
    }
  | {
      label: FieldLabelProps['label'];
      secondaryLabel?: FieldLabelProps['secondaryLabel'];
      tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
      description?: FieldLabelProps['description'];
    };

export type FieldBaseProps = {
  id: NonNullable<FormElementProps['id']>;
  value?: FormElementProps['value'];
  labelId?: string;
  name?: FormElementProps['name'];
  disabled?: FormElementProps['disabled'];
  autoComplete?: FormElementProps['autoComplete'];
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
};

type PassthroughProps =
  | 'id'
  | 'name'
  | 'disabled'
  | 'autoComplete'
  | 'autoFocus';
interface FieldRenderProps extends Pick<FieldBaseProps, PassthroughProps> {
  background: BoxProps['background'];
  borderRadius: BoxProps['borderRadius'];
  width: BoxProps['width'];
  paddingLeft: BoxProps['paddingLeft'];
  paddingRight: BoxProps['paddingRight'];
  outline: BoxProps['outline'];
  'aria-describedby'?: string;
  'aria-required'?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  className: string;
}

type InternalFieldProps = FieldBaseProps &
  FieldLabelVariant & {
    secondaryIcon?: ReactNode;
    alwaysShowSecondaryIcon?: boolean;
    children(
      overlays: ReactNode,
      props: FieldRenderProps,
      icon: ReactNode,
      secondaryIcon: ReactNode,
      prefix: ReactNode,
    ): ReactNode;
  };

export const Field = ({
  id,
  value,
  labelId,
  name,
  disabled,
  autoComplete,
  children,
  message,
  secondaryMessage,
  reserveMessageSpace = false,
  tone,
  'aria-describedby': ariaDescribedBy,
  data,
  secondaryIcon,
  alwaysShowSecondaryIcon = false,
  autoFocus,
  icon,
  prefix,
  required,
  ...restProps
}: InternalFieldProps) => {
  assert(
    prefix === undefined || typeof prefix === 'string',
    'Prefix must be a string',
  );

  const messageId = `${id}-message`;
  const descriptionId =
    'description' in restProps && restProps.description
      ? `${id}-description`
      : undefined;
  const fieldBackground: BoxProps['background'] = disabled
    ? { lightMode: 'neutralSoft', darkMode: 'neutral' }
    : { lightMode: 'surface' };

  const hasValue = typeof value === 'string' ? value.length > 0 : value != null;
  const hasVisualLabel = 'label' in restProps;
  const showSecondaryIcon =
    alwaysShowSecondaryIcon || (secondaryIcon && hasValue);

  const overlays = (
    <Fragment>
      <FieldOverlay
        variant={disabled ? 'disabled' : 'default'}
        visible={tone !== 'critical' || disabled}
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
      {hasVisualLabel ? (
        <FieldLabel
          id={labelId}
          htmlFor={id}
          label={'label' in restProps ? restProps.label : undefined}
          disabled={disabled}
          secondaryLabel={
            'secondaryLabel' in restProps ? restProps.secondaryLabel : undefined
          }
          tertiaryLabel={
            'tertiaryLabel' in restProps ? restProps.tertiaryLabel : undefined
          }
          description={
            'description' in restProps ? restProps.description : undefined
          }
          descriptionId={descriptionId}
        />
      ) : null}

      <Box
        position="relative"
        background={fieldBackground}
        borderRadius="standard"
        display="flex"
        className={showSecondaryIcon ? styles.secondaryIconSpace : undefined}
      >
        {children(
          overlays,
          {
            id,
            name,
            background: fieldBackground,
            width: 'full',
            paddingLeft: fieldPadding,
            paddingRight: showSecondaryIcon ? undefined : fieldPadding,
            borderRadius: 'standard',
            outline: 'none',
            'aria-describedby': mergeIds(
              ariaDescribedBy,
              message || secondaryMessage ? messageId : undefined,
              descriptionId,
            ),
            'aria-required': required,
            ...('aria-label' in restProps
              ? { 'aria-label': restProps['aria-label'] }
              : {}),
            ...('aria-labelledby' in restProps
              ? { 'aria-labelledby': restProps['aria-labelledby'] }
              : {}),
            disabled,
            autoComplete,
            autoFocus,
            ...buildDataAttributes(data),
            className: clsx(
              styles.field,
              styles.placeholderColor,
              useText({
                tone: hasValue && !disabled ? 'neutral' : 'secondary',
                size: 'standard',
                baseline: false,
              }),
              touchableText.standard,
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
              <Text baseline={false} tone={prefix ? 'secondary' : undefined}>
                {icon}
              </Text>
            </Box>
          ) : null,
          secondaryIcon ? (
            <Box
              component="span"
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
              alignItems="center"
              paddingLeft={icon ? undefined : fieldPadding}
              height="touchable"
              flexShrink={0}
              className={icon ? styles.iconSpace : null}
            >
              <Text tone="secondary" baseline={false}>
                {prefix}
              </Text>
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
