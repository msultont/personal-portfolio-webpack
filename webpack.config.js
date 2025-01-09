const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = function (env, argv) {
  return {
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-map" : "eval-cheap-module-source-map",
    entry: path.resolve(__dirname, "src", "index.js"),
    module: {
      rules: [
        // {
        //   test: /\.tsx?$/,
        //   use: "ts-loader",
        //   exclude: /node_modules/
        // }
        {
          // https://webpack.js.org/loaders/babel-loader/#root
          test: /\.m?jsx?$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        },
        {
          // https://webpack.js.org/guides/asset-modules/#resource-assets
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource"
        },
        {
          // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
          resourceQuery: /raw/,
          type: "asset/source"
        },
        {
          // https://webpack.js.org/loaders/html-loader/#usage
          resourceQuery: /template/,
          loader: "html-loader"
        }
      ]
    },
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 8080,
      compress: true,
      hot: true,
      open: true,
      historyApiFallback: true
    },
    resolve: {
      // extensions: [".tsx", ".ts", ".js"]
      extensions: [".js", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components")
        // "@config": path.resolve(__dirname, "src/config"),
        // "@page": path.resolve(__dirname, "src/pages"),
        // "@routes": path.resolve(__dirname, "src/routes"),
        // "@services": path.resolve(__dirname, "src/services"),
        // "@utils": path.resolve(__dirname, "src/utils")
      }
    },
    optimization: {
      minimize: true,
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ]
  }
}
