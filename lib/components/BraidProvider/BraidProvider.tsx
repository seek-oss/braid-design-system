import assert from 'assert';
import React, {
  createContext,
  useContext,
  ReactNode,
  ComponentType,
  AnchorHTMLAttributes,
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
export type LinkComponent = ComponentType<LinkComponentProps>;
const DefaultLinkComponent = (props: LinkComponentProps) => <a {...props} />;
const LinkComponentContext = createContext<LinkComponent>(DefaultLinkComponent);
export const useLinkComponent = () => useContext(LinkComponentContext);

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
  const linkComponentFromContext = useLinkComponent();

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
