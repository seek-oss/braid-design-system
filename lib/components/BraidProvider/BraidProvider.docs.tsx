import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  category: 'Logic',
  migrationGuide: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Selecting a theme',
      code: `
        import wireframe from 'braid-design-system/themes/wireframe';

        export const App = () => (
          <BraidProvider theme={wireframe}>
            ...
          </BraidProvider>
        );
      `,
    },
    {
      label: 'Custom link implementation',
      code: `
        import React, { forwardRef, ComponentProps } from 'react';
        import { Link as ReactRouterLink } from 'react-router-dom';
        import { BraidProvider } from 'braid-design-system';
        import wireframe from 'braid-design-system/themes/wireframe';

        // First create the custom link implementation:
        const CustomLink = forwardRef<
          HTMLAnchorElement,
          Omit<ComponentProps<ReactRouterLink>, 'to'> & { href: string }
        >(({ href, ...restProps }, ref) =>
          href[0] === '/' ? (
            <ReactRouterLink to={href} ref={ref} {...restProps} />
          ) : (
            <a href={href} ref={ref} {...restProps} />
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
