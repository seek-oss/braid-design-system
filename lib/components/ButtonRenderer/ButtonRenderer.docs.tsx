import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Link } from 'react-router-dom';
import { ButtonRenderer, Stack, Text, TextLink } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320],
  description: (
    <Stack space="large">
      <Text>
        This component is mainly provided for backwards compatibility. If
        you&rsquo;re wanting to render a link that looks like a{' '}
        <TextLink href="/components/Button">Button</TextLink>, you should use a{' '}
        <TextLink href="/components/ButtonLink">ButtonLink</TextLink> instead.
      </Text>
      <Text>
        In fact, we&rsquo;re honestly not quite sure why you&rsquo;d need this
        component anymore. If you think you&rsquo;ve found a legitimate use case
        for it, please let us know so we can provide better documentation.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Button with Custom Renderer',
      Container,
      Example: () => (
        <ButtonRenderer>
          {(ButtonChildren, buttonProps) => (
            <Link to="#" {...buttonProps}>
              <ButtonChildren>Link button</ButtonChildren>
            </Link>
          )}
        </ButtonRenderer>
      ),
      code: `
        import React from 'react';
        import { Link } from 'react-router-dom';
        import { ButtonRenderer } from 'braid-design-system';

        export default () => (
          <ButtonRenderer>
            {(ButtonChildren, buttonProps) => (
              <Link to="#" {...buttonProps}>
                <ButtonChildren>Link button</ButtonChildren>
              </Link>
            )}
          </ButtonRenderer>
        );
      `,
    },
  ],
};

export default docs;
