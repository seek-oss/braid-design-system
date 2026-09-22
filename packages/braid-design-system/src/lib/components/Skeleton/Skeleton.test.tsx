import { render } from '@testing-library/react';

import { Skeleton } from '..';
import { BraidTestProvider } from '../../../test';

import * as styles from './Skeleton.css';

describe('Skeleton', () => {
  it('should hide unlabelled bones from assistive technologies', () => {
    const { container } = render(
      <BraidTestProvider>
        <Skeleton />
      </BraidTestProvider>,
    );

    const bone = container.querySelector('[aria-hidden="true"]');
    expect(bone).toBeInTheDocument();
    expect(bone).not.toHaveAttribute('role', 'status');
    expect(bone).not.toHaveAttribute('role', 'alert');
  });

  it('should announce a labelled bone politely as a status', () => {
    const { getByRole, queryByRole } = render(
      <BraidTestProvider>
        <Skeleton aria-label="Loading" />
      </BraidTestProvider>,
    );

    const status = getByRole('status', { name: 'Loading' });
    expect(status).toHaveAttribute('aria-live', 'polite');
    expect(queryByRole('alert')).not.toBeInTheDocument();
  });

  it('should apply data attributes', () => {
    const { getByTestId } = render(
      <BraidTestProvider>
        <Skeleton data={{ testid: 'skeleton-1' }} />
      </BraidTestProvider>,
    );

    expect(getByTestId('skeleton-1')).toBeInTheDocument();
  });

  it('should delay visibility without dropping the shimmer', () => {
    const { getByTestId } = render(
      <BraidTestProvider>
        <Skeleton delayVisibility data={{ testid: 'delayed' }} />
      </BraidTestProvider>,
    );

    const bone = getByTestId('delayed');
    expect(bone).toHaveClass(styles.delayVisibility);
    expect(
      bone.querySelector(`.${styles.shimmerAnimation}`),
    ).toBeInTheDocument();
  });

  it('should apply rectangle space-token height', () => {
    const { getByTestId } = render(
      <BraidTestProvider>
        <Skeleton
          type="rectangle"
          height="xlarge"
          data={{ testid: 'rectangle' }}
        />
      </BraidTestProvider>,
    );

    expect(getByTestId('rectangle')).toHaveClass(styles.rectangleHeight.xlarge);
  });

  it('should apply numeric percentage width', () => {
    const { getByTestId } = render(
      <BraidTestProvider>
        <Skeleton width={40} data={{ testid: 'percent' }} />
      </BraidTestProvider>,
    );

    const bone = getByTestId('percent');
    expect(bone).toHaveClass(styles.percentWidth);
    expect(bone.getAttribute('style')).toMatch(/40%/);
  });

  it('should require a heading level', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          {/* @ts-expect-error -- level is required for headings */}
          <Skeleton type="heading" />
        </BraidTestProvider>,
      ),
    ).toThrow('The "level" prop is required when type is "heading"');
  });

  it('should reject size unless the bone is text', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          {/* @ts-expect-error -- size is only valid for text */}
          <Skeleton type="button" size="small" />
        </BraidTestProvider>,
      ),
    ).toThrow('The "size" prop is only valid when type is "text"');
  });

  it('should reject lines unless the bone is text', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          {/* @ts-expect-error -- lines is only valid for text */}
          <Skeleton type="button" lines={2} />
        </BraidTestProvider>,
      ),
    ).toThrow('The "lines" prop is only valid when type is "text"');
  });

  it('should reject a non-positive lines count', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <Skeleton type="text" lines={0} />
        </BraidTestProvider>,
      ),
    ).toThrow('The "lines" prop must be a positive integer');
  });

  it('should shorten the last line of a paragraph to 50%', () => {
    const { getByTestId } = render(
      <BraidTestProvider>
        <Skeleton type="text" lines={3} data={{ testid: 'paragraph' }} />
      </BraidTestProvider>,
    );

    const bars = getByTestId('paragraph').querySelectorAll(
      `.${styles.textLine}`,
    );
    expect(bars).toHaveLength(3);
    expect(
      bars[2].querySelector(`.${styles.width.medium}`),
    ).toBeInTheDocument();
    expect(bars[0].querySelector(`.${styles.width.full}`)).toBeInTheDocument();
    expect(bars[0]).toHaveClass(styles.textCapHeight.standard);
  });
});
