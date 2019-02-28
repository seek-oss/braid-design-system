import React from 'react';
import { Link } from 'react-router-dom';
import TextLinkRenderer from './TextLinkRenderer';
import Text from '../Text/Text';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'TextLink with Custom Renderer',
      render: () => (
        <Text>
          <TextLinkRenderer>
            {textLinkProps => (
              <Link to="" {...textLinkProps}>
                Link
              </Link>
            )}
          </TextLinkRenderer>
        </Text>
      ),
      code: `
        import React from 'react';
        import { Link } from 'react-router-dom';
        import { TextLinkRenderer } from 'braid-design-system';

        export default () => (
          <Text>
            <TextLinkRenderer>
              {textLinkProps => (
                <Link to="/" {...textLinkProps}>
                  Link
                </Link>
              )}
            </TextLinkRenderer>
          </Text>
        );
      `,
    },
  ],
};

export default docs;
