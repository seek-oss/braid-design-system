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
          aria-label="Job details"
          aria-description="Details about the selected job"
          open={true}
          onClose={() => {}}
        >
          <h2>Job details content</h2>
        </Drawer>
      </BraidTestProvider>,
    );

    const dialog = await waitFor(() =>
      getByRole('dialog', { name: 'Job details' }),
    );

    expect(dialog).toHaveAccessibleDescription(
      'Details about the selected job',
    );
    expect(getAllByRole('heading', { level: 2 })).toHaveLength(1);
  });
});
