import type React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
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
  const iconProps = useIcon(props);

  return <Box component={feelingToIcon[feeling]} {...iconProps} />;
};
