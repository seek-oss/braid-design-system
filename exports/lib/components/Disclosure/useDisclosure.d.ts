import { AllOrNone } from '../private/AllOrNone';
export declare type DisclosureStateProps = AllOrNone<{
  expanded?: boolean;
  onToggle: (expanded: boolean) => void;
}>;
export declare type UseDisclosureProps = {
  id: string;
} & DisclosureStateProps;
export declare const useDisclosure: ({
  id,
  expanded: expandedProp,
  onToggle,
}: UseDisclosureProps) => {
  buttonProps: {
    'aria-controls': string;
    'aria-expanded': boolean;
    onClick: () => void;
  };
  contentProps: {
    id: string;
  };
  expanded: boolean;
};
