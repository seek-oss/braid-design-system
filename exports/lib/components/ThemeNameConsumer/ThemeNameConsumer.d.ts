import { ReactElement } from 'react';
interface ThemeNameConsumerProps {
  children(name: string): ReactElement;
}
export declare const ThemeNameConsumer: ({
  children,
}: ThemeNameConsumerProps) => ReactElement<
  any,
  string | import('react').JSXElementConstructor<any>
>;
export {};
