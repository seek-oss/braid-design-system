import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Actions,
  Button,
  TextLink,
  Text,
  Strong,
  Stack,
  Notice,
  Tiles,
} from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { actionsBreakpoint } from './Actions.css';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () => {
    const { value: visual } = source(
      <Tiles space="xlarge" columns={[1, 2]}>
        <Stack space="small">
          <Text tone="secondary" size="small">
            Above mobile
          </Text>
          <Actions>
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="transparent">Transparent</Button>
          </Actions>
        </Stack>
        <Stack space="small">
          <Text tone="secondary" size="small">
            On mobile
          </Text>
          <Stack space="xsmall">
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="transparent">Transparent</Button>
          </Stack>
        </Stack>
      </Tiles>,
    );

    const { code: codeDemo } = source(
      <>
        <Actions>
          <Button variant="solid">Solid</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="transparent">Transparent</Button>
        </Actions>
      </>,
    );

    return {
      code: codeDemo,
      value: visual,
    };
  },
  description: (
    <Text>
      A layout component that applies spacing and responsive behaviour to{' '}
      <TextLink href="/components/Button">Buttons</TextLink> in a consistent
      way.
    </Text>
  ),
  alternatives: [
    {
      name: 'Inline',
      description: 'For laying out flowing content that is allowed to wrap.',
    },
    {
      name: 'Columns',
      description: 'For fine-grained control of widths, spacing and alignment.',
    },
  ],
  additional: [
    {
      label: 'Layout',
      description: (
        <>
          <Text>
            The buttons are arranged using a responsive{' '}
            <TextLink href="/components/Inline">Inline</TextLink> component.{' '}
            <Strong>On mobile</Strong>, the buttons are full width, and stacked
            vertically. <Strong>On {actionsBreakpoint} and above</Strong>, the
            buttons are the width of their content sitting side by side,
            wrapping when necessary.
          </Text>

          <Notice tone="info">
            <Text>
              For consistency, it is recommended to always lead with the primary
              action.
            </Text>
          </Notice>
        </>
      ),
    },
    {
      label: 'Sizes',
      description: (
        <>
          <Text>
            The size of all the buttons within an <Strong>Actions</Strong>{' '}
            component can be controlled uniformly via the <Strong>size</Strong>{' '}
            prop, which accepts either <Strong>standard</Strong> or{' '}
            <Strong>small.</Strong>
          </Text>
          <Text>
            The specified <Strong>size</Strong> will also be applied to any{' '}
            <TextLink href="/components/Button#icons">icons</TextLink> if
            provided.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Tiles space="xlarge" columns={[1, 2]}>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Standard size
              </Text>
              <Actions>
                <Button>Button 1</Button>
                <Button variant="transparent">Button 2</Button>
              </Actions>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Small size
              </Text>
              <Actions size="small">
                <Button>Button 1</Button>
                <Button variant="transparent">Button 2</Button>
              </Actions>
            </Stack>
          </Tiles>,
        ),
    },
    dataAttributeDocs({
      code: `
        <Actions
          data={{ testid: 'actions-1' }}
          // => data-testid="actions-1"
        >
          ...
        </Actions>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
