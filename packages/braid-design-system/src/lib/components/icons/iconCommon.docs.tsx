import type { ComponentExample } from 'site/types';

import { Strong, Text, TextLink } from '../';

export const iconDocumentation: ComponentExample[] = [
  {
    label: 'Customising the appearance',
    description: (
      <Text>
        For details about customising the appearance of icons see the{' '}
        <TextLink href="/foundations/iconography">
          iconography documentation
        </TextLink>
        .
      </Text>
    ),
  },
  {
    label: 'Data attributes',
    description: (
      <>
        <Text>
          Braid components are very explicit about the properties they accept,
          which makes providing arbitrary{' '}
          <TextLink href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">
            data attributes
          </TextLink>{' '}
          not possible. Instead, all Braid components accept a{' '}
          <Strong>data</Strong> prop, allowing a single collection of data
          attributes to be provided.
        </Text>
      </>
    ),
    code: `
        <Icon
          data={{ testid: 'icon-1' }}
          // => data-testid="icon-1"
        />
      `,
  },
];
