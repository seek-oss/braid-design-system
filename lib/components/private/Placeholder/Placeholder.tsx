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
  image?: string;
  imageSize?: string;
}

const resolveToPxIfUnitless = (value: string | number) =>
  typeof value === 'string' && /[0-9]$/.test(value) ? `${value}px` : value;

const PlaceholderContent = ({
  label,
  image,
}: Pick<PlaceholderProps, 'label' | 'image'>) => {
  if (image) {
    return null;
  }

  if (label) {
    return (
      <Box paddingX="xsmall" paddingY="xxsmall">
        <Text size="small" weight="strong" align="center" baseline={false}>
          <Box className={styles.label}>{label}</Box>
        </Text>
      </Box>
    );
  }

  return (
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
  );
};

export const Placeholder = ({
  label,
  width = 'auto',
  height = 120,
  shape = 'rectangle',
  image,
  imageSize = 'cover',
}: PlaceholderProps) => {
  const lightness = useBackgroundLightness();

  return (
    <Box
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={shape === 'round' ? 'full' : undefined}
      className={[
        wireframe.vanillaTheme,
        styles.lightTheme[lightness.lightMode],
        styles.darkTheme[lightness.darkMode],
        !image ? styles.box : undefined,
      ]}
      style={{
        width: resolveToPxIfUnitless(width),
        height: resolveToPxIfUnitless(height),
        background: image ? `url(${image}) no-repeat center center` : undefined,
        backgroundSize: imageSize,
      }}
    >
      <PlaceholderContent label={label} image={image} />
    </Box>
  );
};
