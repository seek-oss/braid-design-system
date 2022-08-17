import React, { Fragment } from 'react';
import { Text, TextLink, Strong } from '../';
import { ComponentDocs } from '../../../../../site/src/types';

const docs: ComponentDocs = {
  category: 'Logic',
  migrationGuide: true,
  description: (
    <Text>Provides the necessary theming context for all components.</Text>
  ),
  alternatives: [
    {
      name: 'BraidTestProvider',
      description: 'For test environments.',
    },
  ],
  additional: [
    {
      label: 'Selecting a theme',
      description: (
        <Text>
          Themes should be imported from the <Strong>themes</Strong> folder and
          passed into BraidProvider using the <Strong>theme</Strong> prop.
        </Text>
      ),
      code: `
      import wireframe from 'braid-design-system/themes/wireframe';
      import { BraidProvider } from 'braid-design-system';

        export const App = () => (
          <BraidProvider theme={wireframe}>
            ...
          </BraidProvider>
        );
      `,
    },
    {
      label: 'Providing a custom link component',
      description: (
        <Fragment>
          <Text>
            The <Strong>linkComponent</Strong> prop allows you to customise the
            rendering of Braid links (e.g.{' '}
            <TextLink href="/components/Link">Link</TextLink>,{' '}
            <TextLink href="/components/TextLink">TextLink</TextLink>,{' '}
            <TextLink href="/components/ButtonLink">ButtonLink</TextLink>,{' '}
            <TextLink href="/components/MenuItem">MenuItemLink</TextLink>)
            across an entire application. This is useful for conditionally
            rendering React Router links, handling analytics, etc.
          </Text>
          <Text>
            When defining a custom link component, ensure you’re using the{' '}
            <Strong>makeLinkComponent</Strong> helper function and forwarding
            the <Strong>ref</Strong> argument, otherwise certain link usages
            will be unable to function correctly.
          </Text>
          <Text>
            If you want to make use of this mechanism within your own
            components, use <TextLink href="/components/Link">Link</TextLink>{' '}
            which simply forwards your custom link component internally.
          </Text>
        </Fragment>
      ),
      code: `
        import React from 'react';
        import { Link as ReactRouterLink } from 'react-router-dom';
        import { BraidProvider, makeLinkComponent } from 'braid-design-system';
        import wireframe from 'braid-design-system/themes/wireframe';

        // First create the custom link implementation:
        const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>
          href[0] === '/' ? (
            <ReactRouterLink ref={ref} to={href} {...restProps} />
          ) : (
            <a ref={ref} href={href} {...restProps} />
          )
        );

        // Then pass it to BraidProvider:
        export const App = () => (
          <BraidProvider theme={wireframe} linkComponent={CustomLink}>
            ...
          </BraidProvider>
        );
      `,
    },
  ],
};

export default docs;
