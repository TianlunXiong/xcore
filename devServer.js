const app = require('express')();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./config/webpack.dev.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler,{
    log: false,
    heartbeat: 2000
}))

app.listen(8081,()=>console.log("Server open"));
