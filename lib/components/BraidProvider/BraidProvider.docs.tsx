import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  category: 'Logic',
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
        import React from 'react';
        import { Link as ReactRouterLink } from 'react-router-dom';
        import { BraidProvider, LinkComponent } from 'braid-design-system';
        import wireframe from 'braid-design-system/themes/wireframe';

        // First create the custom link implementation:
        const CustomLink: LinkComponent = ({ href, ...restProps }) =>
          href[0] === '/' ? (
            <ReactRouterLink to={href} {...restProps} />
          ) : (
            <a href={href} {...restProps} />
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
