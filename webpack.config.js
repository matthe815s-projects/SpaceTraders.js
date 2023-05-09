const path = require('path')

module.exports = {
  entry: './src/web/components/App.tsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'src/web/public/js')
  },
  module: {
    rules: [
      // `js` and `jsx` files are parsed using `babel`
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  }
}
