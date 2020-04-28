const { resolve } = require('path');

const CssExtract = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (argv, mode) => {
  return {
    entry: './src/assets/scripts/index.js',
    output: {
      path: resolve(__dirname, 'dist/'),
      filename: 'assets/scripts/bundle.js',
      publicPath: '/'
    },
    devServer: {
      contentBase: resolve(__dirname, '/dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              sourceMaps: true
            }
          }]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            CssExtract.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          include: [resolve(__dirname, 'src/assets/images')],
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'assets/images/',
            }
          }]
        }
      ]
    },
    plugins: [
      new CssExtract({
        filename: 'assets/styles/main.css'
      }),
      new CopyWebpackPlugin([
        { from: 'src/index.html', to: 'index.html' },
      ]),
    ]
  }
};