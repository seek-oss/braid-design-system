import clsx from 'clsx';
import { useContext } from 'react';
import assert from 'tiny-invariant';

import type { PublicBoxProps } from '../../components/Box/Box';
import HeadingContext from '../../components/Heading/HeadingContext';
import { TextContext } from '../../components/Text/TextContext';
import { iconInlineSize } from '../../components/icons/IconRenderer';
import type { OptionalTitle } from '../../components/icons/SVGTypes';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../../components/private/buildDataAttributes';
import { atoms } from '../../css/atoms/atoms';

import * as styles from './icon.css';
import { lineHeightContainer } from '../../css/lineHeightContainer.css';
import * as typographyStyles from '../../css/typography.css';

type IconSize = keyof typeof typographyStyles.textSizeUntrimmed | 'fill';

interface IconSizeProps {
  size?: Exclude<IconSize, 'fill'>;
  crop?: boolean;
}
export const iconSize = ({
  size = 'standard',
  crop = false,
}: IconSizeProps = {}) =>
  clsx(styles.size, typographyStyles.textSizeUntrimmed[size], {
    [styles.cropToTextSize]: crop,
  });

export interface IconContainerSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const iconContainerSize = (
  size: Exclude<IconSize, 'fill'> = 'standard',
) => clsx(styles.blockWidths[size], lineHeightContainer[size]);

export type UseIconProps = {
  size?: IconSize;
  tone?: keyof typeof typographyStyles.tone;
  alignY?: 'uppercase' | 'lowercase';
  data?: DataAttributeMap;
} & OptionalTitle;

interface PrivateIconProps {
  verticalCorrection?: {
    lowercase: keyof typeof styles.alignY.lowercase;
    uppercase: keyof typeof styles.alignY.uppercase;
  };
}

const defaultVerticalCorrection = {
  uppercase: 'none',
  lowercase: 'none',
} as const;

export default (
  { size, tone, alignY, data, title, titleId, ...restProps }: UseIconProps,
  { verticalCorrection = defaultVerticalCorrection }: PrivateIconProps = {},
  // TODO: COLORMODE RELEASE
  // Revert to BoxProps
): { isInline: boolean; svgProps: PublicBoxProps } => {
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const resolvedTone =
    typographyStyles.tone[tone || textContext?.tone || 'neutral'];
  const toneClass =
    tone || (!headingContext && !textContext?.tone) ? resolvedTone : undefined;
  const isInline = Boolean(textContext || headingContext);
  const a11yProps = title
    ? { title, titleId, role: 'img' }
    : { 'aria-hidden': true };

  assert(
    !(size && isInline),
    `Specifying a custom \`size\` for an \`Icon\` inside the context of a \`<${
      textContext ? 'Text' : 'Heading'
    }>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/${
      textContext ? 'Text' : 'Heading'
    }`,
  );

  assert(
    !(alignY && !isInline),
    `Specifying \`alignY\` for an \`Icon\` outside of a text component is invalid.`,
  );

  if (size === 'fill') {
    return {
      isInline: false,
      svgProps: {
        width: 'full',
        height: 'full',
        display: 'block',
        className: toneClass,
        ...buildDataAttributes({ data, validateRestProps: restProps }),
        ...a11yProps,
      },
    };
  }

  return {
    isInline,
    svgProps: {
      className: [
        toneClass,
        isInline
          ? [
              iconInlineSize({
                alignY: alignY || 'uppercase',
                verticalCorrection: verticalCorrection[alignY || 'uppercase'],
              }),
            ]
          : [
              atoms({
                display: 'block',
              }),
              iconContainerSize(size),
            ],
      ],
      ...buildDataAttributes({ data, validateRestProps: restProps }),
      ...a11yProps,
    },
  };
};
