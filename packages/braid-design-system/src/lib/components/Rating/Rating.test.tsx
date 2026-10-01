import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('should display the review count when provided', () => {
    const { getByText } = render(
      <BraidTestProvider>
        <Rating rating={4.2} reviewText="12 reviews" />
      </BraidTestProvider>,
    );

    expect(getByText('12 reviews')).toBeInTheDocument();
  });

  it('should display a review count of zero', () => {
    const { getByText } = render(
      <BraidTestProvider>
        <Rating rating={4.2} reviewText="0 reviews" />
      </BraidTestProvider>,
    );

    expect(getByText('0 reviews')).toBeInTheDocument();
  });

  it('should expose the review count as a link when reviewLink is provided', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Rating rating={4.2} reviewText="12 reviews" reviewLink="/reviews" />
      </BraidTestProvider>,
    );

    expect(getByRole('link', { name: '12 reviews' })).toHaveAttribute(
      'href',
      '/reviews',
    );
  });

  it('should call onClick when the review link is clicked', async () => {
    const onClick = vi.fn((event) => event.preventDefault());

    const { getByRole } = render(
      <BraidTestProvider>
        <Rating
          rating={4.2}
          reviewText="12 reviews"
          reviewLink="/reviews"
          onClick={onClick}
        />
      </BraidTestProvider>,
    );

    await userEvent.click(getByRole('link', { name: '12 reviews' }));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
