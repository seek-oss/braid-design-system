import React, {
  type AllHTMLAttributes,
  type ChangeEvent,
  type ReactNode,
  forwardRef,
} from 'react';
import { Box } from '../Box/Box';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { Text } from '../Text/Text';
import { IconTick } from '../icons';
import { useBackgroundLightness } from '../Box/BackgroundContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { virtualTouchable } from '../private/touchable/virtualTouchable.css';
import * as styles from './Toggle.css';
import type { Size } from './Toggle.css';

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
      data,
      ...restProps
    },
    forwardedRef,
  ) => {
    const lightness = useBackgroundLightness();

    const defaultTogglePosition = align === 'left' ? 'leading' : 'trailing';
    const appliedTogglePosition = togglePosition || defaultTogglePosition;

    const alignToEnd =
      (align === 'left' && appliedTogglePosition === 'trailing') ||
      (align === 'justify' && appliedTogglePosition === 'leading') ||
      (align === 'right' && appliedTogglePosition === 'leading');

    return (
      <Box
        zIndex={0}
        display="flex"
        flexDirection={
          appliedTogglePosition === 'trailing' ? 'rowReverse' : 'row'
        }
        justifyContent={alignToEnd ? 'flexEnd' : undefined}
        className={styles.root}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        <Box position="relative">
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
              styles.realFieldPosition[size],
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
                  [styles.hideBorderOnDarkBackgroundInLightMode]:
                    lightness.lightMode === 'dark',
                }}
              />
              <FieldOverlay className={styles.icon}>
                <IconTick tone="formAccent" size="fill" />
              </FieldOverlay>
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
          // Todo - Replace paddings with flex-gap after browser policy change
          /*
          Apply padding by default to prevent padding disappearing
          during partial completion of togglePosition and align props in Playroom
          */
          paddingLeft={
            appliedTogglePosition === 'trailing' ? undefined : 'xsmall'
          }
          paddingRight={
            appliedTogglePosition === 'leading' ? undefined : 'xsmall'
          }
          flexGrow={align === 'justify' ? 1 : undefined}
          userSelect="none"
          cursor="pointer"
          className={[styles.label[size], virtualTouchable]}
        >
          <Text
            baseline={false}
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
