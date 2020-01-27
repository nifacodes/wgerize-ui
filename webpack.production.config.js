const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { join, resolve } = require('path');

module.exports = {
  entry: ["@babel/polyfill", join(__dirname, 'src', 'index.js')],
  output: {
    path: resolve(__dirname, "dist/js"),
    filename: "bundle.js",
  },

  devServer: {
    contentBase: "./dist"
    // index: "index.html",
    // port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader" // inject CSS to page
          },
          {
            loader: "css-loader" // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function () {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["stage-0"]
          }
        }
      }*/
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Wgerize",
      description: "Wgerize",
      template: join(__dirname, 'dist/js', 'index.html'),
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    })
  ]
};



module.exports = {
  mode: 'development', // dev
  devtool: 'cheap-module-eval-source-map', // dev
  entry: join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: resolve(__dirname, 'build')
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html')
    }),

    new webpack.HotModuleReplacementPlugin(), // dev
    new webpack.NoEmitOnErrorsPlugin() // dev
  ]
}


module.exports = {
  entry: join(__dirname, 'src', 'index.js'),
  mode: 'development', // dev
  devtool: 'cheap-module-eval-source-map', // dev
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: resolve(__dirname, 'build')
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html')
    }),

    new webpack.HotModuleReplacementPlugin(), // dev
    new webpack.NoEmitOnErrorsPlugin() // dev
  ]
}