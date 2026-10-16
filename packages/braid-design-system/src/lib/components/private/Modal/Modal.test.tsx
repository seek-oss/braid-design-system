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
