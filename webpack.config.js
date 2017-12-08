module.exports = {
  entry: './client/src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
