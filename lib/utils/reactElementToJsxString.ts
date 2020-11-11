import { ReactNode } from 'react';
import reactElementToJsxString_untyped from 'react-element-to-jsx-string';

type ReactElementToJsxString = (
  element: ReactNode,
  options?: {
    filterProps?: Array<string>;
    showDefaultProps?: boolean;
    showFunctions?: boolean;
    functionValue?: (fn: (v: unknown) => unknown) => string;
    tabStop?: number;
    useBooleanShorthandSyntax?: boolean;
    maxInlineAttributesLineLength?: number;
    sortProps?: boolean;
    useFragmentShortSyntax?: boolean;
  },
) => string;

export const reactElementToJsxString = reactElementToJsxString_untyped as ReactElementToJsxString;
