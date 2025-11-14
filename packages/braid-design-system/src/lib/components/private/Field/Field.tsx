import clsx from 'clsx';
import dedent from 'dedent';
import { type ReactNode, type AllHTMLAttributes, Fragment, useId } from 'react';
import assert from 'tiny-invariant';

import { textStyles } from '../../../css/typography';
import { useFallbackId } from '../../../hooks/useFallbackId';
import { useBackgroundLightness } from '../../Box/BackgroundContext';
import { type BoxProps, Box } from '../../Box/Box';
import { type FieldLabelProps, FieldLabel } from '../../FieldLabel/FieldLabel';
import {
  type FieldMessageProps,
  FieldMessage,
} from '../../FieldMessage/FieldMessage';
import { Stack } from '../../Stack/Stack';
import { Text } from '../../Text/Text';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
import { mergeIds } from '../mergeIds';
import { validateTabIndex } from '../validateTabIndex';

import * as styles from './Field.css';
import { touchableText } from '../../../css/typography.css';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;

export type FieldLabelVariant =
  | {
      'aria-labelledby': string;
      secondaryLabel?: never;
      tertiaryLabel?: never;
    }
  | {
      'aria-label': string;
      secondaryLabel?: never;
      tertiaryLabel?: never;
    }
  | {
      label: FieldLabelProps['label'];
      secondaryLabel?: FieldLabelProps['secondaryLabel'];
      tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
    };

export interface FieldBaseProps {
  id?: FormElementProps['id'];
  value?: FormElementProps['value'];
  name?: FormElementProps['name'];
  disabled?: FormElementProps['disabled'];
  autoComplete?: FormElementProps['autoComplete'];
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
  tabIndex?: 0 | -1;
}

type PassthroughProps =
  | 'id'
  | 'name'
  | 'disabled'
  | 'autoComplete'
  | 'autoFocus'
  | 'tabIndex';
interface FieldRenderProps extends Pick<FieldBaseProps, PassthroughProps> {
  background: BoxProps['background'];
  borderRadius: BoxProps['borderRadius'];
  width: BoxProps['width'];
  paddingLeft: BoxProps['paddingLeft'];
  paddingRight: BoxProps['paddingRight'];
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
    componentName: string;
  };

export const Field = ({
  id,
  value,
  name,
  disabled,
  autoComplete,
  children,
  description,
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
  tabIndex,
  componentName,
  ...restProps
}: InternalFieldProps) => {
  assert(
    prefix === undefined || typeof prefix === 'string',
    'Prefix must be a string',
  );

  const resolvedId = useFallbackId(id);

  const messageId = useId();
  const descriptionId = useId();

  if (process.env.NODE_ENV !== 'production') {
    if (
      'label' in restProps &&
      typeof restProps.label === 'string' &&
      restProps.label.trim().length === 0 &&
      !('aria-label' in restProps) &&
      !('aria-labelledby' in restProps)
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          The "label" prop is required as the accessible name for a ${componentName}.
          If you are labelling the ${componentName} with another element or using a non-visual label please provide the appropriate props, either "aria-label" or "aria-labelledby".

          See the ${componentName} documentation for more information: https://seek-oss.github.io/braid-design-system/components/${componentName}#indirect-or-hidden-field-labels
        `,
      );
    }

    validateTabIndex(tabIndex);
  }

  const fieldBackground: BoxProps['background'] = disabled
    ? { lightMode: 'neutralSoft', darkMode: 'neutral' }
    : { lightMode: 'surface' };

  const hasValue = typeof value === 'string' ? value.length > 0 : value != null;
  const hasVisualLabelOrDescription =
    ('label' in restProps && restProps.label) || description;
  const showSecondaryIcon =
    alwaysShowSecondaryIcon || (secondaryIcon && hasValue);

  const { lightMode } = useBackgroundLightness();

  const overlays = (
    <Fragment>
      <FieldOverlay
        variant={disabled ? 'disabled' : 'default'}
        visible={tone !== 'critical' || disabled}
        className={{
          [styles.hideBorderOnDarkBackgroundInLightMode]: lightMode === 'dark',
        }}
      />
      <FieldOverlay
        variant="critical"
        visible={tone === 'critical' && !disabled}
      />
      <FieldOverlay variant="formAccent" className={styles.hoverOverlay} />
    </Fragment>
  );

  const fieldPadding = 'small';

  return (
    <Stack space="small">
      {hasVisualLabelOrDescription ? (
        <FieldLabel
          htmlFor={resolvedId}
          label={'label' in restProps ? restProps.label : undefined}
          disabled={disabled}
          secondaryLabel={
            'secondaryLabel' in restProps ? restProps.secondaryLabel : undefined
          }
          tertiaryLabel={
            'tertiaryLabel' in restProps ? restProps.tertiaryLabel : undefined
          }
          description={description}
          descriptionId={description ? descriptionId : undefined}
        />
      ) : null}

      <Stack space="xsmall">
        <Box
          position="relative"
          background={fieldBackground}
          borderRadius="standard"
          display="flex"
        >
          {children(
            overlays,
            {
              id: resolvedId,
              name,
              background: fieldBackground,
              width: 'full',
              paddingLeft: fieldPadding,
              paddingRight: showSecondaryIcon ? undefined : fieldPadding,
              borderRadius: 'standard',
              'aria-describedby': mergeIds(
                ariaDescribedBy,
                message || secondaryMessage ? messageId : undefined,
                description ? descriptionId : undefined,
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
              tabIndex,
              ...buildDataAttributes({ data, validateRestProps: restProps }),
              className: clsx(
                styles.field,
                styles.placeholderColor,
                textStyles({
                  tone: hasValue && !disabled ? 'neutral' : 'secondary',
                  size: 'standard',
                  baseline: false,
                }),
                touchableText.standard,
                icon && !prefix ? styles.iconSpace : null,
                showSecondaryIcon ? styles.secondaryIconSpace : undefined,
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
                htmlFor={resolvedId}
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

        {((message || secondaryMessage) && !disabled) || reserveMessageSpace ? (
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
    </Stack>
  );
};
