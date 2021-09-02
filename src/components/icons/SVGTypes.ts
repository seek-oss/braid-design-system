import { SVGProps as ReactSVGProps } from 'react';
import { AllOrNone } from '../private/AllOrNone';

export type OptionalTitle = AllOrNone<{ title: string; titleId: string }>;

export type SVGProps = ReactSVGProps<SVGSVGElement> & OptionalTitle;
