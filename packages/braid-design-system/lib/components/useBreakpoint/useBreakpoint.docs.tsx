import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import { useBreakpoint, Stack, Strong, Text, TextLink } from '../../../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Logic',
  deprecationWarning: (
    <Stack space="large">
      <Text weight="medium">
        This Hook has been deprecated in favour of{' '}
        <Strong>
          <TextLink href="/components/useResponsiveValue">
            useResponsiveValue.
          </TextLink>
        </Strong>
      </Text>
      <Text weight="medium">
        This is because <Strong>useBreakpoint</Strong> leads consumers to
        inadvertently couple themselves to the current set of breakpoints,
        making it risky for us to introduce new breakpoints.
      </Text>
      <Text weight="medium">
        For example, you may have chosen to detect large screens by checking
        that the user is on the (current) largest breakpoint (e.g.{' '}
        <Strong>{`const isDesktop = useBreakpoint() === "desktop"`}</Strong>
        ), but this logic would break if we introduced an even larger breakpoint
        and the Hook started returning other values.
      </Text>
      <Text>
        To maintain backwards compatibility, <Strong>useBreakpoint</Strong> will
        continue to return <Strong>{`"desktop"`}</Strong> when the user is
        technically on larger breakpoints.
      </Text>
    </Stack>
  ),
  Example: () =>
    source(
      <Text>
        Current breakpoint: <Strong>{useBreakpoint()}</Strong>
      </Text>,
    ),
  alternatives: [{ name: 'Box', description: 'For custom layouts.' }],
  additional: [
    {
      label: 'Development considerations',
      playroom: false,
      showCodeByDefault: true,
      description: (
        <Text>
          This Hook will return the breakpoint the browser viewport currently
          falls within (<Strong>mobile</Strong>, <Strong>tablet</Strong>,{' '}
          <Strong>desktop</Strong>). To maintain backwards compatibility,
          breakpoints above desktop will still be reported as{' '}
          <Strong>desktop</Strong>. As this can only be calculated in the
          browser, the value will also be <Strong>null</Strong> when rendering
          server-side or statically rendering. Window resizing is supported.
        </Text>
      ),
      code: `
        const breakpoint = useBreakpoint();

        return <Text>Current breakpoint: {breakpoint}</Text>;
      `,
    },
  ],
};

export default docs;
