项目启动 npm start   http://localhost:10000

一.全局安装node ,express,mysql,hotnode等


二.全局安装 hotnode  //作用热更新
    需要在package.json 添加配置
    {
        "scripts": {
            "start": "hotnode ./bin/www"
        },
    }
三.全局安装 apidoc   //作用api文档
    需要在package.json 添加配置
    {
        "apidoc": {
            "title": "接口文档",
            "url": "http://localhost:10000" //这是接口地址
        }
    }
    新建 apidoc.json
    {
        "name": "接口文档",
        "version": "1.0.0",
        "description": "apiDoc basic example",
        "title": "Custom apiDoc browser title",
        "url": "http://127.0.0.1:10000"//这里是文档中真实端口
    }
    命令
    apidoc -i routes/ -o public/apidoc/
    文档地址 http://127.0.0.1:5500/public/apidoc/index.html
    编译api文档

四. node error log 错误log信息
    log4js