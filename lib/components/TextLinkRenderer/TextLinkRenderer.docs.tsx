import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Link } from 'react-router-dom';
import { TextLinkRenderer } from './TextLinkRenderer';
import { Text } from '../Text/Text';

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
    {
      label: 'Inline TextLink with Custom Renderer',
      render: () => (
        <Text>
          The last word of a sentence is a{' '}
          <TextLinkRenderer inline>
            {textLinkProps => (
              <Link to="" {...textLinkProps}>
                text link.
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
            The last word of a sentence is a{' '}
            <TextLinkRenderer inline>
              {textLinkProps => (
                <Link to="/" {...textLinkProps}>
                  text link.
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
