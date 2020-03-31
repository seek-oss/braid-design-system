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
        import React, { ComponentProps } from 'react';
        import { Link as ReactRouterLink } from 'react-router-dom';
        import { BraidProvider, LinkComponent } from 'braid-design-system';

        // First create the custom link implementation:
        const BraidLink: LinkComponent = ({ href, ...restProps }) =>
          /^\//.test(href) ? (
            <ReactRouterLink to={href} {...restProps} />
          ) : (
            <a href={href} {...restProps} />
          );

        // Then pass it to BraidProvider:
        export const App = () => (
          <BraidProvider theme={jobStreetTheme} linkComponent={BraidLink}>
            ...
          </BraidProvider>
        );
      `,
    },
  ],
};

export default docs;
