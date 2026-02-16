import { Fragment, type ReactNode, useEffect, useRef, useState } from 'react';
import Code from 'site/App/Code/Code';
import { ThemedExample, useThemeSettings } from 'site/App/ThemeSetting';
import type { CssDoc } from 'site/types';

import { vars } from 'braid-src/css';
import {
  Text,
  TextLink,
  Strong,
  Stack,
  Columns,
  Column,
  Hidden,
  Alert,
  List,
  Divider,
} from 'braid-src/lib/components';
import { Box } from 'braid-src/lib/components/Box/Box';
import type { ReactNodeNoStrings } from 'braid-src/lib/components/private/ReactNodeNoStrings';

const Row = ({
  group,
  name,
  children,
  hideCanvas = false,
  darkCanvas = false,
}: {
  group?: string;
  name: string;
  children: ReactNode;
  hideCanvas?: boolean;
  darkCanvas?: boolean;
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
        <ThemedExample transparent={hideCanvas} darkCanvas={darkCanvas}>
          <Box display="flex">{children}</Box>
        </ThemedExample>
      </Box>
    </Column>
  </Columns>
);

const ContentWidthValue = ({ var: varName }: { var: string }) => {
  const [size, setSize] = useState(0);
  const { themeKey } = useThemeSettings();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && themeKey) {
      setSize(ref.current.offsetWidth);
    }
  }, [themeKey]);

  return (
    <>
      <Box
        component="span"
        position="absolute"
        pointerEvents="none"
        opacity={0}
        ref={ref}
        style={{ width: varName }}
      />
      {size > 0 ? `${size}px` : '&nbsp;'}
    </>
  );
};

const varDocs: Record<keyof typeof vars, ReactNodeNoStrings> = {
  grid: (
    <Row name="grid" hideCanvas>
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
    <Row name="touchableSize" hideCanvas>
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
  contentWidth: (
    <Stack space="large">
      {Object.entries(vars.contentWidth).map(([widthName, widthVar], index) => (
        <Fragment key={widthName}>
          {index > 0 ? <Divider /> : null}
          <Row key={widthName} group="contentWidth" name={widthName} hideCanvas>
            <Text>
              <ContentWidthValue var={widthVar} />
            </Text>
          </Row>
        </Fragment>
      ))}
    </Stack>
  ),
  space: (
    <Stack space="large">
      {Object.entries(vars.space).map(([spaceName, spaceVar], index) => (
        <Fragment key={spaceName}>
          {index > 0 ? <Divider /> : null}
          <Row key={spaceName} group="space" name={spaceName} hideCanvas>
            <Box
              style={{
                background: 'currentColor',
                borderRadius: '2px',
                width: spaceVar,
                height: '16px',
              }}
            />
          </Row>
        </Fragment>
      ))}
    </Stack>
  ),
  foregroundColor: (
    <Stack space="small">
      {Object.entries(vars.foregroundColor).map(
        ([colorName, colorVar], index) => (
          <Fragment key={colorName}>
            {index > 0 ? <Divider /> : null}
            <Row
              key={colorName}
              group="foregroundColor"
              name={colorName}
              darkCanvas={
                colorVar.includes('Light') || colorVar.includes('Inverted')
              }
            >
              <Text size="large">
                <Box
                  component="span"
                  style={{
                    color: colorVar,
                  }}
                >
                  Aa
                </Box>
              </Text>
            </Row>
          </Fragment>
        ),
      )}
    </Stack>
  ),
  backgroundColor: (
    <Stack space="small">
      {Object.entries(vars.backgroundColor).map(
        ([colorName, colorVar], index) => (
          <Fragment key={colorName}>
            {index > 0 ? <Divider /> : null}
            <Row key={colorName} group="backgroundColor" name={colorName}>
              <Box
                borderRadius="standard"
                style={{
                  background: colorVar,
                  width: '32px',
                  height: '32px',
                }}
              />
            </Row>
          </Fragment>
        ),
      )}
    </Stack>
  ),
  textWeight: (
    <Stack space="medium">
      {Object.entries(vars.textWeight).map(([weight, weightVar], index) => (
        <Fragment key={weight}>
          {index > 0 ? <Divider /> : null}
          <Row key={weight} group="textWeight" name={weight}>
            <Text size="large">
              <span style={{ fontWeight: weightVar }}>Aa</span>
            </Text>
          </Row>
        </Fragment>
      ))}
    </Stack>
  ),
  borderColor: (
    <Stack space="small">
      {Object.entries(vars.borderColor).map(([colorName, colorVar], index) => (
        <Fragment key={colorName}>
          {index > 0 ? <Divider /> : null}
          <Row
            key={colorName}
            group="borderColor"
            name={colorName}
            darkCanvas={
              colorVar.includes('Light') || colorVar.includes('Inverted')
            }
          >
            <Box
              borderRadius="standard"
              style={{
                border: `2px solid ${colorVar}`,
                width: '32px',
                height: '32px',
              }}
            />
          </Row>
        </Fragment>
      ))}
    </Stack>
  ),
  borderWidth: (
    <Stack space="small">
      {Object.entries(vars.borderWidth).map(([widthName, widthVar], index) => (
        <Fragment key={widthName}>
          {index > 0 ? <Divider /> : null}
          <Row key={widthName} group="borderWidth" name={widthName}>
            <Box
              borderRadius="standard"
              style={{
                border: `${widthVar} solid currentColor`,
                width: '32px',
                height: '32px',
              }}
            />
          </Row>
        </Fragment>
      ))}
    </Stack>
  ),
  borderRadius: (
    <Stack space="small">
      {Object.entries(vars.borderRadius).map(
        ([radiusName, radiusVar], index) => (
          <Fragment key={radiusName}>
            {index > 0 ? <Divider /> : null}
            <Row key={radiusName} group="borderRadius" name={radiusName}>
              <Box
                style={{
                  borderTop: `${vars.borderWidth.large} solid ${vars.borderColor.brandAccent}`,
                  borderLeft: `${vars.borderWidth.large} solid ${vars.borderColor.brandAccent}`,
                  borderTopLeftRadius: radiusVar,
                  width: '48px',
                  height: '48px',
                }}
              />
            </Row>
          </Fragment>
        ),
      )}
    </Stack>
  ),
  shadow: (
    <Stack space="small">
      {Object.entries(vars.shadow).map(([shadowName, shadowVar], index) => (
        <Fragment key={shadowName}>
          {index > 0 ? <Divider /> : null}
          <Row key={shadowName} group="shadow" name={shadowName}>
            <Box
              background="surface"
              style={{
                boxShadow: shadowVar,
                width: '48px',
                height: '48px',
              }}
            />
          </Row>
        </Fragment>
      ))}
    </Stack>
  ),
} as const;

const docs: CssDoc = {
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
      <List space="medium">
        {Object.entries(varDocs).map(([name]) => (
          <Text key={name}>
            <TextLink href={`#vars.${name.toLowerCase()}`} hitArea="large">
              {name}
            </TextLink>
          </Text>
        ))}
      </List>
    </>
  ),
  additional: Object.entries(varDocs).map(([name, value]) => ({
    label: `vars.${name}`,
    description: value,
  })),
};

export default docs;
