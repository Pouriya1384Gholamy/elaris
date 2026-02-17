const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js', // نقطه ورود به برنامه
    output: {
        path: path.resolve(__dirname, "./static/frontend"), // مسیر خروجی فایل‌های کامپایل شده
        filename: '[name].js', // نام فایل خروجی
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // فایل‌های جاوااسکریپت و ری‌اکت
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // فایل‌های CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // فایل‌های تصاویر
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // پسوندهای قابل شناسایی
    },
    devServer: {
        static: path.join(__dirname, 'dist'), // مسیر فایل‌های استاتیک
        compress: true,
        port: 9000, // پورت سرور
    },
    mode: 'development', // حالت توسعه
};