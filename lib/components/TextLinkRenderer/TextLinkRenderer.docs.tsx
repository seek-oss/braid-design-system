import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Link } from 'react-router-dom';
import { TextLinkRenderer } from './TextLinkRenderer';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard TextLink with Custom Renderer',
      render: () => (
        <TextLinkRenderer>
          {textLinkProps => (
            <Link to="" {...textLinkProps}>
              Text Link
            </Link>
          )}
        </TextLinkRenderer>
      ),
      code: `
        import React from 'react';
        import { Link } from 'react-router-dom';
        import { TextLinkRenderer } from 'braid-design-system';

        export default () => (
          <TextLinkRenderer>
            {textLinkProps => (
              <Link to="" {...textLinkProps}>
                Text Link
              </Link>
            )}
          </TextLinkRenderer>
        );
      `,
    },
  ],
};

export default docs;
