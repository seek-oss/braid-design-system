import assert from 'assert';
import clsx from 'clsx';
import dedent from 'dedent';
import React, {
  createContext,
  useContext,
  useMemo,
  Fragment,
  ReactNode,
  CSSProperties,
  ComponentType,
} from 'react';
import { Atoms, atoms } from '../../css/atoms/atoms';
import {
  BackgroundProvider,
  BackgroundVariant,
  useBackgroundLightness,
} from '../Box/BackgroundContext';
import { Box, BoxProps } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { touchableText } from '../../hooks/typography';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import ActionsContext from '../Actions/ActionsContext';
import * as styles from './ButtonRenderer.css';

export const buttonVariants = [
  'solid',
  'ghost',
  'soft',
  'transparent',
] as const;

export const buttonWeights = ['weak', 'regular', 'strong'] as const;

const borderRadius = 'large';

type ButtonSize = 'standard' | 'small';
type ButtonTone = 'brandAccent' | 'critical';
type ButtonWeight = typeof buttonWeights[number];
type ButtonVariant = typeof buttonVariants[number];
type ButtonStyles = {
  textTone: TextProps['tone'];
  backgroundContext: BackgroundVariant | undefined;
  backgroundClassName: BoxProps['className'];
  backgroundHoverClassName: BoxProps['className'];
  backgroundActiveClassName: BoxProps['className'];
  boxShadow: Atoms['boxShadow'];
};

const buttonVariantStyles: Record<
  ButtonVariant,
  Record<'default' | ButtonTone, ButtonStyles>
> = {
  solid: {
    default: {
      textTone: undefined,
      backgroundContext: 'formAccent',
      backgroundClassName: atoms({ background: 'formAccent' }),
      backgroundHoverClassName: atoms({ background: 'formAccentHover' }),
      backgroundActiveClassName: atoms({ background: 'formAccentActive' }),
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: undefined,
      backgroundContext: 'brandAccent',
      backgroundClassName: atoms({ background: 'brandAccent' }),
      backgroundHoverClassName: atoms({ background: 'brandAccentHover' }),
      backgroundActiveClassName: atoms({ background: 'brandAccentActive' }),
      boxShadow: undefined,
    },
    critical: {
      textTone: undefined,
      backgroundContext: 'critical',
      backgroundClassName: atoms({ background: 'critical' }),
      backgroundHoverClassName: atoms({ background: 'criticalHover' }),
      backgroundActiveClassName: atoms({ background: 'criticalActive' }),
      boxShadow: undefined,
    },
  },
  ghost: {
    default: {
      textTone: 'formAccent',
      backgroundContext: undefined,
      backgroundClassName: undefined,
      backgroundHoverClassName: atoms({ background: 'formAccentSoft' }),
      backgroundActiveClassName: atoms({
        background: 'formAccentSoftActive',
      }),
      boxShadow: 'borderFormAccentLarge',
    },
    brandAccent: {
      textTone: 'brandAccent',
      backgroundContext: undefined,
      backgroundClassName: undefined,
      backgroundHoverClassName: atoms({ background: 'brandAccentSoft' }),
      backgroundActiveClassName: atoms({
        background: 'brandAccentSoftActive',
      }),
      boxShadow: 'borderBrandAccentLarge',
    },
    critical: {
      textTone: 'critical',
      backgroundContext: undefined,
      backgroundClassName: undefined,
      backgroundHoverClassName: atoms({ background: 'criticalSoft' }),
      backgroundActiveClassName: atoms({ background: 'criticalSoftActive' }),
      boxShadow: 'borderCriticalLarge',
    },
  },
  soft: {
    default: {
      textTone: 'formAccent',
      backgroundContext: 'formAccentSoft',
      backgroundClassName: atoms({ background: 'formAccentSoft' }),
      backgroundHoverClassName: atoms({ background: 'formAccentSoftHover' }),
      backgroundActiveClassName: atoms({
        background: 'formAccentSoftActive',
      }),
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      backgroundContext: 'brandAccentSoft',
      backgroundClassName: atoms({ background: 'brandAccentSoft' }),
      backgroundHoverClassName: atoms({
        background: 'brandAccentSoftHover',
      }),
      backgroundActiveClassName: atoms({
        background: 'brandAccentSoftActive',
      }),
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      backgroundContext: 'criticalSoft',
      backgroundClassName: atoms({ background: 'criticalSoft' }),
      backgroundHoverClassName: atoms({ background: 'criticalSoftHover' }),
      backgroundActiveClassName: atoms({ background: 'criticalSoftActive' }),
      boxShadow: undefined,
    },
  },
  transparent: {
    default: {
      textTone: 'formAccent',
      backgroundContext: undefined,
      backgroundClassName: undefined,
      backgroundHoverClassName: atoms({ background: 'formAccentSoft' }),
      backgroundActiveClassName: atoms({
        background: 'formAccentSoftActive',
      }),
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      backgroundContext: undefined,
      backgroundClassName: undefined,
      backgroundHoverClassName: atoms({ background: 'brandAccentSoft' }),
      backgroundActiveClassName: atoms({
        background: 'brandAccentSoftActive',
      }),
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      backgroundContext: undefined,
      backgroundClassName: undefined,
      backgroundHoverClassName: atoms({ background: 'criticalSoft' }),
      backgroundActiveClassName: atoms({ background: 'criticalSoftActive' }),
      boxShadow: undefined,
    },
  },
};

