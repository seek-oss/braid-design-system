import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Tag, Inline, IconTag, Stack } from '../';
import { LayoutTest } from '../../utils/LayoutTest';
import { Box } from '../Box/Box';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    background: 'surface',
    chromatic: setChromatic({ viewports: ['tablet'] }),
  },
  decorators: (Story, { parameters }) => (
    <Box
      {...(parameters.background ? { background: parameters.background } : {})}
    >
      <Story />
    </Box>
  ),
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

const handler = () => {};

export const StandardTag: Story = {
  render: () => (
    <Inline space="small">
      <Tag>Tag</Tag>
      <Tag icon={<IconTag />}>Tag</Tag>
      <Tag icon={<IconTag />} onClear={handler} clearLabel="Clear">
        Tag
      </Tag>
      <Tag icon={<IconTag />} onAdd={handler} addLabel="Add">
        Tag
      </Tag>
    </Inline>
  ),
};

export const SmallTag: Story = {
  render: () => (
    <Inline space="xsmall">
      <Tag size="small">Tag</Tag>
      <Tag size="small" icon={<IconTag />}>
        Tag
      </Tag>
      <Tag size="small" icon={<IconTag />} onClear={handler} clearLabel="Clear">
        Tag
      </Tag>
      <Tag size="small" icon={<IconTag />} onAdd={handler} addLabel="Add">
        Tag
      </Tag>
    </Inline>
  ),
};

export const TruncatedTag: Story = {
  render: () => (
    <Stack space="small">
      <Tag>
        The quick brown fox jumps over the lazy dog. The quick brown fox jumps
        over the lazy dog. The quick brown fox jumps over the lazy dog. The
        quick brown fox jumps over the lazy dog. The quick brown fox jumps over
        the lazy dog. The quick brown fox jumps over the lazy dog. The quick
        brown fox jumps over the lazy dog.
      </Tag>
      <Tag icon={<IconTag />}>
        The quick brown fox jumps over the lazy dog. The quick brown fox jumps
        over the lazy dog. The quick brown fox jumps over the lazy dog. The
        quick brown fox jumps over the lazy dog. The quick brown fox jumps over
        the lazy dog. The quick brown fox jumps over the lazy dog. The quick
        brown fox jumps over the lazy dog.
      </Tag>
      <Tag onClear={handler} clearLabel="Clear tag">
        The quick brown fox jumps over the lazy dog. The quick brown fox jumps
        over the lazy dog. The quick brown fox jumps over the lazy dog. The
        quick brown fox jumps over the lazy dog. The quick brown fox jumps over
        the lazy dog. The quick brown fox jumps over the lazy dog. The quick
        brown fox jumps over the lazy dog.
      </Tag>
      <Tag icon={<IconTag />} onClear={handler} clearLabel="Clear tag">
        The quick brown fox jumps over the lazy dog. The quick brown fox jumps
        over the lazy dog. The quick brown fox jumps over the lazy dog. The
        quick brown fox jumps over the lazy dog. The quick brown fox jumps over
        the lazy dog. The quick brown fox jumps over the lazy dog. The quick
        brown fox jumps over the lazy dog.
      </Tag>
    </Stack>
  ),
};

export const VirtualTouchTarget: Story = {
  name: 'Virtual touch target',
  render: () => (
    <Stack space="large">
      <Inline
        space="xsmall"
        data={{
          [debugTouchableAttrForDataProp]: '',
        }}
      >
        <Tag size="small" onClear={handler} clearLabel="Clear">
          Tag
        </Tag>
        <Tag size="small" onAdd={handler} addLabel="Add">
          Tag
        </Tag>
      </Inline>

      <Inline
        space="small"
        data={{
          [debugTouchableAttrForDataProp]: '',
        }}
      >
        <Tag onClear={handler} clearLabel="Clear">
          Tag
        </Tag>
        <Tag onAdd={handler} addLabel="Add">
          Tag
        </Tag>
      </Inline>
    </Stack>
  ),
};

export const Layout: Story = {
  parameters: {
    background: false,
  },
  render: () => (
    <Box maxWidth="xsmall">
      <LayoutTest>
        <Box>
          <Tag>Tag</Tag>
          <Tag icon={<IconTag />}>Tag</Tag>
          <Tag icon={<IconTag />} onClear={handler} clearLabel="Clear">
            Tag
          </Tag>
          <Tag>
            Cillum sint sint cupidatat sint et proident nostrud quis. Voluptate
            cupidatat deserunt tempor consectetur enim qui occaecat enim
            voluptate deserunt reprehenderit.
          </Tag>
          <Tag icon={<IconTag />}>
            Cillum sint sint cupidatat sint et proident nostrud quis. Voluptate
            cupidatat deserunt tempor consectetur enim qui occaecat enim
            voluptate deserunt reprehenderit.
          </Tag>
          <Tag icon={<IconTag />} onClear={handler} clearLabel="Clear">
            Cillum sint sint cupidatat sint et proident nostrud quis. Voluptate
            cupidatat deserunt tempor consectetur enim qui occaecat enim
            voluptate deserunt reprehenderit.
          </Tag>
        </Box>
      </LayoutTest>
    </Box>
  ),
};
