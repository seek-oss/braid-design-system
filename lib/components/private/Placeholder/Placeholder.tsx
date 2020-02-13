import React from 'react';
import { useStyles } from 'sku/react-treat';
import { BraidProvider, Box, Text } from '../../';
import { useBackgroundLightness } from '../../Box/BackgroundContext';
import { useBoxStyles } from '../../Box/useBoxStyles';
import wireframe from '../../../themes/wireframe';
import * as styleRefs from './Placeholder.treat';

export interface PlaceholderProps {
  height: string | number;
  width?: string | number;
  label?: string;
  shape?: 'rectangle' | 'round';
}

export const Placeholder = ({
  label,
  width = 'auto',
  height = 120,
  shape = 'rectangle',
}: PlaceholderProps) => {
  const styles = useStyles(styleRefs);
  const backgroundLightness = useBackgroundLightness();

  const svgStyles = useBoxStyles({
    component: 'svg',
    position: 'absolute',
    width: 'full',
    height: 'full',
  });

  return (
    <BraidProvider theme={wireframe} styleBody={false}>
      <Box
        position="relative"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius={shape === 'round' ? 'full' : undefined}
        className={styles.box[backgroundLightness]}
        style={{ width, height }}
      >
        {label ? (
          <Box paddingX="xsmall" paddingY="xxsmall">
            <Text size="small" weight="strong" align="center" baseline={false}>
              <Box className={styles.label[backgroundLightness]}>{label}</Box>
            </Text>
          </Box>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className={svgStyles}>
            <line
              className={styles.line[backgroundLightness]}
              x1={0}
              y1={0}
              x2="100%"
              y2="100%"
            />
            <line
              className={styles.line[backgroundLightness]}
              x1="100%"
              y1={0}
              x2={0}
              y2="100%"
            />
          </svg>
        )}
      </Box>
    </BraidProvider>
  );
};
