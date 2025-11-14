import {
  type ReactNode,
  type AllHTMLAttributes,
  type ReactElement,
  useContext,
  forwardRef,
} from 'react';
import assert from 'tiny-invariant';

import type { BoxShadow } from '../../css/atoms/atomicProperties';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import type { UseIconProps } from '../../hooks/useIcon';
import ActionsContext from '../Actions/ActionsContext';
import { Bleed } from '../Bleed/Bleed';
import {
  type ColorContrastValue,
  useBackgroundLightness,
  useColorContrast,
} from '../Box/BackgroundContext';
import { type BoxBackgroundVariant, type BoxProps, Box } from '../Box/Box';
import { type TextProps, Text } from '../Text/Text';
import { AvoidWidowIcon } from '../private/AvoidWidowIcon/AvoidWidowIcon';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import type { buttonTones } from './buttonTones';

import * as styles from './Button.css';
import { virtualTouchable } from '../private/touchable/virtualTouchable.css';

export const buttonVariants = [
  'solid',
  'ghost',
  'soft',
  'transparent',
] as const;
export const buttonSizes = ['standard', 'small'] as const;

type ButtonSize = (typeof buttonSizes)[number];
type ButtonTone = (typeof buttonTones)[number];
type ButtonVariant = (typeof buttonVariants)[number];
export interface ButtonStyleProps {
  size?: ButtonSize;
  tone?: ButtonTone;
  variant?: ButtonVariant;
  bleed?: boolean;
  loading?: boolean;
}

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps extends ButtonStyleProps {
  id?: NativeButtonProps['id'];
  onClick?: NativeButtonProps['onClick'];
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactElement<UseIconProps> | null;
  iconPosition?: 'leading' | 'trailing';
  children?: ReactNode;
  onKeyUp?: NativeButtonProps['onKeyUp'];
  onKeyDown?: NativeButtonProps['onKeyDown'];
  'aria-haspopup'?: NativeButtonProps['aria-haspopup'];
  'aria-controls'?: NativeButtonProps['aria-controls'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
  'aria-label'?: NativeButtonProps['aria-label'];
  tabIndex?: NativeButtonProps['tabIndex'];
  data?: DataAttributeMap;
}

interface ButtonStyles {
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
}

const variants: Record<ButtonVariant, Record<ButtonTone, ButtonStyles>> = {
  solid: {
    formAccent: {
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
    formAccent: {
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
    formAccent: {
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
    formAccent: {
      textTone: 'formAccent',
      background: undefined,
      backgroundHover: 'formAccentSoftHover',
      backgroundActive: 'formAccentSoftActive',
      boxShadow: 'borderFormAccent',
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: undefined,
      backgroundHover: 'brandAccentSoftHover',
      backgroundActive: 'brandAccentSoftActive',
      boxShadow: 'borderBrandAccent',
    },
    critical: {
      textTone: 'critical',
      background: undefined,
      backgroundHover: 'criticalSoftHover',
      backgroundActive: 'criticalSoftActive',
      boxShadow: 'borderCritical',
    },
    neutral: {
      textTone: 'neutral',
      background: undefined,
      backgroundHover: 'neutralSoftHover',
      backgroundActive: 'neutralSoftActive',
      boxShadow: 'borderNeutral',
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

const transparentPaddingX = 'small';
const buttonRadius = 'standard';

const resolveToneAndVariant = ({
  variant: variantProp,
  tone: toneProp,
}: Pick<ButtonProps, 'variant' | 'tone'>) => {
  const fallbackVariant = toneProp ? 'solid' : 'ghost';

  return {
    variant: variantProp ?? fallbackVariant,
    tone: toneProp ?? 'neutral',
  };
};

export const ButtonOverlays = ({
  variant: variantProp,
  tone: toneProp,
  forceActive = false,
  radius = buttonRadius,
}: Pick<ButtonProps, 'variant' | 'tone'> & {
  radius?: 'full' | typeof buttonRadius;
  forceActive?: boolean;
}) => {
  const { variant, tone } = resolveToneAndVariant({
    variant: variantProp,
    tone: toneProp,
  });

  const stylesForVariant = variants[variant][tone];
  const colorContrast = useColorContrast();
  const lightness = useBackgroundLightness();

  return (
    <>
      <FieldOverlay
        borderRadius={radius}
        background={
          stylesForVariant.backgroundHover &&
          typeof stylesForVariant.backgroundHover !== 'string'
            ? colorContrast(stylesForVariant.backgroundHover)
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
            ? colorContrast(stylesForVariant.backgroundActive)
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
    </>
  );
};

export const ButtonText = ({
  children,
  loading,
  size: sizeProp,
  icon,
  iconPosition = 'leading',
  variant: variantProp,
  tone: toneProp,
  bleed,
}: ButtonProps) => {
  const { variant, tone } = resolveToneAndVariant({
    variant: variantProp,
    tone: toneProp,
  });

  const lightness = useBackgroundLightness();
  const actionsContext = useContext(ActionsContext);
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone];
  const shouldReducePaddingX = size === 'small' || variant === 'transparent';
  const labelPaddingX = shouldReducePaddingX ? transparentPaddingX : 'gutter';

  assert(
    !icon || (icon.props.size === undefined && icon.props.tone === undefined),
    "Icons cannot set the 'size' or 'tone' prop when passed to a Button component",
  );

  return (
    <Box
      component="span"
      position="relative"
      display="flex"
      justifyContent="center"
      flexGrow={1}
      flexWrap="wrap"
      overflow="hidden"
      pointerEvents="none"
      paddingX={labelPaddingX}
      className={styles.padToMinHeight}
      background={
        tone === 'neutral' && variant !== 'solid'
          ? {
              lightMode:
                lightness.lightMode === 'light' ? 'customLight' : 'customDark',
              darkMode:
                lightness.darkMode === 'light' ? 'customLight' : 'customDark',
            }
          : undefined
      }
    >
      <Text
        tone={stylesForVariant.textTone}
        weight="medium"
        align="center"
        size={size}
      >
        {icon && iconPosition === 'leading' ? (
          <AvoidWidowIcon
            iconPosition={iconPosition}
            className={
              shouldReducePaddingX || bleed
                ? null
                : negativeMargin('left', 'xxsmall')
            }
          >
            {icon}
          </AvoidWidowIcon>
        ) : null}
        {children}
        {loading ? <ButtonLoader /> : null}
        {!loading && icon && iconPosition === 'trailing' ? (
          <AvoidWidowIcon
            iconPosition={iconPosition}
            className={
              shouldReducePaddingX || bleed
                ? null
                : negativeMargin('right', 'xxsmall')
            }
          >
            {icon}
          </AvoidWidowIcon>
        ) : null}
      </Text>
    </Box>
  );
};

export const useButtonStyles = ({
  variant: variantProp,
  size: sizeProp,
  tone: toneProp,
  loading,
  radius = buttonRadius,
  bleed,
}: ButtonProps & {
  radius?: 'full' | typeof buttonRadius;
}): { root: BoxProps; content: BoxProps } => {
  const { variant, tone } = resolveToneAndVariant({
    variant: variantProp,
    tone: toneProp,
  });

  const actionsContext = useContext(ActionsContext);
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone];
  const colorContrast = useColorContrast();
  const lightness = useBackgroundLightness();

  return {
    root: {
      display: 'flex',
      width: 'full',
      borderRadius: radius,
      cursor: !loading ? 'pointer' : undefined,
      className: [styles.root, size === 'small' ? virtualTouchable : undefined],
    },
    content: {
      component: 'span',
      borderRadius: radius,
      width: 'full',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      userSelect: 'none',
      background:
        stylesForVariant.background &&
        typeof stylesForVariant.background !== 'string'
          ? colorContrast(stylesForVariant.background)
          : stylesForVariant.background,
      className: [
        styles.focusRing,
        variant === 'soft' && lightness.lightMode === 'dark'
          ? styles.invertedBackgroundsLightMode.soft
          : null,
        variant === 'soft' && lightness.darkMode === 'dark'
          ? styles.invertedBackgroundsDarkMode.soft
          : null,
        styles.activeAnimation,
        size === 'standard' ? styles.standard : styles.small,
        bleed ? styles.bleedVerticallyToCapHeight : null,
      ],
    },
  } as const;
};

export const ButtonContainer = ({
  children,
  bleed,
  variant = 'solid',
}: Pick<ButtonProps, 'children' | 'bleed' | 'variant'>) =>
  bleed && variant === 'transparent' ? (
    <Bleed horizontal={transparentPaddingX}>{children}</Bleed>
  ) : (
    <>{children}</>
  );

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      children,
      size,
      tone,
      icon,
      iconPosition,
      bleed,
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
      'aria-label': ariaLabel,
      data,
      ...restProps
    },
    ref,
  ) => {
    const { root, content } = useButtonStyles({
      variant,
      tone,
      size,
      bleed,
      loading,
    });

    return (
      <ButtonContainer bleed={bleed} variant={variant}>
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
          aria-label={ariaLabel}
          onClick={onClick}
          disabled={loading}
          {...root}
          {...buildDataAttributes({ data, validateRestProps: restProps })}
        >
          <Box {...content}>
            <ButtonOverlays variant={variant} tone={tone} />
            <ButtonText
              variant={variant}
              tone={tone}
              size={size}
              loading={loading}
              icon={icon}
              iconPosition={iconPosition}
              bleed={bleed}
            >
              {children}
            </ButtonText>
          </Box>
        </Box>
      </ButtonContainer>
    );
  },
);

Button.displayName = 'Button';
