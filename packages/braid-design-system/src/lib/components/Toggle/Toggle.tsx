import React, {
  type AllHTMLAttributes,
  type ChangeEvent,
  type ReactNode,
  forwardRef,
} from 'react';
import { Box } from '../Box/Box';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { Text } from '../Text/Text';
import { useBackgroundLightness } from '../Box/BackgroundContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { virtualTouchable } from '../private/touchable/virtualTouchable.css';
import * as styles from './Toggle.css';
import type { Size } from './Toggle.css';
import dedent from 'dedent';

type HTMLInputProps = AllHTMLAttributes<HTMLInputElement>;
type ChangeHandler = (value: boolean) => void;
export interface ToggleProps {
  id: NonNullable<HTMLInputProps['id']>;
  label: ReactNode;
  on: boolean;
  onChange: ChangeHandler;
  align?: 'left' | 'right' | 'justify';
  togglePosition?: 'leading' | 'trailing';
  size?: Size;
  /** @deprecated `bleedY` is enabled by default, and configuration will be removed in a future version */
  bleedY?: boolean;
  data?: DataAttributeMap;
}

const handleChange =
  (onChange: ChangeHandler) => (event: ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(event.target.checked);
    }
  };

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      id,
      on,
      onChange,
      label,
      align = 'left',
      togglePosition,
      size = 'standard',
      bleedY: _bleedY,
      data,
      ...restProps
    },
    forwardedRef,
  ) => {
    const lightness = useBackgroundLightness();

    if (process.env.NODE_ENV !== 'production') {
      if (typeof _bleedY !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn(
          dedent`
            ${
              _bleedY
                ? `The "bleedY" prop has been deprecated and will be removed in a future version. "bleedY" is enabled by default, so this prop can safely be removed with no layout impact.`
                : `The "bleedY" prop has been deprecated and will be removed in a future version. "bleedY" is now enabled by default. Please remove the "bleedY" prop and optimize your layout.`
            }`,
        );
      }
    }

    const bleedY = _bleedY ?? true;

    const defaultTogglePosition = align === 'left' ? 'leading' : 'trailing';
    const appliedTogglePosition = togglePosition || defaultTogglePosition;

    const alignToEnd =
      (align === 'left' && appliedTogglePosition === 'trailing') ||
      (align !== 'left' && appliedTogglePosition === 'leading');

    return (
      <Box
        position="relative"
        zIndex={0}
        display="flex"
        flexDirection={
          appliedTogglePosition === 'trailing' ? 'rowReverse' : 'row'
        }
        justifyContent={alignToEnd ? 'flexEnd' : undefined}
        className={styles.root}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        <Box
          position="relative"
          className={bleedY && styles.bleedToCapHeight[size]}
          display={bleedY ? 'flex' : undefined}
          alignItems={bleedY ? 'center' : undefined}
        >
          <Box
            component="input"
            type="checkbox"
            id={id}
            checked={on}
            onChange={handleChange(onChange)}
            position="absolute"
            zIndex={1}
            cursor="pointer"
            opacity={0}
            className={[
              styles.realField,
              !bleedY && styles.realFieldPosition[size],
              styles.fieldSize[size],
            ]}
            ref={forwardedRef}
          />
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            flexShrink={0}
            className={[
              styles.slideContainer,
              styles.slideContainerSize[size],
              styles.fieldSize[size],
            ]}
          >
            <Box
              position="absolute"
              width="full"
              overflow="hidden"
              borderRadius="full"
              className={[
                styles.slideTrack[size],
                styles.slideTrackMask,
                styles.slideTrackBgLightMode[lightness.lightMode],
                styles.slideTrackBgDarkMode[lightness.darkMode],
              ]}
            >
              <Box
                position="absolute"
                width="full"
                height="full"
                background="formAccent"
                transition="fast"
                className={styles.slideTrackSelected}
              />
            </Box>
            <Box
              position="absolute"
              background="surface"
              transition="fast"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              className={styles.slider[size]}
            >
              <FieldOverlay
                variant={on ? 'formAccent' : 'default'}
                borderRadius="full"
                visible
                className={{
                  [styles.sliderThumbOutlineFix]: true,
                  [styles.hideBorderOnDarkBackgroundInLightMode]:
                    lightness.lightMode === 'dark',
                }}
              />
              <FieldOverlay
                variant="focus"
                borderRadius="full"
                className={styles.focusOverlay}
              />
              <FieldOverlay
                variant="formAccent"
                borderRadius="full"
                className={!on ? styles.hoverOverlay : undefined}
              />
            </Box>
          </Box>
        </Box>
        <Box
          component="label"
          htmlFor={id}
          paddingLeft={
            appliedTogglePosition === 'trailing' ? undefined : 'xsmall'
          }
          paddingRight={
            appliedTogglePosition === 'leading' ? undefined : 'xsmall'
          }
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flexGrow={align === 'justify' ? 1 : undefined}
          userSelect="none"
          cursor="pointer"
          className={virtualTouchable}
        >
          <Text
            baseline={bleedY}
            weight={on ? 'strong' : undefined}
            size={size}
            align={
              align === 'justify' && appliedTogglePosition === 'leading'
                ? 'right'
                : undefined
            }
          >
            {label}
          </Text>
        </Box>
      </Box>
    );
  },
);
