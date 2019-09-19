import React, { AllHTMLAttributes, ChangeEvent, ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box } from '../Box/Box';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { Text } from '../Text/Text';
import { IconTick } from '../icons';
import { useTouchableSpace } from '../../hooks/typography';
import * as styleRefs from './Toggle.treat';

type HTMLInputProps = AllHTMLAttributes<HTMLInputElement>;
type ChangeHandler = (value: boolean) => void;
export interface ToggleProps {
  id: NonNullable<HTMLInputProps['id']>;
  label: ReactNode;
  on: boolean;
  onChange: ChangeHandler;
  align?: 'left' | 'right';
}

const handleChange = (onChange: ChangeHandler) => (
  event: ChangeEvent<HTMLInputElement>,
) => {
  if (typeof onChange === 'function') {
    onChange(event.target.checked);
  }
};

export const Toggle = ({
  id,
  on,
  onChange,
  label,
  align = 'left',
}: ToggleProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection={align === 'right' ? 'rowReverse' : undefined}
    >
      <Box
        component="input"
        type="checkbox"
        id={id}
        checked={on}
        onChange={handleChange(onChange)}
        position="absolute"
        className={classnames(styles.realField, styles.fieldSize)}
      />
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        className={classnames(styles.slideContainer, styles.fieldSize)}
      >
        <Box position="absolute" width="full" className={styles.slideTrack}>
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
          background="input"
          boxShadow="borderStandard"
          transition="fast"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          className={styles.slider}
        >
          <FieldOverlay className={styles.icon}>
            <IconTick tone="formAccent" size="fill" />
          </FieldOverlay>
          <FieldOverlay
            variant="focus"
            borderRadius="full"
            className={styles.focusOverlay}
          />
          <FieldOverlay
            variant="hover"
            borderRadius="full"
            className={styles.hoverOverlay}
          />
        </Box>
      </Box>
      <Box
        component="label"
        htmlFor={id}
        paddingLeft={align === 'left' ? 'xsmall' : undefined}
        paddingRight={align === 'right' ? 'xsmall' : undefined}
        className={classnames(styles.label, useTouchableSpace('standard'))}
      >
        <Text baseline={false} weight={on ? 'strong' : undefined}>
          {label}
        </Text>
      </Box>
    </Box>
  );
};
