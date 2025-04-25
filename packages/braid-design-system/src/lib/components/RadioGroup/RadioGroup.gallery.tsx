import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { RadioGroup, RadioItem, Badge } from '..';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ getState, setState }) =>
        source(
          <RadioGroup
            value={getState('radio')}
            onChange={({ currentTarget: { value } }) =>
              setState('radio', value)
            }
            label="Label"
          >
            <RadioItem label="One" value="1" />
            <RadioItem label="Two" value="2" />
            <RadioItem label="Three" value="3" />
          </RadioGroup>,
        ),
    },
    {
      label: 'With a critical message',
      Example: ({ getState, setState }) =>
        source(
          <RadioGroup
            value={getState('radio')}
            onChange={({ currentTarget: { value } }) =>
              setState('radio', value)
            }
            label="Label"
            message="Critical message"
            tone="critical"
          >
            <RadioItem label="One" value="1" />
            <RadioItem label="Two" value="2" />
            <RadioItem label="Three" value="3" />
          </RadioGroup>,
        ),
    },
    {
      label: 'With a description',
      Example: ({ getState, setState }) =>
        source(
          <RadioGroup
            value={getState('radio')}
            onChange={({ currentTarget: { value } }) =>
              setState('radio', value)
            }
            label="Label"
            description="Extra information about the field"
          >
            <RadioItem label="One" value="1" />
            <RadioItem label="Two" value="2" />
            <RadioItem label="Three" value="3" />
          </RadioGroup>,
        ),
    },
    {
      label: 'With item-level descriptions',
      Example: ({ getState, setState }) =>
        source(
          <RadioGroup
            value={getState('radio')}
            onChange={({ currentTarget: { value } }) =>
              setState('radio', value)
            }
            label="Label"
          >
            <RadioItem
              label="One"
              value="1"
              description="Description for item 1"
            />
            <RadioItem
              label="Two"
              value="2"
              description="Description for item 2"
            />
            <RadioItem
              label="Three"
              value="3"
              description="Description for item 3"
            />
          </RadioGroup>,
        ),
    },
    {
      label: 'With a Badge',
      Example: ({ getState, setState }) =>
        source(
          <RadioGroup
            value={getState('radio')}
            onChange={({ currentTarget: { value } }) =>
              setState('radio', value)
            }
            label="Label"
          >
            <RadioItem label="One" value="1" />
            <RadioItem label="Two" value="2" />
            <RadioItem
              label="Three"
              value="3"
              badge={
                <Badge tone="positive" weight="strong">
                  Badge
                </Badge>
              }
            />
          </RadioGroup>,
        ),
    },
    {
      label: 'Small',
      Example: ({ getState, setState }) =>
        source(
          <RadioGroup
            value={getState('radio')}
            onChange={({ currentTarget: { value } }) =>
              setState('radio', value)
            }
            label="Label"
            size="small"
          >
            <RadioItem label="One" value="1" />
            <RadioItem label="Two" value="2" />
            <RadioItem label="Three" value="3" />
          </RadioGroup>,
        ),
    },
    {
      label: 'Toggling nested content',
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('radio', '2')}

            <RadioGroup
              value={getState('radio')}
              onChange={({ currentTarget: { value } }) =>
                setState('radio', value)
              }
              label="Label"
            >
              <RadioItem label="One" value="1" />
              <RadioItem label="Two" value="2">
                <Placeholder height={100} />
              </RadioItem>
              <RadioItem label="Three" value="3" />
            </RadioGroup>
          </>,
        ),
    },
  ],
};
