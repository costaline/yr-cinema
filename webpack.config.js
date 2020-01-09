/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env = {}, { mode } = {}) => {
  const isProduction = mode === 'production';

  // module -> rules -> /\.(sa|sc|c)ss$/ -> use
  const getUseForStyle = ({ isModule = false } = {}) => [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: process.env.NODE_ENV === 'development',
        publicPath: '../../'
      }
    },

    {
      loader: 'css-loader',
      options: {
        modules: isModule
          ? {
              localIdentName: isProduction
                ? '[hash:base64:5]'
                : '[name]__[local]--[hash:base64:5]'
            }
          : false,
        sourceMap: true
      }
    },

    {
      loader: 'postcss-loader',
      options: { sourceMap: true }
    },
    {
      loader: 'sass-loader',
      options: { sourceMap: true }
    }
  ];

  // plugins
  const getPlugins = () => {
    const showTreemap = !!env.treemap;

    const plugins = [
      new CleanWebpackPlugin(),

      new HtmlWebpackPlugin({
        inject: true,
        template: 'public/index.html'
      }),

      new MiniCssExtractPlugin({
        filename: 'static/css/[name]--[hash:5].bundle.css',
        ignoreOrder: false
      })
    ];

    showTreemap && plugins.push(new BundleAnalyzerPlugin());

    return plugins;
  };

  return {
    entry: './src/index.jsx',

    output: {
      path: path.resolve(__dirname, './dist/'),
      filename: 'static/js/[name].bundle.js',
      publicPath: isProduction ? './' : '/'
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          resolve: { extensions: ['.js', '.jsx'] },
          use: {
            loader: 'babel-loader'
          }
        },

        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /\.module\.(sa|sc|c)ss$/,
          use: getUseForStyle()
        },

        {
          test: /\.module\.(sa|sc|c)ss$/,
          use: getUseForStyle({ isModule: true })
        },

        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/images/[name]--[hash:5].[ext]'
              }
            }
          ]
        },

        {
          test: /\.(woff2?)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/fonts/[name].[ext]'
              }
            }
          ]
        }
      ]
    },

    plugins: getPlugins(),

    optimization: {
      minimize: isProduction ? true : false,
      minimizer: [new TerserPlugin()],

      splitChunks: {
        chunks: 'all'
      },

      runtimeChunk: {
        name: (entrypoint) => `runtime~${entrypoint.name}`
      }
    },

    devtool: isProduction ? false : 'source-map',

    devServer: {
      historyApiFallback: true,
      overlay: true,
      port: 8082
    },

    resolve: {
      alias: {
        '~src': path.resolve(__dirname, 'src'),
        '~public': path.resolve(__dirname, 'public'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~hocs': path.resolve(__dirname, 'src/hocs'),
        '~routes': path.resolve(__dirname, 'src/routes'),
        '~services': path.resolve(__dirname, 'src/services'),
        '~store': path.resolve(__dirname, 'src/store'),
        '~utils': path.resolve(__dirname, 'src/utils')
      }
    }
  };
};

// analog resolve-alias:
// install "babel-plugin-module-resolver"
// .babelrc -> plugins
/*[
  "module-resolver",
  {
    "root": ["."],
    "alias": {
      "~src": "./src",
      "~public": "./public",
      "~components": "./src/components",
      "~hocs": "./src/hocs",
      "~routes": "./src/routes",
      "~services": "./src/services",
      "~store": "./src/store",
      "~utils": "./src/utils"
    }
  }
] */
