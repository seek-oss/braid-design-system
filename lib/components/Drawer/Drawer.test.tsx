import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider, Drawer } from '..';
import { Button } from '../Button/Button';

const ESCAPE = 27;
const CLOSE_BUTTON_LABEL = 'Close dialog please';
const DRAWER_TITLE = 'Test Drawer';

const TestCase = ({ close }: { close: (newOpenState: boolean) => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button data={{ testid: 'buttonBefore' }} onClick={() => setOpen(true)}>
        Before
      </Button>
      <input type="text" />
      <Drawer
        id="testDrawer"
        title={DRAWER_TITLE}
        closeLabel={CLOSE_BUTTON_LABEL}
        open={open}
        onClose={(newOpenState) => {
          setOpen(newOpenState);
          close(newOpenState);
        }}
      >
        <Button data={{ testid: 'buttonInside' }}>Inside</Button>
      </Drawer>
      <Button data={{ testid: 'buttonAfter' }}>After</Button>
      <section>
        <article>
          <input type="text" />
        </article>
      </section>
    </div>
  );
};

function renderDrawer() {
  const closeHandler = jest.fn();

  return {
    ...render(
      <BraidTestProvider>
        <TestCase close={closeHandler} />
      </BraidTestProvider>,
    ),
    closeHandler,
  };
}

const EXIT_TIMEOUT = 1500;

describe('Drawer', () => {
  it('should not focus content when closed', () => {
    const { getByTestId } = renderDrawer();

    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(getByTestId('buttonBefore')).toHaveFocus();
    userEvent.tab();
    userEvent.tab();
    expect(getByTestId('buttonAfter')).toHaveFocus();
    userEvent.tab();
    userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('should not be visible until open', () => {
    const { getByTestId, queryByRole } = renderDrawer();

    expect(queryByRole('dialog')).not.toBeInTheDocument();

    userEvent.click(getByTestId('buttonBefore'));

    expect(queryByRole('dialog')).toBeVisible();
  });

  it('should have the correct aria properties when open', () => {
    const { getByTestId, queryByRole, getByLabelText } = renderDrawer();

    expect(queryByRole('dialog')).not.toBeInTheDocument();

    userEvent.click(getByTestId('buttonBefore'));

    const dialog = queryByRole('dialog');
    expect(dialog?.getAttribute('aria-modal')).toBe('true');
    expect(getByLabelText(DRAWER_TITLE)).toBe(dialog);
  });

  it('should focus the title element', () => {
    const { getByTestId, getByText } = renderDrawer();

    userEvent.click(getByTestId('buttonBefore'));

    expect(getByText(DRAWER_TITLE)).toHaveFocus();
  });

  it('should trap focus in the dialog', () => {
    const {
      getByTestId,
      getByRole,
      getByText,
      getByLabelText,
    } = renderDrawer();

    const dialogOpenButton = getByTestId('buttonBefore');
    userEvent.tab();
    expect(dialogOpenButton).toHaveFocus();

    userEvent.click(dialogOpenButton);
    const buttonInside = getByTestId('buttonInside');
    const closeButton = getByLabelText(CLOSE_BUTTON_LABEL);
    const dialogTitle = getByText(DRAWER_TITLE);

    expect(dialogTitle).toHaveFocus();

    userEvent.tab({ focusTrap: getByRole('dialog') });
    expect(buttonInside).toHaveFocus();

    userEvent.tab({ focusTrap: getByRole('dialog') });
    expect(closeButton).toHaveFocus();

    userEvent.tab({ focusTrap: getByRole('dialog') });
    expect(buttonInside).toHaveFocus();

    userEvent.tab({ shift: true, focusTrap: getByRole('dialog') });
    expect(closeButton).toHaveFocus();

    userEvent.tab({ shift: true, focusTrap: getByRole('dialog') });
    expect(buttonInside).toHaveFocus();
  });

  it('should close when hitting escape', async () => {
    const { getByTestId, queryByRole, getByRole } = renderDrawer();

    const dialogOpenButton = getByTestId('buttonBefore');
    userEvent.click(dialogOpenButton);
    fireEvent.keyDown(getByRole('dialog'), { keyCode: ESCAPE });

    await waitForElementToBeRemoved(() => queryByRole('dialog'), {
      timeout: EXIT_TIMEOUT,
    });
    expect(queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should hide document content outside of dialog from screen readers when open', async () => {
    const { getByTestId, queryAllByRole, queryByRole } = renderDrawer();

    expect(queryAllByRole('textbox').length).toBe(2);

    const dialogOpenButton = getByTestId('buttonBefore');
    userEvent.click(dialogOpenButton);

    await waitFor(() => queryByRole('dialog'));
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for transition

    expect(queryAllByRole('textbox').length).toBe(0);
  });

  it('should call dismiss handler once on close', async () => {
    const {
      getByTestId,
      getByLabelText,
      closeHandler,
      queryByRole,
    } = renderDrawer();

    expect(closeHandler).not.toHaveBeenCalled();

    const dialogOpenButton = getByTestId('buttonBefore');
    userEvent.click(dialogOpenButton);
    const closeButton = getByLabelText(CLOSE_BUTTON_LABEL);
    userEvent.click(closeButton);

    await waitForElementToBeRemoved(() => queryByRole('dialog'), {
      timeout: EXIT_TIMEOUT,
    });
    expect(closeHandler).toHaveBeenCalledTimes(1);
    expect(closeHandler).toHaveBeenCalledWith(false);
  });
});
