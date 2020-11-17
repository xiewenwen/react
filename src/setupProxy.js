const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        proxy.createProxyMiddleware('/quality', { //`api`是需要转发的请求
            target: 'http://192.168.240.97:8030/', // 这里是接口服务器地址
            changeOrigin: true
            // pathRewrite: {'^/quality': ''}
        })
    )
}