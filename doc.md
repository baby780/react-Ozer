# webpack基本使用流程
>  1、`cnpm install webpack webpack-cli -D`
   2、安装处理css的loader  `cnpm install style-loader css-loader node-sass sass-loader postcss-loader autoprefixer -D`
   3、安装处理JS的loader `cnpm install babel-loader @babel/core @babel/preset-env @babel/preset-react -D`
   4、安装处理图片的loader `cnpm install url-loader file-loader -D`
   5、安装html-webpack-plugin  clean-webpack-plugin `cnpm install html-webpack-plugin clean-webpack-plugin -D`
   6、合并webpack配置项 `cnpm install webpack-merge -D`
   7、开发环境中需要用到服务 `cnpm install webpack-dev-server -D`
   8、引入抽离css插件 `cnpm install extract-text-webpack-plugin@next -D`

# 启动文件
> webpack在打包的时候默认会找到webpack.config.js配置文件进行处理，但是如果想要指定其他文件为启动目录配置文件的时候需要做配置.在scripts配置项目通过--config进行配置


#React特点
>  1、声明式

#函数化编程
    1、柯里化函数
**实现一个函数add(3)(5)结果等于 8 add(1)(2)(3)(4)结果为10**

```javascript
    function fn(a){
        return function(b){
            return a+b;
        }
    }


    function fn(a){
        return function (b){
            return function(c){
                return a+b+c;
            }
        }
    }

```
2.什么是一个纯函数
>输入一定输出也一定

3.声明式和命令式
```javascript
    var arr =[10,20,30,40];

    for(var i=0;i<arr.length;i++){
        arr[i]+=10;
    }
    arr.map(item=>item+10);

```
# React必须安装的依赖
`cnpm install react react-dom -S`

