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
import { useBackgroundLightness } from '../Box/BackgroundContext';
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
type ButtonTone = 'brandAccent' | 'critical';
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
  background: BoxProps['background'];
  backgroundHover: BoxProps['background'];
  backgroundActive: BoxProps['background'];
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
  },
  soft: {
    default: {
      textTone: 'formAccent',
      background: 'formAccentSoft',
      backgroundHover: 'formAccentSoftHover',
      backgroundActive: 'formAccentSoftActive',
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: 'brandAccentSoft',
      backgroundHover: 'brandAccentSoftHover',
      backgroundActive: 'brandAccentSoftActive',
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      background: 'criticalSoft',
      backgroundHover: 'criticalSoftHover',
      backgroundActive: 'criticalSoftActive',
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
      backgroundHover: 'brandAccentSoftHover',
      backgroundActive: 'brandAccentSoftActive',
      boxShadow: 'borderCriticalLarge',
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
  const isInverted =
    useBackgroundLightness() === 'dark' && !tone && variant !== 'solid';
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone ?? 'default'];

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
        background={!isInverted ? stylesForVariant.backgroundHover : undefined}
        className={[
          styles.hoverOverlay,
          isInverted ? styles.invertedBackgrounds.hover : undefined,
        ]}
      />
      <FieldOverlay
        borderRadius="large"
        background={!isInverted ? stylesForVariant.backgroundActive : undefined}
        className={[
          styles.activeOverlay,
          isInverted ? styles.invertedBackgrounds.active : undefined,
        ]}
      />
      {stylesForVariant.boxShadow || (isInverted && variant === 'ghost') ? (
        <Box
          component="span"
          boxShadow={
            isInverted
              ? 'borderNeutralInvertedLarge'
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
          tone={!isInverted ? stylesForVariant.textTone : undefined}
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
  const isInverted =
    useBackgroundLightness() === 'dark' && !tone && variant !== 'solid';
  const size = sizeProp ?? actionsContext?.size ?? 'standard';
  const stylesForVariant = variants[variant][tone ?? 'default'];

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
    background: !isInverted ? stylesForVariant.background : undefined,
    className: [
      styles.root,
      isInverted && variant === 'soft'
        ? styles.invertedBackgrounds.soft
        : undefined,
      size === 'small' ? virtualTouchable({ xAxis: false }) : undefined,
      size === 'standard' ? styles.standard : styles.small,
      bleedY ? styles.bleedY : undefined,
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
