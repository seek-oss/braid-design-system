import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { RadioGroup, RadioItem, Badge } from '..';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    Example: ({ id, getState, setState }) =>
      source(
        <RadioGroup
          id={id}
          value={getState('radio')}
          onChange={({ currentTarget: { value } }) => setState('radio', value)}
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
    Example: ({ id, getState, setState }) =>
      source(
        <RadioGroup
          id={id}
          value={getState('radio')}
          onChange={({ currentTarget: { value } }) => setState('radio', value)}
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
    Example: ({ id, getState, setState }) =>
      source(
        <RadioGroup
          id={id}
          value={getState('radio')}
          onChange={({ currentTarget: { value } }) => setState('radio', value)}
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
    Example: ({ id, getState, setState }) =>
      source(
        <RadioGroup
          id={id}
          value={getState('radio')}
          onChange={({ currentTarget: { value } }) => setState('radio', value)}
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
    Example: ({ id, getState, setState }) =>
      source(
        <RadioGroup
          id={id}
          value={getState('radio')}
          onChange={({ currentTarget: { value } }) => setState('radio', value)}
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
    Example: ({ id, getState, setState }) =>
      source(
        <RadioGroup
          id={id}
          value={getState('radio')}
          onChange={({ currentTarget: { value } }) => setState('radio', value)}
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
    Example: ({ id, getState, setState, setDefaultState }) =>
      source(
        <>
          {setDefaultState('radio', '2')}

          <RadioGroup
            id={id}
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
];
