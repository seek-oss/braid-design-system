import type { SVGProps as ReactSVGProps } from 'react';
import type { AllOrNone } from '../private/AllOrNone';

export type OptionalTitle = AllOrNone<{ title: string; titleId: string }>;

export type SVGProps = ReactSVGProps<SVGSVGElement> & OptionalTitle;
