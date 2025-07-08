import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { makeBraidModes } from 'braid-storybook/modes';

import { Columns, Column } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const meta = {
  title: 'Components/Columns',
  component: Columns,
  parameters: {
    chromatic: {
      modes: makeBraidModes({
        viewports: ['xsmall', 'small', 'medium', 'large'],
        themes: ['wireframe'],
      }),
    },
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

export const Nospace: Story = {
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

export const Customspaceegsmall: Story = {
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

export const Responsivespaceegsmalllarge: Story = {
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

export const Responsivespacewithnonebelowtabletegnonegutter: Story = {
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

export const Responsivespacewithnoneabovemobileegsmallnone: Story = {
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

export const Verticallyaligntocenter: Story = {
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

export const Verticallyaligntobottom: Story = {
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

export const Responsivealignmentegtoponmobilecenterontabletupwards: Story = {
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

export const Alignmentcollapse: Story = {
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

export const Collapsebelowtablet: Story = {
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

export const Collapsebelowdesktop: Story = {
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

export const Collapsebelowwide: Story = {
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

export const Collapsebelowtabletwithcustomspaceegsmall: Story = {
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

export const Collapsebelowdesktopwithcustomspaceegsmall: Story = {
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

export const Collapsebelowwidewithcustomspaceegsmall: Story = {
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

export const Collapsebelowtabletwithresponsivespaceegsmalllarge: Story = {
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

export const Collapsebelowdesktopwithresponsivespaceegsmallmediumxlarge: Story =
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

export const Collapsebelowwidewithresponsivespaceegxsmallsmallmediumxlarge: Story =
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

export const Collapsebelowtabletwithresponsivespaceandnonebelowtabletegnonegutter: Story =
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

export const Collapsebelowdesktopwithresponsivespaceandnonebelowdesktopegnonexsmallgutter: Story =
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

export const Collapsebelowwidewithresponsivespaceandnonebelowwideegmobilenonetabletxsmallwidegutter: Story =
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

export const Collapsebelowtabletwithresponsivespaceandnoneabovemobileegsmallnone: Story =
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

export const Collapsebelowdesktopwithresponsivespaceandnoneabovetabletegsmallmediumnone: Story =
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

export const Collapsebelowwidewithresponsivespaceandnoneabovedesktopegsmallmediumlargenone: Story =
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
  name: 'Reverse',
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

export const TestCollapsedcontentcolumnsshouldbefullwidthwhensettingalignY: Story =
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

export const TestcollapseBelowalignOnmobileshouldbeverticalandleftalignedontabletshouldbehorizontalandcentrealignedondesktopshouldbehorizontalandrightaligned: Story =
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

export const TestcollapseBelowalignOnmobileshouldbeverticalandleftalignedontabletshouldbehorizontalandcentrealignedondesktopshouldbehorizontalandrightaligned2: Story =
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

export const TestcollapseBelowalignreverseOnmobileshouldbeverticalandleftalignedontabletshouldbereversedhorizontallyandcentrealignedondesktopshouldbereversedhorizontallyandrightalignedonwideshouldbereversedhorizontallyandcentrealigned: Story =
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

export const TestcollapseBelowalignreverseOnmobileshouldbeverticalandleftalignedontabletshouldbeverticalandcentrealignedondesktopshouldbereversedhorizontallyandrightalignedonwideshouldbereversedhorizontallyandcenteraligned: Story =
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

export const TestcomponentspanwithnoexplicitColumnwidths: Story = {
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

export const TestcomponentspanwithoneexplictColumnwidthandonenot: Story = {
  name: 'Test - component span with one explict Column width and one not',
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
