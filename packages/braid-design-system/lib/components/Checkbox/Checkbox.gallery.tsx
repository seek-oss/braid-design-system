import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { Badge, Checkbox, Stack } from '../';
import source from '../../utils/source.macro';
import { Placeholder } from '../../playroom/components';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    Example: ({ id, getState, toggleState }) =>
      source(
        <Checkbox
          id={id}
          checked={getState('checked')}
          onChange={() => toggleState('checked')}
          label="Label"
        />,
      ),
  },
  {
    label: 'With a description',
    Example: ({ id, getState, toggleState }) =>
      source(
        <Checkbox
          id={id}
          checked={getState('checked')}
          onChange={() => toggleState('checked')}
          label="Label"
          description="Extra information about the field"
        />,
      ),
  },
  {
    label: 'With a Badge',
    Example: ({ id, getState, toggleState }) =>
      source(
        <Checkbox
          id={id}
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
    Example: ({ id, getState, toggleState, setDefaultState }) =>
      source(
        <>
          {setDefaultState('checked', true)}
          <Checkbox
            id={id}
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
    background: 'surface',
    Example: ({ id, handler }) =>
      source(
        <Stack space="medium">
          <Checkbox
            id={`chk_states_${id}_1`}
            checked={false}
            label="Unchecked"
            onChange={handler}
          />
          <Checkbox
            id={`chk_states_${id}_2`}
            checked={true}
            label="Checked"
            onChange={handler}
          />
          <Checkbox
            id={`chk_states_${id}_3`}
            checked="mixed"
            label="Mixed"
            onChange={handler}
          />
          <Checkbox
            id={`chk_states_${id}_4`}
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
    Example: ({ id, getState, toggleState }) =>
      source(
        <Checkbox
          id={id}
          checked={getState('checked')}
          onChange={() => toggleState('checked')}
          label="Label"
          size="small"
        />,
      ),
  },
];
