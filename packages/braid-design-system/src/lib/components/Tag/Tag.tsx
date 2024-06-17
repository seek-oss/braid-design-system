import React from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { type TextProps, Text } from '../Text/Text';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { IconClear } from '../icons';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import type { AllOrNone } from '../private/AllOrNone';
import type { Space } from '../../css/atoms/atoms';
import * as styles from './Tag.css';

export const tagSizes = ['small', 'standard'] as const;

export type TagProps = {
  children: string;
  size?: (typeof tagSizes)[number];
  data?: DataAttributeMap;
  id?: string;
  icon?: TextProps['icon'];
} & AllOrNone<{ onClear: () => void; clearLabel: string }>;

const paddingXForSize: Record<NonNullable<TagProps['size']>, Space> = {
  small: 'xsmall',
  standard: 'small',
};

export const Tag = ({
  onClear,
  clearLabel = 'Clear',
  size = 'standard',
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
        paddingY="xxsmall"
        paddingX={paddingXForSize[size]}
        paddingRight={onClear ? 'xsmall' : paddingXForSize[size]}
        borderRadius="full"
      >
        <Box minWidth={0} title={children}>
          <Text size={size} baseline={false} maxLines={1}>
            {icon} {children}
          </Text>
        </Box>
        {onClear ? (
          <Box
            flexShrink={0}
            marginLeft="xxsmall"
            className={styles.clearGutter}
          >
            <ButtonIcon
              // @ts-expect-error With no id, ButtonIcon will fallback from Tooltip to title internally.
              // ID will no longer be required when React 18 has sufficient adoption and we can safely `useId()`
              id={id ? `${id}-clear` : undefined}
              icon={<IconClear tone="secondary" />}
              label={clearLabel}
              size="small"
              variant="transparent"
              onClick={onClear}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
