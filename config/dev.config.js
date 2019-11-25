const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

const config = webpackMerge(baseConfig,{
    mode:"development",
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    {loader:"postcss-loader"},
                    {loader:"sass-loader"}
                ]
            }
        ]
    },
    devServer:{
        port:9000
    }
})

module.exports = config;