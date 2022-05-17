import assert from 'assert';
import dedent from 'dedent';
import React, {
  useContext,
  forwardRef,
  ReactNode,
  AllHTMLAttributes,
  ReactElement,
  cloneElement,
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
import { UseIconProps } from '../../hooks/useIcon';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import { Bleed } from '../Bleed/Bleed';
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

const transparentPaddingX = 'small';
const buttonRadius = 'large';

export const ButtonOverlays = ({
  variant = 'solid',
  tone,
  keyboardFocusable = true,
  forceActive = false,
  radius = buttonRadius,
}: Pick<ButtonProps, 'variant' | 'tone'> & {
  keyboardFocusable?: boolean;
  radius?: 'full' | typeof buttonRadius;
  forceActive?: boolean;
}) => {
  const stylesForVariant = variants[variant][tone ?? 'default'];
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
  variant = 'solid',
  tone,
  labelSpacing = true,
}: ButtonProps & {
  labelSpacing?: boolean;
}) => {
  const lightness = useBackgroundLightness();
  const actionsContext = useContext(ActionsContext);
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone ?? 'default'];
  const labelPaddingX =
    size === 'small' || variant === 'transparent'
      ? transparentPaddingX
      : 'medium';

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
      paddingX={labelSpacing ? labelPaddingX : undefined}
      paddingY={
        labelSpacing && size === 'small'
          ? styles.constants.smallButtonPaddingSize
          : undefined
      }
      className={
        labelSpacing && size === 'standard' ? touchableText.standard : undefined
      }
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
      {icon ? (
        <Box
          component="span"
          display="block"
          paddingRight={size === 'small' ? 'xxsmall' : 'xsmall'}
          className={negativeMargin('left', 'xxsmall')}
        >
          {cloneElement(icon, { size, tone: stylesForVariant.textTone })}
        </Box>
      ) : null}
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
  );
};

export const useButtonStyles = ({
  variant = 'solid',
  size: sizeProp,
  tone,
  loading,
  radius = buttonRadius,
  bleed,
}: ButtonProps & {
  radius?: 'full' | typeof buttonRadius;
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
      data,
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
          onClick={onClick}
          disabled={loading}
          {...(data ? buildDataAttributes(data) : undefined)}
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
          >
            {children}
          </ButtonText>
        </Box>
      </ButtonContainer>
    );
  },
);

Button.displayName = 'Button';
