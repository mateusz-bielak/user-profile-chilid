const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|public)/,
          loader: 'babel-loader',
        }, {
          test: /\.s?css$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
        }, {
          test: /\.html$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }],
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'storage/img', to: 'img' },
      ]),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    },
  };
};
