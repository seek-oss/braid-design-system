import source from '@braid-design-system/source.macro';

import type { PatternSnippets } from '../../../components/private/Snippets';
import {
  ButtonIcon,
  CheckboxStandalone,
  Column,
  Columns,
  IconDelete,
  IconDownload,
  Inline,
  Stack,
  Text,
} from '../../components';

export const snippets: PatternSnippets = [
  {
    group: 'Patterns',
    name: 'Bulk actions',
    code: ({ setDefaultState, getState, setState, toggleState }) =>
      source(
        <>
          {setDefaultState('one', false)}
          {setDefaultState('two', false)}
          {setDefaultState('three', false)}
          <Stack space="large">
            <Inline space="medium" alignY="center">
              <CheckboxStandalone
                aria-label="Select all"
                checked={[getState('one'), getState('two'), getState('three')]}
                onChange={({ currentTarget: { checked } }) => {
                  setState('one', checked);
                  setState('two', checked);
                  setState('three', checked);
                }}
              />
              {getState('one') || getState('two') || getState('three') ? (
                <Inline space="large">
                  <ButtonIcon bleed icon={<IconDownload />} label="Action 1" />
                  <ButtonIcon bleed icon={<IconDelete />} label="Action 2" />
                </Inline>
              ) : null}
            </Inline>
            <Columns space="small">
              <Column width="content">
                <Text>
                  <CheckboxStandalone
                    aria-label="one"
                    checked={getState('one')}
                    onChange={() => toggleState('one')}
                  />
                </Text>
              </Column>
              <Column>
                <Text>Item 1</Text>
              </Column>
            </Columns>
            <Columns space="small">
              <Column width="content">
                <Text>
                  <CheckboxStandalone
                    aria-label="two"
                    checked={getState('two')}
                    onChange={() => toggleState('two')}
                  />
                </Text>
              </Column>
              <Column>
                <Text>Item 2</Text>
              </Column>
            </Columns>
            <Columns space="small">
              <Column width="content">
                <Text>
                  <CheckboxStandalone
                    aria-label="three"
                    checked={getState('three')}
                    onChange={() => toggleState('three')}
                  />
                </Text>
              </Column>
              <Column>
                <Text>Item 3</Text>
              </Column>
            </Columns>
          </Stack>
        </>,
      ),
  },
];
