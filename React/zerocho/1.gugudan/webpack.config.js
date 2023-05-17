const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./client'],
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env',{
              targets: {
                browsers: ['last 2 chrome versions'], // browserslist
              }
            }]
            '@babel/preset-react'
          ],
          plugins:[
            ["@babel/plugin-proposal-class-properties"]
          ]
        }
      },
    }]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }
}