import {
  render,
  act,
  waitFor,
  getByTestId,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactNode } from 'react';

import { ToastProvider, useToast } from '..';
import { BraidTestProvider } from '../../../test';

type ShowToast = ReturnType<typeof useToast>;

function App({ children }: { children: ReactNode }) {
  return (
    <BraidTestProvider>
      <ToastProvider>{children}</ToastProvider>
    </BraidTestProvider>
  );
}

function renderTestApp() {
  let showToastRef: ShowToast;

  const TestCase = () => {
    showToastRef = useToast();

    return <div />;
  };

  const { queryAllByRole, getByText, findByText } = render(
    <App>
      <TestCase />
    </App>,
  );

  return {
    showToast: (...props: Parameters<ShowToast>) =>
      act(() => {
        showToastRef(...props);
      }),
    queryAllToasts: () => queryAllByRole('alert'),
    getAction: (actionLabel: string) => getByText(actionLabel),
    clearToast: (container: HTMLElement) =>
      userEvent.click(getByTestId(container, 'clearToast')),
    findToastByMessage: async (message: string) => {
      const textElement = await findByText(message);
      return textElement.closest('[role="alert"]');
    },
    findToastContentByMessage: async (message: string) => findByText(message),
  };
}

describe('useToast', () => {
  it('should handle adding toast', async () => {
    const { showToast, queryAllToasts, clearToast } = renderTestApp();

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Some toast' });

    const allToasts = queryAllToasts();

    expect(allToasts).toHaveLength(1);

    await clearToast(allToasts[0]);

    await waitFor(() => {
      expect(queryAllToasts()).toHaveLength(0);
    });
  });

  it('should handle multiple toasts', async () => {
    const { showToast, queryAllToasts, clearToast, findToastByMessage } =
      renderTestApp();

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Toast 1' });
    showToast({ tone: 'critical', message: 'Toast 2' });
    showToast({ tone: 'critical', message: 'Toast 3' });

    const allToasts = queryAllToasts();

    expect(allToasts).toHaveLength(3);

    await clearToast(allToasts[1]);

    await waitFor(() => {
      expect(queryAllToasts()).toHaveLength(2);
    });
    expect(await findToastByMessage('Toast 1')).toBeInTheDocument();
    expect(await findToastByMessage('Toast 3')).toBeInTheDocument();
  });

  it('should handle actions', async () => {
    const { showToast, getAction, queryAllToasts } = renderTestApp();

    const actionClickHandler = vi.fn();
    const actionLabel = 'My action';

    showToast({
      tone: 'critical',
      message: 'Some toast',
      action: { label: actionLabel, onClick: actionClickHandler },
    });

    const action = getAction(actionLabel);

    await userEvent.click(action);

    expect(actionClickHandler).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      // Toast should be removed after action press
      expect(queryAllToasts()).toHaveLength(0);
    });
  });

  it('should handle multiple toasts with actions', async () => {
    const { showToast, getAction, queryAllToasts, findToastByMessage } =
      renderTestApp();

    const actionClickHandler1 = vi.fn();
    const actionLabel1 = 'Action 1';
    const actionClickHandler2 = vi.fn();
    const actionLabel2 = 'Action 2';

    showToast({
      tone: 'critical',
      message: 'Some toast',
      action: { label: actionLabel1, onClick: actionClickHandler1 },
    });

    showToast({
      tone: 'positive',
      message: 'Some other toast',
      action: { label: actionLabel2, onClick: actionClickHandler2 },
    });

    const action = getAction(actionLabel2);

    await userEvent.click(action);

    expect(actionClickHandler1).toHaveBeenCalledTimes(0);
    expect(actionClickHandler2).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      // Toast should be removed after action press
      expect(queryAllToasts()).toHaveLength(1);
    });
    expect(await findToastByMessage('Some toast')).toBeInTheDocument();
  });

  it('should deduplicate toasts with the same key', async () => {
    const { showToast, queryAllToasts, findToastByMessage } = renderTestApp();

    const key1 = 'deduped-1';
    const key2 = 'deduped-2';

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Toast 1', key: key1 });
    showToast({ tone: 'critical', message: 'Toast 2' });
    showToast({ tone: 'critical', message: 'Toast 3', key: key1 });
    showToast({ tone: 'critical', message: 'Toast 4', key: key2 });
    showToast({ tone: 'critical', message: 'Toast 5' });
    showToast({ tone: 'critical', message: 'Toast 6', key: key2 });
    showToast({ tone: 'critical', message: 'Toast 7', key: key1 });

    await waitFor(() => {
      const allToasts = queryAllToasts();

      expect(allToasts).toHaveLength(4);
    });
    expect(await findToastByMessage('Toast 2')).toBeInTheDocument();
    expect(await findToastByMessage('Toast 5')).toBeInTheDocument();
    expect(await findToastByMessage('Toast 6')).toBeInTheDocument();
    expect(await findToastByMessage('Toast 7')).toBeInTheDocument();
  });

  describe('should expand toasts when entering and collapse when leaving', () => {
    it('with pointer events', async () => {
      const { showToast, queryAllToasts, findToastContentByMessage } =
        renderTestApp();

      expect(queryAllToasts()).toHaveLength(0);

      showToast({ tone: 'critical', message: 'Toast 1' });
      showToast({ tone: 'critical', message: 'Toast 2' });
      showToast({ tone: 'critical', message: 'Toast 3' });

      const allToasts = queryAllToasts();
      expect(allToasts).toHaveLength(3);

      const toast1Content = await findToastContentByMessage('Toast 1');
      const toast2Content = await findToastContentByMessage('Toast 2');
      const toast3Content = await findToastContentByMessage('Toast 3');

      // Only the most recent toast should be visible

      expect(toast1Content).toBeInTheDocument();
      expect(toast2Content).toBeInTheDocument();
      expect(toast3Content).toBeInTheDocument();

      await waitFor(() => {
        expect(toast1Content).not.toBeVisible();
        expect(toast2Content).not.toBeVisible();
        expect(toast3Content).toBeVisible();
      });

      // When hovering any toast, all should be visible

      await userEvent.hover(toast3Content);

      await waitFor(() => {
        expect(toast1Content).toBeVisible();
        expect(toast2Content).toBeVisible();
        expect(toast3Content).toBeVisible();
      });

      // When unhovering, only the most recent toast should be visible

      await userEvent.unhover(toast3Content);

      expect(toast1Content).toBeInTheDocument();
      expect(toast2Content).toBeInTheDocument();
      expect(toast3Content).toBeInTheDocument();

      await waitFor(() => {
        expect(toast1Content).not.toBeVisible();
        expect(toast2Content).not.toBeVisible();
        expect(toast3Content).toBeVisible();
      });
    });

    it('without pointer events', async () => {
      const { showToast, queryAllToasts, findToastContentByMessage } =
        renderTestApp();

      expect(queryAllToasts()).toHaveLength(0);

      showToast({ tone: 'critical', message: 'Toast 1' });
      showToast({ tone: 'critical', message: 'Toast 2' });
      showToast({ tone: 'critical', message: 'Toast 3' });

      const allToasts = queryAllToasts();
      expect(allToasts).toHaveLength(3);

      const toast1Content = await findToastContentByMessage('Toast 1');
      const toast2Content = await findToastContentByMessage('Toast 2');
      const toast3Content = await findToastContentByMessage('Toast 3');

      // Only the most recent toast should be visible

      expect(toast1Content).toBeInTheDocument();
      expect(toast2Content).toBeInTheDocument();
      expect(toast3Content).toBeInTheDocument();

      await waitFor(() => {
        expect(toast1Content).not.toBeVisible();
        expect(toast2Content).not.toBeVisible();
        expect(toast3Content).toBeVisible();
      });

      // When clicking any toast, all should be visible

      await userEvent.click(toast3Content, { skipHover: true });

      await waitFor(() => {
        expect(toast1Content).toBeVisible();
        expect(toast2Content).toBeVisible();
        expect(toast3Content).toBeVisible();
      });

      // When clicking outside the toasts region, only the most recent toast should be visible

      await userEvent.click(document.body);

      expect(toast1Content).toBeInTheDocument();
      expect(toast2Content).toBeInTheDocument();
      expect(toast3Content).toBeInTheDocument();

      await waitFor(() => {
        expect(toast1Content).not.toBeVisible();
        expect(toast2Content).not.toBeVisible();
        expect(toast3Content).toBeVisible();
      });
    });
  });

  it('should expand toasts on focus, and collapse toasts on blur', async () => {
    const { showToast, queryAllToasts, findToastContentByMessage } =
      renderTestApp();

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Toast 1' });
    showToast({ tone: 'critical', message: 'Toast 2' });
    showToast({ tone: 'critical', message: 'Toast 3' });

    const allToasts = queryAllToasts();
    expect(allToasts).toHaveLength(3);

    const toast1Content = await findToastContentByMessage('Toast 1');
    const toast2Content = await findToastContentByMessage('Toast 2');
    const toast3Content = await findToastContentByMessage('Toast 3');

    // Only the most recent toast should be visible

    expect(toast1Content).toBeInTheDocument();
    expect(toast2Content).toBeInTheDocument();
    expect(toast3Content).toBeInTheDocument();

    await waitFor(() => {
      expect(toast1Content).not.toBeVisible();
      expect(toast2Content).not.toBeVisible();
      expect(toast3Content).toBeVisible();
    });

    // When focussing any toast container, all should be visible

    await userEvent.tab();

    await waitFor(() => {
      expect(toast1Content).toBeVisible();
      expect(toast2Content).toBeVisible();
      expect(toast3Content).toBeVisible();
    });

    await userEvent.tab({ shift: true });

    // When unhovering, only the most recent toast should be visible

    await userEvent.unhover(toast3Content);

    expect(toast1Content).toBeInTheDocument();
    expect(toast2Content).toBeInTheDocument();
    expect(toast3Content).toBeInTheDocument();

    await waitFor(() => {
      expect(toast1Content).not.toBeVisible();
      expect(toast2Content).not.toBeVisible();
      expect(toast3Content).toBeVisible();
    });
  });

  it('should make toast containers focusable and follow correct tab order', async () => {
    const { showToast, queryAllToasts, findToastByMessage } = renderTestApp();

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Toast 1' });
    showToast({ tone: 'critical', message: 'Toast 2' });

    const allToasts = queryAllToasts();
    expect(allToasts).toHaveLength(2);

    const toast1 = await findToastByMessage('Toast 1');
    const toast2 = await findToastByMessage('Toast 2');

    // Toast containers should have tabIndex={0} to be focusable
    expect(toast1).toHaveAttribute('tabIndex', '0');
    expect(toast2).toHaveAttribute('tabIndex', '0');

    expect(document.body).toHaveFocus();

    // First tab should focus the first toast container (in DOM order)
    await userEvent.tab();
    expect(toast1).toHaveFocus(); // Toast 1 was created first, so it's first in DOM

    // Second tab should focus the close button within the toast
    await userEvent.tab();
    const toast1CloseButton = within(toast1 as HTMLElement).getByTestId(
      'clearToast',
    );
    expect(toast1CloseButton).toHaveFocus();

    // Third tab should focus the next toast container
    await userEvent.tab();
    expect(toast2).toHaveFocus();

    // Fourth tab should focus the close button in the second toast
    await userEvent.tab();
    const toast2CloseButton = within(toast2 as HTMLElement).getByTestId(
      'clearToast',
    );
    expect(toast2CloseButton).toHaveFocus();
  });

  it('should keep toasts expanded and focusable when dismissing with the keyboard', async () => {
    const {
      findToastContentByMessage,
      showToast,
      queryAllToasts,
      findToastByMessage,
    } = renderTestApp();

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Toast 1' });
    showToast({ tone: 'critical', message: 'Toast 2' });
    showToast({ tone: 'critical', message: 'Toast 3' });

    const allToasts = queryAllToasts();
    expect(allToasts).toHaveLength(3);

    const toast1Content = await findToastContentByMessage('Toast 1');
    const toast2Content = await findToastContentByMessage('Toast 2');
    const toast3Content = await findToastContentByMessage('Toast 3');

    // Only the most recent toast should be visible

    expect(toast1Content).toBeInTheDocument();
    expect(toast2Content).toBeInTheDocument();
    expect(toast3Content).toBeInTheDocument();

    await waitFor(() => {
      expect(toast1Content).not.toBeVisible();
      expect(toast2Content).not.toBeVisible();
      expect(toast3Content).toBeVisible();
    });

    // First tab should focus the first toast container (in DOM order), making all toasts visible
    await userEvent.tab();
    const toast1 = await findToastByMessage('Toast 1');
    expect(toast1).toHaveFocus();

    await waitFor(() => {
      expect(toast1Content).toBeVisible();
      expect(toast2Content).toBeVisible();
      expect(toast3Content).toBeVisible();
    });

    // Second tab should focus the close button within the toast
    await userEvent.tab();
    const toast1CloseButton = within(toast1 as HTMLElement).getByTestId(
      'clearToast',
    );
    expect(toast1CloseButton).toHaveFocus();

    // When clearing one toast, all remaining toasts should still be visible

    await userEvent.keyboard('{Enter}');

    await waitFor(() => {
      expect(toast1Content).not.toBeInTheDocument();
      expect(toast2Content).toBeInTheDocument();
      expect(toast3Content).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(toast2Content).toBeVisible();
      expect(toast3Content).toBeVisible();
    });

    // When pressing tab, the next toast container should be focused

    await userEvent.tab();
    const toast2 = await findToastByMessage('Toast 2');
    expect(toast2).toHaveFocus();

    // When moving focus from the toasts, toasts should collapse

    await userEvent.tab({ shift: true });

    expect(toast2Content).toBeInTheDocument();
    expect(toast3Content).toBeInTheDocument();

    await waitFor(() => {
      expect(toast2Content).not.toBeVisible();
      expect(toast3Content).toBeVisible();
    });
  });

  it('should follow correct tab order with action buttons', async () => {
    const { showToast, findToastByMessage, getAction } = renderTestApp();

    const actionHandler = vi.fn();

    showToast({
      tone: 'positive',
      message: 'Toast with action',
      action: { label: 'Action', onClick: actionHandler },
    });

    showToast({ tone: 'critical', message: 'Toast without action' });

    const toastWithAction = await findToastByMessage('Toast with action');
    const toastWithoutAction = await findToastByMessage('Toast without action');

    expect(document.body).toHaveFocus();

    // First tab: Focus the first toast container (with action)
    await userEvent.tab();
    expect(toastWithAction).toHaveFocus();

    // Second tab: Focus the action button
    await userEvent.tab();
    const actionButton = getAction('Action');
    expect(actionButton).toHaveFocus();

    // Third tab: Focus the close button
    await userEvent.tab();
    const toast1CloseButton = within(
      toastWithAction as HTMLElement,
    ).getByTestId('clearToast');
    expect(toast1CloseButton).toHaveFocus();

    // Fourth tab: Focus the second toast container (without action)
    await userEvent.tab();
    expect(toastWithoutAction).toHaveFocus();

    // Fifth tab: Focus the close button (no action in this toast)
    await userEvent.tab();
    const toast2CloseButton = within(
      toastWithoutAction as HTMLElement,
    ).getByTestId('clearToast');
    expect(toast2CloseButton).toHaveFocus();

    // Ensure action button works
    await userEvent.tab({ shift: true }); // Go back to toast container
    await userEvent.tab({ shift: true }); // Go back to close button
    await userEvent.tab({ shift: true }); // Go back to action button
    expect(actionButton).toHaveFocus();

    await userEvent.keyboard('{Enter}');
    expect(actionHandler).toHaveBeenCalledTimes(1);
  });
});
