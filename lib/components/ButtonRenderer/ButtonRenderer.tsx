import assert from 'assert';
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
import { useVirtualTouchable } from '../private/touchable/useVirtualTouchable';
import ActionsContext from '../Actions/ActionsContext';
import * as styleRefs from './ButtonRenderer.treat';

type ButtonSize = 'standard' | 'small';
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
  size: ButtonSize;
  tone: ButtonTone | undefined;
  weight: ButtonWeight;
  loading: boolean;
}>({
  size: 'standard',
  weight: 'regular',
  tone: undefined,
  loading: false,
});

interface ButtonChildrenProps {
  children: ReactNode;
}

const ButtonChildren = ({ children }: ButtonChildrenProps) => {
  const styles = useStyles(styleRefs);
  const { size, weight, tone, loading } = useContext(ButtonChildrenContext);
  const buttonVariant = useButtonVariant(weight, tone);
  const standardTouchableSpaceStyles = useTouchableSpace('standard');

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
        paddingX={size === 'small' ? 'small' : 'medium'}
        paddingY={size === 'small' ? 'xsmall' : undefined}
        pointerEvents="none"
        textAlign="center"
        overflow="hidden"
        userSelect="none"
        className={
          size === 'standard' ? standardTouchableSpaceStyles : undefined
        }
      >
        <Text
          baseline={false}
          weight="medium"
          tone={buttonVariant.textTone}
          size={size === 'small' ? 'small' : undefined}
        >
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
  size?: ButtonSize;
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
  size: sizeProp,
  tone,
  weight = 'regular',
  loading = false,
  children,
}: PrivateButtonRendererProps) => {
  const actionsContext = useContext(ActionsContext);

  assert(
    !(actionsContext && sizeProp),
    'You shouldn\'t set a "size" prop on Button elements nested inside Actions. Instead, set the size on the Actions element, e.g. <Actions size="small"><Button>...</Button></Actions>',
  );

  const styles = useStyles(styleRefs);
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const { background, boxShadow } = useButtonVariant(weight, tone);
  const virtualTouchableStyles = useVirtualTouchable({ xAxis: false });

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
      weight === 'weak' ? styles.weak : null,
      useBackgroundLightness() === 'dark' ? styles.inverted : null,
      size === 'small' ? virtualTouchableStyles : null,
    ],
  });

  const buttonChildrenContextValue = useMemo(
    () => ({ size, tone, weight, loading }),
    [size, tone, weight, loading],
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
