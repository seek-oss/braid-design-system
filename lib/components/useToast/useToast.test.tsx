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
});
