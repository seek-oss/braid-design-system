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
import { BackgroundProvider } from '../Box/BackgroundContext';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { useTouchableSpace } from '../../hooks/typography';
import * as styleRefs from './ButtonRenderer.treat';

type ButtonWeight = 'weak' | 'regular' | 'strong';
type ButtonState = 'base' | 'hover' | 'active';

const backgroundVariants: Record<
  ButtonState,
  Record<ButtonWeight, UseBoxStylesProps['background'] | undefined>
> = {
  base: {
    weak: undefined,
    regular: 'formAccent',
    strong: 'brandAccent',
  },
  hover: {
    weak: 'formAccentHover',
    regular: 'formAccentHover',
    strong: 'brandAccentHover',
  },
  active: {
    weak: 'formAccentActive',
    regular: 'formAccentActive',
    strong: 'brandAccentActive',
  },
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

  return (
    <Fragment>
      <FieldOverlay
        variant="focus"
        className={classnames(styles.focusOverlay)}
      />
      <FieldOverlay
        background={backgroundVariants.hover[weight]}
        className={classnames(styles.hoverOverlay)}
      />
      <FieldOverlay
        background={backgroundVariants.active[weight]}
        className={classnames(styles.activeOverlay)}
      />
      <Box
        position="relative"
        paddingX="gutter"
        pointerEvents="none"
        className={classnames(styles.content, useTouchableSpace('standard'))}
      >
        <Text
          baseline={false}
          weight="medium"
          tone={weight === 'weak' ? 'formAccent' : undefined}
        >
          {children}
          {loading ? (
            <Box
              aria-hidden
              component="span"
              display="inlineBlock"
              position="relative"
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
  const background = backgroundVariants.base[weight];
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
      boxShadow: isWeak ? 'borderFormAccentLarge' : undefined,
      background,
      transform: 'touchable',
      transition: 'touchable',
    }),
  );
  const buttonProps = {
    style: {},
    className: buttonStyles,
  };

  const buttonChildrenContextValue = useMemo(() => ({ weight, loading }), [
    weight,
    loading,
  ]);

  return (
    <BackgroundProvider value={background}>
      <ButtonChildrenContext.Provider value={buttonChildrenContextValue}>
        {children(ButtonChildren, buttonProps)}
      </ButtonChildrenContext.Provider>
    </BackgroundProvider>
  );
};
