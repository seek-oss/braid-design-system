import React from 'react';
import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import { Hidden } from './Hidden';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';
import { Strong } from '../Strong/Strong';
import { Placeholder } from '../../playroom/components';
import { Tiles } from '../Tiles/Tiles';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Stack space="small">
        <Hidden>
          <Placeholder label="1. Hidden always" height={60} />
        </Hidden>
        <Hidden below="wide">
          <Placeholder label="2. Hidden below wide" height={60} />
        </Hidden>
        <Hidden below="desktop">
          <Placeholder label="3. Hidden below desktop" height={60} />
        </Hidden>
        <Hidden below="tablet">
          <Placeholder label="4. Hidden below tablet" height={60} />
        </Hidden>
        <Hidden above="mobile">
          <Placeholder label="5. Hidden above mobile" height={60} />
        </Hidden>
        <Hidden above="tablet">
          <Placeholder label="6. Hidden above tablet" height={60} />
        </Hidden>
        <Hidden above="desktop">
          <Placeholder label="7. Hidden above tablet" height={60} />
        </Hidden>
        <Hidden print>
          <Placeholder label="8. Hidden on print" height={60} />
        </Hidden>
      </Stack>,
    ),
  alternatives: [
    {
      name: 'HiddenVisually',
      description: 'For making content available to screen readers.',
    },
  ],
  additional: [
    {
      label: 'Hiding responsively',
      description: (
        <Text>
          You can hide content responsively via the <Strong>above</Strong> and{' '}
          <Strong>below</Strong> props which accept a breakpoint name, i.e.{' '}
          <Strong>&ldquo;mobile&rdquo;</Strong>,{' '}
          <Strong>&ldquo;tablet&rdquo;</Strong>,{' '}
          <Strong>&ldquo;desktop&rdquo;</Strong> or{' '}
          <Strong>&ldquo;wide&rdquo;</Strong>.
        </Text>
      ),
      Example: () => {
        const { value: visual } = source(
          <Tiles space="xlarge" columns={[1, 2]}>
            <Stack space="small">
              <Text tone="secondary" size="small">
                On “tablet” and above
              </Text>
              <Placeholder label="One" height={60} />
              <Placeholder label="Two" height={60} />
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Below “tablet”
              </Text>
              <Placeholder label="Three" height={60} />
              <Placeholder label="Four" height={60} />
            </Stack>
          </Tiles>,
        );

        const { code: codeDemo } = source(
          <Stack space="small">
            <Hidden below="tablet">
              <Placeholder label="One" height={60} />
            </Hidden>
            <Hidden below="tablet">
              <Placeholder label="Two" height={60} />
            </Hidden>
            <Hidden above="mobile">
              <Placeholder label="Three" height={60} />
            </Hidden>
            <Hidden above="mobile">
              <Placeholder label="Four" height={60} />
            </Hidden>
          </Stack>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Hiding on print',
      description: (
        <Text>
          You can hide content on print via the <Strong>print</Strong> boolean
          prop.
        </Text>
      ),
      Example: () =>
        source(
          <Hidden print>
            <Placeholder label="Hidden on print" height={60} />
          </Hidden>,
        ),
    },
  ],
};

export default docs;
