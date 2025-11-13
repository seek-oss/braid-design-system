import {
  type AllHTMLAttributes,
  type ChangeEvent,
  type ReactNode,
  forwardRef,
} from 'react';

import { useFallbackId } from '../../hooks/useFallbackId';
import { useBackgroundLightness } from '../Box/BackgroundContext';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Toggle.css';
import type { Size } from './Toggle.css';
import { virtualTouchable } from '../private/touchable/virtualTouchable.css';

type HTMLInputProps = AllHTMLAttributes<HTMLInputElement>;
type ChangeHandler = (value: boolean) => void;
export interface ToggleProps {
  id?: HTMLInputProps['id'];
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

    const resolvedId = useFallbackId(id);

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
        textAlign="left"
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        <Box
          position="relative"
          className={styles.bleedToCapHeight[size]}
          display="flex"
          alignItems="center"
        >
          <Box
            component="input"
            type="checkbox"
            id={resolvedId}
            checked={on}
            onChange={handleChange(onChange)}
            position="absolute"
            zIndex={1}
            cursor="pointer"
            opacity={0}
            className={[styles.realField, styles.fieldSize[size]]}
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
                variant="formAccent"
                borderRadius="full"
                className={!on ? styles.hoverOverlay : undefined}
              />
            </Box>
          </Box>
        </Box>
        <Box
          component="label"
          htmlFor={resolvedId}
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
            baseline
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
