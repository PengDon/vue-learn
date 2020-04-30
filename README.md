## 准备解决的问题
1、解决加载css文件 
>  style-loader、css-loader

2、解决js文件ES6转ES5代码兼容各个浏览器运行要求
>  babel-loader、@babel/core、@babel/preset-env

3、解决css浏览器兼容性，自动补全前缀
>  postcss-loader、autoprefixer

4、解决样式分离、提取css
>  extract-text-webpack-plugin@next

5、解决声明了很多样式，但部分样式并没有用到，造成了css冗余，配合extract-text-webpack-plugin@next使用
>  purifycss-webpack、purify-css

6、解决加载静态文件(如：图片、字体等)
>  file-loader、url-loader


## 依赖插件安装
```sh
npm install style-loader css-loader babel-loader @babel/core @babel/preset-env postcss-loader autoprefixer -D
npm install extract-text-webpack-plugin@next purifycss-webpack purify-css file-loader url-loader -D
```