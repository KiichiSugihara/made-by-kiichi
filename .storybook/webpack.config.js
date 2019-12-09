const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const path = require('path')

module.exports = async ({ config, mode }) => {
    config.resolve.extensions.push(
        '.ts',
        '.tsx',
        '.vue',
        '.css',
        '.less',
        '.scss',
        '.sass',
        '.html'
    )
    config.module.rules.push({
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true, // used with ForkTsCheckerWebpackPlugin
                },
            },
        ],
    })

    //scssを使う場合に必要
    config.module.rules.push({
        test: /\.s(c|a)ss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
    })

    //vue の@対策?
    config.module.rules.push({
        test: /\.vue$/,
        loaders: ['vue-loader'],
    })

    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
    }

    config.plugins.push(new ForkTsCheckerWebpackPlugin())

    return config
}
