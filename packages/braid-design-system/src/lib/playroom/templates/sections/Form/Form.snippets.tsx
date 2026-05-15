import source from '@braid-design-system/source.macro';

import type { TemplateSnippets } from '../../../../components/private/Snippets';
import {
  Actions,
  Button,
  Checkbox,
  Dropdown,
  Heading,
  MonthPicker,
  PageBlock,
  Stack,
  Strong,
  Text,
  TextField,
} from '../../../../playroom/components';
import { getState, toggleState } from '../../stateStubs';

export const snippets: TemplateSnippets = [
  {
    group: 'Sections',
    name: 'Form (basic)',
    code: source(
      <PageBlock width="medium">
        <Stack space="xlarge">
          <Stack space="small">
            <Heading level="3">Heading</Heading>

            <Text>
              For forms with minimal or no validation as errors will impact
              layout.
            </Text>

            <Text>
              Uses a <Strong>large Stack</Strong> for fields, with a{' '}
              <Strong>xlarge Stack</Strong> separating the actions from the
              form.
            </Text>
          </Stack>

          <Stack space="large">
            <TextField label="TextField" />

            <Dropdown
              label="Dropdown"
              tone={getState('error') ? 'critical' : undefined}
              message={getState('error') ? 'Required field' : undefined}
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Dropdown>

            <MonthPicker label="MonthPicker" />

            <Checkbox label="Checkbox" />
          </Stack>

          <Actions>
            <Button>Primary action</Button>
            <Button variant="transparent" onClick={() => toggleState('error')}>
              Toggle error
            </Button>
          </Actions>
        </Stack>
      </PageBlock>,
    ),
  },
  {
    group: 'Sections',
    name: 'Form (validation)',
    code: source(
      <PageBlock width="medium">
        <Stack space="xlarge">
          <Stack space="small">
            <Heading level="3">Heading</Heading>

            <Text>
              For forms that are more likely to show validation errors, it is
              recommended to use <Strong>reserveMessageSpace</Strong> to prevent
              the elements shifting when messages appear.
            </Text>

            <Text>
              Uses a <Strong>small Stack</Strong> for fields, with a{' '}
              <Strong>large Stack</Strong> separating the actions from the form.
            </Text>
          </Stack>

          <Stack space="large">
            <Stack space="small">
              <TextField
                label="TextField"
                reserveMessageSpace
                tone={getState('error') ? 'critical' : undefined}
                message={getState('error') ? 'Required field' : undefined}
              />

              <Dropdown
                label="Dropdown"
                reserveMessageSpace
                tone={getState('error') ? 'critical' : undefined}
                message={getState('error') ? 'Required field' : undefined}
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Dropdown>

              <MonthPicker
                label="MonthPicker"
                reserveMessageSpace
                tone={getState('error') ? 'critical' : undefined}
                message={getState('error') ? 'Required field' : undefined}
              />

              <Checkbox
                label="Checkbox"
                reserveMessageSpace
                tone={getState('error') ? 'critical' : undefined}
                message={getState('error') ? 'Required field' : undefined}
              />
            </Stack>

            <Actions>
              <Button onClick={() => toggleState('error')}>
                Toggle errors
              </Button>
            </Actions>
          </Stack>
        </Stack>
      </PageBlock>,
    ),
  },
];
