import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { Drawer } from '..';
import { BraidTestProvider } from '../../../test';
import { Button } from '../Button/Button';
import { modalTestSuite } from '../private/Modal/modalTestSuite';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

modalTestSuite('Drawer', Drawer);

describe('Drawer', () => {
  it('should name the dialog with aria-label when title is omitted', async () => {
    const { getByRole, getAllByRole } = render(
      <BraidTestProvider>
        <Drawer
          aria-label="Drawer label"
          aria-description="Drawer description"
          open={true}
          onClose={() => {}}
        >
          <h2>Drawer heading</h2>
        </Drawer>
      </BraidTestProvider>,
    );

    const dialog = await waitFor(() =>
      getByRole('dialog', { name: 'Drawer label' }),
    );

    expect(dialog).toHaveAccessibleDescription('Drawer description');
    expect(getAllByRole('heading', { level: 2 })).toHaveLength(1);
  });

  it('should throw when header is used without a title', () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    try {
      expect(() =>
        render(
          <BraidTestProvider>
            {/* @ts-expect-error header requires a title */}
            <Drawer
              aria-label="Drawer label"
              header={<div>Header content</div>}
              open={true}
              onClose={() => {}}
            >
              <h2>Drawer heading</h2>
            </Drawer>
          </BraidTestProvider>,
        ),
      ).toThrow('Drawer header can only be used with a title.');
    } finally {
      consoleError.mockRestore();
    }
  });

  describe('header', () => {
    const TITLE = 'Drawer title';
    const DESCRIPTION = 'Drawer description';
    const EXIT_TIMEOUT = 1500;

    const TestCase = ({
      onClose,
      description,
      header,
    }: {
      onClose: (openState: false) => void;
      description?: ReactNodeNoStrings;
      header?: ReactNodeNoStrings;
    }) => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          <Button
            data={{ testid: 'buttonBefore' }}
            onClick={() => setOpen(true)}
          >
            Open
          </Button>
          <Drawer
            title={TITLE}
            description={description}
            header={header}
            open={open}
            onClose={(newOpenState) => {
              onClose(newOpenState);
              setOpen(newOpenState);
            }}
          >
            <Button data={{ testid: 'buttonInside' }}>Inside</Button>
          </Drawer>
        </div>
      );
    };

    const renderTestCase = ({
      description,
      header,
    }: {
      description?: ReactNodeNoStrings;
      header?: ReactNodeNoStrings;
    } = {}) => {
      const closeHandler = vi.fn();
      return {
        ...render(
          <BraidTestProvider>
            <TestCase
              onClose={closeHandler}
              description={description}
              header={header}
            />
          </BraidTestProvider>,
        ),
        closeHandler,
      };
    };

    const headerContent = (
      <Button data={{ testid: 'buttonInHeader' }}>In header</Button>
    );

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

    it('should render the title inside the scroll container without a header', async () => {
      const { getByTestId, getByText } = renderTestCase();

      await userEvent.click(getByTestId('buttonBefore'));

      const contentScrollContainer = getScrollContainer(
        getByTestId('buttonInside'),
      );
      expect(contentScrollContainer).not.toBeNull();
      expect(getScrollContainer(getByText(TITLE))).toBe(contentScrollContainer);
    });

    it('should render the title and header outside the scroll container', async () => {
      const { getByTestId, getByText } = renderTestCase({
        header: headerContent,
      });

      await userEvent.click(getByTestId('buttonBefore'));

      expect(getScrollContainer(getByTestId('buttonInside'))).not.toBeNull();
      expect(getScrollContainer(getByText(TITLE))).toBeNull();
      expect(getScrollContainer(getByTestId('buttonInHeader'))).toBeNull();
    });

    it('should place the header between the title and the content', async () => {
      const { getByTestId, getByText } = renderTestCase({
        header: headerContent,
      });

      await userEvent.click(getByTestId('buttonBefore'));

      const headerButton = getByTestId('buttonInHeader');
      expect(
        getByText(TITLE).compareDocumentPosition(headerButton) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
      expect(
        headerButton.compareDocumentPosition(getByTestId('buttonInside')) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    });

    it('should preserve accessibility with a header', async () => {
      const { getByTestId, getByText, getByRole } = renderTestCase({
        header: headerContent,
        description: <span>{DESCRIPTION}</span>,
      });

      await userEvent.click(getByTestId('buttonBefore'));

      const dialog = getByRole('dialog', { name: TITLE });
      expect(dialog).toHaveAccessibleDescription(DESCRIPTION);
      expect(getByText(TITLE)).toHaveFocus();
    });

    it('should close when hitting escape with a header', async () => {
      const { getByTestId, queryByRole, closeHandler } = renderTestCase({
        header: headerContent,
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
  });
});
