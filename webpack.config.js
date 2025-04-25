const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

/**
 * complete webpack 5 configuration
 * https://javascript.plainenglish.io/setting-up-webpack-for-the-production-and-development-3ca0b0b12ff5
 */

module.exports = function (env, argv) {
  const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
  const mode = env.production ? "production" : "development";

  console.log(env.production);

  return {
    mode: mode,
    devtool: mode === "production" ? "source-map" : "eval",
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
          type: "asset/resource",
          generator: {
            filename: "images/[hash][ext][name][query]"
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024
            }
          },
          generator: {
            filename: "fonts/[hash][ext][name][query]"
          }
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
        "@components": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@images": path.resolve(__dirname, "src/images"),
        "@mock": path.resolve(__dirname, "src/mock"),
        "@hooks": path.resolve(__dirname, "src/hooks")
        // "@config": path.resolve(__dirname, "src/config"),
        // "@routes": path.resolve(__dirname, "src/routes"),
        // "@services": path.resolve(__dirname, "src/services"),
        // "@utils": path.resolve(__dirname, "src/utils")
      }
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              // warning     : true, // Could cause problems
              comparisons: false,
              ecma: 5,
              inline: 2
            },
            output: {
              ascii_only: true,
              ecma: 5
            }
          }
        })
      ]
    },
    output: {
      filename: "./js/[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      chunkFilename: "./js/chunkFilename.[name].bundle.js",
      publicPath: "/"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
        // favicon: "./src/images/bandar-pelumas-logo.png"
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[name].[id].css",
        ignoreOrder: false
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        moment: "moment"
      })
    ]
  };
};
