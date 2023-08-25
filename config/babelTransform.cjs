const babelJestMd = require('babel-jest');
const babelJest = babelJestMd.__esModule ? babelJestMd.default : babelJestMd;

module.exports = babelJest.createTransformer({
  presets: [
    'babel-preset-vite',
    [
      require.resolve('babel-preset-react-app'),
      {
        runtime: 'automatic',
      },
    ],
  ],
  babelrc: false,
  configFile: false,
});
