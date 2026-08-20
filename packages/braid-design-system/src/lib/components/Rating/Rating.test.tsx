import { render } from '@testing-library/react';

import { Rating } from '..';
import { BraidTestProvider } from '../../../test';

describe('Rating', () => {
  it('should expose the stars as an image with an accessible name', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Rating rating={3} />
      </BraidTestProvider>,
    );

    expect(getByRole('img', { name: '3.0 out of 5' })).toBeInTheDocument();
  });

  it('should expose starsOnly as an image with an accessible name', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Rating rating={3} variant="starsOnly" />
      </BraidTestProvider>,
    );

    expect(getByRole('img', { name: '3.0 out of 5' })).toBeInTheDocument();
  });

  it('should honour aria-label if provided', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Rating rating={4.2} aria-label="Rated 4.2 stars" />
      </BraidTestProvider>,
    );

    expect(getByRole('img', { name: 'Rated 4.2 stars' })).toBeInTheDocument();
  });
});
