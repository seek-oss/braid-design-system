import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../../../site/src/types';
import { Hidden } from './Hidden';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';
import { Strong } from '../Strong/Strong';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Stack space="small">
        <Hidden below="wide">
          <Placeholder label="1. Hidden below wide" height={60} />
        </Hidden>
        <Hidden below="desktop">
          <Placeholder label="2. Hidden below desktop" height={60} />
        </Hidden>
        <Hidden below="tablet">
          <Placeholder label="3. Hidden below tablet" height={60} />
        </Hidden>
        <Hidden above="mobile">
          <Placeholder label="4. Hidden above mobile" height={60} />
        </Hidden>
        <Hidden above="tablet">
          <Placeholder label="5. Hidden above tablet" height={60} />
        </Hidden>
        <Hidden above="desktop">
          <Placeholder label="6. Hidden above tablet" height={60} />
        </Hidden>
        <Hidden print>
          <Placeholder label="7. Hidden on print" height={60} />
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
      Example: () =>
        source(
          <Stack space="small">
            <Hidden below="wide">
              <Placeholder label="1. Hidden below wide" height={60} />
            </Hidden>
            <Hidden below="desktop">
              <Placeholder label="2. Hidden below desktop" height={60} />
            </Hidden>
            <Hidden below="tablet">
              <Placeholder label="3. Hidden below tablet" height={60} />
            </Hidden>
            <Hidden above="mobile">
              <Placeholder label="4. Hidden above mobile" height={60} />
            </Hidden>
            <Hidden above="tablet">
              <Placeholder label="5. Hidden above tablet" height={60} />
            </Hidden>
            <Hidden above="desktop">
              <Placeholder label="6. Hidden above desktop" height={60} />
            </Hidden>
          </Stack>,
        ),
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
