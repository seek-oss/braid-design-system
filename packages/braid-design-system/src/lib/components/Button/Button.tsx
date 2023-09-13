import assert from 'assert';
import dedent from 'dedent';
import React, {
  type ReactNode,
  type AllHTMLAttributes,
  type ReactElement,
  useContext,
  forwardRef,
} from 'react';
import { type BoxBackgroundVariant, type BoxProps, Box } from '../Box/Box';
import { AvoidWidowIcon } from '../private/AvoidWidowIcon/AvoidWidowIcon';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import {
  type ColorContrastValue,
  useBackgroundLightness,
  useColorContrast,
} from '../Box/BackgroundContext';
import { type TextProps, Text } from '../Text/Text';
import type { BoxShadow } from '../../css/atoms/atomicProperties';
import ActionsContext from '../Actions/ActionsContext';
import type { UseIconProps } from '../../hooks/useIcon';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import { Bleed } from '../Bleed/Bleed';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import * as styles from './Button.css';

export const buttonVariants = [
  'solid',
  'ghost',
  'soft',
  'transparent',
] as const;

type ButtonSize = 'standard' | 'small';
type ButtonTone = 'formAccent' | 'brandAccent' | 'critical' | 'neutral';
type ButtonVariant = (typeof buttonVariants)[number];
export interface ButtonStyleProps {
  size?: ButtonSize;
  tone?: ButtonTone;
  variant?: ButtonVariant;
  /** @deprecated Use `bleed` prop instead https://seek-oss.github.io/braid-design-system/components/Button#bleed */
  bleedY?: boolean;
  bleed?: boolean;
  loading?: boolean;
}

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps extends ButtonStyleProps {
  id?: NativeButtonProps['id'];
  onClick?: NativeButtonProps['onClick'];
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactElement<UseIconProps>;
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
  legacy,
}: Pick<ButtonProps, 'variant' | 'tone'> & { legacy: boolean }) => {
  if (legacy) {
    return {
      variant: variantProp ?? 'solid',
      tone: toneProp ?? 'formAccent',
    };
  }

  const fallbackVariant = toneProp ? 'solid' : 'ghost';

  return {
    variant: variantProp ?? fallbackVariant,
    tone: toneProp ?? 'neutral',
  };
};

export const ButtonOverlays = ({
  variant: variantProp,
  tone: toneProp,
  keyboardFocusable = true,
  forceActive = false,
  radius = buttonRadius,
}: Pick<ButtonProps, 'variant' | 'tone'> & {
  keyboardFocusable?: boolean;
  radius?: 'full' | typeof buttonRadius;
  forceActive?: boolean;
}) => {
  const { variant, tone } = resolveToneAndVariant({
    variant: variantProp,
    tone: toneProp,
    legacy: useBraidTheme().legacy,
  });

  const stylesForVariant = variants[variant][tone];
  const colorContrast = useColorContrast();
  const lightness = useBackgroundLightness();

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
    legacy: useBraidTheme().legacy,
  });

  const lightness = useBackgroundLightness();
  const actionsContext = useContext(ActionsContext);
  const isLegacyTheme = useBraidTheme().legacy;
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone];
  const shouldReducePaddingX = size === 'small' || variant === 'transparent';
  const labelPaddingXForTheme = isLegacyTheme ? 'medium' : 'gutter';
  const labelPaddingX = shouldReducePaddingX
    ? transparentPaddingX
    : labelPaddingXForTheme;

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
            space="xsmall"
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
            space="xsmall"
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
}): BoxProps => {
  const { variant, tone } = resolveToneAndVariant({
    variant: variantProp,
    tone: toneProp,
    legacy: useBraidTheme().legacy,
  });

  const actionsContext = useContext(ActionsContext);
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone];
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
      bleed ? styles.bleedVerticallyToCapHeight : null,
    ],
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
      bleedY,
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
    if (process.env.NODE_ENV !== 'production') {
      if (typeof bleedY !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn(
          dedent`
            The "bleedY" prop has been deprecated and will be removed in a future version. Use "bleed" instead.
               <Button
              %c-   bleedY
              %c+   bleed
               %c/>
          `,
          'color: red',
          'color: green',
          'color: inherit',
        );
      }
    }

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
          {...buildDataAttributes({ data, validateRestProps: restProps })}
          {...useButtonStyles({
            variant,
            tone,
            size,
            bleed: bleed || bleedY,
            loading,
          })}
        >
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
      </ButtonContainer>
    );
  },
);

Button.displayName = 'Button';
