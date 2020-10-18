const path = require('path');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効で JavaScript ファイルが出力される
  mode: "development",  // "production" , "development", "none"

  // メインとなる JavaScript ファイル（エントリーポイント）
  entry: "./src/index.ts",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },

  module: {
    rules: [{
      test: /\.ts$/,  // 拡張子 .ts の場合
      use: "ts-loader"  // TypeScript をコンパイルする
    }]
  },

  // import 文で .ts ファイルを解決する。
  // これを定義しないと import 文で拡張子を書くことになる。
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules"]
  },
  target: ["web", "es5"]
};
