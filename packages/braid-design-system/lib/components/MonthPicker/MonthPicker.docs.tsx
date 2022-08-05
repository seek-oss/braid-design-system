import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import {
  MonthPicker,
  TextLink,
  IconHelp,
  Text,
  Strong,
  List,
  Stack,
  Heading,
} from '../';
import source from '../../utils/source.macro';
import { IconLanguage } from '../icons';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: ({ id, getState, setState }) =>
    source(
      <MonthPicker
        label="Label"
        id={id}
        onChange={setState('monthpicker')}
        value={getState('monthpicker')}
      />,
    ),
  alternatives: [],
  accessibility: (
    <Text>
      Uses native <Strong>fieldset</Strong> and <Strong>legend</Strong> elements
      to group and describe both fields as a single form field.
    </Text>
  ),
  additional: [
    {
      label: 'Changing the months',
      description: (
        <Text>
          By default, the months are displayed using the short month format.
          This can be customised by providing the <Strong>monthNames</Strong>{' '}
          prop, with a list of 12 items in the desired format.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            monthNames={[
              '01',
              '02',
              '03',
              '04',
              '05',
              '06',
              '07',
              '08',
              '09',
              '10',
              '11',
              '12',
            ]}
          />,
        ),
    },
    {
      label: 'Changing the years',
      description: (
        <>
          <Text>
            Years can be restricted to a range using the{' '}
            <Strong>minYear</Strong> and <Strong>maxYear</Strong> props.
          </Text>
          <Text>
            By default, the years are presented in descending order, this can be
            reversed by specifying the <Strong>ascendingYears</Strong> prop.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            minYear={1996}
            maxYear={1998}
            ascendingYears={true}
          />,
        ),
    },
    {
      label: 'Additional labels',
      description: (
        <>
          <Text>
            Supports all three levels of{' '}
            <TextLink href="/components/FieldLabel">FieldLabel</TextLink>:
          </Text>
          <List>
            <Text>
              <Strong>label</Strong> — primary title of the field,
            </Text>
            <Text>
              <Strong>secondaryLabel</Strong> — additional context, typically
              used to indicate optionality of a field,
            </Text>
            <Text>
              <Strong>tertiaryLabel</Strong> — further context, typically used
              for providing assistance with a field.
            </Text>
          </List>
        </>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            secondaryLabel="optional"
            tertiaryLabel={
              <TextLink href="#">
                <IconHelp /> Help
              </TextLink>
            }
          />,
        ),
    },
    {
      label: 'Message and tone',
      description: (
        <>
          <Text>
            A <Strong>message</Strong> is typically used to communicate the
            status of a field, such as an error message. This will be announced
            on focus of the field and can be combined with a{' '}
            <TextLink href="/foundations/tones">tone</TextLink> to illustrate
            its purpose.
          </Text>
          <Text>
            The supported tones are: <Strong>{'"critical"'}</Strong>,{' '}
            <Strong>{'"positive"'}</Strong>, and <Strong>{'"neutral"'}</Strong>.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <Stack space="large">
            <MonthPicker
              label="Label"
              id={`${id}_1`}
              onChange={setState('monthpicker')}
              value={getState('monthpicker')}
              tone="critical"
              message="Critical message"
            />
            <MonthPicker
              label="Label"
              id={`${id}_2`}
              onChange={setState('monthpicker2')}
              value={getState('monthpicker2')}
              tone="positive"
              message="Positive message"
            />
            <MonthPicker
              label="Label"
              id={`${id}_3`}
              onChange={setState('monthpicker3')}
              value={getState('monthpicker3')}
              tone="neutral"
              message="Neutral message"
            />
          </Stack>,
        ),
    },
    {
      label: 'Field description',
      description: (
        <Text>
          Additional context can be provided with a <Strong>description</Strong>
          . This will display below the field label and also be announced by a
          screen reader when the field is focused.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            description="Extra information about the field"
          />,
        ),
    },
    {
      label: 'Disabled field',
      description: (
        <Text>
          Mark the field as disabled by passing <Strong>true</Strong> to the{' '}
          <Strong>disabled</Strong> prop.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            disabled={true}
          />,
        ),
    },
    {
      label: 'Placeholder prompts',
      description: (
        <>
          <Text>
            The field prompts may be customised by providing a{' '}
            <Strong>monthLabel</Strong> and/or <Strong>yearLabel</Strong> and
            will be displayed to a user when no value is selected.
          </Text>

          <Text tone="promote" id="translations">
            <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
            placeholder text is also used as the <Strong>aria-label</Strong> for
            each field within the fieldset.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            monthLabel="MM"
            yearLabel="YYYY"
          />,
        ),
    },
    {
      label: 'Indirect or hidden field labels',
      description: (
        <Text>
          In some cases it may be necessary for a field to be labelled by
          another element or even not to have a visual label. Instead of
          providing a <Strong>label</Strong> either <Strong>aria-label</Strong>{' '}
          or <Strong>aria-labelledby</Strong> can be provided.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <Stack space="large">
            <Heading level="2" id="field1Label">
              Custom field label
            </Heading>
            <MonthPicker
              aria-labelledby="field1Label"
              id={`${id}_1`}
              onChange={setState('monthpicker')}
              value={getState('monthpicker')}
              message="The label for this field is the Heading element before it."
            />

            <MonthPicker
              aria-label="Hidden label for field"
              id={`${id}_2`}
              onChange={setState('monthpicker2')}
              value={getState('monthpicker2')}
              message="The label for this field is hidden."
            />
          </Stack>,
        ),
    },
  ],
};

export default docs;
