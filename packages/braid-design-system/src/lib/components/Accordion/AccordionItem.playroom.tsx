import { useContext, type FC } from 'react';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';

import { AccordionContext } from './AccordionContext';
import {
  type AccordionItemProps,
  type AccordionItemBaseProps,
  type AccordionItemStateProps,
  AccordionItem as BraidAccordionItem,
} from './AccordionItem';

type OptionalProps = 'id';
type PlayroomAccordionItemProps = StateProp &
  AccordionItemBaseProps &
  AccordionItemStateProps &
  Partial<Pick<AccordionItemProps, OptionalProps>>;

export const AccordionItem: FC<PlayroomAccordionItemProps> = ({
  label,
  stateName,
  expanded,
  onToggle,
  size,
  tone,
  weight,
  badge,
  icon,
  ...restProps
}) => {
  const autoCollapse = Boolean(useContext(AccordionContext)?.autoCollapse);
  const [state, handleChange] = useFallbackState(
    stateName,
    expanded,
    onToggle,
    false,
  );

  return (
    <BraidAccordionItem
      {...(autoCollapse
        ? { onToggle: handleChange }
        : { expanded: state, onToggle: handleChange })}
      label={typeof label !== 'boolean' ? label : ''}
      size={typeof size === 'boolean' ? undefined : size}
      tone={typeof tone === 'boolean' ? undefined : tone}
      weight={typeof weight === 'boolean' ? undefined : weight}
      badge={typeof badge === 'boolean' ? undefined : badge}
      icon={typeof icon === 'boolean' ? undefined : icon}
      {...restProps}
    />
  );
};
