const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    outputDir: './build/',
    devServer: {
        index: 'index.html',
        port: 8081,
        hot: true,
        clientLogLevel: 'info'
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                title: 'ARM',
                template: 'public/index.html'
            })
        ]
    },
    pwa: {
       manifestOptions: {
           icons: []
       }
    }
}