const useButtonVariant = (variant: ButtonVariant, tone?: ButtonTone) => {
  if (useBackgroundLightness() === 'dark' && !tone && variant !== 'solid') {
    return {
      textTone: undefined,
      backgroundClassName:
        variant === 'soft' ? styles.invertedBackgrounds.soft : undefined,
      backgroundHoverClassName: styles.invertedBackgrounds.hover,
      backgroundActiveClassName: styles.invertedBackgrounds.active,
      boxShadow:
        variant === 'ghost' ? 'borderStandardInvertedLarge' : undefined,
    } as ButtonStyles;
  }

  return (
    buttonVariantStyles[variant][tone ?? 'default'] ??
    buttonVariantStyles[variant].default
  );
};

const ButtonChildrenContext = createContext<{
  size: ButtonSize;
  tone: ButtonTone | undefined;
  variant: ButtonVariant;
  loading: boolean;
}>({
  size: 'standard',
  variant: 'solid',
  tone: undefined,
  loading: false,
});

interface ButtonChildrenProps {
  children: ReactNode;
}

const ButtonChildren = ({ children }: ButtonChildrenProps) => {
  const { size, variant, tone, loading } = useContext(ButtonChildrenContext);
  const buttonVariant = useButtonVariant(variant, tone);

  return (
    <Fragment>
      <FieldOverlay
        borderRadius={borderRadius}
        className={buttonVariant.backgroundClassName}
        visible={Boolean(buttonVariant.backgroundClassName)}
      />
      <FieldOverlay
        borderRadius={borderRadius}
        variant="focus"
        onlyVisibleForKeyboardNavigation
        className={styles.focusOverlay}
      />
      <FieldOverlay
        borderRadius={borderRadius}
        className={[
          buttonVariant.backgroundHoverClassName,
          styles.hoverOverlay,
        ]}
      />
      <FieldOverlay
        borderRadius={borderRadius}
        className={[
          buttonVariant.backgroundActiveClassName,
          styles.activeOverlay,
        ]}
      />
      {buttonVariant.boxShadow ? (
        <Box
          boxShadow={buttonVariant.boxShadow}
          borderRadius={borderRadius}
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
        />
      ) : null}
      <Box
        position="relative"
        paddingX={
          size === 'small' || variant === 'transparent' ? 'small' : 'medium'
        }
        paddingY={
          size === 'small' ? styles.constants.smallButtonPaddingSize : undefined
        }
        pointerEvents="none"
        textAlign="center"
        overflow="hidden"
        userSelect="none"
        className={size === 'standard' ? touchableText.standard : undefined}
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
  bleedY?: boolean;
  /** @deprecated The `weight` prop has been deprecated. Please choose a [variant](https://seek-oss.github.io/braid-design-system/components/Button#variants) instead. */
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

const resolveToneAndVariant = ({
  weight,
  tone,
  variant = 'solid',
}: {
  weight?: ButtonWeight;
  tone?: ButtonTone;
  variant?: ButtonVariant;
}): { variant: ButtonVariant; tone?: ButtonTone } => {
  if (weight === 'strong') {
    return {
      tone: tone || 'brandAccent',
      variant: 'solid',
    };
  }

  if (weight === 'regular') {
    return {
      tone,
      variant: 'solid',
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
  bleedY,
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

  if (process.env.NODE_ENV !== 'production') {
    if (weight && /^(strong|regular|weak)$/.test(weight)) {
      const needsTone = Boolean(tone);
      const needsVariant = variant && variant !== 'solid';

      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          The \`weight\` prop has been deprecated.${
            needsVariant || needsTone
              ? ` Please migrate to${needsVariant ? ` \`variant\`` : ''}${
                  needsTone ? `${needsVariant ? ' and' : ''} \`tone\`` : ''
                }.`
              : ` You can migrate by removing the \`weight="${weight}"\` prop.`
          }
          %c  -<Button weight="${weight}">...</Button>
          %c  +<Button${needsTone ? ` tone="${tone}"` : ''}${
          needsVariant ? ` variant="${variant}"` : ''
        }>...</Button>
        `,
        'color: red',
        'color: green',
      );
    }
  }

  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const { backgroundContext } = useButtonVariant(variant, tone);

  const buttonStyles = clsx(
    atoms({
      reset: 'button',
      cursor: !loading ? 'pointer' : undefined,
      width: 'full',
      position: 'relative',
      display: 'block',
      borderRadius,
      transform: { active: 'touchable' },
      transition: 'touchable',
      outline: 'none',
    }),
    styles.root,
    size === 'small' ? virtualTouchable({ xAxis: false }) : null,
    size === 'standard' ? styles.standard : styles.small,
    bleedY ? styles.bleedY : null,
  );

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

  return backgroundContext ? (
    <BackgroundProvider value={backgroundContext}>{button}</BackgroundProvider>
  ) : (
    button
  );
};

/** @deprecated `ButtonRenderer` has been deprecated. Use [Button](https://seek-oss.github.io/braid-design-system/components/Button) or [ButtonLink](https://seek-oss.github.io/braid-design-system/components/ButtonLink) instead. If your usage of `ButtonRenderer` is not covered by either of these, please let us know. */
export const ButtonRenderer = PrivateButtonRenderer;
