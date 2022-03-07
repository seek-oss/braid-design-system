import React, {
  useContext,
  forwardRef,
  ReactNode,
  AllHTMLAttributes,
} from 'react';
import { touchableText } from '../../hooks/typography';
import { Box, BoxBackgroundVariant, BoxProps } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import {
  ColorContrastValue,
  useBackgroundLightness,
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
  onKeyUp?: NativeButtonProps['onKeyUp'];
  onKeyDown?: NativeButtonProps['onKeyDown'];
  'aria-haspopup'?: NativeButtonProps['aria-haspopup'];
  'aria-controls'?: NativeButtonProps['aria-controls'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
  tabIndex?: NativeButtonProps['tabIndex'];
  data?: DataAttributeMap;
}

type ButtonStyles = {
  textTone: TextProps['tone'];
  background:
    | ColorContrastValue<BoxBackgroundVariant>
    | BoxBackgroundVariant
    | undefined;
  backgroundHover:
    | ColorContrastValue<BoxBackgroundVariant>
    | BoxBackgroundVariant
    | undefined;
  backgroundActive:
    | ColorContrastValue<BoxBackgroundVariant>
    | BoxBackgroundVariant
    | undefined;
  boxShadow: BoxShadow | undefined;
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
    neutral: {
      textTone: undefined,
      background: { light: 'neutral', dark: 'neutralSoft' },
      backgroundHover: { light: 'neutralSoftHover', dark: 'neutralHover' },
      backgroundActive: { light: 'neutralSoftActive', dark: 'neutralActive' },
      boxShadow: undefined,
    },
  },
  soft: {
    default: {
      textTone: 'formAccent',
      background: { light: 'formAccentSoft', dark: 'customDark' },
      backgroundHover: 'formAccentSoftHover',
      backgroundActive: 'formAccentSoftActive',
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: { light: 'brandAccentSoft', dark: 'customDark' },
      backgroundHover: 'brandAccentSoftHover',
      backgroundActive: 'brandAccentSoftActive',
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      background: { light: 'criticalSoft', dark: 'customDark' },
      backgroundHover: 'criticalSoftHover',
      backgroundActive: 'criticalSoftActive',
      boxShadow: undefined,
    },
    neutral: {
      textTone: 'neutral',
      background: { light: 'neutralSoft', dark: 'customDark' },
      backgroundHover: 'neutralSoftHover',
      backgroundActive: 'neutralSoftActive',
      boxShadow: undefined,
    },
  },
  transparent: {
    default: {
      textTone: 'formAccent',
      background: undefined,
      backgroundHover: 'formAccentSoftHover',
      backgroundActive: 'formAccentSoftActive',
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: undefined,
      backgroundHover: 'brandAccentSoftHover',
      backgroundActive: 'brandAccentSoftActive',
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      background: undefined,
      backgroundHover: 'criticalSoftHover',
      backgroundActive: 'criticalSoftActive',
      boxShadow: undefined,
    },
    neutral: {
      textTone: 'neutral',
      background: undefined,
      backgroundHover: 'neutralSoftHover',
      backgroundActive: 'neutralSoftActive',
      boxShadow: undefined,
    },
  },
  ghost: {
    default: {
      textTone: 'formAccent',
      background: undefined,
      backgroundHover: 'formAccentSoftHover',
      backgroundActive: 'formAccentSoftActive',
      boxShadow: 'borderFormAccentLarge',
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: undefined,
      backgroundHover: 'brandAccentSoftHover',
      backgroundActive: 'brandAccentSoftActive',
      boxShadow: 'borderBrandAccentLarge',
    },
    critical: {
      textTone: 'critical',
      background: undefined,
      backgroundHover: 'criticalSoftHover',
      backgroundActive: 'criticalSoftActive',
      boxShadow: 'borderCriticalLarge',
    },
    neutral: {
      textTone: 'neutral',
      background: undefined,
      backgroundHover: 'neutralSoftHover',
      backgroundActive: 'neutralSoftActive',
      boxShadow: 'borderNeutralLarge',
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
  keyboardFocusable = true,
  labelSpacing = true,
  forceActive = false,
  radius = 'large',
}: ButtonProps & {
  keyboardFocusable?: boolean;
  radius?: 'full' | 'large';
  labelSpacing?: boolean;
  forceActive?: boolean;
}) => {
  const actionsContext = useContext(ActionsContext);
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone ?? 'default'];
  const colorConstrast = useColorContrast();
  const lightness = useBackgroundLightness();
  const labelMargin =
    size === 'small' || variant === 'transparent' ? 'small' : 'medium';

  return (
    <>
      {keyboardFocusable ? (
        <FieldOverlay
          borderRadius={radius}
          variant="focus"
          onlyVisibleForKeyboardNavigation
          className={styles.focusOverlay}
        />
      ) : null}
      <FieldOverlay
        borderRadius={radius}
        background={
          stylesForVariant.backgroundHover &&
          typeof stylesForVariant.backgroundHover !== 'string'
            ? colorConstrast(stylesForVariant.backgroundHover)
            : stylesForVariant.backgroundHover
        }
        className={[
          styles.hoverOverlay,
          variant !== 'solid' && lightness.lightMode === 'dark'
            ? styles.invertedBackgroundsLightMode.hover
            : null,
          variant !== 'solid' && lightness.darkMode === 'dark'
            ? styles.invertedBackgroundsDarkMode.hover
            : null,
        ]}
      />
      <FieldOverlay
        borderRadius={radius}
        background={
          stylesForVariant.backgroundActive &&
          typeof stylesForVariant.backgroundActive !== 'string'
            ? colorConstrast(stylesForVariant.backgroundActive)
            : stylesForVariant.backgroundActive
        }
        className={[
          forceActive ? styles.forceActive : undefined,
          styles.activeOverlay,
          variant !== 'solid' && lightness.lightMode === 'dark'
            ? styles.invertedBackgroundsLightMode.active
            : null,
          variant !== 'solid' && lightness.darkMode === 'dark'
            ? styles.invertedBackgroundsDarkMode.active
            : null,
        ]}
      />
      {stylesForVariant.boxShadow ? (
        <Box
          component="span"
          boxShadow={stylesForVariant.boxShadow}
          borderRadius={radius}
          position="absolute"
          inset={0}
          pointerEvents="none"
        />
      ) : null}
      <Box
        component="span"
        position="relative"
        display="block"
        overflow="hidden"
        pointerEvents="none"
        marginX={labelSpacing ? labelMargin : undefined}
        paddingY={
          labelSpacing && size === 'small'
            ? styles.constants.smallButtonPaddingSize
            : undefined
        }
        className={
          labelSpacing && size === 'standard'
            ? touchableText.standard
            : undefined
        }
        background={
          tone === 'neutral' && variant !== 'solid'
            ? {
                lightMode:
                  lightness.lightMode === 'light'
                    ? 'customLight'
                    : 'customDark',
                darkMode:
                  lightness.darkMode === 'light' ? 'customLight' : 'customDark',
              }
            : undefined
        }
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
  radius = 'large',
}: ButtonProps & {
  radius?: 'full' | 'large';
}): BoxProps => {
  const actionsContext = useContext(ActionsContext);
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone ?? 'default'];
  const colorConstrast = useColorContrast();
  const lightness = useBackgroundLightness();

  return {
    borderRadius: radius,
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
      variant === 'soft' && lightness.lightMode === 'dark'
        ? styles.invertedBackgroundsLightMode.soft
        : null,
      variant === 'soft' && lightness.darkMode === 'dark'
        ? styles.invertedBackgroundsDarkMode.soft
        : null,
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
      onKeyUp,
      onKeyDown,
      'aria-haspopup': ariaHasPopup,
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
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      aria-haspopup={ariaHasPopup}
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
