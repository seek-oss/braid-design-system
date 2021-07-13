import React, { ReactNode } from 'react';
import { Box, Text } from '../../';
import { useBackgroundLightness } from '../../Box/BackgroundContext';
import { atoms } from '../../../css/atoms/atoms';
import wireframe from '../../../themes/wireframe';
import * as styles from './Placeholder.css';

export interface PlaceholderProps {
  height: string | number;
  width?: string | number;
  label?: ReactNode;
  shape?: 'rectangle' | 'round';
}

const resolveToPxIfUnitless = (value: string | number) =>
  typeof value === 'string' && /[0-9]$/.test(value) ? `${value}px` : value;

export const Placeholder = ({
  label,
  width = 'auto',
  height = 120,
  shape = 'rectangle',
}: PlaceholderProps) => {
  const theme =
    useBackgroundLightness() === 'light' ? styles.lightTheme : styles.darkTheme;

  return (
    <Box
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={shape === 'round' ? 'full' : undefined}
      className={[wireframe.vanillaTheme, theme, styles.box]}
      style={{
        width: resolveToPxIfUnitless(width),
        height: resolveToPxIfUnitless(height),
      }}
    >
      {label ? (
        <Box paddingX="xsmall" paddingY="xxsmall">
          <Text size="small" weight="strong" align="center" baseline={false}>
            <Box className={styles.label}>{label}</Box>
          </Text>
        </Box>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={atoms({
            reset: 'svg',
            position: 'absolute',
            width: 'full',
            height: 'full',
          })}
        >
          <line className={styles.line} x1={0} y1={0} x2="100%" y2="100%" />
          <line className={styles.line} x1="100%" y1={0} x2={0} y2="100%" />
        </svg>
      )}
    </Box>
  );
};
