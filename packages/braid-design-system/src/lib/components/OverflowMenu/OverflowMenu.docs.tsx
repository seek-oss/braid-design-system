import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  OverflowMenu,
  MenuItem,
  MenuItemLink,
  Text,
  TextLink,
  Strong,
  Box,
  Dialog,
  Stack,
  Actions,
  Button,
  IconDelete,
  Badge,
  Spread,
  Inline,
  List,
} from '../';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Box style={{ maxWidth: '100px' }}>
        <OverflowMenu label="Options">
          <MenuItem onClick={() => {}}>Button</MenuItem>
          <MenuItemLink href="#" onClick={() => {}}>
            Link
          </MenuItemLink>
        </OverflowMenu>
      </Box>,
    ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/menu/">
        WAI-ARIA Menu Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    { name: 'MenuRenderer', description: 'For custom menu components.' },
  ],
  additional: [
    {
      label: 'Destructive actions',
      description: (
        <Text>
          For destructive actions like “Delete” you can set the menu item’s{' '}
          <Strong>tone</Strong> to <Strong>critical.</Strong> When using this
          feature, you may want to consider providing a confirmation via a{' '}
          <TextLink href="/components/Dialog">Dialog.</TextLink>
        </Text>
      ),
      Example: ({ getState, toggleState, showToast }) =>
        source(
          <>
            <Box style={{ maxWidth: '100px' }}>
              <OverflowMenu label="Options">
                <MenuItem
                  onClick={() => toggleState('confirm')}
                  tone="critical"
                >
                  Delete
                </MenuItem>
              </OverflowMenu>
            </Box>
            <Dialog
              width="content"
              title="Delete item?"
              open={getState('confirm')}
              onClose={() => toggleState('confirm')}
            >
              <Stack space="large">
                <Text tone="secondary">
                  Are you sure you want to delete this item?
                </Text>
                <Actions>
                  <Button
                    tone="critical"
                    onClick={() => {
                      toggleState('confirm');
                      showToast({
                        tone: 'positive',
                        message: 'Item successfully deleted',
                        key: 'itemDeleted',
                      });
                    }}
                  >
                    <IconDelete /> Delete
                  </Button>
                  <Button
                    variant="transparent"
                    onClick={() => toggleState('confirm')}
                  >
                    Cancel
                  </Button>
                </Actions>
              </Stack>
            </Dialog>
          </>,
        ),
    },
    {
      label: 'Menu interactions',
      description: (
        <>
          <Text>
            The menu accepts both an <Strong>onOpen</Strong> and an{' '}
            <Strong>onClose</Strong> function.
          </Text>
          <Stack space="medium">
            <Text>The onClose function receives the following data:</Text>
            <List>
              <Text>
                <Strong>reason:</Strong> &ldquo;exit&rdquo; or
                &ldquo;selection&rdquo;
              </Text>
              <Text>
                <Strong>index:</Strong> the index of the selected menu item
              </Text>
              <Text>
                <Strong>id:</Strong> the id of the selected menu item as
                provided to the <Strong>MenuItem</Strong> component itself.
              </Text>
            </List>
          </Stack>
        </>
      ),
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('closeReason', {})}
            {setDefaultState('action', '')}

            <Spread space="large">
              <Box width="full" style={{ maxWidth: '100px' }}>
                <OverflowMenu
                  label="Options"
                  onOpen={() => {
                    setState('action', 'open');
                    setState('closeReason', {});
                  }}
                  onClose={(closeReason) => {
                    setState('action', 'close');
                    setState('closeReason', closeReason);
                  }}
                >
                  <MenuItem onClick={() => {}}>Item 1</MenuItem>
                  <MenuItem onClick={() => {}}>Item 2</MenuItem>
                  <MenuItem onClick={() => {}}>Item 3</MenuItem>
                </OverflowMenu>
              </Box>
              <Inline space="small" collapseBelow="tablet">
                {getState('action') ? (
                  <Badge
                    tone="info"
                    weight="strong"
                    bleedY
                  >{`Action: ${getState('action')}`}</Badge>
                ) : null}
                {getState('closeReason').reason ? (
                  <Badge tone="info" bleedY>
                    {`Reason: ${getState('closeReason').reason}`}
                  </Badge>
                ) : null}
                {typeof getState('closeReason').index !== 'undefined' ? (
                  <Badge tone="info" bleedY>
                    {`Selected index: ${getState('closeReason').index}`}
                  </Badge>
                ) : null}
                {getState('closeReason').id ? (
                  <Badge tone="info" bleedY>
                    {`Selected ID: ${getState('closeReason').id}`}
                  </Badge>
                ) : null}
              </Inline>
            </Spread>
          </>,
        ),
    },
    {
      label: 'Sizes',
      description: (
        <Text>
          You can customise the size of the menu via the <Strong>size</Strong>{' '}
          prop, which accepts either <Strong>standard</Strong> or{' '}
          <Strong>small</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Inline alignY="center" space="medium">
              <Text>Standard</Text>
              <OverflowMenu size="standard" label="Options">
                <MenuItem onClick={() => {}}>Item 1</MenuItem>
                <MenuItem onClick={() => {}}>Item 2</MenuItem>
                <MenuItem onClick={() => {}}>Item 3</MenuItem>
              </OverflowMenu>
            </Inline>
            <Inline alignY="center" space="medium">
              <Text size="small">Small</Text>
              <OverflowMenu size="small" label="Options">
                <MenuItem onClick={() => {}}>Item 1</MenuItem>
                <MenuItem onClick={() => {}}>Item 2</MenuItem>
                <MenuItem onClick={() => {}}>Item 3</MenuItem>
              </OverflowMenu>
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Development considerations',
      description: (
        <Text>
          Child nodes must be{' '}
          <TextLink href="/components/MenuItem">MenuItem</TextLink>,{' '}
          <TextLink href="/components/MenuItemCheckbox">
            MenuItemCheckbox
          </TextLink>{' '}
          or{' '}
          <TextLink href="/components/MenuItemDivider">
            MenuItemDivider
          </TextLink>{' '}
          elements.
        </Text>
      ),
    },
  ],
};

export default docs;
