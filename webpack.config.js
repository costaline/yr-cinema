/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env = {}, { mode } = {}) => {
  /** Path to output file(s) */
  const pathToOutputFile = {
    fonts: 'static/fonts/',
    js: 'static/js/',
    css: 'static/css/'
  };
  /** Build mode */
  const isProduction = mode === 'production';
  /** Bundle stats */
  const showTreemap = !!env.treemap;
  /** Filename */
  const name = isProduction ? '[contenthash:6]' : '[name]';
  /**
   * Alias
   * @param {string} pathToAlias
   * @returns {string}
   */
  const getAlias = (pathToAlias) => path.resolve(__dirname, pathToAlias);
  /**
   * Style loaders
   * @param {boolean} isModule
   * @param {null | 'sass'} preprocessor
   * @returns {{loader: string}[]}
   */
  const getStyleLoaders = ({ isModule = false, preprocessor = null } = {}) => {
    const loaders = [
      {
        loader: 'css-loader',
        options: {
          modules: isModule && {
            localIdentName: `${name}${
              isProduction ? '' : '__[local]--[hash:base64:5]'
            }`
          },
          sourceMap: !isProduction
        }
      }
    ];

    isProduction
      ? loaders.unshift({
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
            publicPath: '../../'
          }
        })
      : loaders.unshift({
          loader: 'style-loader'
        });

    isProduction &&
      loaders.push({
        loader: 'postcss-loader',
        options: { sourceMap: !isProduction }
      });

    !!preprocessor &&
      loaders.push({
        loader: `${preprocessor}-loader`,
        options: { sourceMap: !isProduction }
      });

    return loaders;
  };
  /**
   * Plugins
   * @returns {[]}
   */
  const getPlugins = () => {
    const plugins = [
      new Dotenv(),

      new CleanWebpackPlugin(),

      new HtmlWebpackPlugin({
        inject: true,
        template: 'public/index.html',
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true
            }
          : false
      }),

      new FaviconsWebpackPlugin('./public/logo.png'),

      new MiniCssExtractPlugin({
        filename: `${pathToOutputFile.css}${name}.css`,
        ignoreOrder: false
      }),

      new CopyPlugin([{ from: 'public/locales', to: 'locales/' }])
    ];

    showTreemap && plugins.push(new BundleAnalyzerPlugin());

    return plugins;
  };
  /**
   * File loader
   * @param {string} pathToFile
   * @returns {{loader: string, options: {name: string}}[]}
   */
  const getFileLoader = (pathToFile) => [
    {
      loader: 'file-loader',
      options: {
        name: `${pathToFile}${isProduction ? '' : '[folder]--'}${name}.[ext]`
      }
    }
  ];

  return {
    entry: { main: './src/index.jsx' },

    output: {
      path: path.resolve(__dirname, './dist/'),
      filename: `${pathToOutputFile.js}${name}.js`,
      publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },

        {
          test: /\.(css)$/,
          exclude: /\.module\.(sa|sc|c)ss$/,
          use: getStyleLoaders()
        },

        {
          test: /\.(sass|scss)$/,
          exclude: /\.module\.(sass|scss)$/,
          use: getStyleLoaders({ preprocessor: 'sass' })
        },

        {
          test: /\.module\.(css)$/,
          use: getStyleLoaders({ isModule: true })
        },

        {
          test: /\.module\.(sass|scss|)$/,
          use: getStyleLoaders({ isModule: true, preprocessor: 'sass' })
        },

        {
          test: /\.(png|jpe?g|gif)$/,
          use: getFileLoader('static/images/')
        },

        {
          test: /\.(ttf|woff2?)$/,
          use: getFileLoader(`${pathToOutputFile.fonts}`)
        }
      ]
    },

    plugins: getPlugins(),

    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin()],

      splitChunks: {
        chunks: 'all',
        hidePathInfo: true,
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            reuseExistingChunk: false
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            maxSize: 200000,
            minSize: 200000,
            priority: -10
          }
        }
      },

      runtimeChunk: {
        name: isProduction ? `${name}` : 'runtime'
      }
    },

    devtool: isProduction ? false : 'source-map',

    devServer: {
      hot: true,
      historyApiFallback: true,
      overlay: true,
      port: 8082
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],

      alias: {
        '~src': getAlias('src'),
        '~public': getAlias('public'),
        '~components': getAlias('src/components'),
        '~hocs': getAlias('src/hocs'),
        '~routes': getAlias('src/routes'),
        '~services': getAlias('src/services'),
        '~store': getAlias('src/store'),
        '~utils': getAlias('src/utils')
      }
    }
  };
};
