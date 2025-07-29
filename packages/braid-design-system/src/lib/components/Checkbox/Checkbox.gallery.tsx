import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Badge, Checkbox, Stack } from '../';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ getState, toggleState }) =>
        source(
          <Checkbox
            checked={getState('checked')}
            onChange={() => toggleState('checked')}
            label="Label"
          />,
        ),
    },
    {
      label: 'With a description',
      Example: ({ getState, toggleState }) =>
        source(
          <Checkbox
            checked={getState('checked')}
            onChange={() => toggleState('checked')}
            label="Label"
            description="Extra information about the field"
          />,
        ),
    },
    {
      label: 'With a Badge',
      Example: ({ getState, toggleState }) =>
        source(
          <Checkbox
            checked={getState('checked')}
            onChange={() => toggleState('checked')}
            label="Label"
            badge={
              <Badge tone="positive" weight="strong">
                Badge
              </Badge>
            }
          />,
        ),
    },
    {
      label: 'Toggling nested content',
      Example: ({ getState, toggleState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('checked', true)}
            <Checkbox
              checked={getState('checked')}
              onChange={() => toggleState('checked')}
              label="Label"
            >
              <Placeholder height={100} />
            </Checkbox>
          </>,
        ),
    },
    {
      label: 'States',
      Example: ({ handler }) =>
        source(
          <Stack space="medium">
            <Checkbox checked={false} label="Unchecked" onChange={handler} />
            <Checkbox checked={true} label="Checked" onChange={handler} />
            <Checkbox checked="mixed" label="Mixed" onChange={handler} />
            <Checkbox
              disabled={true}
              checked={false}
              onChange={handler}
              label="Disabled"
            />
          </Stack>,
        ),
    },
    {
      label: 'Small',
      Example: ({ getState, toggleState }) =>
        source(
          <Checkbox
            checked={getState('checked')}
            onChange={() => toggleState('checked')}
            label="Label"
            size="small"
          />,
        ),
    },
  ],
};
