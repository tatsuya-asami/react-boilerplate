const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('./webpack.common');

const outputFile = '[name].[chunkhash]';
const assetFile = '[name].[contenthash]';
// 静的ファイルを保存する場所によって変える。インフラ担当者と要相談。
const assetPath = '/';

module.exports = (env) => {
  // package.jsonのscriptで --env.envFile=で指定されたパスのenvFileを使用する。
  // 指定されていない場合は.env.productionを使用する
  const envFilePath = env ? `./env/.env.${env.file}` : './env/.env.production';

  return webpackMerge(
    commonConfig({
      outputFile,
      assetFile,
      envFilePath,
      assetPath,
    }),
    {
      mode: 'production',
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/public/index.html'),
          // 出力されるファイル名
          filename: 'index.html',
          // headにjsファイルを入れたい場合はheadを指定
          inject: 'body',
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          },
          // 読み込むjsファイルを指定
        }),
        new CleanWebpackPlugin(),
      ],
      optimization: {
        minimizer: [
          // javascriptの最適化
          new TerserWebpackPlugin({
            terserOptions: {
              // consoleを削除する
              compress: { drop_console: true },
            },
          }),
          // cssの最適化
          new OptimizeCssPlugin(),
        ],
      },
    }
  );
};
