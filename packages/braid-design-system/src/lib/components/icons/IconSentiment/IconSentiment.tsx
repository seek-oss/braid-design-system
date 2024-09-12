import type React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconSentimentSvg } from './IconSentimentSvg';
import { IconSentimentNegativeSvg } from './IconSentimentNegativeSvg';
import { IconSentimentPositiveSvg } from './IconSentimentPositiveSvg';

type Feeling = 'positive' | 'negative' | 'neutral';

export type IconSentimentProps = UseIconProps & {
  feeling?: Feeling;
};

const feelingToIcon: Record<Feeling, React.ComponentType> = {
  positive: IconSentimentPositiveSvg,
  negative: IconSentimentNegativeSvg,
  neutral: IconSentimentSvg,
};

export const IconSentiment = ({
  feeling = 'neutral',
  ...props
}: IconSentimentProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = (
    <Box
      component={feelingToIcon[feeling] || feelingToIcon.neutral}
      {...iconProps}
    />
  );

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
