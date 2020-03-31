import React, {
  createContext,
  useContext,
  ReactNode,
  ComponentType,
  AnchorHTMLAttributes,
} from 'react';
import { TreatProvider } from 'sku/treat';
import { ensureResetImported } from '../../reset/resetTracker';
import { HideFocusRingsRoot } from '../private/hideFocusRings/hideFocusRings';
import { BraidTestProviderContext } from '../BraidTestProvider/BraidTestProviderContext';
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
const DefaultLinkComponent = (props: LinkComponentProps) => <a {...props} />;
const LinkComponentContext = createContext<ComponentType<LinkComponentProps>>(
  DefaultLinkComponent,
);
export const useLinkComponent = () => useContext(LinkComponentContext);

export interface BraidProviderProps {
  theme: BraidTheme;
  styleBody?: boolean;
  linkComponent?: ComponentType<LinkComponentProps>;
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
            <HideFocusRingsRoot>{children}</HideFocusRingsRoot>
          )}
        </LinkComponentContext.Provider>
      </TreatProvider>
    </BraidThemeContext.Provider>
  );
};
