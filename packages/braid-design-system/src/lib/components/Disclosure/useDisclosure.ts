import { useId, useState } from 'react';

import type { AllOrNone } from '../private/AllOrNone';

export type DisclosureStateProps = AllOrNone<{
  expanded?: boolean;
  onToggle: (expanded: boolean) => void;
}>;
export type UseDisclosureProps = { id?: string } & DisclosureStateProps;

export const useDisclosure = ({
  id,
  expanded: expandedProp,
  onToggle,
}: UseDisclosureProps) => {
  const [expandedFallback, setExpandedFallback] = useState(false);
  const expanded = expandedProp ?? expandedFallback;

  const fallbackId = useId();
  const resolvedId = id || fallbackId;

  return {
    buttonProps: {
      'aria-controls': resolvedId,
      'aria-expanded': expanded,
      onClick: () => {
        const newValue = !expanded;

        if (expandedProp === undefined) {
          setExpandedFallback(newValue);
        }

        if (typeof onToggle === 'function') {
          onToggle(newValue);
        }
      },
    },
    contentProps: {
      id: resolvedId,
    },
    expanded,
  };
};
