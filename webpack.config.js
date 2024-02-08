const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  cache: false,
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: ["@babel/react", "@babel/preset-env"],
            plugins: [["@babel/plugin-transform-react-jsx"]],
          },
        },
      },
      {
        test: [/\.(png|jpg|jpeg|gif)$/],
        exclude: /node_modules/,
        loader: "file-loader",
      },
      {
        test: /\.html$/,
        use: "file-loader",
      },
      // {
      //     test: /.html$/,
      //     loader: "html-loader",
      // },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".scss", ".jpg", ".png"],
    alias: {
      // ...
      "react-dom$": "react-dom/profiling",
    },
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    // publicPath: "auto",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        pathRewrite: { "^/": "" },
      },
    },
  },
};
