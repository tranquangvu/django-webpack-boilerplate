const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'app': Path.resolve(__dirname, './assets/scripts/app.js'),
    'pages/home': Path.resolve(__dirname, './assets/scripts/pages/home.js'),
  },
  output: {
    path: Path.join(__dirname, './static'),
    filename: 'scripts/[name].js',
    publicPath: '',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
    new CopyWebpackPlugin({ patterns: [{ from: Path.resolve(__dirname, './assets/public'), to: 'public' }] }),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, './assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            context: Path.resolve(__dirname, './assets'),
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
};
