const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|git)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
};