import React, {
  useContext,
  forwardRef,
  ReactNode,
  AllHTMLAttributes,
} from 'react';
import { touchableText } from '../../hooks/typography';
import { Box, BoxProps } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import {
  BackgroundContextValue,
  ColorContrastValue,
  useColorContrast,
} from '../Box/BackgroundContext';
import { Text, TextProps } from '../Text/Text';
import { BoxShadow } from '../../css/atoms/atomicProperties';
import ActionsContext from '../Actions/ActionsContext';
import * as styles from './Button.css';

export const buttonVariants = [
  'solid',
  'ghost',
  'soft',
  'transparent',
] as const;

type ButtonSize = 'standard' | 'small';
type ButtonTone = 'brandAccent' | 'critical' | 'neutral';
type ButtonVariant = typeof buttonVariants[number];
export interface ButtonStyleProps {
  size?: ButtonSize;
  tone?: ButtonTone;
  variant?: ButtonVariant;
  bleedY?: boolean;
  loading?: boolean;
}

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps extends ButtonStyleProps {
  id?: NativeButtonProps['id'];
  onClick?: NativeButtonProps['onClick'];
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  'aria-controls'?: NativeButtonProps['aria-controls'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
  tabIndex?: NativeButtonProps['tabIndex'];
  data?: DataAttributeMap;
}

type ButtonStyles = {
  textTone: TextProps['tone'];
  background:
    | ColorContrastValue<BackgroundContextValue>
    | BackgroundContextValue
    | undefined;
  backgroundHover:
    | ColorContrastValue<BackgroundContextValue>
    | BackgroundContextValue
    | undefined;
  backgroundActive:
    | ColorContrastValue<BackgroundContextValue>
    | BackgroundContextValue
    | undefined;
  boxShadow: ColorContrastValue<BoxShadow> | BoxShadow | undefined;
};

const neutralOverrideOnBrand =
  (
    lightBackground: BackgroundContextValue,
  ): ColorContrastValue<BackgroundContextValue> =>
  (contrast, background) => {
    if (contrast === 'light') {
      return lightBackground;
    }

    if (background === 'brand' || background === 'brandLight') {
      return 'brandLight';
    }

    if (
      background !== 'bodyDark' &&
      background !== 'surfaceDark' &&
      background !== 'neutral'
    ) {
      return lightBackground;
    }

    return 'neutral';
  };

const variants: Record<
  ButtonVariant,
  Record<'default' | ButtonTone, ButtonStyles>
> = {
  solid: {
    default: {
      textTone: undefined,
      background: 'formAccent',
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: undefined,
    },
    neutral: {
      textTone: undefined,
      background: { light: 'neutral', dark: 'neutralLight' },
      backgroundHover: { light: 'neutralSoftHover', dark: 'neutralHover' },
      backgroundActive: { light: 'neutralSoftActive', dark: 'neutralActive' },
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
  soft: {
    default: {
      textTone: 'formAccent',
      background: neutralOverrideOnBrand('formAccentSoft'),
      backgroundHover: neutralOverrideOnBrand('formAccentSoftHover'),
      backgroundActive: neutralOverrideOnBrand('formAccentSoftActive'),
      boxShadow: undefined,
    },
    neutral: {
      textTone: undefined,
      background: neutralOverrideOnBrand('neutralSoft'),
      backgroundHover: neutralOverrideOnBrand('neutralSoftHover'),
      backgroundActive: neutralOverrideOnBrand('neutralSoftActive'),
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: neutralOverrideOnBrand('brandAccentSoft'),
      backgroundHover: neutralOverrideOnBrand('brandAccentSoftHover'),
      backgroundActive: neutralOverrideOnBrand('brandAccentSoftActive'),
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      background: neutralOverrideOnBrand('criticalSoft'),
      backgroundHover: neutralOverrideOnBrand('criticalSoftHover'),
      backgroundActive: neutralOverrideOnBrand('criticalSoftActive'),
      boxShadow: undefined,
    },
  },
  transparent: {
    default: {
      textTone: 'formAccent',
      background: undefined,
      backgroundHover: neutralOverrideOnBrand('formAccentSoftHover'),
      backgroundActive: neutralOverrideOnBrand('formAccentSoftActive'),
      boxShadow: undefined,
    },
    neutral: {
      textTone: undefined,
      background: undefined,
      backgroundHover: neutralOverrideOnBrand('neutralSoftHover'),
      backgroundActive: neutralOverrideOnBrand('neutralSoftActive'),
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: undefined,
      backgroundHover: neutralOverrideOnBrand('brandAccentSoftHover'),
      backgroundActive: neutralOverrideOnBrand('brandAccentSoftActive'),
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      background: undefined,
      backgroundHover: neutralOverrideOnBrand('criticalSoftHover'),
      backgroundActive: neutralOverrideOnBrand('criticalSoftActive'),
      boxShadow: undefined,
    },
  },
  ghost: {
    default: {
      textTone: 'formAccent',
      background: undefined,
      backgroundHover: neutralOverrideOnBrand('formAccentSoftHover'),
      backgroundActive: neutralOverrideOnBrand('formAccentSoftActive'),
      boxShadow: {
        light: 'borderFormAccentLarge',
        dark: 'borderNeutralInvertedLarge',
      },
    },
    neutral: {
      textTone: 'neutral',
      background: undefined,
      backgroundHover: neutralOverrideOnBrand('neutralSoftHover'),
      backgroundActive: neutralOverrideOnBrand('neutralSoftActive'),
      boxShadow: {
        light: 'borderNeutralLarge',
        dark: 'borderNeutralInvertedLarge',
      },
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: undefined,
      backgroundHover: neutralOverrideOnBrand('brandAccentSoft'),
      backgroundActive: neutralOverrideOnBrand('brandAccentSoftHover'),
      boxShadow: {
        light: 'borderBrandAccentLarge',
        dark: 'borderBrandAccentLightLarge',
      },
    },
    critical: {
      textTone: 'critical',
      background: undefined,
      backgroundHover: neutralOverrideOnBrand('criticalSoft'),
      backgroundActive: neutralOverrideOnBrand('criticalSoftHover'),
      boxShadow: {
        light: 'borderCriticalLarge',
        dark: 'borderCriticalLightLarge',
      },
    },
  },
} as const;

const ButtonLoader = () => (
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
);

export const ButtonOverlays = ({
  variant = 'solid',
  size: sizeProp,
  tone,
  loading,
  children,
}: ButtonProps) => {
  const actionsContext = useContext(ActionsContext);
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone ?? 'default'];
  const colorConstrast = useColorContrast();

  return (
    <>
      <FieldOverlay
        borderRadius="large"
        variant="focus"
        onlyVisibleForKeyboardNavigation
        className={styles.focusOverlay}
      />
      <FieldOverlay
        borderRadius="large"
        background={
          stylesForVariant.backgroundHover &&
          typeof stylesForVariant.backgroundHover !== 'string'
            ? colorConstrast(stylesForVariant.backgroundHover)
            : stylesForVariant.backgroundHover
        }
        className={styles.hoverOverlay}
      />
      <FieldOverlay
        borderRadius="large"
        background={
          stylesForVariant.backgroundActive &&
          typeof stylesForVariant.backgroundActive !== 'string'
            ? colorConstrast(stylesForVariant.backgroundActive)
            : stylesForVariant.backgroundActive
        }
        className={styles.activeOverlay}
      />
      {stylesForVariant.boxShadow ? (
        <Box
          component="span"
          boxShadow={
            stylesForVariant.boxShadow &&
            typeof stylesForVariant.boxShadow !== 'string'
              ? colorConstrast(stylesForVariant.boxShadow)
              : stylesForVariant.boxShadow
          }
          borderRadius="large"
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          pointerEvents="none"
        />
      ) : null}
      <Box
        component="span"
        position="relative"
        display="block"
        overflow="hidden"
        pointerEvents="none"
        marginX={
          size === 'small' || variant === 'transparent' ? 'small' : 'medium'
        }
        paddingY={
          size === 'small' ? styles.constants.smallButtonPaddingSize : undefined
        }
        className={size === 'standard' ? touchableText.standard : undefined}
      >
        <Text
          tone={stylesForVariant.textTone}
          weight="medium"
          size={size}
          baseline={false}
        >
          {children}
          {loading ? <ButtonLoader /> : null}
        </Text>
      </Box>
    </>
  );
};

export const useButtonStyles = ({
  variant = 'solid',
  size: sizeProp,
  tone,
  bleedY,
  loading,
}: ButtonProps): BoxProps => {
  const actionsContext = useContext(ActionsContext);
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone ?? 'default'];
  const colorConstrast = useColorContrast();

  return {
    borderRadius: 'large',
    width: 'full',
    position: 'relative',
    display: 'block',
    transform: { active: 'touchable' },
    transition: 'touchable',
    outline: 'none',
    textAlign: 'center',
    userSelect: 'none',
    cursor: !loading ? 'pointer' : undefined,
    background:
      stylesForVariant.background &&
      typeof stylesForVariant.background !== 'string'
        ? colorConstrast(stylesForVariant.background)
        : stylesForVariant.background,
    className: [
      styles.root,
      size === 'small' ? virtualTouchable({ xAxis: false }) : null,
      size === 'standard' ? styles.standard : styles.small,
      bleedY ? styles.bleedY : null,
    ],
  } as const;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      children,
      size,
      tone,
      bleedY,
      variant,
      loading,
      type = 'button',
      id,
      tabIndex,
      'aria-controls': ariaControls,
      'aria-expanded': ariaExpanded,
      'aria-describedby': ariaDescribedBy,
      data,
    },
    ref,
  ) => (
    <Box
      component="button"
      ref={ref}
      id={id}
      type={type}
      tabIndex={tabIndex}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-describedby={ariaDescribedBy}
      onClick={onClick}
      disabled={loading}
      {...(data ? buildDataAttributes(data) : undefined)}
      {...useButtonStyles({ variant, tone, size, bleedY, loading })}
    >
      <ButtonOverlays
        variant={variant}
        tone={tone}
        size={size}
        loading={loading}
      >
        {children}
      </ButtonOverlays>
    </Box>
  ),
);

Button.displayName = 'Button';
