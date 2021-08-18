import '@testing-library/jest-dom/extend-expect';
import React, { ComponentType, useState } from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../Button/Button';
import { BraidTestProvider } from '../../BraidTestProvider/BraidTestProvider';
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
  const ESCAPE = 27;
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
    it('should not focus content when closed', () => {
      const { getByTestId } = renderTestCase();

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
      const { getByTestId, queryByRole } = renderTestCase();

      expect(queryByRole('dialog')).not.toBeInTheDocument();

      userEvent.click(getByTestId('buttonBefore'));

      expect(queryByRole('dialog')).toBeVisible();
    });

    it('should have the correct aria properties when open', () => {
      const { getByTestId, queryByRole, getByLabelText } = renderTestCase();

      expect(queryByRole('dialog')).not.toBeInTheDocument();

      userEvent.click(getByTestId('buttonBefore'));

      const dialog = queryByRole('dialog');
      expect(dialog?.getAttribute('aria-modal')).toBe('true');
      expect(getByLabelText(TITLE)).toBe(dialog);
    });

    it('should focus the title element', () => {
      const { getByTestId, getByText } = renderTestCase();

      userEvent.click(getByTestId('buttonBefore'));

      expect(getByText(TITLE)).toHaveFocus();
    });

    it('should trap focus in the dialog', () => {
      const { getByTestId, getByRole, getByText, getByLabelText } =
        renderTestCase();

      const dialogOpenButton = getByTestId('buttonBefore');
      userEvent.tab();
      expect(dialogOpenButton).toHaveFocus();

      userEvent.click(dialogOpenButton);
      const buttonInside = getByTestId('buttonInside');
      const closeButton = getByLabelText(CLOSE_LABEL);
      const dialogTitle = getByText(TITLE);

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
      const { getByTestId, queryByRole, getByRole } = renderTestCase();

      const dialogOpenButton = getByTestId('buttonBefore');
      userEvent.click(dialogOpenButton);
      fireEvent.keyDown(getByRole('dialog'), { keyCode: ESCAPE });

      await waitForElementToBeRemoved(() => queryByRole('dialog'), {
        timeout: EXIT_TIMEOUT,
      });
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('should hide document content outside of dialog from screen readers when open', async () => {
      const { getByTestId, queryAllByRole, queryByRole } = renderTestCase();

      expect(queryAllByRole('textbox').length).toBe(2);

      const dialogOpenButton = getByTestId('buttonBefore');
      userEvent.click(dialogOpenButton);

      await waitFor(() => queryByRole('dialog'));
      await waitFor(() => expect(queryAllByRole('textbox').length).toBe(0));
    });

    it('should call dismiss handler once on close', async () => {
      const { getByTestId, getByLabelText, closeHandler, queryByRole } =
        renderTestCase();

      expect(closeHandler).not.toHaveBeenCalled();

      const dialogOpenButton = getByTestId('buttonBefore');
      userEvent.click(dialogOpenButton);
      const closeButton = getByLabelText(CLOSE_LABEL);
      userEvent.click(closeButton);

      await waitForElementToBeRemoved(() => queryByRole('dialog'), {
        timeout: EXIT_TIMEOUT,
      });
      expect(closeHandler).toHaveBeenCalledTimes(1);
      expect(closeHandler).toHaveBeenCalledWith(false);
    });
  });
};
