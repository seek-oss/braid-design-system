import type { ComponentExample } from 'site/types';

import { Notice, Strong, Text, TextLink } from '../';

type CreateDataAttributeDocs = (
  params: {
    code: string;
  } & (
    | { supportsNativeSyntax: false }
    | { supportsNativeSyntax: true; componentName: string }
  ),
) => ComponentExample;

export const dataAttributeDocs: CreateDataAttributeDocs = ({
  code,
  supportsNativeSyntax,
  ...restProps
}) => ({
  label: 'Data attributes',
  description: (
    <>
      <Text>
        Braid components are very explicit about the properties they accept,
        which makes providing arbitrary{' '}
        <TextLink href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes">
          data attributes
        </TextLink>{' '}
        not possible. Instead, a <Strong>data</Strong> prop can be provided as a
        single collection of data attributes.
      </Text>
      {supportsNativeSyntax ? (
        <Notice>
          <Text>
            While {'componentName' in restProps && restProps.componentName} does
            support the native HTML syntax, it also supports the{' '}
            <Strong>data</Strong> prop for consistency.
          </Text>
        </Notice>
      ) : null}
    </>
  ),
  code,
});

// TODO: Adding a negative glob to the glob imports in navigationHelpers doesn't seem to fix the "No default export" problem. It's only a problem during build for some reason.
export default 'dummy';
