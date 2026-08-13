import type { FC } from 'react';

import { Box } from '../Box/Box';
import { IconContainer, type IconContainerProps } from '../icons/IconContainer';
import type { SVGProps } from '../icons/SVGTypes';

import * as styles from './ButtonLoader.css';

const LoaderSvg: FC<SVGProps> = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10a1 1 0 1 1-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8a1 1 0 1 1 0 2" />
  </svg>
);

export const ButtonLoader: FC<IconContainerProps> = (props) => (
  <IconContainer {...props}>
    {({ className, ...svgProps }) => (
      <Box
        component={LoaderSvg}
        className={[className, styles.loading]}
        {...svgProps}
      />
    )}
  </IconContainer>
);
