const path = require('path');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', // 실 서비스: production
  devtool: 'eval', // 빠르게 하겠다, production 일 때는 hidden-source-map 쓰면 됨
  resolve: {
    extensions: ['.js', '.jsx'] // 해당 확장자를 가진 파일을 찾는다
  },

  //entry, output 이 제일 중요
  entry: { // 입력
    app: ['./client.jsx'], // client.jsx 내부에서 WordRelay.jsx 를 불러오고 있으므로 client.jsx 만 불러도됨 // .jsx 확장자도 생략가능(resolve)
  },

  module: { // entry에 있는 file을 읽어서 module을 적용하고 output으로 출력
    rules: [{
      test: /\.jsx?/, // 규칙을 적용할 파일들
      /* zerocho 방식
      
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env', '@babel/react'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }*/
      use: { // 구글링 방식
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            ["@babel/plugin-proposal-class-properties"]
          ]
        }
      }
    }]
  },

  output: { // 출력
    path: path.join(__dirname, 'dist'), // __dirname: 현재폴더
    filename: 'app.js'
  }
}