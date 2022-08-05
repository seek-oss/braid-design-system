import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import { useResponsiveValue, Stack, Alert, Strong, Text } from '../../../';
import source from '../../utils/source.macro';
import { Notice } from '../Notice/Notice';

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
  description: (
    <>
      <Text>
        This Hook will resolve values in a mobile-first manner based on the
        breakpoint the browser viewport currently falls within (
        <Strong>mobile</Strong>, <Strong>tablet</Strong>,{' '}
        <Strong>desktop</Strong> or <Strong>wide</Strong>
        ).
      </Text>
      <Text>
        As this can only be calculated in the browser, the value will also be{' '}
        <Strong>null</Strong> when rendering server-side or statically
        rendering. Window resizing is supported.
      </Text>
      <Text>
        Note that this Hook returns a function so that it can be called anywhere
        within your component.
      </Text>
      <Notice tone="info">
        <Text>
          The <Strong>responsiveValue</Strong> function is automatically
          provided for you in the Braid Playroom.
        </Text>
      </Notice>
    </>
  ),
  Example: () =>
    /* eslint-disable react-hooks/rules-of-hooks */
    source(
      <>
        {(function MyComponent() {
          const responsiveValue = useResponsiveValue();

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
            </Stack>
          );
        })()}
      </>,
    ),
  /* eslint-enable react-hooks/rules-of-hooks */
  alternatives: [
    { name: 'Box', description: 'For custom layouts.' },
    { name: 'Hidden', description: 'For responsively hiding content.' },
    { name: 'responsiveStyle', description: 'For custom styles.' },
  ],
  additional: [
    {
      label: 'Playroom prototyping',
      description: (
        <Text>
          The <Strong>responsiveValue</Strong> function used in these examples
          is automatically available in Playroom. You do not need to call the{' '}
          <Strong>useResponsiveValue</Strong> function.
        </Text>
      ),
    },
    {
      label: 'Boolean logic',
      playroom: false,
      showCodeByDefault: true,
      description: (
        <Text>
          If you want to detect whether a certain breakpoint is currently
          active, boolean values can also be provided.
        </Text>
      ),
      code: source(() => {
        // --TRIM--
        const responsiveValue = useResponsiveValue();

        const isMobile = responsiveValue({
          mobile: true,
          tablet: false,
        });

        const isDesktopOrAbove = responsiveValue({
          mobile: false,
          desktop: true,
        });
        // --TRIM--

        return [isMobile, isDesktopOrAbove];
      }).code.split('// --TRIM--')[1],
    },
  ],
};

export default docs;
