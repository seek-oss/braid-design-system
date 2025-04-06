import { createRequire } from 'node:module';
import path from 'node:path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import SkuWebpackPlugin from 'sku/webpack-plugin';
import webpackPkg from 'webpack';

const { DefinePlugin } = webpackPkg;

const require = createRequire(import.meta.url);

const braidSrc = path.join(
  import.meta.dirname,
  '../packages/braid-design-system/src',
);
const resolveFromBraid = (p) => require.resolve(path.join(braidSrc, p));

export default {
  outputPath: './dist/playroom',
  ai: {
    examples: [
      {
        name: 'Sticky element',
        code: `
<Box
  style={{ position: "sticky" }}
  top={0}
  zIndex="sticky"
  background="surface"
  boxShadow="medium"
  paddingY="medium"
>
  <PageBlock>
    <Text>Sticky header content</Text>
  </PageBlock>
</Box>
<Placeholder height="150vh" label="Page content (scroll)" />
`,
        description:
          'A floating element that stays in position and allows other content can pass beneath on scroll',
      },
      {
        name: 'Order summary',
        code: `
<PageBlock>
  <Box paddingTop="xlarge">
    <Stack space="large">
      <Stack space="medium">
        <Heading level="3">Order summary</Heading>
        <Alert tone="info">
          <Text>
            The price of this job ad has changed. Check the updated price
            before posting.
          </Text>
        </Alert>
        <Card>
          <Box>
            <Stack space="medium">
              <Stack space="small">
                <Spread>
                  <Text weight="strong">Items</Text>
                  <Text weight="strong">Cost</Text>
                </Spread>
                <Divider weight="strong" />
              </Stack>
              <Spread>
                <Text>Classic ad</Text>
                <Text>$300.00</Text>
              </Spread>
              <Spread>
                <Text>Urgent add-on</Text>
                <Text>$75.00</Text>
              </Spread>
              <Bleed horizontal="gutter">
                <Box background="neutralLight" padding="gutter" boxShadow="borderNeutralLight">
                  <Stack space="large">
                    <Spread>
                      <Text weight="strong">Sub-total</Text>
                      <Text weight="strong">$375.00</Text>
                    </Spread>
                    <Spread>
                      <Text weight="strong">GST</Text>
                      <Text weight="strong">$37.50</Text>
                    </Spread>
                  </Stack>
                </Box>
              </Bleed>
              <Spread>
                <Text>
                  <Strong>Total</Strong> <Secondary>incl. GST</Secondary>
                </Text>
                <Text weight="strong">$412.50</Text>
              </Spread>
            </Stack>
          </Box>
        </Card>
      </Stack>
    </Stack>
  </Box>
</PageBlock>
`,
        description: 'A basic pricing table with Alert.',
      },
      {
        name: 'Brand Header',
        code: `
<ContentBlock width="large">
  <Box
    background="brand"
    paddingY="xlarge"
    position="relative"
    borderRadius={{ tablet: "xlarge" }}
  >
    <Box
      display={{ tablet: "none" }}
      position="absolute"
      right={0}
      bottom={0}
      overflow="hidden"
      borderRadius={{ tablet: "xlarge" }}
    >
      <svg
        style={{ display: "block" }}
        width="96"
        height="96"
        viewBox="0 0 96 96"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M96 0L96 96L0 96C0 42.9806 42.9806 0 96 0Z" fill="#E60278" />
      </svg>
    </Box>
    <Box
      display={{ mobile: "none", tablet: "block" }}
      position="absolute"
      right={0}
      top={0}
      overflow="hidden"
      borderRadius={{ tablet: "xlarge" }}
    >
      <svg
        style={{ display: "block" }}
        width="340"
        height="280"
        viewBox="0 0 340 280"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M145.834 -0.000105858L340.278 -0.000114357L340.278 194.444C232.89 194.444 145.834 107.389 145.834 -0.000105858Z"
          fill="#E60278"
        />
      </svg>
    </Box>
    <Box
      display={{ mobile: "none", desktop: "block" }}
      position="absolute"
      right={0}
      bottom={0}
    >
      <svg
        style={{ display: "block" }}
        width="340"
        height="280"
        viewBox="0 0 340 280"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M97.2227 145.833L0.000431103 145.833L0.000435352 48.6111C53.6948 48.6111 97.2227 92.1389 97.2227 145.833Z"
          fill="#0D3880"
        />
        <path
          clip-rule="evenodd"
          d="M48.6102 280L113.425 280C113.425 262.102 127.934 247.593 145.832 247.593C163.731 247.593 178.24 262.102 178.24 280L243.055 280C243.055 226.306 199.527 182.778 145.832 182.778C92.1381 182.778 48.6102 226.306 48.6102 280Z"
          fill="#E60278"
        />
      </svg>
    </Box>
    <Box position="relative">
      <PageBlock width="medium">
        <Stack space="large">
          <Heading level="1">Amelia Parker</Heading>

          <Stack space="small">
            <Text tone="secondary" icon={<IconLocation />}>
              Cremorne, Melbourne VIC
            </Text>
            <Text tone="secondary" icon={<IconMail />}>
              amelia@email.com
            </Text>
          </Stack>

          <Inline space="xsmall">
            <Button tone="neutral" variant="ghost">
              Edit
            </Button>
            <Button tone="neutral" variant="ghost">
              Share
            </Button>
          </Inline>
        </Stack>
      </PageBlock>
    </Box>
  </Box>
</ContentBlock>
`,
        description:
          'A branded header featuring a responsive SEEK Shapes svg. Rounded <Box /> above mobile resolution.',
      },
      {
        name: 'Basic table',
        code: `
<Table label="Table hero example">
  <TableHeader>
    <TableRow>
      <TableHeaderCell>
        <Text>Lorem</Text>
      </TableHeaderCell>
      <TableHeaderCell>
        <Text>Ipsum</Text>
      </TableHeaderCell>
      <TableHeaderCell>
        <Text>Dolor</Text>
      </TableHeaderCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <Text>Sit</Text>
      </TableCell>
      <TableCell>
        <Text>Amet</Text>
      </TableCell>
      <TableCell>
        <Text>Consectetur</Text>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Text>Adipiscing</Text>
      </TableCell>
      <TableCell>
        <Text>Elit</Text>
      </TableCell>
      <TableCell>
        <Text>Praesent</Text>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Text>Semper</Text>
      </TableCell>
      <TableCell>
        <Text>Interdum</Text>
      </TableCell>
      <TableCell>
        <Text>Viverra</Text>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
      `,
        description: 'A basic table with correct component nesting',
      },
      //       {
      //         name: '',
      //         code: `

      // `,
      //         description: '',
      //       },
    ],
  },
  components: require.resolve('./src/playroom.components.ts'),
  snippets: resolveFromBraid('entries/playroom/snippets.ts'),
  themes: resolveFromBraid('lib/themes/index.ts'),
  defaultVisibleThemes: ['apac', 'seekJobs'],
  frameComponent: require.resolve('./src/playroom.frame.ts'),
  scope: require.resolve('./src/playroom.scope.ts'),
  typeScriptFiles: [resolveFromBraid('entries/playroom/components.ts')],
  widths: [320, 390, 768, 1024, 1280, 1440, 1600],
  defaultVisibleWidths: [390, 768, 1280],
  openBrowser: false,
  port: 8082,
  webpackConfig: () => ({
    module: {
      rules: [
        // Playroom has its own CSS loaders and sku has its own CSS loaders.
        // We want to override Playroom's loaders and only use sku's ones.
        { test: /\.css$/, use: [] },
      ],
    },
    resolve: {
      alias: {
        'braid-src': braidSrc,
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        ignoreOrder: true,
      }),
      new SkuWebpackPlugin({
        include: [braidSrc],
        target: 'browser',
        mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
        displayNamesProd: true,
        removeAssertionsInProduction: false,
        MiniCssExtractPlugin,
      }),
      new DefinePlugin({
        'globalThis.__IS_PLAYROOM_ENVIRONMENT__': JSON.stringify('clearly'),
      }),
    ],
  }),
};
