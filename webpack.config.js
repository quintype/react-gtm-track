module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-module/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
