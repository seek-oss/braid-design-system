import '@testing-library/jest-dom/extend-expect';

import React, { ReactNode } from 'react';
import {
  cleanup,
  render,
  act,
  wait,
  getByTestId,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import wireframe from '../../themes/wireframe';
import { BraidProvider, ToastProvider, useToast } from '..';

afterAll(cleanup);

type ShowToast = ReturnType<typeof useToast>;

function App({ children }: { children: ReactNode }) {
  return (
    <BraidProvider theme={wireframe}>
      <ToastProvider>{children}</ToastProvider>
    </BraidProvider>
  );
}

function renderTestApp() {
  let showToastRef: ShowToast;

  const TestCase = () => {
    showToastRef = useToast();

    return <div />;
  };

  const { queryAllByRole, getByText } = render(
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
    clearToast: (container: HTMLElement) => {
      act(() => {
        userEvent.click(getByTestId(container, 'clearToast'));
      });
    },
    getToastByMessage: (message: string) => getByText(message),
  };
}

describe('useToast', () => {
  it('should handle adding toast', async () => {
    const { showToast, queryAllToasts, clearToast } = renderTestApp();

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Some toast' });

    const allToasts = queryAllToasts();

    expect(allToasts).toHaveLength(1);

    clearToast(allToasts[0]);

    await wait(() => {
      expect(queryAllToasts()).toHaveLength(0);
    });
  });

  it('should handle multiple toasts', async () => {
    const {
      showToast,
      queryAllToasts,
      clearToast,
      getToastByMessage,
    } = renderTestApp();

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Toast 1' });
    showToast({ tone: 'critical', message: 'Toast 2' });
    showToast({ tone: 'critical', message: 'Toast 3' });

    const allToasts = queryAllToasts();

    expect(allToasts).toHaveLength(3);

    clearToast(allToasts[1]);

    await wait(() => {
      expect(queryAllToasts()).toHaveLength(2);
      expect(getToastByMessage('Toast 1')).toBeInTheDocument();
      expect(getToastByMessage('Toast 3')).toBeInTheDocument();
    });
  });

  it('should handle actions', async () => {
    const { showToast, getAction, queryAllToasts } = renderTestApp();

    const actionClickHandler = jest.fn();
    const actionLabel = 'My action';

    showToast({
      tone: 'critical',
      message: 'Some toast',
      action: { label: actionLabel, onClick: actionClickHandler },
    });

    const action = getAction(actionLabel);

    userEvent.click(action);

    expect(actionClickHandler).toHaveBeenCalledTimes(1);

    await wait(() => {
      // Toast should be removed after action press
      expect(queryAllToasts()).toHaveLength(0);
    });
  });

  it('should handle multiple toasts with actions', async () => {
    const {
      showToast,
      getAction,
      queryAllToasts,
      getToastByMessage,
    } = renderTestApp();

    const actionClickHandler1 = jest.fn();
    const actionLabel1 = 'Action 1';
    const actionClickHandler2 = jest.fn();
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

    userEvent.click(action);

    expect(actionClickHandler1).toHaveBeenCalledTimes(0);
    expect(actionClickHandler2).toHaveBeenCalledTimes(1);

    await wait(() => {
      // Toast should be removed after action press
      expect(queryAllToasts()).toHaveLength(1);
      expect(getToastByMessage('Some toast')).toBeInTheDocument();
    });
  });
});
