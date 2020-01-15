import { SVGProps as ReactSVGProps } from 'react';

type AllOrNone<T> = T | { [K in keyof T]?: never };

export type OptionalTitle = AllOrNone<{ title: string; titleId: string }>;

export type SVGProps = ReactSVGProps<SVGSVGElement> & OptionalTitle;
