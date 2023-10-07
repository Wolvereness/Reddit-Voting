const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    externals: {
        react: 'React',
        'react/jsx-runtime': 'React',
        'react-dom': 'ReactDOM',
        '@mui/material': 'MaterialUI',
        '@emotion/react': 'emotionReact',
    },
    externalsType: 'global',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
