import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Link } from 'react-router-dom';
import { TextLinkRenderer } from './TextLinkRenderer';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Interaction',
  screenshotWidths: [320],
  examples: [
    {
      label: 'TextLink with Custom Renderer',
      Example: () => (
        <Text>
          The last word of this sentence is a{' '}
          <TextLinkRenderer>
            {textLinkProps => (
              <Link to="" {...textLinkProps}>
                link.
              </Link>
            )}
          </TextLinkRenderer>
        </Text>
      ),
      code: `
        import React from 'react';
        import { Link } from 'react-router-dom';
        import { TextLinkRenderer, Text } from 'braid-design-system';

        export default () => (
          <Text>
            The last word of this sentence is a{' '}
            <TextLinkRenderer>
              {textLinkProps => (
                <Link to="" {...textLinkProps}>
                  link.
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
