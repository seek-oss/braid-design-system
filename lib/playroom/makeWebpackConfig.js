const path = require('path');
const browserslist = require('browserslist-config-seek');
const TreatPlugin = require('treat/plugin');
const isProduction = process.env.NODE_ENV === 'production';
const include = [
  path.resolve(__dirname, '..'),
  path.dirname(require.resolve('sku/package.json')),
];

const localIdentName = `${
  isProduction ? '' : 'BRAID__[name]-[local]_'
}[hash:base64:7]`;

const jsLoaders = [
  {
    loader: require.resolve('babel-loader'),
    options: {
      babelrc: false,
      presets: [
        [
          require.resolve('@babel/preset-typescript'),
          {
            isTSX: true,
            allExtensions: true,
          },
        ],
        [
          require.resolve('@babel/preset-env'),
          {
            modules: false,
            targets: browserslist,
          },
        ],
        require.resolve('@babel/preset-react'),
      ],
      plugins: [
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve('@babel/plugin-proposal-object-rest-spread'),
        require.resolve('treat/babel-plugin'),
      ],
    },
  },
];

const cssInJsLoaders = [
  {
    loader: require.resolve('style-loader'),
    options: {
      insertAt: 'top',
    },
  },
  {
    loader: require.resolve('css-loader'),
    options: {
      modules: true,
      localIdentName,
      minimize: isProduction,
      importLoaders: 2 + jsLoaders.length,
    },
  },
  {
    loader: require.resolve('postcss-loader'),
    options: {
      plugins: () => [require('autoprefixer')(browserslist)],
    },
  },
  {
    loader: require.resolve('less-loader'),
  },
  {
    loader: require.resolve('css-in-js-loader'),
  },
  ...jsLoaders,
];

module.exports = () => ({
  module: {
    rules: [
      {
        test: /(?!\.css)\.(js|ts|tsx)$/,
        include,
        use: jsLoaders,
      },
      {
        test: /\.css\.js$/,
        include,
        use: cssInJsLoaders,
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
  },
  plugins: [
    new TreatPlugin({
      localIdentName,
      themeIdentName: `${!isProduction ? '-[folder]_' : ''}[hash:base64:3]`,
      babelPlugin: false,
    }),
  ],
});
