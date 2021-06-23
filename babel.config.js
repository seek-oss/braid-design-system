// module.exports = {
//   const plugins = [
//     require.resolve('babel-plugin-syntax-dynamic-import'),
//     ...(!isProductionBuild && lang === 'js'
//       ? [require.resolve('babel-plugin-flow-react-proptypes')]
//       : []),
//     require.resolve('@babel/plugin-proposal-class-properties'),
//     require.resolve('@babel/plugin-proposal-object-rest-spread'),
//     require.resolve('@babel/plugin-proposal-optional-chaining'),
//     require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
//     [
//       require.resolve('babel-plugin-module-resolver'),
//       {
//         root: rootResolution ? [cwd()] : undefined,
//         extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
//       },
//     ],
//     require.resolve('@babel/plugin-transform-runtime'),
//     require.resolve('babel-plugin-macros'),
//     require.resolve('@loadable/babel-plugin'),
//     [require.resolve('babel-plugin-treat'), { alias: 'sku/treat' }],
//     require.resolve('@vanilla-extract/babel-plugin'),
//   ];

//   if (isProductionBuild) {
//     plugins.push(
//       require.resolve('@babel/plugin-transform-react-inline-elements'),
//       require.resolve('babel-plugin-transform-react-remove-prop-types'),
//       require.resolve('@babel/plugin-transform-react-constant-elements'),
//     );

//     if (displayNamesProd) {
//       plugins.push(require.resolve('babel-plugin-add-react-displayname'));
//     }

//     if (removeAssertionsInProduction) {
//       plugins.push(require.resolve('babel-plugin-unassert'));
//     }
//   }

const r = (v) => require.resolve(v);

module.exports = {
    presets: [
      r('@babel/preset-typescript'),
      [r('@babel/preset-env'), { modules: false,}],
      r('@babel/preset-react'),
    ],
    plugins: [
        r('@vanilla-extract/babel-plugin'),
        [r('babel-plugin-treat'), { alias: 'sku/treat' }],
        r('@babel/plugin-transform-runtime'),
        
        // Assuming we need this for consumers?
        r('babel-plugin-add-react-displayname'),

        // React perf plugins from sku. Still needed?
        r('@babel/plugin-transform-react-inline-elements'),
        r('@babel/plugin-transform-react-constant-elements'),
    ],
};
