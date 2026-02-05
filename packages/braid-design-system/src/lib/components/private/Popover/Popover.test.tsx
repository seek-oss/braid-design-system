import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef, useState } from 'react';

import { Placeholder } from '../../../playroom/components';
import { BraidTestProvider } from '../../BraidTestProvider/BraidTestProvider';
import { Button } from '../../Button/Button';

import { Popover } from './Popover';

function renderPopover({
  open = false,
  managedState = false,
  enterFocusRef = false,
}: {
  open?: boolean;
  managedState?: boolean;
  enterFocusRef?: boolean;
} = {}) {
  const TestCase = ({ closeHandler }: { closeHandler: () => void }) => {
    const [openState, setOpenState] = useState(open);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const handleClose = () => {
      if (managedState) {
        setOpenState(false);
      }
      closeHandler();
    };

    return (
      <BraidTestProvider>
        <Button
          onClick={managedState ? () => setOpenState(!openState) : undefined}
          ref={triggerRef}
        >
          Open popover
        </Button>
        <Popover
          ref={popoverRef}
          enterFocusRef={enterFocusRef ? popoverRef : undefined}
          role="menu"
          open={managedState ? openState : open}
          onClose={handleClose}
          triggerRef={triggerRef}
          placement="bottom"
        >
          <Placeholder label="Popover content" height={100} width={100} />
        </Popover>
      </BraidTestProvider>
    );
  };

  const defaultClose = vi.fn();
  const { getByTestId, queryByRole, getByRole, rerender } = render(
    <TestCase closeHandler={defaultClose} />,
  );
  return {
    getByTestId,
    queryByRole,
    getByRole,
    closeHandler: defaultClose,
    rerender: ({ closeHandler }: { closeHandler?: () => void } = {}) =>
      rerender(<TestCase closeHandler={closeHandler || defaultClose} />),
  };
}

describe('Popover', () => {
  describe('Open prop', () => {
    it('renders when true', () => {
      const { queryByRole } = renderPopover({ open: true });
      expect(queryByRole('menu')).toBeInTheDocument();
    });

    it('does not render when false', () => {
      const { queryByRole } = renderPopover({ open: false });
      expect(queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  describe('Close handler', () => {
    it('should fire when clicking outside the popover', async () => {
      const { getByTestId, queryByRole, closeHandler } = renderPopover({
        open: true,
      });

      expect(queryByRole('menu')).toBeInTheDocument();
      await userEvent.click(getByTestId('backdrop'));
      expect(closeHandler).toHaveBeenCalledTimes(1);
    });

    it('should fire with the escape key when the popover has focus', async () => {
      const { getByRole, closeHandler } = renderPopover({ open: true });

      const popover = getByRole('menu');

      expect(popover).toBeInTheDocument();
      await userEvent.click(popover);
      expect(document.activeElement).toBe(popover);

      await userEvent.keyboard('{Escape}');
      expect(closeHandler).toHaveBeenCalledTimes(1);
    });

    it('should fire with the escape key when the popover does not have focus', async () => {
      const { getByRole, closeHandler } = renderPopover({ open: true });

      const popover = getByRole('menu');

      expect(popover).toBeInTheDocument();
      expect(document.activeElement).not.toBe(popover);

      await userEvent.keyboard('{Escape}');
      expect(closeHandler).toHaveBeenCalledTimes(1);
    });

    it('should fire with the tab key when the popover has focus', async () => {
      const { getByRole, closeHandler } = renderPopover({ open: true });

      const popover = getByRole('menu');

      expect(popover).toBeInTheDocument();
      await userEvent.click(popover);
      expect(document.activeElement).toBe(popover);

      await userEvent.keyboard('{Tab}');
      expect(closeHandler).toHaveBeenCalledTimes(1);
    });

    it('should fire with the tab key when the popover does not have focus', async () => {
      const { getByRole, closeHandler } = renderPopover({ open: true });

      const popover = getByRole('menu');

      expect(popover).toBeInTheDocument();
      expect(document.activeElement).not.toBe(popover);

      await userEvent.keyboard('{Tab}');
      expect(closeHandler).toHaveBeenCalledTimes(1);
    });

    it('should not fire when it is changed', async () => {
      const { getByRole, closeHandler, rerender } = renderPopover({
        open: true,
      });

      const popover = getByRole('menu');
      expect(popover).toBeInTheDocument();

      const newClose = vi.fn();
      await userEvent.keyboard('{Escape}');
      expect(closeHandler).toHaveBeenCalledTimes(1);
      rerender({ closeHandler: newClose });
      expect(newClose).not.toHaveBeenCalled();
    });
  });

  describe('triggerRef', () => {
    it('should focus the triggerRef element when the popover is closed with the keyboard', async () => {
      const { getByRole, queryByRole } = renderPopover({
        managedState: true,
      });
      const trigger = getByRole('button');
      expect(trigger).toBeInTheDocument();
      expect(queryByRole('menu')).not.toBeInTheDocument();

      await userEvent.tab();
      await userEvent.keyboard('{enter}');
      const popover = getByRole('menu');
      expect(popover).toBeInTheDocument();
      await userEvent.click(popover);
      expect(document.activeElement).toBe(popover);

      await userEvent.keyboard('{Escape}');
      expect(queryByRole('menu')).not.toBeInTheDocument();
      expect(document.activeElement).toBe(trigger);
    });

    it('should not focus the triggerRef element when the popover is closed with a backdrop click', async () => {
      const { getByTestId, getByRole, queryByRole } = renderPopover({
        managedState: true,
      });
      const trigger = getByRole('button');
      expect(trigger).toBeInTheDocument();
      expect(queryByRole('menu')).not.toBeInTheDocument();

      await userEvent.tab();
      await userEvent.keyboard('{enter}');
      const popover = getByRole('menu');
      expect(popover).toBeInTheDocument();
      await userEvent.click(popover);
      expect(document.activeElement).toBe(popover);

      await userEvent.click(getByTestId('backdrop'));
      expect(queryByRole('menu')).not.toBeInTheDocument();
      expect(document.activeElement).not.toBe(trigger);
    });
  });

  describe('enterFocusRef', () => {
    it('should not change focus when enterFocusRef is not provided', async () => {
      const { getByRole, queryByRole } = renderPopover({
        open: false,
        managedState: true,
        enterFocusRef: false,
      });
      const trigger = getByRole('button');
      expect(trigger).toBeInTheDocument();
      expect(queryByRole('menu')).not.toBeInTheDocument();
      await userEvent.tab();
      expect(document.activeElement).toBe(trigger);

      await userEvent.keyboard('{enter}');
      const popover = getByRole('menu');
      expect(popover).toBeInTheDocument();
      expect(document.activeElement).not.toBe(popover);
      expect(document.activeElement).toBe(trigger);
    });

    it('should focus the enterFocusRef element when the popover is opened', async () => {
      const { getByRole, queryByRole } = renderPopover({
        open: false,
        managedState: true,
        enterFocusRef: true,
      });
      const trigger = getByRole('button');
      expect(queryByRole('menu')).not.toBeInTheDocument();
      await userEvent.tab();
      expect(document.activeElement).toBe(trigger);
      await userEvent.keyboard('{enter}');

      const popover = getByRole('menu');
      expect(popover).toBeInTheDocument();
      await waitFor(() => expect(document.activeElement).toBe(popover));
    });
  });
});
