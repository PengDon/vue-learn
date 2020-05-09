## 简单vue+webpack+typescript例子

> **说明** 在分支base2的基础上做修改


## 新增功能
1、添加ts依赖
> typescript、ts-loader

2、添加ts代码检查及规范
> tslint、tslint-loader

3、添加vue对ts的支持
> vue-property-decorator、vue-class-component 

4、添加eslint
> eslint@6.5.1、@typescript-eslint/parser、@typescript-eslint/eslint-plugin

5、用来检测和规范 Vue 代码的风格
> eslint-plugin-vue

6、用来做格式化工具配合我们的 ESLint 可以更大的发挥作用
> prettier、eslint-config-prettier、eslint-plugin-prettier




## 依赖插件安装
```sh
npm install typescript ts-loader tslint tslint-loader -D
npm install vue-property-decorator vue-class-component -S
npm install eslint@6.5.1 @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
npm install eslint-plugin-vue -D
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```
