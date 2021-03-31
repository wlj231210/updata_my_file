let express = require('express');
let router = express.Router();
let db = require('../../../database/dbConfig');

/**
 * @api {get} /friend/getFriendList 好友列表
 * @apiDescription 好友列表
 * @apiName getFriendList
 * @apiGroup friends
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : 200,
 *      "message" : "查询成功",
 *      "dataMap" : [
 *          {
 *              
 *          }
 *      ]
 *  }
 * @apiSampleRequest /friend/getFriendList
 */
router.get('/getFriendList', function (req, res, next) {
    try {
        if (req.session.userId) {
            let project = '';
            let sqlString = `SELECT * FROM friends WHERE userid="${req.session.userId}"`;
            let connection = db.connection();
            db.insert(connection, sqlString, project, function (err, userdata) {
                let data = userdata || [];
                console.log(err, data)
                if (err) {
                    console.log(err)
                } else if (userdata) {
                    req.session.userid = userdata[0].Id;
                    let result = userdata;
                    res.json({
                        code: 200,
                        message: 'success',
                        dataMap: result
                    });

                }
            });
            db.close(connection);
            return;
        } else {
            res.json({
                code: 400,
                message: '请重新登陆',
                dataMap: null
            });
        }
    } catch (error) {
        res.json({
            code: 400,
            message: '网络不稳定',
            dataMap: null
        });
    }
});

/**
 * @api {post} /friend/friendRequest 好友请求
 * @apiDescription 好友请求
 * @apiName friendRequest
 * @apiGroup friends
 * @apiParam {string} friendid 好友ID
 * @apiParam {number} type 加载类型
 * @apiParam {string} remark 备注
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : 200,
 *      "message" : "好友请求已发送",
 *      "dataMap" : {}
 *  }
 * @apiSampleRequest /friend/friendRequest
 */

router.post('/friendRequest', function (req, res, next) {
    try {
        if (req.session.userId&&req.body.friendid) {
            let project = '';

            let friendId = req.body.friendid;
            let friendReqType = req.body.type;
            let remark = req.body.remark;
            let createTime = Date.now();

            let sqlString = `INSERT INTO friendreqdata (ID, userId, friendId, friendReqType,remark,create_time) VALUES (NULL, '${req.session.userId}','${friendId}','${friendReqType}', '${remark}','${createTime}')`;
            console.log(`'${req.session.userId}','${friendId}','${friendReqType}', '${remark}','${createTime}'`)
            let connection = db.connection();
            db.insert(connection, sqlString, project, function (err, userdata) {
                let data = userdata || [];
               
                if (err) {
                    console.log(err)
                } else if (userdata) {
                    req.session.userid = userdata;
                    let result = userdata;
                    res.json({
                        code: 200,
                        message: 'success',
                        dataMap: '已发送好友请求'
                    });

                }else{
                    console.log(err, data)
                }
                
            });
            db.close(connection);
            return;
        } else {
            res.json({
                code: 400,
                message: '请重新登陆',
                dataMap: null
            });
        }
    } catch (error) {
        res.json({
            code: 400,
            message: '网络不稳定',
            dataMap: error
        });
    }
});


/**
 * @api {post} /friend/getfriendRequest 获取好友请求
 * @apiDescription 获取好友请求
 * @apiName getfriendRequest
 * @apiGroup friends
 * @apiParam {string} friendid 好友ID
 * @apiParam {number} type 加载类型
 * @apiParam {string} remark 备注
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : 200,
 *      "message" : "好友请求已发送",
 *      "dataMap" : {}
 *  }
 * @apiSampleRequest /friend/getfriendRequest
 */

router.post('/getfriendRequest', function (req, res, next) {
    try {
        if (req.session.userId&&req.body.friendid) {
            let project = '';

            let friendId = req.body.friendid;
            let friendReqType = req.body.type;
            let remark = req.body.remark;
            let createTime = Date.now();

            let sqlString = `INSERT INTO friendreqdata (ID, userId, friendId, friendReqType,remark,create_time) VALUES (NULL, '${req.session.userId}','${friendId}','${friendReqType}', '${remark}','${createTime}')`;
            console.log(`'${req.session.userId}','${friendId}','${friendReqType}', '${remark}','${createTime}'`)
            let connection = db.connection();
            db.insert(connection, sqlString, project, function (err, userdata) {
                let data = userdata || [];
               
                if (err) {
                    console.log(err)
                } else if (userdata) {
                    req.session.userid = userdata;
                    let result = userdata;
                    res.json({
                        code: 200,
                        message: 'success',
                        dataMap: '已发送好友请求'
                    });

                }else{
                    console.log(err, data)
                }
                
            });
            db.close(connection);
            return;
        } else {
            res.json({
                code: 400,
                message: '请重新登陆',
                dataMap: null
            });
        }
    } catch (error) {
        res.json({
            code: 400,
            message: '网络不稳定',
            dataMap: error
        });
    }
});

module.exports = router;