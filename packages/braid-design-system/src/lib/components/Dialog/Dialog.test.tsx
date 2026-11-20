import { render } from '@testing-library/react';

import { Dialog } from '..';
import { BraidTestProvider } from '../../../test';
import { modalTestSuite } from '../private/Modal/modalTestSuite';

modalTestSuite('Dialog', Dialog);

describe('Dialog', () => {
  it('should warn and ignore stickyHeader when used with an illustration', () => {
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    try {
      render(
        <BraidTestProvider>
          <Dialog
            title="Dialog title"
            illustration={<div />}
            stickyHeader
            open={true}
            onClose={() => {}}
          >
            Dialog content
          </Dialog>
        </BraidTestProvider>,
      );

      expect(consoleWarn).toHaveBeenCalledWith(
        expect.stringContaining(
          'The "stickyHeader" prop is not supported with "coverImage" or "illustration"',
        ),
      );
    } finally {
      consoleWarn.mockRestore();
    }
  });
});
