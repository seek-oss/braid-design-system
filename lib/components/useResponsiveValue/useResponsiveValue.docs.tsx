import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { useResponsiveValue, Stack, Alert, Strong, Text } from '../../../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Logic',
  banner: (
    <Alert tone="caution">
      <Text weight="medium">
        The returned function returns <Strong>null</Strong> when rendering
        server-side or statically, so you should avoid this Hook where possible.
        Responsive props and media queries are preferable in most cases.
      </Text>
    </Alert>
  ),
  Example: () =>
    /* eslint-disable react-hooks/rules-of-hooks */
    source(
      <>
        {(() => {
          const responsiveValue = useResponsiveValue();

          const isDesktop = responsiveValue({
            mobile: false,
            desktop: true,
          });

          return (
            <Stack space="medium">
              <Text>
                Screen size:{' '}
                <Strong>
                  {responsiveValue({
                    mobile: 'Small',
                    desktop: 'Large',
                  }) || 'Loading...'}
                </Strong>
              </Text>
              <Text>
                Current breakpoint:{' '}
                <Strong>
                  {responsiveValue({
                    mobile: 'Mobile',
                    tablet: 'Tablet',
                    desktop: 'Desktop',
                    wide: 'Wide',
                  }) || 'Loading...'}
                </Strong>
              </Text>
              <Text>
                Breakpoint is desktop or above:{' '}
                <Strong>
                  {isDesktop !== null ? String(isDesktop) : 'Loading...'}
                </Strong>
              </Text>
            </Stack>
          );
        })()}
      </>,
    ),
  /* eslint-enable react-hooks/rules-of-hooks */
  alternatives: [{ name: 'Box', description: 'For custom layouts.' }],
  additional: [
    {
      label: 'Development considerations',
      playroom: false,
      showCodeByDefault: true,
      description: (
        <Text>
          This Hook will return the resolved value based on the breakpoint the
          browser viewport currently falls within (<Strong>mobile</Strong>,{' '}
          <Strong>tablet</Strong>, <Strong>desktop</Strong> or{' '}
          <Strong>wide</Strong>). As this can only be calculated in the browser,
          the value will also be <Strong>null</Strong> when rendering
          server-side or statically rendering. Window resizing is supported.
        </Text>
      ),
      code: source(function MyComponent() {
        const responsiveValue = useResponsiveValue();

        return (
          <Text>
            Screen size:{' '}
            {responsiveValue({ mobile: 'Small', desktop: 'Large' }) ||
              'Loading...'}
          </Text>
        );
      }).code,
    },
  ],
};

export default docs;
