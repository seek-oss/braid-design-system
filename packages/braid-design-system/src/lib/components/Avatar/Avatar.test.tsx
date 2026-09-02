import { act, render, screen } from '@testing-library/react';

import { Avatar } from '..';
import { BraidTestProvider } from '../../../test';
import { palette } from '../../color/palette';

import { border as borderStyle, imageLoaded } from './Avatar.css';
import { photoPlaceholderUrl } from './photoPlaceholder.css';
import { heading, textSizeUntrimmed } from '../../css/typography.css';
import { shimmerAnimation } from '../private/Skeleton/Skeleton.css';

const hexToRgbString = (hex: string): string => {
  const hexValue = hex.replace(/^#/, '');
  const bigint = parseInt(hexValue, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
};

const expectVisibleSvg = (container: HTMLElement) => {
  expect(container.querySelector('svg')).toBeVisible();
};

describe('Avatar', () => {
  it.each<{
    initials: string;
    name: string;
    expectedColour: string;
  }>([
    {
      initials: 'Q',
      name: 'Qui-Gon Jinn',
      expectedColour: palette.seekBlueLight[200],
    },
    {
      initials: 'Y',
      name: 'Yoda',
      expectedColour: palette.orange[200],
    },
    {
      initials: 'D',
      name: 'Darth Vader',
      expectedColour: palette.purple[200],
    },
    {
      initials: 'L',
      name: 'Leia Organa',
      expectedColour: palette.red[200],
    },
    {
      initials: 'O',
      name: 'Obi-Wan Kenobi',
      expectedColour: palette.seekPink[200],
    },
  ])(
    'should use default colours to consistently render the same colour for name: $name',
    ({ name, expectedColour, initials }) => {
      render(
        <BraidTestProvider>
          <Avatar name={name} data={{ testid: 'avatar' }} />
        </BraidTestProvider>,
      );

      expect(screen.getByText(initials)).toBeVisible();
      expect(screen.getByTestId('avatar')).toHaveStyle(
        `background: ${hexToRgbString(expectedColour)}`,
      );
    },
  );

  it.each<{ scenario: string; name: string; expectedInitials: string }>([
    {
      scenario: 'sanitise characters',
      name: '@@@ )@(#*)!@ valid    (@*#&!!__!++= character',
      expectedInitials: 'V',
    },
    {
      scenario: 'capitalise initials',
      name: 'leia organa',
      expectedInitials: 'L',
    },
    {
      scenario: 'should support thai characters',
      name: 'สวัสดี สบายดีไหม?',
      expectedInitials: 'ส',
    },
    {
      scenario: 'should support chinese characters',
      name: '李 伟',
      expectedInitials: '李',
    },
  ])('should $scenario', ({ name, expectedInitials }) => {
    render(
      <BraidTestProvider>
        <Avatar name={name} />
      </BraidTestProvider>,
    );

    expect(screen.getByText(expectedInitials)).toBeVisible();
  });

  it('should fallback to icon if initials cannot be determined', () => {
    const { container } = render(
      <BraidTestProvider>
        <Avatar name="@@@ )@(#*)!@(&%^(!*&@#(!*& (@*#&!!__!++= ','''';;;;" />
      </BraidTestProvider>,
    );

    expectVisibleSvg(container);
  });

  describe('Photo functionality', () => {
    it('accepts photo prop without errors', () => {
      const photoUrl = 'https://example.com/photo.jpg';
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" photoUrl={photoUrl} />
        </BraidTestProvider>,
      );

      const imgElement = screen.getByRole('presentation', { hidden: true });
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', photoUrl);

      act(() => {
        imgElement.dispatchEvent(new Event('load'));
      });

      expect(imgElement).toBeVisible();
      expect(imgElement).toHaveClass(imageLoaded);
    });

    it('shows a photo that is already complete without waiting for onLoad', () => {
      const completeDescriptor = Object.getOwnPropertyDescriptor(
        HTMLImageElement.prototype,
        'complete',
      );

      Object.defineProperty(HTMLImageElement.prototype, 'complete', {
        configurable: true,
        get() {
          return true;
        },
      });

      try {
        render(
          <BraidTestProvider>
            <Avatar name="Leia Organa" photoUrl={photoPlaceholderUrl} />
          </BraidTestProvider>,
        );

        const imgElement = screen.getByRole('presentation', { hidden: true });
        expect(imgElement).toHaveClass(imageLoaded);
      } finally {
        if (completeDescriptor) {
          Object.defineProperty(
            HTMLImageElement.prototype,
            'complete',
            completeDescriptor,
          );
        } else {
          delete (HTMLImageElement.prototype as { complete?: boolean })
            .complete;
        }
      }
    });

    it('infers initials from name when variant is omitted', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" />
        </BraidTestProvider>,
      );

      expect(screen.getByText('L')).toBeVisible();
    });

    it('exposes an accessible name when label is set', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" label="Leia Organa" />
        </BraidTestProvider>,
      );

      expect(screen.getByRole('img', { name: 'Leia Organa' })).toBeVisible();
    });

    it('renders icon when no photo is provided and variant is icon', () => {
      const { container } = render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" variant="icon" />
        </BraidTestProvider>,
      );

      expect(screen.queryByRole('img')).toBeNull();
      expect(screen.queryByText('L')).toBeNull();
      expectVisibleSvg(container);
    });

    it('renders broken icon when photo is invalid', () => {
      const { container } = render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            photoUrl="https://invalid-path/photo.jpg"
          />
        </BraidTestProvider>,
      );

      const imgElement = screen.getByRole('presentation', { hidden: true });

      act(() => {
        imgElement.dispatchEvent(new Event('error'));
      });

      expect(screen.queryByRole('img')).toBeNull();
      expectVisibleSvg(container);
    });

    it('renders broken icon when photoError is true', () => {
      const { container } = render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            photoUrl="https://example.com/photo.jpg"
            photoError
          />
        </BraidTestProvider>,
      );

      expect(screen.queryByRole('img')).toBeNull();
      expectVisibleSvg(container);
    });

    it('prioritizes photoError over photoUrl', () => {
      const { container } = render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            photoUrl="https://example.com/valid-photo.jpg"
            photoError
          />
        </BraidTestProvider>,
      );

      expect(screen.queryByRole('img')).toBeNull();
      expectVisibleSvg(container);
    });
  });

  describe('Loading', () => {
    it('renders a shimmer skeleton without initials or a photo', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" loading data={{ testid: 'avatar' }} />
        </BraidTestProvider>,
      );

      expect(screen.queryByText('L')).toBeNull();
      expect(screen.queryByRole('presentation', { hidden: true })).toBeNull();
      expect(screen.getByTestId('avatar').innerHTML).toContain(
        shimmerAnimation,
      );
    });
  });

  describe('Size support', () => {
    it.each([
      ['xsmall', textSizeUntrimmed.xsmall],
      ['small', textSizeUntrimmed.small],
      ['standard', textSizeUntrimmed.standard],
      ['large', textSizeUntrimmed.large],
    ] as const)('uses Text size styles for %s', (size, textSizeClass) => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" size={size} />
        </BraidTestProvider>,
      );

      const initials = screen.getByText('L');
      expect(initials.tagName).toBe('SPAN');
      expect(initials.className).toContain(textSizeClass);
      expect(initials.className).not.toContain(heading['3']);
    });

    it('uses Heading level 3 styles for xlarge size', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" size="xlarge" />
        </BraidTestProvider>,
      );

      const initials = screen.getByText('L');
      expect(initials.tagName).toBe('SPAN');
      expect(initials.className).toContain(heading['3']);
    });
  });

  describe('Border functionality', () => {
    it('does not apply border class by default', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" data={{ testid: 'avatar' }} />
        </BraidTestProvider>,
      );

      expect(screen.getByTestId('avatar').className).not.toContain(borderStyle);
    });

    it('applies border class when border prop is true', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" border data={{ testid: 'avatar' }} />
        </BraidTestProvider>,
      );

      expect(screen.getByTestId('avatar').className).toContain(borderStyle);
    });

    it('applies border to photo variant', () => {
      render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            photoUrl="https://example.com/photo.jpg"
            border
            data={{ testid: 'avatar' }}
          />
        </BraidTestProvider>,
      );

      expect(screen.getByTestId('avatar').className).toContain(borderStyle);
    });

    it('applies border to icon variant', () => {
      render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            variant="icon"
            border
            data={{ testid: 'avatar' }}
          />
        </BraidTestProvider>,
      );

      expect(screen.getByTestId('avatar').className).toContain(borderStyle);
    });

    it('applies border in loading state', () => {
      render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            loading
            border
            data={{ testid: 'avatar' }}
          />
        </BraidTestProvider>,
      );

      expect(screen.getByTestId('avatar').className).toContain(borderStyle);
    });

    it('applies border to all sizes', () => {
      const sizes = ['xsmall', 'small', 'standard', 'large', 'xlarge'] as const;

      sizes.forEach((size) => {
        const { unmount } = render(
          <BraidTestProvider>
            <Avatar
              name="Leia Organa"
              size={size}
              border
              data={{ testid: 'avatar' }}
            />
          </BraidTestProvider>,
        );

        expect(screen.getByTestId('avatar').className).toContain(borderStyle);
        unmount();
      });
    });
  });
});
