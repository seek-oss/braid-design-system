import '@testing-library/jest-dom/extend-expect';

import React, { ReactNode } from 'react';
import { cleanup, render, act, wait } from '@testing-library/react';
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

  const { queryAllByRole, getByText, getByTestId } = render(
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
    clearToast: () => {
      act(() => {
        userEvent.click(getByTestId('clearToast'));
      });
    },
  };
}

describe('useToast', () => {
  it('should handle adding toast', () => {
    const { showToast, queryAllToasts } = renderTestApp();

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Some toast' });

    expect(queryAllToasts()).toHaveLength(1);
  });

  it('should handle clearing toast', async () => {
    const { showToast, queryAllToasts, clearToast } = renderTestApp();

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Some toast' });

    expect(queryAllToasts()).toHaveLength(1);

    clearToast();

    await wait(() => {
      expect(queryAllToasts()).toHaveLength(0);
    });
  });

  it('should handle multiple toasts', () => {
    const { showToast, queryAllToasts } = renderTestApp();

    expect(queryAllToasts()).toHaveLength(0);

    showToast({ tone: 'critical', message: 'Some toast' });
    showToast({ tone: 'positive', message: 'Some toast' });
    showToast({ tone: 'critical', message: 'Some toast' });

    expect(queryAllToasts()).toHaveLength(3);
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
