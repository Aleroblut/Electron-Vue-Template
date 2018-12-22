const { VueLoaderPlugin } = require('vue-loader');

module.exports = {

    watch: true,

    mode: 'development',

    target: 'electron-main',

    entry: './app/src/entry.js',

    output: {
        path: __dirname + '/app/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                // test: /\.[vue].*$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
        // loaders: [
        //     {
        //         test: /\.vue$/,
        //         loader: 'vue-loader'
        //     },
        //     {
        //         test: /\.(png|jpg|gif|svg)$/,
        //         loader: 'file-loader',
        //         query: {
        //             name: '[name].[ext]?[hash]'
        //         }
        //     }
        // ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    }

}
