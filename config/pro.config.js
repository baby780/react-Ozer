const webpackMerge =require("webpack-merge");
const baseConfing =require("./base.config");

//因为打包的时候css和js合并了所以要在这里进行抽离
//引入抽离css插件
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const config =webpackMerge(baseConfing,{
    mode:"production",
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                //抽离css
                use:ExtractTextWebpackPlugin.extract({
                    use:[
                        {loader:"css-loader"},
                        {loader:"postcss-loader"},
                        {loader:"sass-loader"}
                    ],
                    fallback:"style-loader",
                })
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:"css/[name].[hash:8].css"
        })
    ]
})

module.exports=config;