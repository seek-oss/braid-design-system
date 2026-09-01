import { act, render, screen } from '@testing-library/react';

import { Avatar } from '..';
import { BraidTestProvider } from '../../../test';
import { palette } from '../../color/palette';

import { border as borderStyle } from './Avatar.css';
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

describe('Avatar', () => {
  it.each<{
    initials: string;
    name: string;
    expectedColour: string;
  }>([
    {
      initials: 'S',
      name: 'SEEK Avatar',
      expectedColour: palette.seekBlueLight[200],
    },
    {
      initials: 'A',
      name: 'Aquaman',
      expectedColour: palette.orange[200],
    },
    {
      initials: 'F',
      name: 'Fish',
      expectedColour: palette.purple[200],
    },
    {
      initials: 'A',
      name: 'ABC',
      expectedColour: palette.red[200],
    },
    {
      initials: 'C',
      name: 'Carbonara',
      expectedColour: palette.seekPink[200],
    },
  ])(
    'should use default colours to consistently render the same colour for name: $name',
    ({ name, expectedColour, initials }) => {
      render(
        <BraidTestProvider>
          <Avatar name={name} variant="initials" data={{ testid: 'avatar' }} />
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
      name: 'leia elise',
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
        <Avatar variant="initials" name={name} />
      </BraidTestProvider>,
    );

    expect(screen.getByText(expectedInitials)).toBeVisible();
  });

  it('should fallback to icon if initials cannot be determined', () => {
    render(
      <BraidTestProvider>
        <Avatar
          variant="initials"
          name="@@@ )@(#*)!@(&%^(!*&@#(!*& (@*#&!!__!++= ','''';;;;"
        />
      </BraidTestProvider>,
    );

    expect(screen.getByTestId('fallback-icon')).toBeVisible();
  });

  describe('Photo functionality', () => {
    it('accepts photo prop without errors', () => {
      const photoUrl = 'https://example.com/photo.jpg';
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" variant="initials" photoUrl={photoUrl} />
        </BraidTestProvider>,
      );

      const imgElement = screen.getByRole('presentation', { hidden: true });
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', photoUrl);

      act(() => {
        imgElement.dispatchEvent(new Event('load'));
      });

      expect(imgElement).toBeVisible();
    });

    it('renders initials when no photo is provided and variant is initials', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" variant="initials" />
        </BraidTestProvider>,
      );

      expect(screen.getByText('L')).toBeVisible();
      expect(screen.queryByRole('img')).toBeNull();
    });

    it('renders icon when no photo is provided and variant is icon', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" variant="icon" />
        </BraidTestProvider>,
      );

      expect(screen.queryByRole('img')).toBeNull();
      expect(screen.queryByText('L')).toBeNull();
    });

    it('renders broken icon when photo is invalid', () => {
      render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            variant="initials"
            photoUrl="https://invalid-path/photo.jpg"
          />
        </BraidTestProvider>,
      );

      const imgElement = screen.getByRole('presentation', { hidden: true });

      act(() => {
        imgElement.dispatchEvent(new Event('error'));
      });

      expect(screen.queryByRole('img')).toBeNull();
      expect(screen.getByTestId('broken-icon')).toBeVisible();
    });

    it('renders broken icon when photoError is true', () => {
      render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            variant="initials"
            photoUrl="https://example.com/photo.jpg"
            photoError
          />
        </BraidTestProvider>,
      );

      expect(screen.queryByRole('img')).toBeNull();
      expect(screen.getByTestId('broken-icon')).toBeVisible();
    });

    it('prioritizes photoError over photoUrl', () => {
      render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            variant="initials"
            photoUrl="https://example.com/valid-photo.jpg"
            photoError
          />
        </BraidTestProvider>,
      );

      expect(screen.queryByRole('img')).toBeNull();
      expect(screen.getByTestId('broken-icon')).toBeVisible();
    });
  });

  describe('Loading', () => {
    it('renders a shimmer skeleton without initials or a photo', () => {
      render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            variant="initials"
            loading
            data={{ testid: 'avatar' }}
          />
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
      ['small', textSizeUntrimmed.small],
      ['standard', textSizeUntrimmed.standard],
      ['large', textSizeUntrimmed.large],
    ] as const)('uses Text size styles for %s', (size, textSizeClass) => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" variant="initials" size={size} />
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
          <Avatar name="Leia Organa" variant="initials" size="xlarge" />
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
          <Avatar
            name="Leia Organa"
            variant="initials"
            data={{ testid: 'avatar' }}
          />
        </BraidTestProvider>,
      );

      expect(screen.getByTestId('avatar').className).not.toContain(borderStyle);
    });

    it('applies border class when border prop is true', () => {
      render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            variant="initials"
            border
            data={{ testid: 'avatar' }}
          />
        </BraidTestProvider>,
      );

      expect(screen.getByTestId('avatar').className).toContain(borderStyle);
    });

    it('applies border to photo variant', () => {
      render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            variant="initials"
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
            variant="initials"
            loading
            border
            data={{ testid: 'avatar' }}
          />
        </BraidTestProvider>,
      );

      expect(screen.getByTestId('avatar').className).toContain(borderStyle);
    });

    it('applies border to all sizes', () => {
      const sizes = ['small', 'standard', 'large', 'xlarge'] as const;

      sizes.forEach((size) => {
        const { unmount } = render(
          <BraidTestProvider>
            <Avatar
              name="Leia Organa"
              variant="initials"
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
