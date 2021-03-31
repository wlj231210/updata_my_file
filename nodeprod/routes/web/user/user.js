let express = require('express');
let router = express.Router();
let db = require('../../../database/dbConfig');

/**
 * @api {post} /user/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam {string} userName 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : 200,
 *      "message" : "登录成功",
 *      "dataMap" : {
                "Id": 10,
                "userName": "12138",
                "mobile": "17681018301",
                "email": null,
                "headImg": null,
                "createTime": 1589348813846,
                "updataTime": null,
            }
 *  }
 * @apiSampleRequest /user/login
 */
router.post('/login', function (req, res, next) {
    try {
        if (req.body.userName !== '' && req.body.password !== '') {
            let userName = req.body.userName;
            let password = req.body.password;
            // console.log(userName,password)
            let project = '';
            let sqlString = `SELECT * FROM user WHERE ( userName="${userName}" OR mobile="${userName}") AND password="${password}"`;
            let connection = db.connection();
            db.insert(connection, sqlString, project, function (err, userdata) {
                let data = userdata || [];
                // console.log(err,userdata)
                if (err) {
                    console.log(err)
                } else if (userdata.length == 1) {
                    req.session.userId = userdata[0].userId;
                    let result = {
                        "userName": userdata[0].userName,
                        "mobile": userdata[0].mobile,
                        "email": userdata[0].email,
                        "headImg": userdata[0].headImg,
                        "createTime": userdata[0].createTime
                    }
                    res.json({
                        code: 200,
                        message: '登录成功',
                        dataMap: result
                    });

                } else {
                    res.json({
                        code: 400,
                        message: '用户名或密码错误',
                        dataMap: null
                    });
                }

            });
            db.close(connection);
            return;
        } else {
            res.json({
                code: 400,
                message: '登录帐号或密码不正确',
                dataMap: null
            });
        }
    } catch (error) {
        res.json({
            code: 400,
            message: '登录出错啦',
            dataMap: null
        });
    }
});

/**
 * @api {get} /user/getuserinfo 获取用户信息
 * @apiDescription 获取用户信息
 * @apiName getuserinfo
 * @apiGroup User
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {   "code": 200,
 *      "message" : "success",
 *      "dataMap" :   {
                "userId": 10,
                "username": "12138",
                "mobile": "17681018301",
                "email": null,
                "userhead": null,
                "creacte_time": 1589348813846,
                "update_user": null,
            }
 *  }
 * @apiSampleRequest /user/getuserinfo
 */
router.get('/getuserinfo', function (req, res) {
    // console.log('req:' + req.session.userId);
    if (req.session.userId) {
        let project = '';
        let sqlString = `SELECT * FROM user WHERE userId= '${req.session.userId}'`;
        let connection = db.connection();
        db.insert(connection, sqlString, project, function (err, userdata) {
            // console.log(err,userdata)
           if(err){
                // console.log(err)
           }else  if (userdata.length == 1) {
            let result = {
                "userName": userdata[0].userName,
                "mobile": userdata[0].mobile,
                "email": userdata[0].email,
                "headImg": userdata[0].headImg,
                "createTime": userdata[0].createTime
            }
            res.json({
                code: 200,
                success: 'success',
                dataMap: result
            });

            } else {
                res.json({
                    code: 400,
                    success: '获取用户信息出错',
                    dataMap: null
                });
            }

        });
        db.close(connection);
        return;
    } else {
        res.json({
            code: 400,
            success: '未登录',
            dataMap: null
        });
    }
});

/**
 * @api {post} /user/regest 注册
 * @apiDescription 用户注册
 * @apiName regest
 * @apiGroup User
 * @apiParam {string} userName 用户名
 * @apiParam {number} mobile 手机号
 * @apiParam {string} password 密码
 * @apiParam {string} gpass 重复密码
 * @apiParam {number} codes 验证码
 * @apiSuccess {json} dataMap
 * @apiSuccessExample {json} Success-Response:
 *  {   "code": 200,
 *      "success" : "注册成功",
 *      "dataMap" :  null
 *  }
 * @apiSampleRequest /user/regest
 */
router.post('/regest', function (req, res, next) {
    let userName = req.body.userName,
        mobile = req.body.mobile,
        resPass = req.body.password;

    if (req.body.password === "" || req.body.gpass === "" || req.body.userName === "" || req.body.mobile === "") {
        res.json({
            code: 400,
            success: '请求数据不能为空',
            dataMap: null
        });
        return false;
    }
    try {
        if (req.body.password !== req.body.gpass) {
            res.json({
                code: 301,
                success: '重复密码不一致',
                dataMap: null
            });
            return false;
        }
        if (req.body.codes !== '1206') {
            res.json({
                code: 302,
                success: '验证码不一致',
                dataMap: null
            });
            return false;
        }
        // 查询是否存在手机号
        delete req.body.codes;
        let project1 = '';
        let sqlString1 = `SELECT * FROM user WHERE mobile='${mobile}' AND userId='WLJ${mobile}`;
        let connection = db.connection();
        db.insert(connection, sqlString1, project1, function (err, userdata) {
            userdata = userdata || [];
            if (err) {
                console.log(err)
            } else if (userdata && userdata.length) {
                res.json({
                    code: '400',
                    success: '手机号已注册',
                    dataMap: null
                });
                db.close(connection);
                return
            } else {
                // 提交注册
                let createTime = Date.now();
                let project = Object.assign({ 'createTime': createTime, userId: 'WLJ' + mobile }, req.body);
                let sqlString = 'INSERT INTO user SET ?';
                let connection1 = db.connection();
                db.insert(connection1, sqlString, project, function (err, resdata) {
                    resdata = resdata || [];
                    if (err) {
                        // console.log(err)
                    } else if (resdata && resdata.insertId) {
                        res.json({
                            code: '200',
                            success: '注册成功',
                            dataMap: {
                                name: userName,
                                mobile: mobile
                            }
                        });

                    } else {
                        res.json({
                            code: 400,
                            success: '请求出错',
                            dataMap: null
                        });
                    }

                });
                db.close(connection1);
                return

            }
        });

    } catch (e) {
        res.json({
            code: 400,
            success: '请求出错',
            dataMap: null
        });
    }
});

/**
 * @api {get} /user/logout 退出登录
 * @apiDescription 退出登录
 * @apiName logout
 * @apiGroup User
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {   "code": 200,
 *      "success" : "退出成功",
 *      "result" :  null
 *  }
 * @apiSampleRequest /user/logout
 */
router.get('/logout', function (req, res) {
    req.session.userid = null;
    req.session.error = null;
    res.json({
        code: 200,
        success: '退出登录',
        dataMap: null
    });

});

module.exports = router;