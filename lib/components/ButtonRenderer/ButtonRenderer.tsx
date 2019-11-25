import React, {
  createContext,
  useContext,
  useMemo,
  Fragment,
  ReactNode,
  CSSProperties,
  ComponentType,
} from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { useBoxStyles, UseBoxStylesProps } from '../Box/useBoxStyles';
import { BackgroundProvider, useBackground } from '../Box/BackgroundContext';
import { Box } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { useTouchableSpace } from '../../hooks/typography';
import * as styleRefs from './ButtonRenderer.treat';

type ButtonWeight = 'weak' | 'regular' | 'strong';
type ButtonVariant = 'strong' | 'regular' | 'weak' | 'weakInverted';
const buttonVariants: Record<
  ButtonVariant,
  {
    textTone: TextProps['tone'];
    background: UseBoxStylesProps['background'];
    backgroundHover: UseBoxStylesProps['background'];
    backgroundActive: UseBoxStylesProps['background'];
    boxShadow: UseBoxStylesProps['boxShadow'];
  }
> = {
  strong: {
    textTone: undefined,
    background: 'brandAccent',
    backgroundHover: 'brandAccentHover',
    backgroundActive: 'brandAccentActive',
    boxShadow: undefined,
  },
  regular: {
    textTone: undefined,
    background: 'formAccent',
    backgroundHover: 'formAccentHover',
    backgroundActive: 'formAccentActive',
    boxShadow: undefined,
  },
  weak: {
    textTone: 'formAccent',
    background: undefined,
    backgroundHover: 'formAccentHover',
    backgroundActive: 'formAccentActive',
    boxShadow: 'borderFormAccentLarge',
  },
  weakInverted: {
    textTone: undefined,
    background: undefined,
    backgroundHover: 'formAccentHover',
    backgroundActive: 'formAccentActive',
    boxShadow: 'borderStandardInvertedLarge',
  },
};

const getButtonVariant = (
  weight: ButtonWeight,
  background: UseBoxStylesProps['background'] | null,
) => {
  const variantName =
    weight === 'weak' && background === 'brand' ? 'weakInverted' : weight;

  return buttonVariants[variantName];
};

const ButtonChildrenContext = createContext<{
  weight: ButtonWeight;
  loading: boolean;
}>({ weight: 'regular', loading: false });

interface ButtonChildrenProps {
  children: ReactNode;
}

const ButtonChildren = ({ children }: ButtonChildrenProps) => {
  const styles = useStyles(styleRefs);
  const { weight, loading } = useContext(ButtonChildrenContext);
  const buttonVariant = getButtonVariant(weight, useBackground());

  return (
    <Fragment>
      <FieldOverlay variant="focus" className={styles.focusOverlay} />
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
        className={classnames(styles.content, useTouchableSpace('standard'))}
      >
        <Text baseline={false} weight="medium" tone={buttonVariant.textTone}>
          {children}
          {loading ? (
            <Box
              aria-hidden
              component="span"
              display="inlineBlock"
              position="relative"
              textAlign="left"
              className={styles.loading}
            >
              <Box
                component="span"
                display="block"
                position="absolute"
                className={styles.ellipsis}
              >
                {'\u2026'}
              </Box>
              {/*
                This box ensures that the space reserved for the
                ellipsis is relative to the theme's font size
                and character width.
              */}
              <Box
                component="span"
                display="inline"
                className={styles.visibilityHidden}
              >
                {'\u2026'}
              </Box>
            </Box>
          ) : null}
        </Text>
      </Box>
    </Fragment>
  );
};

export interface ButtonRendererProps {
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

export const ButtonRenderer = ({
  weight = 'regular',
  loading = false,
  children,
}: ButtonRendererProps) => {
  const styles = useStyles(styleRefs);
  const isWeak = weight === 'weak';
  const { background, boxShadow } = getButtonVariant(weight, useBackground());

  const buttonStyles = classnames(
    styles.root,
    isWeak ? styles.weak : null,
    useBoxStyles({
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
    }),
  );

  const buttonChildrenContextValue = useMemo(() => ({ weight, loading }), [
    weight,
    loading,
  ]);

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
