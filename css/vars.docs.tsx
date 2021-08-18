import React, { ReactNode } from 'react';
import { vars } from '.';
import {
  Text,
  TextLink,
  Strong,
  Stack,
  Columns,
  Column,
  Box,
  Hidden,
  Alert,
} from '../lib/components';
import { ReactNodeNoStrings } from '../lib/components/private/ReactNodeNoStrings';
import Code from '../site/src/App/Code/Code';
import { ThemedExample } from '../site/src/App/ThemeSetting';
import { CssDoc } from '../site/src/types';
import { VanillaMigrationBanner } from './VanillaMigrationBanner';

const Row = ({
  group,
  name,
  children,
}: {
  group?: string;
  name: string;
  children: ReactNode;
}) => (
  <Columns space="large" alignY="center">
    <Column>
      <Text>
        <Hidden below="tablet">vars{group ? `.${group}` : null}.</Hidden>
        {name}
      </Text>
    </Column>
    <Column width="content">
      <Box style={{ color: vars.foregroundColor.neutral as any }}>
        <ThemedExample>
          <Box display="flex">{children}</Box>
        </ThemedExample>
      </Box>
    </Column>
  </Columns>
);

const varDocs: Record<keyof typeof vars, ReactNodeNoStrings> = {
  grid: (
    <Row name="grid">
      <Box
        style={{
          background: 'currentColor',
          height: vars.grid,
          width: vars.grid,
        }}
      />
    </Row>
  ),
  touchableSize: (
    <Row name="touchableSize">
      <Box
        style={{
          background: 'currentColor',
          borderRadius: '2px',
          height: vars.touchableSize,
          width: vars.touchableSize,
        }}
      />
    </Row>
  ),
  space: (
    <Stack space="medium" dividers>
      {Object.entries(vars.space).map(([spaceName, spaceVar]) => (
        <Row key={spaceName} group="space" name={spaceName}>
          <Box
            style={{
              background: 'currentColor',
              borderRadius: '2px',
              width: spaceVar,
              height: '16px',
            }}
          />
        </Row>
      ))}
    </Stack>
  ),
  foregroundColor: (
    <Stack space="small" dividers>
      {Object.entries(vars.foregroundColor).map(([colorName, colorVar]) => (
        <Row key={colorName} group="foregroundColor" name={colorName}>
          <Box
            background="body"
            display="inlineBlock"
            padding="xsmall"
            borderRadius="standard"
          >
            <Box
              borderRadius="standard"
              style={{
                background: colorVar,
                width: '32px',
                height: '32px',
              }}
            />
          </Box>
        </Row>
      ))}
    </Stack>
  ),
  backgroundColor: (
    <Stack space="small" dividers>
      {Object.entries(vars.backgroundColor).map(([colorName, colorVar]) => (
        <Row key={colorName} group="backgroundColor" name={colorName}>
          <Box
            background="body"
            display="inlineBlock"
            padding="xsmall"
            borderRadius="standard"
          >
            <Box
              borderRadius="standard"
              style={{
                background: colorVar,
                width: '32px',
                height: '32px',
              }}
            />
          </Box>
        </Row>
      ))}
    </Stack>
  ),
  textWeight: (
    <Stack space="medium" dividers>
      {Object.entries(vars.textWeight).map(([weight, weightVar]) => (
        <Row key={weight} group="textWeight" name={weight}>
          <Text size="large">
            <span
              style={{
                // @ts-expect-error csstype `Property.FontWeight` does not support CSS variables as valid values
                fontWeight: weightVar,
              }}
            >
              Aa
            </span>
          </Text>
        </Row>
      ))}
    </Stack>
  ),
  borderColor: (
    <Stack space="small" dividers>
      {Object.entries(vars.borderColor).map(([colorName, colorVar]) => (
        <Row key={colorName} group="borderColor" name={colorName}>
          <Box
            background="body"
            display="inlineBlock"
            padding="xsmall"
            borderRadius="standard"
          >
            <Box
              borderRadius="standard"
              style={{
                border: `2px solid ${colorVar}`,
                width: '32px',
                height: '32px',
              }}
            />
          </Box>
        </Row>
      ))}
    </Stack>
  ),
  borderWidth: (
    <Stack space="small" dividers>
      {Object.entries(vars.borderWidth).map(([widthName, widthVar]) => (
        <Row key={widthName} group="borderWidth" name={widthName}>
          <Box
            background="body"
            display="inlineBlock"
            padding="xsmall"
            borderRadius="standard"
          >
            <Box
              borderRadius="standard"
              style={{
                border: `${widthVar} solid currentColor`,
                width: '32px',
                height: '32px',
              }}
            />
          </Box>
        </Row>
      ))}
    </Stack>
  ),
  borderRadius: (
    <Stack space="small" dividers>
      {Object.entries(vars.borderRadius).map(([radiusName, radiusVar]) => (
        <Row key={radiusName} group="borderRadius" name={radiusName}>
          <Box
            background="body"
            display="inlineBlock"
            padding="xsmall"
            borderRadius="standard"
          >
            <Box
              style={{
                border: `2px solid currentColor`,
                borderRadius: radiusVar,
                width: '32px',
                height: '32px',
              }}
            />
          </Box>
        </Row>
      ))}
    </Stack>
  ),
} as const;

const docs: CssDoc = {
  banner: <VanillaMigrationBanner />,
  usage: <Code>{`import { vars } from 'braid-design-system/css';`}</Code>,
  description: (
    <>
      <Text>
        The <Strong>vars</Strong> object provides access to Braid’s CSS
        variables, which can be used both within{' '}
        <TextLink href="https://vanilla-extract.style">
          vanilla-extract
        </TextLink>{' '}
        stylesheets and runtime code.
      </Text>
      <Text>
        Note that these variables are strings containing locally-scoped CSS
        variable expressions (e.g.{' '}
        <Strong>
          <Box component="pre" display="inline">{`"${vars.grid}"`}</Box>
        </Strong>
        ) which means that any calculations must use{' '}
        <TextLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/calc()">
          calc functions.
        </TextLink>{' '}
        To make this easier when working in TypeScript, we recommend using{' '}
        <TextLink href="https://vanilla-extract.style/documentation/utility-functions/#calc">
          vanilla-extract’s calc utility.
        </TextLink>
      </Text>
      <Alert tone="caution">
        <Text>
          You should only use vars if you’re unable to use{' '}
          <TextLink href="/components/Box">Box</TextLink> or{' '}
          <TextLink href="/css/atoms">atoms</TextLink>.
        </Text>
      </Alert>
    </>
  ),
  additional: Object.entries(varDocs).map(([name, value]) => ({
    label: `vars.${name}`,
    description: value,
  })),
};

export default docs;
