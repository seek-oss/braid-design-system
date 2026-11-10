import { act, fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { Button, Dialog, Drawer } from '../..';
import { BraidTestProvider } from '../../../../test';

const StackedModals = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setDrawerOpen(true)}>Open drawer</Button>

      <Dialog title="Dialog" open={dialogOpen} onClose={setDialogOpen}>
        <input type="text" aria-label="Dialog input" />
      </Dialog>

      <Drawer
        title="Drawer"
        open={drawerOpen}
        onClose={setDrawerOpen}
        closeLabel="Close drawer"
      >
        <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
      </Drawer>
    </>
  );
};

const blurAndRefocusWindow = async () => {
  await act(async () => {
    fireEvent.blur(window);
  });
  await act(async () => {
    fireEvent.focus(window);
  });
};

const waitForFocusLock = () =>
  act(() => new Promise((resolve) => setTimeout(resolve, 10)));

const renderDialog = () =>
  render(
    <BraidTestProvider>
      <Dialog title="Dialog" open onClose={() => {}}>
        <input type="text" aria-label="Dialog input" />
      </Dialog>
      <button type="button">Outside button</button>
      <iframe title="Outside iframe" />
    </BraidTestProvider>,
  );

describe('Modal: stacked', () => {
  it('should keep focus in the top-most modal when it is rendered before the underlying modal', async () => {
    const { getByRole, getByLabelText } = render(
      <BraidTestProvider>
        <StackedModals />
      </BraidTestProvider>,
    );

    await userEvent.click(getByRole('button', { name: 'Open drawer' }));
    await userEvent.click(
      await waitFor(() => getByRole('button', { name: 'Open dialog' })),
    );

    const input = await waitFor(() => getByLabelText('Dialog input'));

    await userEvent.click(input);
    await userEvent.keyboard('a');
    expect(input).toHaveFocus();
    expect(input).toHaveValue('a');

    await blurAndRefocusWindow();

    await userEvent.click(input);
    await userEvent.keyboard('b');
    expect(input).toHaveFocus();
    expect(input).toHaveValue('ab');
  });
});

describe('Modal: iframes', () => {
  it('should allow focus to move to an iframe outside the modal', async () => {
    const { getByLabelText, getByTitle } = renderDialog();

    const input = await waitFor(() => getByLabelText('Dialog input'));
    act(() => input.focus());
    await waitForFocusLock();

    const iframe = getByTitle('Outside iframe');
    act(() => iframe.focus());
    await waitForFocusLock();

    expect(iframe).toHaveFocus();
  });

  it('should return focus to the modal from other elements outside the modal', async () => {
    const { getByLabelText, getByRole } = renderDialog();

    const input = await waitFor(() => getByLabelText('Dialog input'));
    act(() => input.focus());
    await waitForFocusLock();

    act(() => getByRole('button', { name: 'Outside button' }).focus());
    await waitForFocusLock();

    expect(input).toHaveFocus();
  });
});
