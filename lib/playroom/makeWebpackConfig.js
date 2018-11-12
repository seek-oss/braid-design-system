const path = require('path');
const browserslist = require('browserslist-config-seek');
const isProduction = process.env.NODE_ENV === 'production';
const braidSrcPath = path.resolve(__dirname, '..');

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
            allExtensions: true
          }
        ],
        [
          require.resolve('@babel/preset-env'),
          {
            modules: false,
            targets: browserslist
          }
        ],
        require.resolve('@babel/preset-react')
      ],
      plugins: [
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve('@babel/plugin-proposal-object-rest-spread')
      ]
    }
  }
];

const cssInJsLoaders = [
  {
    loader: require.resolve('style-loader'),
    options: {
      insertAt: 'top'
    }
  },
  {
    loader: require.resolve('css-loader'),
    options: {
      modules: true,
      localIdentName: `${
        isProduction ? '' : '__BRAID__[name]__[local]___'
      }[hash:base64:7]`,
      minimize: isProduction,
      importLoaders: 2 + jsLoaders.length
    }
  },
  {
    loader: require.resolve('postcss-loader'),
    options: {
      plugins: () => [require('autoprefixer')(browserslist)]
    }
  },
  {
    loader: require.resolve('css-in-js-loader')
  },
  ...jsLoaders
];

module.exports = () => ({
  module: {
    rules: [
      {
        test: /(?!\.css)\.(js|ts|tsx)$/,
        include: [braidSrcPath],
        use: jsLoaders
      },
      {
        test: /\.css\.js$/,
        include: [braidSrcPath],
        use: cssInJsLoaders
      }
    ]
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.ts', '.tsx']
  }
});
