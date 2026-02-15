import source from '@braid-design-system/source.macro';

import { TextLink, Text } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Inline link',
    code: source(
      <Text>
        <TextLink href="#">Link text</TextLink>
      </Text>,
    ),
  },
  {
    description: 'Large hit area',
    code: source(
      <Text>
        <TextLink href="#" hitArea="large">
          Large hit area
        </TextLink>
      </Text>,
    ),
  },
  {
    description: 'Visited',
    code: source(
      <Text>
        <TextLink href="" showVisited>
          Visited link
        </TextLink>
      </Text>,
    ),
  },
];
