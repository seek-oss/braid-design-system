import type { Decorator, Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Pagination, Box } from '../';
import type { LinkProps } from '../Link/Link';

import { defaultPageLimit } from './Pagination';

const linkProps = (): LinkProps => ({ href: '#' });

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'tablet'] }),
  },
  argTypes: {
    page: {
      control: 'number',
      description: 'Current page number',
    },
    total: {
      control: 'number',
      description: 'Total number of pages',
    },
    label: {
      control: 'text',
      description: 'Accessible label for the pagination navigation',
    },
    pageLabel: {
      description: 'Function to generate accessible labels for page numbers',
    },
    nextLabel: {
      control: 'text',
      description: 'Text for the next button',
    },
    previousLabel: {
      control: 'text',
      description: 'Text for the previous button',
    },
    pageLimit: {
      control: {
        type: 'range',
        min: 1,
        max: defaultPageLimit,
      },
      description: 'Maximum number of page links to display',
    },
  },
  args: {
    label: 'Label',
    linkProps,
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FirstPageWithLessPages: Story = {
  name: `First page, where total < ${defaultPageLimit}`,
  args: {
    page: 1,
    total: defaultPageLimit - 3,
  },
};

export const FirstPageWithExactPages: Story = {
  name: `First page, where total = ${defaultPageLimit}`,
  args: {
    page: 1,
    total: defaultPageLimit,
  },
};

export const FirstPageWithMorePages: Story = {
  name: `First page, where total > ${defaultPageLimit}`,
  args: {
    page: 1,
    total: defaultPageLimit + 3,
  },
};

export const CenterPageWithLessPages: Story = {
  name: `Center page, where total < ${defaultPageLimit}`,
  args: {
    page: Math.round((defaultPageLimit - 3) / 2),
    total: defaultPageLimit - 3,
  },
};

export const CenterPageWithExactPages: Story = {
  name: `Center page, where total = ${defaultPageLimit}`,
  args: {
    page: Math.round(defaultPageLimit / 2),
    total: defaultPageLimit,
  },
};

export const CenterPageWithMorePages: Story = {
  name: `Center page, where total > ${defaultPageLimit}`,
  args: {
    page: Math.round((defaultPageLimit + 3) / 2),
    total: defaultPageLimit + 3,
  },
};

export const LastPageWithLessPages: Story = {
  name: `Last page, where total < ${defaultPageLimit}`,
  args: {
    page: defaultPageLimit - 3,
    total: defaultPageLimit - 3,
  },
};

export const LastPageWithExactPages: Story = {
  name: `Last page, where total = ${defaultPageLimit}`,
  args: {
    page: defaultPageLimit,
    total: defaultPageLimit,
  },
};

export const LastPageWithMorePages: Story = {
  name: `Last page, where total > ${defaultPageLimit}`,
  args: {
    page: defaultPageLimit + 3,
    total: defaultPageLimit + 3,
  },
};

export const SecondPageWithMorePages: Story = {
  name: `Second page, where total > ${defaultPageLimit}`,
  args: {
    page: 2,
    total: defaultPageLimit + 3,
  },
};

export const SecondLastPageWithMorePages: Story = {
  name: `Second last page, where total > ${defaultPageLimit}`,
  args: {
    page: defaultPageLimit + 3 - 1,
    total: defaultPageLimit + 3,
  },
};

const SurfaceBackgroundDecorator: Decorator = (Story) => (
  <Box background="surface">
    <Story />
  </Box>
);

export const OnASurface: Story = {
  name: 'On a surface',
  args: {
    page: 1,
    total: defaultPageLimit - 3,
  },
  decorators: [SurfaceBackgroundDecorator],
};

export const PageLimitOneFirstPage: Story = {
  name: 'With pageLimit set to 1, on first page',
  args: {
    page: 1,
    total: 10,
    pageLimit: 1,
  },
  decorators: [SurfaceBackgroundDecorator],
};

export const PageLimitOneLastPage: Story = {
  name: 'With pageLimit set to 1, on last page',
  args: {
    page: 10,
    total: 10,
    pageLimit: 1,
  },
  decorators: [SurfaceBackgroundDecorator],
};

export const PageLimitTwoFirstPage: Story = {
  name: 'With pageLimit set to 2, on first page',
  args: {
    page: 1,
    total: 10,
    pageLimit: 2,
  },
  decorators: [SurfaceBackgroundDecorator],
};

export const PageLimitTwoLastPage: Story = {
  name: 'With pageLimit set to 2, on last page',
  args: {
    page: 10,
    total: 10,
    pageLimit: 2,
  },
  decorators: [SurfaceBackgroundDecorator],
};

export const PageLimitThreeFirstPage: Story = {
  name: 'With pageLimit set to 3, on first page',
  args: {
    page: 1,
    total: 10,
    pageLimit: 3,
  },
  decorators: [SurfaceBackgroundDecorator],
};

export const PageLimitThreeLastPage: Story = {
  name: 'With pageLimit set to 3, on last page',
  args: {
    page: 10,
    total: 10,
    pageLimit: 3,
  },
  decorators: [SurfaceBackgroundDecorator],
};
