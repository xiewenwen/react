// const proxy = require('http-proxy-middleware')
//
// module.exports = function (app) {
//     // proxy第一个参数为要代理的路由
//     // 第二参数中target为代理后的请求网址，changeOrigin是否改变请求头，其他参数请看官网
//     app.use(proxy('/quality/v1/standard/save', {
//         target: 'http://192.168.240.97:8030',
//         changeOrigin: true
//     }))
// }
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