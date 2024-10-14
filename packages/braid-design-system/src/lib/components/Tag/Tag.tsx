import React from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { type TextProps, Text } from '../Text/Text';
import { ButtonIcon, type ButtonIconProps } from '../ButtonIcon/ButtonIcon';
import { IconAdd, IconClear } from '../icons';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import type { Space } from '../../css/atoms/atoms';
import * as styles from './Tag.css';

export const tagSizes = ['small', 'standard'] as const;

type CommonProps = {
  children: string;
  size?: (typeof tagSizes)[number];
  data?: DataAttributeMap;
  id?: string;
  icon?: TextProps['icon'];
};

interface AddableTag extends CommonProps {
  onAdd: ButtonIconProps['onClick'];
  addLabel: string;
}
interface ClearableTag extends CommonProps {
  onClear: ButtonIconProps['onClick'];
  clearLabel: string;
}
interface BaseTag extends CommonProps {
  onClear?: never;
  clearLabel?: never;
  onAdd?: never;
  addLabel?: never;
}

export type TagProps = ClearableTag | AddableTag | BaseTag;

const paddingXForSize: Record<NonNullable<TagProps['size']>, Space> = {
  small: 'xsmall',
  standard: 'small',
};

export const Tag = ({
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

  let label = 'Clear';
  let buttonType = 'clear';
  let handler;

  const clearable = 'onClear' in restProps && restProps.onClear;
  const addable = 'onAdd' in restProps && restProps.onAdd;

  if (clearable) {
    label = restProps.clearLabel;
    handler = restProps.onClear;
    buttonType = 'clear';
  } else if (addable) {
    label = restProps.addLabel;
    handler = restProps.onAdd;
    buttonType = 'add';
  }
  const hasButton = clearable || addable;

  return (
    <Box
      id={id}
      display="flex"
      gap="xxsmall"
      alignItems="center"
      background={addable ? 'formAccentSoft' : 'neutralLight'}
      paddingY="xxsmall"
      paddingX={paddingXForSize[size]}
      paddingRight={hasButton ? 'xsmall' : paddingXForSize[size]}
      borderRadius="full"
      title={children}
      maxWidth="content"
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Text
        size={size}
        baseline={false}
        maxLines={1}
        tone={addable ? 'formAccent' : undefined}
      >
        {icon} {children}
      </Text>
      {hasButton ? (
        <Box className={styles.clearGutter}>
          <ButtonIcon
            // @ts-expect-error With no id, ButtonIcon will fallback from Tooltip to title internally.
            // ID will no longer be required when React 18 has sufficient adoption and we can safely `useId()`
            id={id ? `${id}-${buttonType}` : undefined}
            icon={addable ? <IconAdd /> : <IconClear tone="secondary" />}
            label={label}
            size="small"
            tone={addable ? 'formAccent' : 'neutral'}
            variant="transparent"
            onClick={handler}
          />
        </Box>
      ) : null}
    </Box>
  );
};
