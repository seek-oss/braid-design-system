import '@testing-library/jest-dom';
import React, { ComponentType, useState } from 'react';
import {
  render,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../Button/Button';
import { BraidTestProvider } from '../../../../test';
import { ModalProps } from './Modal';

export const modalTestSuite = (
  name: string,
  ModalImplementation: ComponentType<
    Pick<
      ModalProps,
      'id' | 'title' | 'closeLabel' | 'open' | 'onClose' | 'children'
    >
  >,
) => {
  const CLOSE_LABEL = 'Close button';
  const TITLE = 'Test Title';

  const TestCase = ({ close }: { close: (newOpenState: boolean) => void }) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button data={{ testid: 'buttonBefore' }} onClick={() => setOpen(true)}>
          Before
        </Button>
        <input type="text" />
        <ModalImplementation
          id="testModal"
          title={TITLE}
          closeLabel={CLOSE_LABEL}
          open={open}
          onClose={(newOpenState) => {
            setOpen(newOpenState);
            close(newOpenState);
          }}
        >
          <Button data={{ testid: 'buttonInside' }}>Inside</Button>
        </ModalImplementation>
        <Button data={{ testid: 'buttonAfter' }}>After</Button>
        <section>
          <article>
            <input type="text" />
          </article>
        </section>
      </div>
    );
  };

  function renderTestCase() {
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

  describe(`Modal: ${name}`, () => {
    it('should not focus content when closed', async () => {
      const { getByTestId } = renderTestCase();

      expect(document.body).toHaveFocus();
      await userEvent.tab();
      expect(getByTestId('buttonBefore')).toHaveFocus();
      await userEvent.tab();
      await userEvent.tab();
      expect(getByTestId('buttonAfter')).toHaveFocus();
      await userEvent.tab();
      await userEvent.tab();
      expect(document.body).toHaveFocus();
    });

    it('should not be visible until open', async () => {
      const { getByTestId, queryByRole } = renderTestCase();

      expect(queryByRole('dialog')).not.toBeInTheDocument();

      await userEvent.click(getByTestId('buttonBefore'));

      expect(queryByRole('dialog')).toBeVisible();
    });

    it('should have the correct aria properties when open', async () => {
      const { getByTestId, queryByRole, getByLabelText } = renderTestCase();

      expect(queryByRole('dialog')).not.toBeInTheDocument();

      await userEvent.click(getByTestId('buttonBefore'));

      const dialog = queryByRole('dialog');
      expect(dialog?.getAttribute('aria-modal')).toBe('true');
      expect(getByLabelText(TITLE)).toBe(dialog);
    });

    it('should focus the title element', async () => {
      const { getByTestId, getByText } = renderTestCase();

      await userEvent.click(getByTestId('buttonBefore'));

      expect(getByText(TITLE)).toHaveFocus();
    });

    it('should trap focus in the dialog', async () => {
      const { getByTestId, getByText, getByLabelText } = renderTestCase();

      const dialogOpenButton = getByTestId('buttonBefore');
      await userEvent.tab();
      expect(dialogOpenButton).toHaveFocus();

      await userEvent.click(dialogOpenButton);
      const buttonInside = getByTestId('buttonInside');
      const closeButton = getByLabelText(CLOSE_LABEL);
      const dialogTitle = getByText(TITLE);

      expect(dialogTitle).toHaveFocus();

      await userEvent.tab();
      expect(buttonInside).toHaveFocus();

      await userEvent.tab();
      expect(closeButton).toHaveFocus();

      await userEvent.tab();
      expect(buttonInside).toHaveFocus();

      await userEvent.tab({ shift: true });
      expect(closeButton).toHaveFocus();

      await userEvent.tab({ shift: true });
      expect(buttonInside).toHaveFocus();
    }, 45000);

    it('should close when hitting escape', async () => {
      const { getByTestId, queryByRole } = renderTestCase();

      const dialogOpenButton = getByTestId('buttonBefore');
      await userEvent.click(dialogOpenButton);
      await userEvent.keyboard('{Escape}');

      if (queryByRole('dialog') !== null) {
        await waitForElementToBeRemoved(() => queryByRole('dialog'), {
          timeout: EXIT_TIMEOUT,
        });
      }
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('should hide document content outside of dialog from screen readers when open', async () => {
      const { getByTestId, queryAllByRole, queryByRole } = renderTestCase();

      expect(queryAllByRole('textbox').length).toBe(2);

      const dialogOpenButton = getByTestId('buttonBefore');
      await userEvent.click(dialogOpenButton);

      await waitFor(() => queryByRole('dialog'));
      await waitFor(() => expect(queryAllByRole('textbox').length).toBe(0));
    });

    it('should call dismiss handler once on close', async () => {
      const { getByTestId, getByLabelText, closeHandler, queryByRole } =
        renderTestCase();

      expect(closeHandler).not.toHaveBeenCalled();

      const dialogOpenButton = getByTestId('buttonBefore');
      await userEvent.click(dialogOpenButton);
      const closeButton = getByLabelText(CLOSE_LABEL);
      await userEvent.click(closeButton);

      if (queryByRole('dialog') !== null) {
        await waitForElementToBeRemoved(() => queryByRole('dialog'), {
          timeout: EXIT_TIMEOUT,
        });
      }
      expect(closeHandler).toHaveBeenCalledTimes(1);
      expect(closeHandler).toHaveBeenCalledWith(false);
    });
  });
};
