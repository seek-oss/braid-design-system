import {
  BasePopover,
  type BasePopoverProps,
} from '../private/BasePopover/BasePopover';

type PopoverProps = Omit<
  BasePopoverProps,
  'disableAnimation' | 'focusPopoverOnOpen' | 'tabToExit' | 'lockPlacement'
> & {
  returnFocusRef: NonNullable<BasePopoverProps['returnFocusRef']>;
};

export const Popover = ({
  align,
  placement,
  offsetSpace = 'none',
  open,
  onClose,
  triggerWrapperRef,
  initialFocusRef,
  returnFocusRef,
  children,
}: PopoverProps) => (
  <BasePopover
    align={align}
    placement={placement}
    lockPlacement={false}
    offsetSpace={offsetSpace}
    open={open}
    onClose={onClose}
    triggerWrapperRef={triggerWrapperRef}
    initialFocusRef={initialFocusRef}
    returnFocusRef={returnFocusRef}
    focusOnOpen
    tabToExit={false}
  >
    {children}
  </BasePopover>
);
