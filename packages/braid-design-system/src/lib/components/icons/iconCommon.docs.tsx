import type { ComponentExample } from 'site/types';

import { Text, TextLink } from '../';

export const iconDocumentation: ComponentExample = {
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
};
