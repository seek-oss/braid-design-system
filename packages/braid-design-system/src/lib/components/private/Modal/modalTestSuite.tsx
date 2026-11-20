import {
  render,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ComponentType, useState } from 'react';
import type { Optional } from 'utility-types';

import { BraidTestProvider } from '../../../../test';
import { Button } from '../../Button/Button';

import type { ModalProps } from './Modal';
import { shortViewportQuery } from './useShortViewport';

export const modalTestSuite = (
  name: string,
  ModalImplementation: ComponentType<
    Pick<
      ModalProps,
      | 'title'
      | 'closeLabel'
      | 'open'
      | 'onClose'
      | 'children'
      | 'footer'
      | 'description'
      | 'stickyHeader'
    >
  >,
) => {
  const CLOSE_LABEL = 'Close button';
  const TITLE = 'Test Title';
  const DESCRIPTION = 'Test description';

  type TestCaseProps = Pick<
    ModalProps,
    'onClose' | 'footer' | 'description' | 'stickyHeader'
  >;

  const TestCase = ({
    onClose,
    footer,
    description,
    stickyHeader,
  }: TestCaseProps) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button data={{ testid: 'buttonBefore' }} onClick={() => setOpen(true)}>
          Before
        </Button>
        <input type="text" />
        <ModalImplementation
          title={TITLE}
          closeLabel={CLOSE_LABEL}
          open={open}
          onClose={(newOpenState) => {
            const result = onClose(newOpenState);
            if (result === false) {
              return result;
            }

            setOpen(newOpenState);
          }}
          footer={footer}
          description={description}
          stickyHeader={stickyHeader}
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

  function renderTestCase({
    onClose = vi.fn(),
    footer,
    description,
    stickyHeader,
  }: Optional<TestCaseProps> = {}) {
    return {
      ...render(
        <BraidTestProvider>
          <TestCase
            onClose={onClose}
            footer={footer}
            description={description}
            stickyHeader={stickyHeader}
          />
        </BraidTestProvider>,
      ),
      closeHandler: onClose,
    };
  }

  const getScrollContainer = (element: HTMLElement) => {
    let current = element.parentElement;
    while (current && current.getAttribute('role') !== 'dialog') {
      if (getComputedStyle(current).overflowY === 'auto') {
        return current;
      }
      current = current.parentElement;
    }
    return null;
  };

  const mockShortViewport = () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = (query) =>
      ({
        matches: query === shortViewportQuery,
        media: query,
        addListener: () => {},
        removeListener: () => {},
      }) as unknown as MediaQueryList;

    return () => {
      window.matchMedia = originalMatchMedia;
    };
  };

  const EXIT_TIMEOUT = 1500;

  describe(`Modal: ${name}`, () => {
    it('should render footer content when provided', async () => {
      const footer = 'Footer content';
      const { getByText, getByTestId } = renderTestCase({ footer });

      await userEvent.click(getByTestId('buttonBefore'));

      expect(getByText('Footer content')).toBeVisible();
    });

    it('should render the title inside the scroll container by default', async () => {
      const { getByTestId, getByText } = renderTestCase();

      await userEvent.click(getByTestId('buttonBefore'));

      const contentScrollContainer = getScrollContainer(
        getByTestId('buttonInside'),
      );
      expect(contentScrollContainer).not.toBeNull();
      expect(getScrollContainer(getByText(TITLE))).toBe(contentScrollContainer);
    });

    it('should render the title outside the scroll container when stickyHeader is set', async () => {
      const { getByTestId, getByText } = renderTestCase({ stickyHeader: true });

      await userEvent.click(getByTestId('buttonBefore'));

      expect(getScrollContainer(getByTestId('buttonInside'))).not.toBeNull();
      expect(getScrollContainer(getByText(TITLE))).toBeNull();
    });

    it('should render the title inside the scroll container when stickyHeader is set on a short viewport', async () => {
      const restoreMatchMedia = mockShortViewport();

      try {
        const { getByTestId, getByText } = renderTestCase({
          stickyHeader: true,
        });

        await userEvent.click(getByTestId('buttonBefore'));

        const contentScrollContainer = getScrollContainer(
          getByTestId('buttonInside'),
        );
        expect(contentScrollContainer).not.toBeNull();
        expect(getScrollContainer(getByText(TITLE))).toBe(
          contentScrollContainer,
        );
      } finally {
        restoreMatchMedia();
      }
    });

    it('should preserve accessibility when stickyHeader is set', async () => {
      const { getByTestId, getByText, getByRole } = renderTestCase({
        stickyHeader: true,
        description: <span>{DESCRIPTION}</span>,
      });

      await userEvent.click(getByTestId('buttonBefore'));

      const dialog = getByRole('dialog', { name: TITLE });
      expect(dialog).toHaveAccessibleDescription(DESCRIPTION);
      expect(getByText(TITLE)).toHaveFocus();
    });

    it('should close when hitting escape when stickyHeader is set', async () => {
      const { getByTestId, queryByRole, closeHandler } = renderTestCase({
        stickyHeader: true,
      });

      await userEvent.click(getByTestId('buttonBefore'));
      await userEvent.keyboard('{Escape}');

      if (queryByRole('dialog') !== null) {
        await waitForElementToBeRemoved(() => queryByRole('dialog'), {
          timeout: EXIT_TIMEOUT,
        });
      }
      expect(closeHandler).toHaveBeenCalledWith(false);
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });

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

    it('should not close if onClose returns `false`', async () => {
      const onClose = vi
        .fn()
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(undefined);

      const { getByTestId, getByLabelText, closeHandler, queryByRole } =
        renderTestCase({
          onClose,
        });

      expect(closeHandler).not.toHaveBeenCalled();

      const dialogOpenButton = getByTestId('buttonBefore');
      await userEvent.click(dialogOpenButton);
      const closeButton = getByLabelText(CLOSE_LABEL);
      await userEvent.click(closeButton);

      expect(closeHandler).toHaveBeenCalledTimes(1);
      expect(closeHandler).toHaveBeenCalledWith(false);

      expect(queryByRole('dialog')).toBeVisible();

      onClose.mockReset();
      await userEvent.click(closeButton);

      expect(closeHandler).toHaveBeenCalledTimes(1);
      expect(closeHandler).toHaveBeenCalledWith(false);

      if (queryByRole('dialog') !== null) {
        await waitForElementToBeRemoved(() => queryByRole('dialog'), {
          timeout: EXIT_TIMEOUT,
        });
      }
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('should have a close button that is not aria-hidden', async () => {
      const { getByTestId, queryByRole } = renderTestCase();

      const dialogOpenButton = getByTestId('buttonBefore');
      await userEvent.click(dialogOpenButton);

      // Waiting for `ariaHideOthers` to apply
      await waitFor(() =>
        expect(document.querySelector('[data-aria-hidden]')).not.toBeNull(),
      );

      const closeButton = queryByRole('button', {
        name: CLOSE_LABEL,
        hidden: false,
      });

      expect(closeButton).not.toBeNull();
    });
  });
};
