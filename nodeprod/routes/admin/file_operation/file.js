let express = require('express');
let router = express.Router();
let db = require('../../../database/dbConfig');



// 同步读取 readFileSync
// const fs = require("fs");
// try {
//    const file = "新建文本.txt"
//     // 检查文件是否存在于当前目录中、以及是否可写。
//     fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
//         if (err) {
//             console.error(`${file} ${err.code === 'ENOENT' ? '不存在' : '只可读'}`);
//         } else {
//             console.log(`${file} 存在，且可写`);
//         }
//     });
//     //创建文件
//     fs.open('文件2.txt', 'wx', (err, fd) => {
//         if (err) {
//           if (err.code === 'EEXIST') {
//             console.error('文件已存在');
//             return;
//           }
//           if (err.code === 'ENOENT') {
//             console.error('文件不存在');
//             return;
//           }
//           throw err;
//         }
//         console.log(fd)
//     });
//     //数据追加
//     let str = '追加的数据+'; 
//     fs.appendFile('文件2.txt',str, (err) => {
//         if (err) throw err;
//         console.log('数据已被追加到文件');
//     });
// } catch (err) {
//     console.error("不可访问");
// }
// let buf = fs.readFileSync("新建文本.txt");
// let data = fs.readFileSync("新建文本.txt", "utf8");

// 
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


module.exports = router;