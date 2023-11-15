const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // para los files se importen sin extencion
  },
  module: {
    // deberia usar babel loader por un tipo de files y excluir node modules
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: path.resolve(__dirname, './node_modules'),
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
};
