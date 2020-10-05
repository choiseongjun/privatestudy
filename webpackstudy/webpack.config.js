const path=require('path');
const MyPlugin = require("./myplugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode:'development',
    entry:{
        main:'./src/app.js',
    },
    output:{
        filename:'[name].js',
        path:path.resolve('./dist'),
    },
    module: {
        rules: [{
          test: /\.css$/, // .js 확장자로 끝나는 모든 파일
          use: ['style-loader','css-loader'] // 방금 만든 로더를 적용한다
        }, {
            test: /\.png$/, // .png 확장자로 마치는 모든 파일
            loader: "url-loader", // 파일 로더를 적용한다
            options: {
                publicPath: "./dist/", // prefix를 아웃풋 경로로 지정
                name: "[name].[ext]?[hash]", // 파일명 형식
                limit:5000000
              },
          }],
    },
    plugins:[
        new webpack.BannerPlugin({
            banner: '이것은 배너 입니다',
        }),
        new webpack.DefinePlugin({
            TWO:JSON.stringify('1+1'),
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html', // 템플릿 경로를 지정
            templateParameters: { // 템플릿에 주입할 파라매터 변수 지정
              env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
            },
            minify: process.env.NODE_ENV === 'production' ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true, // 주석 제거
              } : false,
        }),
        new CleanWebpackPlugin(),
        ...(process.env.NODE_ENV === "production"
        ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
        : []),
    ]

}