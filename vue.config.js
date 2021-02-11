const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    publicPath: '/',
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
           icons: [],
           content_security_policy: "default-src 'self' style-src 'self' 'unsafe-inline';"
       }
    },
    variables: path.resolve(
        __dirname,
        "assets/css/colors.css"
    ),
}
