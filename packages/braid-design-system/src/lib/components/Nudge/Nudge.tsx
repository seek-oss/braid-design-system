import type { ReactNode } from 'react';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';
import { Button, type ButtonProps } from '../Button/Button';
import { Box } from '../Box/Box';
import { ButtonIcon, type ButtonIconProps } from '../ButtonIcon/ButtonIcon';
import { Column } from '../Column/Column';
import { Columns } from '../Columns/Columns';
import { Heading } from '../Heading/Heading';
import { Stack, type StackProps } from '../Stack/Stack';
import { IconClear } from '../icons/IconClear/IconClear';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { TextLinkButton } from '../TextLinkButton/TextLinkButton';
import { Spread } from '../Spread/Spread';
import type { AllOrNone } from '../private/AllOrNone';

import * as styles from './Nudge.css';

type CloseProps = AllOrNone<{
  onClose: ButtonIconProps['onClick'];
  closeLabel: string;
}>;

type NudgeProps = {
  title?: string;
  id?: string;
  illustration?: ReactNode;
  size?: 'standard' | 'small' | 'xsmall';
  onActionClick: NonNullable<ButtonProps['onClick']>;
  actionLabel: ButtonProps['children'];
  children: StackProps['children'];
} & CloseProps;

const Title = ({
  children,
  size,
}: {
  children: string;
  size: NonNullable<NudgeProps['size']>;
}) => {
  if (size === 'xsmall') {
    return <Text weight="strong">{children}</Text>;
  }
  if (size === 'small') {
    return (
      <Text size="large" weight="strong">
        {children}
      </Text>
    );
  }
  return <Heading level="4">{children}</Heading>;
};

const Action = ({
  children,
  onClick,
  size,
}: {
  children: NudgeProps['actionLabel'];
  onClick: NudgeProps['onActionClick'];
  size: NonNullable<NudgeProps['size']>;
}) => {
  if (size === 'xsmall') {
    return (
      <Text size="small">
        <TextLinkButton onClick={onClick}>{children}</TextLinkButton>
      </Text>
    );
  }
  if (size === 'small') {
    return (
      <Button size="small" variant="ghost" tone="neutral" onClick={onClick}>
        {children}
      </Button>
    );
  }
  return (
    <Button variant="ghost" tone="neutral" onClick={onClick}>
      {children}
    </Button>
  );
};

const spaceForSize = {
  xsmall: 'small',
  small: 'small',
  standard: 'medium',
} as const;

const illoInsetForSize = {
  xsmall: { mobile: 'xxsmall', tablet: 'xsmall' },
  small: { mobile: 'xsmall', tablet: 'small' },
  standard: { mobile: 'small', tablet: 'medium' },
} as const;

export const Nudge = ({
  children,
  size = 'standard',
  title,
  id,
  illustration,
  onActionClick,
  actionLabel,
  onClose,
  closeLabel = 'Close',
}: NudgeProps) => {
  const closeAction = onClose ? (
    <ButtonIcon
      // @ts-expect-error With no id, ButtonIcon will fallback from Tooltip to title internally.
      // ID will no longer be required when React 18 has sufficient adoption and we can safely `useId()`
      id={id ? `${id}-close-button` : undefined}
      icon={<IconClear tone="neutral" />}
      label={closeLabel}
      tone="formAccent"
      size={size !== 'standard' ? 'small' : 'standard'}
      bleed
    />
  ) : null;

  const rightColumn = illustration ? (
    <Spread space="xsmall">
      <Box
        background="surface"
        borderRadius="full"
        padding={illoInsetForSize[size]}
        display="block"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="full"
          height="full"
          className={[styles.base, styles.size[size]]}
        >
          {illustration}
        </Box>
      </Box>
      {closeAction}
    </Spread>
  ) : null;

  const content = (
    <DefaultTextPropsProvider size={size !== 'standard' ? 'small' : 'standard'}>
      {children}
    </DefaultTextPropsProvider>
  );

  const mainContent = (
    <Spread space={spaceForSize[size]} direction="vertical">
      <Stack space={spaceForSize[size]}>
        {title ? (
          <Spread space="small" alignY="top">
            <Title size={size}>{title}</Title>
            {!illustration ? closeAction : null}
          </Spread>
        ) : null}

        {closeAction && !illustration && !title ? (
          <Spread space="small" alignY="top">
            {content}
            {closeAction}
          </Spread>
        ) : (
          content
        )}
      </Stack>
      <Inline space="none">
        <Action size={size} onClick={onActionClick}>
          {actionLabel}
        </Action>
      </Inline>
    </Spread>
  );

  return (
    <Box
      id={id}
      background="formAccentSoft"
      padding="gutter"
      borderRadius="large"
    >
      {rightColumn ? (
        <Columns reverse space="medium" collapseBelow="tablet">
          <Column width="content">{rightColumn}</Column>
          <Column>{mainContent}</Column>
        </Columns>
      ) : (
        mainContent
      )}
    </Box>
  );
};
