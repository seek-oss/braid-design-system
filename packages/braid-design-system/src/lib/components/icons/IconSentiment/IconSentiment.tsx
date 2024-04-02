import type React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconSentimentSvg } from './IconSentimentSvg';
import { IconSentimentNegativeSvg } from './IconSentimentNegativeSvg';
import { IconSentimentPositiveSvg } from './IconSentimentPositiveSvg';

type Emotion = 'positive' | 'negative' | 'neutral';

export type IconSentimentProps = UseIconProps & {
  emotion?: Emotion;
};

const emotions: Record<Emotion, React.ComponentType> = {
  positive: IconSentimentPositiveSvg,
  negative: IconSentimentNegativeSvg,
  neutral: IconSentimentSvg,
};

export const IconSentiment = ({
  emotion = 'neutral',
  ...props
}: IconSentimentProps) => {
  const iconProps = useIcon(props);

  return <Box component={emotions[emotion]} {...iconProps} />;
};
