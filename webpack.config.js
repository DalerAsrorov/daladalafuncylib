const path = require('path');

const PATHS = {
    entryPoint: path.resolve(__dirname, 'src/index.ts'),
    bundles: path.resolve(__dirname, 'dist')
};

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index: PATHS.entryPoint,
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    output: {
        filename: '[name].js',
        library: 'daladalafunc',
        path: PATHS.bundles,
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
};