import { render, waitFor } from '@testing-library/react';

import { Drawer } from '..';
import { BraidTestProvider } from '../../../test';
import { modalTestSuite } from '../private/Modal/modalTestSuite';

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

  it('should warn and ignore stickyHeader when title is omitted', () => {
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    try {
      const { getByRole } = render(
        <BraidTestProvider>
          {/* @ts-expect-error stickyHeader requires a title */}
          <Drawer
            aria-label="Drawer label"
            stickyHeader
            open={true}
            onClose={() => {}}
          >
            <h2>Drawer heading</h2>
          </Drawer>
        </BraidTestProvider>,
      );

      expect(getByRole('dialog', { name: 'Drawer label' })).toBeInTheDocument();
      expect(consoleWarn).toHaveBeenCalledWith(
        expect.stringContaining(
          'The "stickyHeader" prop requires a "title" on Drawer',
        ),
      );
    } finally {
      consoleWarn.mockRestore();
    }
  });
});
