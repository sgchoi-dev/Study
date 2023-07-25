const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
//process.env.NODE_ENV = 'production'; // 실 서비스(production)일 때 추가해줘야함 (배포모드)

module.exports = {
  name: "word-relay-setting",
  mode: "development", // 실 서비스: production
  devtool: "eval", // 빠르게 하겠다, production 일 때는 hidden-source-map 쓰면 됨
  resolve: {
    extensions: [".js", ".jsx"], // 해당 확장자를 가진 파일을 찾는다
  },

  //entry, output 이 제일 중요
  entry: {
    // 입력
    app: ["./client.jsx"], // client.jsx 내부에서 WordRelay.jsx 를 불러오고 있으므로 client.jsx 만 불러도됨 // .jsx 확장자도 생략가능(resolve)
  },

  module: {
    // entry에 있는 file을 읽어서 module을 적용하고 output으로 출력
    rules: [
      {
        test: /\.jsx?/, // 규칙을 적용할 파일들
        /* zerocho 방식
      
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env', '@babel/react'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }*/
        use: {
          // 구글링 방식
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "react-refresh/babel",
            ],
          },
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    // 출력
    path: path.join(__dirname, "dist"), // __dirname: 현재폴더
    filename: "app.js",
  },
  /*devServer: {
    //publicPath: '/dist/', // publicPath 는 v4에서 devServer의 devMiddleware라는 옵션으로 이동하였다.
    hot: true
  },*/
  devServer: {
    historyApiFallback: true,
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) }, // index.html 처럼 실제 존재하는 파일이 있는 위치를 적어줘야 함
    //static: { directory: path.resolve(__dirname, 'src') }, // 만약 index.html 파일이 src폴더에 있다면
    hot: true, // 기존 data 유지하면서 화면을 바꿔줌
  },
};
