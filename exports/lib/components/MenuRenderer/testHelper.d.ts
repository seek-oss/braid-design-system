import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { MenuRendererProps } from './MenuRenderer';
interface MenuTestSuiteParams {
  name: string;
  Component: React.FunctionComponent<
    Pick<MenuRendererProps, 'onOpen' | 'onClose' | 'children'>
  >;
}
export declare const menuTestSuite: ({
  name,
  Component,
}: MenuTestSuiteParams) => void;
export {};
