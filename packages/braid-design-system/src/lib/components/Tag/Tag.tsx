import React from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import type { TextProps } from '../Text/Text';
import { Text } from '../Text/Text';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { IconClear } from '../icons';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import type { AllOrNone } from '../private/AllOrNone';
import * as styles from './Tag.css';

export type TagProps = {
  children: string;
  data?: DataAttributeMap;
  id?: string;
  icon?: TextProps['icon'];
} & AllOrNone<{ onClear: () => void; clearLabel: string }>;

export const Tag = ({
  onClear,
  clearLabel = 'Clear',
  data,
  id,
  icon,
  children,
  ...restProps
}: TagProps) => {
  assert(
    typeof children === 'undefined' || typeof children === 'string',
    'Tag may only contain a string',
  );

  assert(
    !icon || icon.props.size === undefined || icon.props.tone === undefined,
    "Icons cannot set the 'size' or 'tone' prop when passed to a Tag component",
  );

  return (
    <Box
      id={id}
      display="flex"
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Box
        display="flex"
        minWidth={0}
        alignItems="center"
        background="neutralLight"
        paddingY={onClear ? undefined : 'xxsmall'}
        paddingLeft={icon ? 'xsmall' : 'small'}
        paddingRight={onClear ? undefined : 'small'}
        borderRadius="full"
      >
        <Box minWidth={0} title={children}>
          <Text baseline={false} maxLines={1} icon={icon}>
            {children}
          </Text>
        </Box>
        {onClear ? (
          <Box flexShrink={0} display="flex" className={styles.clearGutter}>
            <ButtonIcon
              // @ts-expect-error With no id, ButtonIcon will fallback from Tooltip to title internally.
              // ID will no longer be required when React 18 has sufficient adoption and we can safely `useId()`
              id={id ? `${id}-clear` : undefined}
              icon={<IconClear />}
              label={clearLabel}
              tone="secondary"
              variant="transparent"
              bleed={false}
              onClick={onClear}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
