module.exports = {
    publicPath: '/',
    devServer: {
        index: 'index.html',
        port: 8081,
        hot: true,
        clientLogLevel: 'info'
    },
    assetsDir: 'assets',
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
    },

}
