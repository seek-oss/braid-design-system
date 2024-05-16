import React, {
  type ReactNode,
  useEffect,
  useRef,
  useState,
  Fragment,
} from 'react';
import { vars } from 'braid-src/entries/css';
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
import { type BoxProps, Box } from 'braid-src/lib/components/Box/Box';
import type { ReactNodeNoStrings } from 'braid-src/lib/components/private/ReactNodeNoStrings';
import Code from 'site/App/Code/Code';
import { ThemedExample, useThemeSettings } from 'site/App/ThemeSetting';
import type { CssDoc } from 'site/types';

const Row = ({
  group,
  name,
  children,
  background,
}: {
  group?: string;
  name: string;
  children: ReactNode;
  background?: BoxProps['background'];
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
        <ThemedExample background={background}>
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
  contentWidth: (
    <Stack space="medium">
      {Object.entries(vars.contentWidth).map(([widthName, widthVar], index) => (
        <Fragment key={widthName}>
          {index !== 0 && <Divider />}
          <Row group="contentWidth" name={widthName}>
            <Text>
              <ContentWidthValue var={widthVar} />
            </Text>
          </Row>
        </Fragment>
      ))}
    </Stack>
  ),
  space: (
    <Stack space="medium">
      {Object.entries(vars.space).map(([spaceName, spaceVar], index) => (
        <Fragment key={spaceName}>
          {index !== 0 && <Divider />}
          <Row group="space" name={spaceName}>
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
            {index !== 0 && <Divider />}
            <Row group="foregroundColor" name={colorName}>
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
            {index !== 0 && <Divider />}
            <Row group="backgroundColor" name={colorName}>
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
          </Fragment>
        ),
      )}
    </Stack>
  ),
  textWeight: (
    <Stack space="medium">
      {Object.entries(vars.textWeight).map(([weight, weightVar], index) => (
        <Fragment key={weight}>
          {index !== 0 && <Divider />}
          <Row group="textWeight" name={weight}>
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
          {index !== 0 && <Divider />}
          <Row group="borderColor" name={colorName}>
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
        </Fragment>
      ))}
    </Stack>
  ),
  borderWidth: (
    <Stack space="small">
      {Object.entries(vars.borderWidth).map(([widthName, widthVar], index) => (
        <Fragment key={widthName}>
          {index !== 0 && <Divider />}
          <Row group="borderWidth" name={widthName}>
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
        </Fragment>
      ))}
    </Stack>
  ),
  borderRadius: (
    <Stack space="small">
      {Object.entries(vars.borderRadius).map(
        ([radiusName, radiusVar], index) => (
          <Fragment key={radiusName}>
            {index !== 0 && <Divider />}
            <Row group="borderRadius" name={radiusName}>
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
          </Fragment>
        ),
      )}
    </Stack>
  ),
  shadow: (
    <Stack space="small">
      {Object.entries(vars.shadow).map(([shadowName, shadowVar], index) => (
        <Fragment key={shadowName}>
          {index !== 0 && <Divider />}
          <Row
            group="shadow"
            name={shadowName}
            background={{ lightMode: 'body', darkMode: 'body' }}
          >
            <Box display="inlineBlock" padding="xsmall" borderRadius="standard">
              <Box
                background={{ lightMode: 'surface', darkMode: 'surface' }}
                style={{
                  boxShadow: shadowVar,
                  width: '32px',
                  height: '32px',
                }}
              />
            </Box>
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
