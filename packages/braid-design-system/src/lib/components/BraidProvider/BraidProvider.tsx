import dedent from 'dedent';
import {
  type ReactNode,
  type AnchorHTMLAttributes,
  type ForwardRefRenderFunction,
  type ComponentType,
  type Ref,
  createContext,
  useContext,
  forwardRef,
} from 'react';
import assert from 'tiny-invariant';

import { ensureResetImported } from '../../css/reset/resetTracker';
import type { BraidTheme } from '../../themes/makeBraidTheme';
import { BraidTestProviderContext } from '../BraidTestProvider/BraidTestProviderContext';

import { BraidThemeContext } from './BraidThemeContext';
import { BreakpointProvider } from './BreakpointContext';
import { VanillaThemeContainer } from './VanillaThemeContainer';

import { darkMode } from '../../css/atoms/sprinkles.css';

if (process.env.NODE_ENV === 'development') {
  ensureResetImported();
}

export interface LinkComponentProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const makeLinkComponent = (
  render: ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>,
) => ({ __forwardRef__: forwardRef(render) }) as const;

export type LinkComponent =
  | ReturnType<typeof makeLinkComponent>
  | ComponentType<LinkComponentProps>;

const DefaultLinkComponent = makeLinkComponent((props, ref) => (
  <a ref={ref} {...props} />
));

const LinkComponentContext = createContext<LinkComponent>(DefaultLinkComponent);

export const useLinkComponent = (ref: Ref<HTMLAnchorElement>) => {
  const linkComponent = useContext(LinkComponentContext);

  assert(
    !ref || '__forwardRef__' in linkComponent,
    dedent`
      You're passing a ref to a Braid link, but your app is providing a custom link component to 'BraidProvider' that doesn't appear to support refs.

      To fix this, you need to use Braid's 'makeLinkComponent' helper function when creating your custom link component. This ensures that refs are forwarded correctly, and allows us to silence this error message.

      For more information and an example implementation, check out the documentation for 'BraidProvider': https://seek-oss.github.io/braid-design-system/components/BraidProvider
    `,
  );

  if ('__forwardRef__' in linkComponent) {
    return linkComponent.__forwardRef__;
  }

  return linkComponent;
};

export interface BraidProviderProps {
  theme: BraidTheme;
  styleBody?: boolean;
  linkComponent?: LinkComponent;
  children: ReactNode;
}

export const BraidProvider = ({
  theme,
  styleBody = true,
  linkComponent,
  children,
}: BraidProviderProps) => {
  const alreadyInBraidProvider = Boolean(useContext(BraidThemeContext));
  const inTestProvider = useContext(BraidTestProviderContext);
  const linkComponentFromContext = useContext(LinkComponentContext);

  // Node 21 introduces an empty navigator object, so checks need a little more logic to them
  assert(
    inTestProvider ||
      typeof navigator === 'undefined' ||
      navigator.userAgent === undefined ||
      navigator.userAgent.indexOf('jsdom') === -1,
    `Rendering 'BraidProvider' in Jest is not supported as it expects a browser environment. Please switch to 'BraidTestProvider'. See the docs for more info: https://seek-oss.github.io/braid-design-system/components/BraidTestProvider`,
  );

  return (
    <BraidThemeContext.Provider value={theme}>
      {styleBody ? (
        <style type="text/css">{`
            html,body{margin:0;padding:0;background:${theme.background.lightMode}}
            html.${darkMode},html.${darkMode} body{color-scheme:dark;background:${theme.background.darkMode}}
          `}</style>
      ) : null}
      <VanillaThemeContainer
        theme={theme.vanillaTheme}
        setDefaultTextTones={!alreadyInBraidProvider}
      >
        <LinkComponentContext.Provider
          value={linkComponent || linkComponentFromContext}
        >
          {alreadyInBraidProvider || inTestProvider ? (
            children
          ) : (
            <BreakpointProvider>{children}</BreakpointProvider>
          )}
        </LinkComponentContext.Provider>
      </VanillaThemeContainer>
    </BraidThemeContext.Provider>
  );
};
