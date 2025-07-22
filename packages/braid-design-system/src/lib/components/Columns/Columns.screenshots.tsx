import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { setChromatic } from 'braid-storybook/chromatic';

import { Columns, Column } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const meta = {
  title: 'Components/Columns',
  component: Columns,
  parameters: {
    chromatic: setChromatic({
      viewports: ['mobile', 'tablet', 'desktop', 'wide'],
      wireframeOnly: true,
    }),
  },
  argTypes: {
    space: {
      control: 'select',
      options: [
        'none',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'gutter',
      ],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    alignY: {
      control: 'select',
      options: ['top', 'center', 'bottom'],
    },
    collapseBelow: {
      control: 'select',
      options: ['mobile', 'tablet', 'desktop', 'wide'],
    },
  },
  args: {
    space: 'small',
    children: null,
  },
} satisfies Meta<typeof Columns>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoSpace: Story = {
  name: 'No space',
  render: () => (
    <Columns space="none">
      <Column>
        <Placeholder height={60} />
      </Column>
      <Column>
        <Placeholder height={60} />
      </Column>
    </Columns>
  ),
};

export const CustomSpaceEgSmall: Story = {
  name: 'Custom space, e.g. small',
  render: () => (
    <Columns space="small">
      <Column>
        <Placeholder height={60} />
      </Column>
      <Column>
        <Placeholder height={60} />
      </Column>
    </Columns>
  ),
};

export const ResponsiveSpaceEgSmallLarge: Story = {
  name: 'Responsive space, e.g. ["small", "large"]',
  render: () => (
    <Columns space={['small', 'large']}>
      <Column>
        <Placeholder height={60} />
      </Column>
      <Column>
        <Placeholder height={60} />
      </Column>
    </Columns>
  ),
};

export const ResponsiveSpaceWithNoneBelowTabletEgNoneGutter: Story = {
  name: 'Responsive space with `none` below tablet, e.g. ["none", "gutter"]',
  render: () => (
    <Columns space={['none', 'gutter']}>
      <Column>
        <Placeholder height={60} />
      </Column>
      <Column>
        <Placeholder height={60} />
      </Column>
    </Columns>
  ),
};

export const ResponsiveSpaceWithNoneAboveMobileEgSmallNone: Story = {
  name: 'Responsive space with `none` above mobile, e.g. ["small", "none"]',
  render: () => (
    <Columns space={['small', 'none']}>
      <Column>
        <Placeholder height={60} />
      </Column>
      <Column>
        <Placeholder height={60} />
      </Column>
    </Columns>
  ),
};

export const VerticallyAlignToCenter: Story = {
  name: 'Vertically align to center',
  render: () => (
    <Columns space="small" alignY="center">
      <Column>
        <Placeholder height={60} />
      </Column>
      <Column>
        <Placeholder height={100} />
      </Column>
    </Columns>
  ),
};

export const VerticallyAlignToBottom: Story = {
  name: 'Vertically align to bottom',
  render: () => (
    <Columns space="small" alignY="bottom">
      <Column>
        <Placeholder height={60} />
      </Column>
      <Column>
        <Placeholder height={100} />
      </Column>
    </Columns>
  ),
};

export const ResponsiveAlignmentEgTopOnMobileCenterOnTabletUpwards: Story = {
  name: 'Responsive alignment (e.g. top on mobile, center on tablet upwards)',
  render: () => (
    <Columns space="small" alignY={['top', 'center']}>
      <Column>
        <Placeholder height={60} />
      </Column>
      <Column>
        <Placeholder height={100} />
      </Column>
    </Columns>
  ),
};

export const AlignmentCollapse: Story = {
  name: 'Alignment + collapse',
  render: () => (
    <Columns space="small" collapseBelow="tablet" alignY="center">
      <Column>
        <Placeholder height={60} />
      </Column>
      <Column>
        <Placeholder height={100} />
      </Column>
    </Columns>
  ),
};

export const CollapseBelowTablet: Story = {
  name: 'Collapse below tablet',
  render: () => (
    <Columns space="small" collapseBelow="tablet">
      <Column>
        <Placeholder height={60} label="First" />
      </Column>
      <Column>
        <Placeholder height={60} label="Second" />
      </Column>
    </Columns>
  ),
};

export const CollapseBelowDesktop: Story = {
  name: 'Collapse below desktop',
  render: () => (
    <Columns space="small" collapseBelow="desktop">
      <Column>
        <Placeholder height={60} label="First" />
      </Column>
      <Column>
        <Placeholder height={60} label="Second" />
      </Column>
    </Columns>
  ),
};

export const CollapseBelowWide: Story = {
  name: 'Collapse below wide',
  render: () => (
    <Columns space="small" collapseBelow="wide">
      <Column>
        <Placeholder height={60} label="First" />
      </Column>
      <Column>
        <Placeholder height={60} label="Second" />
      </Column>
    </Columns>
  ),
};

export const CollapseBelowTabletWithCustomSpaceEgSmall: Story = {
  name: 'Collapse below tablet with custom space, e.g. "small"',
  render: () => (
    <Columns space="small" collapseBelow="tablet">
      <Column>
        <Placeholder height={60} label="First" />
      </Column>
      <Column>
        <Placeholder height={60} label="Second" />
      </Column>
    </Columns>
  ),
};

export const CollapseBelowDesktopWithCustomSpaceEgSmall: Story = {
  name: 'Collapse below desktop with custom space, e.g. "small"',
  render: () => (
    <Columns space="small" collapseBelow="desktop">
      <Column>
        <Placeholder height={60} label="First" />
      </Column>
      <Column>
        <Placeholder height={60} label="Second" />
      </Column>
    </Columns>
  ),
};

export const CollapseBelowWideWithCustomSpaceEgSmall: Story = {
  name: 'Collapse below wide with custom space, e.g. "small"',
  render: () => (
    <Columns space="small" collapseBelow="wide">
      <Column>
        <Placeholder height={60} label="First" />
      </Column>
      <Column>
        <Placeholder height={60} label="Second" />
      </Column>
    </Columns>
  ),
};

export const CollapseBelowTabletWithResponsiveSpaceEgSmallLarge: Story = {
  name: 'Collapse below tablet with responsive space, e.g. ["small", "large"]',
  render: () => (
    <Columns space={['small', 'large']} collapseBelow="tablet">
      <Column>
        <Placeholder height={60} label="First" />
      </Column>
      <Column>
        <Placeholder height={60} label="Second" />
      </Column>
    </Columns>
  ),
};

export const CollapseBelowDesktopWithResponsiveSpaceEgSmallMediumXLarge: Story =
  {
    name: 'Collapse below desktop with responsive space, e.g. ["small", "medium", "xlarge"]',
    render: () => (
      <Columns space={['small', 'medium', 'xlarge']} collapseBelow="desktop">
        <Column>
          <Placeholder height={60} label="First" />
        </Column>
        <Column>
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const CollapseBelowWideWithResponsiveSpaceEgXSmallSmallMediumXLarge: Story =
  {
    name: 'Collapse below wide with responsive space, e.g. ["xsmall", "small", "medium", "xlarge"]',
    render: () => (
      <Columns
        space={['xsmall', 'small', 'medium', 'xlarge']}
        collapseBelow="wide"
      >
        <Column>
          <Placeholder height={60} label="First" />
        </Column>
        <Column>
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const CollapseBelowTabletWithResponsiveSpaceAndNoneBelowTabletEgNoneGutter: Story =
  {
    name: 'Collapse below tablet with responsive space and `none` below tablet, e.g. ["none", "gutter"]',
    render: () => (
      <Columns space={['none', 'gutter']} collapseBelow="tablet">
        <Column>
          <Placeholder height={60} label="First" />
        </Column>
        <Column>
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const CollapseBelowDesktopWithResponsiveSpaceAndNoneBelowDesktopEgNoneXSmallGutter: Story =
  {
    name: 'Collapse below desktop with responsive space and `none` below desktop, e.g. ["none", "xsmall", "gutter"]',
    render: () => (
      <Columns space={['none', 'xsmall', 'gutter']} collapseBelow="desktop">
        <Column>
          <Placeholder height={60} label="First" />
        </Column>
        <Column>
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const CollapseBelowWideWithResponsiveSpaceAndNoneBelowWideEgMobileNoneTabletXSmallWideGutter: Story =
  {
    name: 'Collapse below wide with responsive space and `none` below wide, e.g. { mobile: "none", tablet: "xsmall", wide: "gutter" }',
    render: () => (
      <Columns
        space={{
          mobile: 'none',
          tablet: 'xsmall',
          wide: 'gutter',
        }}
        collapseBelow="wide"
      >
        <Column>
          <Placeholder height={60} label="First" />
        </Column>
        <Column>
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const CollapseBelowTabletWithResponsiveSpaceAndNoneAboveMobileEgSmallNone: Story =
  {
    name: 'Collapse below tablet with responsive space and `none` above mobile, e.g. ["small", "none"]',
    render: () => (
      <Columns space={['small', 'none']} collapseBelow="tablet">
        <Column>
          <Placeholder height={60} label="First" />
        </Column>
        <Column>
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const CollapseBelowDesktopWithResponsiveSpaceAndNoneAboveTabletEgSmallMediumNone: Story =
  {
    name: 'Collapse below desktop with responsive space and `none` above tablet, e.g. ["small", "medium", "none"]',
    render: () => (
      <Columns space={['small', 'medium', 'none']} collapseBelow="desktop">
        <Column>
          <Placeholder height={60} label="First" />
        </Column>
        <Column>
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const CollapseBelowWideWithResponsiveSpaceAndNoneAboveDesktopEgSmallMediumLargeNone: Story =
  {
    name: 'Collapse below wide with responsive space and `none` above desktop, e.g. ["small", "medium", "large", "none"]',
    render: () => (
      <Columns
        space={['small', 'medium', 'large', 'none']}
        collapseBelow="wide"
      >
        <Column>
          <Placeholder height={60} label="First" />
        </Column>
        <Column>
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const Reverse: Story = {
  render: () => (
    <Columns space="small" collapseBelow="tablet" reverse>
      <Column>
        <Placeholder height={60} label="First" />
      </Column>
      <Column>
        <Placeholder height={60} label="Second" />
      </Column>
    </Columns>
  ),
};

export const TestCollapsedContentColumnsShouldBeFullWidthWhenSettingAlignY: Story =
  {
    name: 'Test: Collapsed "content" columns should be full width when setting "alignY"',
    render: () => (
      <Columns space="small" alignY="bottom" collapseBelow="tablet">
        <Column>
          <Placeholder height={60} label="No width" />
        </Column>
        <Column width="1/2">
          <Placeholder height={100} label="1/2 width" />
        </Column>
        <Column width="content">
          <Placeholder height={140} label="Content width" />
        </Column>
      </Columns>
    ),
  };

export const TestCollapseBelowAlignOnMobileShouldBeVerticalAndLeftAlignedOnTabletShouldBeHorizontalAndCentreAlignedOnDesktopShouldBeHorizontalAndRightAligned: Story =
  {
    name: 'Test - collapseBelow + align: On mobile should be vertical and left aligned, on tablet should be horizontal and centre aligned, on desktop should be horizontal and right aligned',
    render: () => (
      <Columns
        space="small"
        collapseBelow="tablet"
        align={['left', 'center', 'right']}
      >
        <Column width="1/3">
          <Placeholder height={60} label="First" />
        </Column>
        <Column width="1/3">
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const TestCollapseBelowAlignOnMobileShouldBeVerticalAndLeftAlignedOnTabletShouldBeHorizontalAndCentreAlignedOnDesktopShouldBeHorizontalAndRightAligned2: Story =
  {
    name: 'Test - collapseBelow + align: On mobile should be vertical and left aligned, on tablet should be horizontal and centre aligned, on desktop should be horizontal and right aligned',
    render: () => (
      <Columns
        space="small"
        collapseBelow="desktop"
        align={['left', 'center', 'right']}
      >
        <Column width="1/3">
          <Placeholder height={60} label="First" />
        </Column>
        <Column width="1/3">
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const TestCollapseBelowAlignReverseOnMobileShouldBeVerticalAndLeftAlignedOnTabletShouldBeReversedHorizontallyAndCentreAlignedOnDesktopShouldBeReversedHorizontallyAndRightAlignedOnWideShouldBeReversedHorizontallyAndCentreAligned: Story =
  {
    name: 'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be reversed horizontally and centre aligned, on desktop should be reversed horizontally and right aligned, on wide should be reversed horizontally and centre aligned',
    render: () => (
      <Columns
        space="small"
        collapseBelow="tablet"
        align={['left', 'center', 'right', 'center']}
        reverse
      >
        <Column width="1/3">
          <Placeholder height={60} label="First" />
        </Column>
        <Column width="1/3">
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const TestCollapseBelowAlignReverseOnMobileShouldBeVerticalAndLeftAlignedOnTabletShouldBeVerticalAndCentreAlignedOnDesktopShouldBeReversedHorizontallyAndRightAlignedOnWideShouldBeReversedHorizontallyAndCenterAligned: Story =
  {
    name: 'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be reversed horizontally and right aligned, on wide should be reversed horizontally and center aligned',
    render: () => (
      <Columns
        space="small"
        collapseBelow="desktop"
        align={['left', 'center', 'right', 'center']}
        reverse
      >
        <Column width="1/3">
          <Placeholder height={60} label="First" />
        </Column>
        <Column width="1/3">
          <Placeholder height={60} label="Second" />
        </Column>
      </Columns>
    ),
  };

export const TestComponentSpanWithNoExplicitColumnWidths: Story = {
  name: 'Test - component span with no explicit Column widths',
  render: () => (
    <Columns space="small" component="span">
      <Column>
        <Placeholder height={60} label="First" />
      </Column>
      <Column>
        <Placeholder height={60} label="Second" />
      </Column>
    </Columns>
  ),
};

export const TestComponentSpanWithOneExplicitColumnWidthAndOneNot: Story = {
  name: 'Test - component span with one explicit Column width and one not',
  render: () => (
    <Columns space="small" component="span">
      <Column width="content">
        <Placeholder height={60} label="First" />
      </Column>
      <Column>
        <Placeholder height={60} label="Second" />
      </Column>
    </Columns>
  ),
};
