const path = require('path');

module.exports = {
    mode: 'development',
    // entry: './src/js/main.js',
    entry: ["./src/js/main.js", "./src/scss/main.scss"],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                include: path.resolve(__dirname, "src/scss"),
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
};
