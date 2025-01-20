import { Box } from '../Box/Box';
import {
  BasePopover,
  type BasePopoverProps,
} from '../private/BasePopover/BasePopover';

type PopoverProps = Omit<
  BasePopoverProps,
  'disableAnimation' | 'focusPopoverOnOpen' | 'tabToExit' | 'align'
> & {
  returnFocusRef: NonNullable<BasePopoverProps['returnFocusRef']>;
};

export const Popover = ({
  placement = 'bottom',
  offsetSpace = 'none',
  open,
  onClose,
  triggerWrapperRef,
  initialFocusRef,
  returnFocusRef,
  children,
}: PopoverProps) => (
  <BasePopover
    align={'center'}
    placement={placement}
    offsetSpace={offsetSpace}
    open={open}
    onClose={onClose}
    triggerWrapperRef={triggerWrapperRef}
    initialFocusRef={initialFocusRef}
    returnFocusRef={returnFocusRef}
    focusPopoverOnOpen
    tabToExit={false}
  >
    <Box borderRadius="standard" boxShadow="small">
      <Box
        borderRadius="standard"
        boxShadow="borderNeutralLight"
        padding="medium"
        background="surface"
      >
        {children}
      </Box>
    </Box>
  </BasePopover>
);
