import source from '@braid-design-system/source.macro';

import {
  Box,
  Placeholder,
  Text,
  TooltipRenderer,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(
      <TooltipRenderer tooltip={<Text>This is a tooltip!</Text>}>
        {({ triggerProps }) => (
          <Box {...triggerProps}>
            <Placeholder label="Tooltip trigger" height={100} />
          </Box>
        )}
      </TooltipRenderer>,
    ),
  },
];
