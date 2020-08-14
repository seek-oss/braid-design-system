import assert from 'assert';
import dedent from 'dedent';
import React, {
  createContext,
  useContext,
  ReactNode,
  AnchorHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ComponentType,
  Ref,
} from 'react';
import { TreatProvider } from 'sku/react-treat';
import { ensureResetImported } from '../../reset/resetTracker';
import { HideFocusRingsRoot } from '../private/hideFocusRings/hideFocusRings';
import { BraidTestProviderContext } from '../BraidTestProvider/BraidTestProviderContext';
import { BreakpointProvider } from '../useBreakpoint/BreakpointProvider';
import { BraidTheme } from '../../themes/BraidTheme.d';

if (process.env.NODE_ENV === 'development') {
  ensureResetImported();
}

const BraidThemeContext = createContext<BraidTheme | null>(null);
export const useBraidTheme = () => {
  const braidTheme = useContext(BraidThemeContext);

  if (braidTheme === null) {
    throw new Error('No Braid theme available on context');
  }

  return braidTheme;
};

export interface LinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const makeLinkComponent = (
  render: ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>,
) => ({ __forwardRef__: forwardRef(render) } as const);

export type LinkComponent =
  | ReturnType<typeof makeLinkComponent>
  | ComponentType<LinkComponentProps>;

const DefaultLinkComponent = makeLinkComponent((props, ref) => (
  <a ref={ref} {...props} />
));

const LinkComponentContext = createContext<LinkComponent>(DefaultLinkComponent);

export const useLinkComponentWithoutRefSupport = () => {
  const linkComponent = useContext(LinkComponentContext);

  return '__forwardRef__' in linkComponent
    ? linkComponent.__forwardRef__
    : linkComponent;
};

export const useLinkComponentWithRefSupport = (ref: Ref<HTMLAnchorElement>) => {
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

  assert(
    typeof navigator !== 'object' ||
      navigator.userAgent.indexOf('jsdom') === -1 ||
      inTestProvider,
    `Rendering 'BraidProvider' in Jest is not supported as it expects a browser environment. Please switch to 'BraidTestProvider'. See the docs for more info: https://seek-oss.github.io/braid-design-system/components/BraidTestProvider`,
  );

  return (
    <BraidThemeContext.Provider value={theme}>
      <TreatProvider theme={theme.treatTheme}>
        <LinkComponentContext.Provider
          value={linkComponent || linkComponentFromContext}
        >
          {styleBody ? (
            <style type="text/css">{`body{margin:0;padding:0;background:${theme.background}}`}</style>
          ) : null}
          {alreadyInBraidProvider || inTestProvider ? (
            children
          ) : (
            <BreakpointProvider>
              <HideFocusRingsRoot>{children}</HideFocusRingsRoot>
            </BreakpointProvider>
          )}
        </LinkComponentContext.Provider>
      </TreatProvider>
    </BraidThemeContext.Provider>
  );
};
