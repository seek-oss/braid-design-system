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
type ButtonTone = 'brandAccent' | 'critical';
type ButtonWeight = 'weak' | 'regular' | 'strong';
type ButtonVariant = 'standard' | 'ghost' | 'soft' | 'transparent';
type ButtonStyles = {
  textTone: TextProps['tone'];
  background: UseBoxStylesProps['background'];
  backgroundHover: UseBoxStylesProps['background'];
  backgroundActive: UseBoxStylesProps['background'];
  boxShadow: UseBoxStylesProps['boxShadow'];
};

const buttonVariants: Record<
  ButtonVariant,
  Record<'default' | ButtonTone, ButtonStyles>
> = {
  standard: {
    default: {
      textTone: undefined,
      background: 'formAccent',
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: undefined,
    },
    brandAccent: {
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
  ghost: {
    default: {
      textTone: 'formAccent',
      background: undefined,
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: 'borderFormAccentLarge',
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: undefined,
      backgroundHover: 'brandAccentHover',
      backgroundActive: 'brandAccentActive',
      boxShadow: 'borderBrandAccentLarge',
    },
    critical: {
      textTone: 'critical',
      background: undefined,
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      boxShadow: 'borderCriticalLarge',
    },
  },
  soft: {
    default: {
      textTone: 'formAccent',
      background: 'formAccent',
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: 'brandAccent',
      backgroundHover: 'brandAccentHover',
      backgroundActive: 'brandAccentActive',
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      background: 'critical',
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      boxShadow: undefined,
    },
  },
  transparent: {
    default: {
      textTone: 'formAccent',
      background: undefined,
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: undefined,
      backgroundHover: 'brandAccentHover',
      backgroundActive: 'brandAccentActive',
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      background: undefined,
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      boxShadow: undefined,
    },
  },
};

const useButtonVariant = (variant: ButtonVariant, tone?: ButtonTone) => {
  if (useBackgroundLightness() === 'dark' && !tone && variant !== 'standard') {
    return {
      textTone: undefined,
      background: variant === 'soft' ? 'card' : undefined,
      backgroundHover: 'card',
      backgroundActive: 'card',
      boxShadow:
        variant === 'ghost' ? 'borderStandardInvertedLarge' : undefined,
    } as ButtonStyles;
  }

  return (
    buttonVariants[variant][tone ?? 'default'] ??
    buttonVariants[variant].default
  );
};

const ButtonChildrenContext = createContext<{
  size: ButtonSize;
  tone: ButtonTone | undefined;
  variant: ButtonVariant;
  loading: boolean;
}>({
  size: 'standard',
  variant: 'standard',
  tone: undefined,
  loading: false,
});

interface ButtonChildrenProps {
  children: ReactNode;
}

const ButtonChildren = ({ children }: ButtonChildrenProps) => {
  const styles = useStyles(styleRefs);
  const { size, variant, tone, loading } = useContext(ButtonChildrenContext);
  const buttonVariant = useButtonVariant(variant, tone);
  const standardTouchableSpaceStyles = useTouchableSpace('standard');

  return (
    <Fragment>
      <FieldOverlay
        background={buttonVariant.background}
        className={styles.backgroundOverlay}
        visible={Boolean(buttonVariant.background)}
      />
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
        paddingX={
          size === 'small' || variant === 'transparent' ? 'small' : 'medium'
        }
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
  variant?: ButtonVariant;
  /** @deprecated `weight` has been deprecated. Please choose a [variant](https://seek-oss.github.io/braid-design-system/components/Button) instead. */
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

type PropMapper = {
  weight?: ButtonWeight;
  tone?: ButtonTone;
  variant?: ButtonVariant;
};
const resolveToneAndVariant = ({
  weight,
  tone,
  variant = 'standard',
}: PropMapper): { variant: ButtonVariant; tone?: ButtonTone } => {
  if (weight === 'strong') {
    return {
      tone: tone || 'brandAccent',
      variant: 'standard',
    };
  }

  if (weight === 'regular') {
    return {
      tone,
      variant: 'standard',
    };
  }

  if (weight === 'weak') {
    return {
      tone,
      variant: 'ghost',
    };
  }

  return {
    tone,
    variant,
  };
};

export const PrivateButtonRenderer = ({
  size: sizeProp,
  tone: toneProp,
  variant: variantProp,
  weight,
  loading = false,
  children,
}: PrivateButtonRendererProps) => {
  const actionsContext = useContext(ActionsContext);

  assert(
    !(actionsContext && sizeProp),
    'You shouldn\'t set a "size" prop on Button elements nested inside Actions. Instead, set the size on the Actions element, e.g. <Actions size="small"><Button>...</Button></Actions>',
  );

  assert(
    !(weight && variantProp),
    'You shouldn\'t set a "weight" and "variant" prop together. Please migrate from "weight" to "variant".',
  );

  const { tone, variant } = resolveToneAndVariant({
    weight,
    tone: toneProp,
    variant: variantProp,
  });

  const styles = useStyles(styleRefs);
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const { background, boxShadow } = useButtonVariant(variant, tone);
  const virtualTouchableStyles = useVirtualTouchable({ xAxis: false });

  const buttonStyles = useBoxStyles({
    component: 'button',
    cursor: 'pointer',
    width: 'full',
    position: 'relative',
    display: 'block',
    borderRadius: 'standard',
    boxShadow,
    transform: 'touchable',
    transition: 'touchable',
    outline: 'none',
    className: [
      styles.root,
      variant === 'soft' ? styles.lightBg : null,
      variant !== 'standard' ? styles.lightHoverBg : null,
      useBackgroundLightness() === 'dark' ? styles.inverted : null,
      size === 'small' ? virtualTouchableStyles : null,
    ],
  });

  const buttonChildrenContextValue = useMemo(
    () => ({ size, tone, variant, loading }),
    [size, tone, variant, loading],
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

  return background && variant !== 'soft' ? (
    <BackgroundProvider value={background}>{button}</BackgroundProvider>
  ) : (
    button
  );
};

/** @deprecated `ButtonRenderer` has been deprecated. Use [Button](https://seek-oss.github.io/braid-design-system/components/Button) or [ButtonLink](https://seek-oss.github.io/braid-design-system/components/ButtonLink) instead. If your usage of `ButtonRenderer` is not covered by either of these, please let us know. */
export const ButtonRenderer = PrivateButtonRenderer;
