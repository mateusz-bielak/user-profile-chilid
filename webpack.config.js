const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('../styles/styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public/scripts'),
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
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              }, {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        }, {
          test: /\.html$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '../',
          },
        }],
    },
    plugins: [
      CSSExtract,
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
  };
};