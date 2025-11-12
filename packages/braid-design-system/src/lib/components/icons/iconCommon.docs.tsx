import type { ComponentExample } from 'site/types';

import { Text, TextLink } from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

export const iconDocumentation: ComponentExample[] = [
  {
    label: 'Tailoring the appearance',
    description: (
      <Text>
        For details about tailoring the appearance of icons see the{' '}
        <TextLink href="/foundations/iconography">
          iconography documentation
        </TextLink>
        .
      </Text>
    ),
  },
  dataAttributeDocs({
    code: `
      <Icon
        data={{ testid: 'icon-1' }}
        // => data-testid="icon-1"
      />
    `,
    supportsNativeSyntax: false,
  }),
];
