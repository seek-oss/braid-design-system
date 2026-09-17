import source from '@braid-design-system/source.macro';

import {
  Avatar,
  IconCompany,
  IconPhotoAdd,
  Inline,
  Stack,
  Text,
  TooltipRenderer,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Initials',
    code: source(<Avatar name="Leia Organa" />),
  },
  {
    description: 'Empty',
    code: source(<Avatar />),
  },
  {
    description: 'Image',
    code: source(
      <Avatar name="Leia Organa" imageUrl="https://example.com/photo.jpg" />,
    ),
  },
  {
    description: 'With name',
    code: source(
      <Inline space="medium" alignY="center">
        <Avatar name="Leia Organa" />
        <Stack space="xsmall">
          <Text>Leia Organa</Text>
          <Text size="small" tone="secondary">
            Product Designer
          </Text>
        </Stack>
      </Inline>,
    ),
  },
  {
    description: 'Sizes',
    code: source(
      <Inline space="small" alignY="center">
        <Avatar name="Leia Organa" size="xsmall" />
        <Avatar name="Leia Organa" size="small" />
        <Avatar name="Leia Organa" size="medium" />
        <Avatar name="Leia Organa" size="standard" />
        <Avatar name="Leia Organa" size="large" />
        <Avatar name="Leia Organa" size="xlarge" />
        <Avatar name="Leia Organa" size="xxlarge" />
      </Inline>,
    ),
  },
  {
    description: 'Loading',
    code: source(<Avatar name="Leia Organa" loading />),
  },
  {
    description: 'Company',
    code: source(<Avatar icon={<IconCompany />} />),
  },
  {
    description: 'Add photo',
    code: source(
      <Avatar
        icon={<IconPhotoAdd />}
        aria-label="Add photo"
        onClick={() => undefined}
      />,
    ),
  },
  {
    description: 'With tooltip',
    code: source(
      <TooltipRenderer tooltip={<Text>Leia Organa</Text>}>
        {({ triggerProps }) => (
          <Avatar
            name="Leia Organa"
            aria-label="Leia Organa"
            {...triggerProps}
          />
        )}
      </TooltipRenderer>,
    ),
  },
];
