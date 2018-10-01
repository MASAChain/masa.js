const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: ['./index.js'],
  mode: 'development',
  output: {
    filename: 'masa.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      }
    ]
  }
}
