const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // devtool: 'source-map',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        hot: true,
    },
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-2', 'react', 'minify', 'es2015'],
                    plugins: ['transform-class-properties'],
                },
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: { sourceMap: true },
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    require('autoprefixer')({
                                        browsers: ['last 2 versions', 'ie > 8'],
                                    }),
                                ],
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true },
                        },
                    ],
                }),
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'Hot Module Replacement',
        // }),
        new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};
