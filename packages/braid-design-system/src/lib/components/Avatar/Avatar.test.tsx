import { act, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { Avatar, Text, TooltipRenderer } from '..';
import { BraidTestProvider } from '../../../test';
import { palette } from '../../color/palette';
import { IconCompany, IconPhotoAdd } from '../icons';

import { keyline as keylineStyle, imageLoaded } from './Avatar.css';
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
      expect(screen.getByTestId('avatar').firstElementChild).toHaveStyle(
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

    expect(container.querySelector('svg')).toBeVisible();
  });

  it('exposes an accessible name when aria-label is set', () => {
    render(
      <BraidTestProvider>
        <Avatar name="Leia Organa" aria-label="Leia Organa" />
      </BraidTestProvider>,
    );

    expect(screen.getByRole('img', { name: 'Leia Organa' })).toBeVisible();
  });

  it('renders IconProfile when name is omitted', () => {
    const { container } = render(
      <BraidTestProvider>
        <Avatar />
      </BraidTestProvider>,
    );

    expect(screen.queryByRole('img')).toBeNull();
    expect(screen.queryByText('L')).toBeNull();
    expect(container.querySelector('svg')).toBeVisible();
  });

  describe('Image', () => {
    it('accepts imageUrl without errors', () => {
      const imageUrl = 'https://example.com/photo.jpg';
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" imageUrl={imageUrl} />
        </BraidTestProvider>,
      );

      const imgElement = screen.getByRole('presentation', { hidden: true });
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', imageUrl);

      act(() => {
        imgElement.dispatchEvent(new Event('load'));
      });

      expect(imgElement).toBeVisible();
      expect(imgElement).toHaveClass(imageLoaded);
    });

    const withCompleteImages = (run: () => void) => {
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
        run();
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
    };

    it('shows an image that is already complete without waiting for onLoad', () => {
      withCompleteImages(() => {
        render(
          <BraidTestProvider>
            <Avatar name="Leia Organa" imageUrl={photoPlaceholderUrl} />
          </BraidTestProvider>,
        );

        const imgElement = screen.getByRole('presentation', { hidden: true });
        expect(imgElement).toHaveClass(imageLoaded);
      });
    });

    it('shows an already-complete image after loading ends', () => {
      withCompleteImages(() => {
        const { rerender } = render(
          <BraidTestProvider>
            <Avatar name="Leia Organa" imageUrl={photoPlaceholderUrl} loading />
          </BraidTestProvider>,
        );

        expect(screen.queryByRole('presentation', { hidden: true })).toBeNull();

        rerender(
          <BraidTestProvider>
            <Avatar name="Leia Organa" imageUrl={photoPlaceholderUrl} />
          </BraidTestProvider>,
        );

        const imgElement = screen.getByRole('presentation', { hidden: true });
        expect(imgElement).toHaveClass(imageLoaded);
      });
    });

    it('renders broken icon when image is invalid', () => {
      const { container } = render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            imageUrl="https://invalid-path/photo.jpg"
          />
        </BraidTestProvider>,
      );

      const imgElement = screen.getByRole('presentation', { hidden: true });

      act(() => {
        imgElement.dispatchEvent(new Event('error'));
      });

      expect(screen.queryByRole('img')).toBeNull();
      expect(container.querySelector('svg')).toBeVisible();
    });

    it('renders broken icon when a raster data URI loads as empty', () => {
      const { container } = render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            imageUrl="data:image/png;base64,not-an-image"
          />
        </BraidTestProvider>,
      );

      const imgElement = screen.queryByRole('presentation', { hidden: true });

      if (imgElement) {
        act(() => {
          imgElement.dispatchEvent(new Event('load'));
        });
      }

      expect(screen.queryByRole('presentation', { hidden: true })).toBeNull();
      expect(container.querySelector('svg')).toBeVisible();
    });
  });

  describe('Loading', () => {
    it('renders a shimmer skeleton without initials or an image', () => {
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
      ['medium', textSizeUntrimmed.small],
      ['standard', textSizeUntrimmed.standard],
      ['large', textSizeUntrimmed.large],
      ['xlarge', textSizeUntrimmed.large],
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

    it('uses Heading level 3 styles for xxlarge size', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" size="xxlarge" />
        </BraidTestProvider>,
      );

      const initials = screen.getByText('L');
      expect(initials.tagName).toBe('SPAN');
      expect(initials.className).toContain(heading['3']);
    });

    it('does not throw on unknown sizes', () => {
      expect(() =>
        render(
          <BraidTestProvider>
            <Avatar name="Leia Organa" size={'xxxlarge' as 'xlarge'} />
          </BraidTestProvider>,
        ),
      ).not.toThrow();
    });
  });

  describe('Keyline', () => {
    it('applies the surface ring by default', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" data={{ testid: 'avatar' }} />
        </BraidTestProvider>,
      );

      expect(
        screen.getByTestId('avatar').firstElementChild?.className,
      ).toContain(keylineStyle);
    });

    it('applies the surface ring in the loading state', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" loading data={{ testid: 'avatar' }} />
        </BraidTestProvider>,
      );

      expect(
        screen.getByTestId('avatar').firstElementChild?.className,
      ).toContain(keylineStyle);
    });
  });

  describe('icon fallback', () => {
    it('shows initials when name and icon are both set', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" icon={<IconPhotoAdd />} />
        </BraidTestProvider>,
      );

      expect(screen.getByText('L')).toBeVisible();
    });

    it('shows the provided icon when name has no letters', () => {
      const { container } = render(
        <BraidTestProvider>
          <Avatar icon={<IconCompany />} />
        </BraidTestProvider>,
      );

      expect(screen.queryByText('L')).toBeNull();
      expect(container.querySelector('svg')).toBeVisible();
    });
  });

  describe('aria-label and onClick', () => {
    it('exposes a button when onClick and aria-label are set', () => {
      const onClick = vi.fn();
      render(
        <BraidTestProvider>
          <Avatar
            icon={<IconPhotoAdd />}
            aria-label="Add photo"
            onClick={onClick}
          />
        </BraidTestProvider>,
      );

      const button = screen.getByRole('button', { name: 'Add photo' });
      button.click();
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('keeps a named image when aria-label is set without onClick', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" aria-label="Leia" />
        </BraidTestProvider>,
      );

      expect(screen.getByRole('img', { name: 'Leia' })).toBeVisible();
      expect(screen.queryByRole('button')).toBeNull();
    });

    it('throws when onClick is set without aria-label', () => {
      expect(() =>
        render(
          <BraidTestProvider>
            <Avatar icon={<IconPhotoAdd />} onClick={() => undefined} />
          </BraidTestProvider>,
        ),
      ).toThrow('aria-label');
    });

    it('hides a decorative avatar from assistive technologies', () => {
      render(
        <BraidTestProvider>
          <Avatar name="Leia Organa" data={{ testid: 'avatar' }} />
        </BraidTestProvider>,
      );

      expect(screen.getByTestId('avatar')).toHaveAttribute(
        'aria-hidden',
        'true',
      );
    });

    it('exposes a labelled image when tooltip triggerProps are spread', () => {
      render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            aria-label="Leia Organa"
            tabIndex={0}
            aria-describedby="avatar-tooltip"
            data={{ testid: 'avatar' }}
          />
        </BraidTestProvider>,
      );

      const avatar = screen.getByRole('img', { name: 'Leia Organa' });
      expect(avatar).toHaveAttribute('tabindex', '0');
      expect(avatar).toHaveAttribute('aria-describedby', 'avatar-tooltip');
      expect(avatar).not.toHaveAttribute('aria-hidden');
    });

    it('throws when tabIndex is set without aria-label', () => {
      expect(() =>
        render(
          <BraidTestProvider>
            <Avatar name="Leia Organa" tabIndex={0} />
          </BraidTestProvider>,
        ),
      ).toThrow('aria-label');
    });

    it('keeps click when tooltip triggerProps wrap an add-photo avatar', () => {
      const onClick = vi.fn();
      render(
        <BraidTestProvider>
          <TooltipRenderer tooltip={<Text>Add photo</Text>}>
            {({ triggerProps }) => (
              <Avatar
                icon={<IconPhotoAdd />}
                aria-label="Add photo"
                onClick={onClick}
                {...triggerProps}
              />
            )}
          </TooltipRenderer>
        </BraidTestProvider>,
      );

      const button = screen.getByRole('button', { name: 'Add photo' });
      expect(button).not.toHaveAttribute('aria-hidden');
      button.click();
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Image and icon', () => {
    it('ignores icon when an image is shown', () => {
      const { container } = render(
        <BraidTestProvider>
          <Avatar
            name="Leia Organa"
            imageUrl={photoPlaceholderUrl}
            icon={<IconPhotoAdd />}
          />
        </BraidTestProvider>,
      );

      expect(
        screen.getByRole('presentation', { hidden: true }),
      ).toHaveAttribute('src', photoPlaceholderUrl);
      expect(container.querySelector('svg')).toBeNull();
    });
  });
});
