import React, {
  createContext,
  useContext,
  useMemo,
  Fragment,
  ReactNode,
  CSSProperties,
  ComponentType,
} from 'react';
import { useStyles } from 'sku/react-treat';
import { useBoxStyles, UseBoxStylesProps } from '../Box/useBoxStyles';
import {
  BackgroundProvider,
  useBackgroundLightness,
} from '../Box/BackgroundContext';
import { Box } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { useTouchableSpace } from '../../hooks/typography';
import * as styleRefs from './ButtonRenderer.treat';

type ButtonTone = 'critical';
type ButtonWeight = 'weak' | 'regular' | 'strong';
type ButtonVariant = 'strong' | 'regular' | 'weak' | 'weakInverted';
const buttonVariants: Record<
  ButtonVariant,
  Record<
    'default' | ButtonTone,
    {
      textTone: TextProps['tone'];
      background: UseBoxStylesProps['background'];
      backgroundHover: UseBoxStylesProps['background'];
      backgroundActive: UseBoxStylesProps['background'];
      boxShadow: UseBoxStylesProps['boxShadow'];
    }
  >
> = {
  strong: {
    default: {
      textTone: undefined,
      background: 'brandAccent',
      backgroundHover: 'brandAccentHover',
      backgroundActive: 'brandAccentActive',
      boxShadow: undefined,
    },
    critical: {
      textTone: undefined,
      background: 'critical',
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      boxShadow: undefined,
    },
  },
  regular: {
    default: {
      textTone: undefined,
      background: 'formAccent',
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: undefined,
    },
    critical: {
      textTone: undefined,
      background: 'critical',
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      boxShadow: undefined,
    },
  },
  weak: {
    default: {
      textTone: 'formAccent',
      background: undefined,
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: 'borderFormAccentLarge',
    },
    critical: {
      textTone: 'critical',
      background: undefined,
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      boxShadow: 'borderCriticalLarge',
    },
  },
  weakInverted: {
    default: {
      textTone: undefined,
      background: undefined,
      backgroundHover: 'card',
      backgroundActive: 'card',
      boxShadow: 'borderStandardInvertedLarge',
    },
    critical: {
      textTone: undefined,
      background: undefined,
      backgroundHover: 'card',
      backgroundActive: 'card',
      boxShadow: 'borderStandardInvertedLarge',
    },
  },
};

const useButtonVariant = (weight: ButtonWeight, tone?: ButtonTone) => {
  const variantName =
    useBackgroundLightness() === 'dark' && weight === 'weak'
      ? 'weakInverted'
      : weight;

  return (
    buttonVariants[variantName][tone ?? 'default'] ??
    buttonVariants[variantName].default
  );
};

const ButtonChildrenContext = createContext<{
  tone: ButtonTone | undefined;
  weight: ButtonWeight;
  loading: boolean;
}>({ weight: 'regular', tone: undefined, loading: false });

interface ButtonChildrenProps {
  children: ReactNode;
}

const ButtonChildren = ({ children }: ButtonChildrenProps) => {
  const styles = useStyles(styleRefs);
  const { weight, tone, loading } = useContext(ButtonChildrenContext);
  const buttonVariant = useButtonVariant(weight, tone);

  return (
    <Fragment>
      <FieldOverlay
        variant="focus"
        onlyVisibleForKeyboardNavigation
        className={styles.focusOverlay}
      />
      <FieldOverlay
        background={buttonVariant.backgroundHover}
        className={styles.hoverOverlay}
      />
      <FieldOverlay
        background={buttonVariant.backgroundActive}
        className={styles.activeOverlay}
      />
      <Box
        position="relative"
        paddingX="gutter"
        pointerEvents="none"
        textAlign="center"
        overflow="hidden"
        userSelect="none"
        className={useTouchableSpace('standard')}
      >
        <Text baseline={false} weight="medium" tone={buttonVariant.textTone}>
          {children}
          {loading ? (
            <Box aria-hidden component="span" display="inlineBlock">
              <Box component="span" className={styles.loadingDot}>
                .
              </Box>
              <Box component="span" className={styles.loadingDot}>
                .
              </Box>
              <Box component="span" className={styles.loadingDot}>
                .
              </Box>
            </Box>
          ) : null}
        </Text>
      </Box>
    </Fragment>
  );
};

export interface PrivateButtonRendererProps {
  tone?: ButtonTone;
  weight?: ButtonWeight;
  loading?: boolean;
  children: (
    ButtonChildren: ComponentType<ButtonChildrenProps>,
    styleProps: {
      style: CSSProperties;
      className: string;
    },
  ) => ReactNode;
}

export const PrivateButtonRenderer = ({
  tone,
  weight = 'regular',
  loading = false,
  children,
}: PrivateButtonRendererProps) => {
  const styles = useStyles(styleRefs);
  const isWeak = weight === 'weak';
  const { background, boxShadow } = useButtonVariant(weight, tone);

  const buttonStyles = useBoxStyles({
    component: 'button',
    cursor: 'pointer',
    width: 'full',
    position: 'relative',
    display: 'block',
    borderRadius: 'standard',
    boxShadow,
    background,
    transform: 'touchable',
    transition: 'touchable',
    outline: 'none',
    className: [
      styles.root,
      isWeak ? styles.weak : null,
      useBackgroundLightness() === 'dark' ? styles.inverted : null,
    ],
  });

  const buttonChildrenContextValue = useMemo(
    () => ({ tone, weight, loading }),
    [tone, weight, loading],
  );

  const buttonProps = {
    style: {},
    className: buttonStyles,
  };

  const button = (
    <ButtonChildrenContext.Provider value={buttonChildrenContextValue}>
      {children(ButtonChildren, buttonProps)}
    </ButtonChildrenContext.Provider>
  );

  return background ? (
    <BackgroundProvider value={background}>{button}</BackgroundProvider>
  ) : (
    button
  );
};

/** @deprecated `ButtonRenderer` has been deprecated. Use [Button](https://seek-oss.github.io/braid-design-system/components/Button) or [ButtonLink](https://seek-oss.github.io/braid-design-system/components/ButtonLink) instead. If your usage of `ButtonRenderer` is not covered by either of these, please let us know. */
export const ButtonRenderer = PrivateButtonRenderer;
