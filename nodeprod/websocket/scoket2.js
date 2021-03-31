//这是运行在node.js上的
const websoc2 = function () {
    let db = require('../database/dbConfig');
    const WebSocket = require('ws');
    const wss = new WebSocket.Server({
        port: 11001,
        verifyClient: yan//验证要不要给连接
    })
    function yan(info) {
        let url = info.req.url
        // let i = url.search(6);
        // if (i<0){
        //     console.log('拒绝连接');
        //     return false;
        // }
        console.log('通过连接' + url);
        return true;
    }
    let user = {};//存储连接用户
    let online = 0;//存储在线人数
    wss.on('connection', function (ws, req) {
        online = wss._server._connections;
        console.log('当前在线' + online + '个连接');
        ws.onmessage()
        let i = req.url;//提取网址参数
        let m = i.match(/(?<=\?)[^:]+?(?=:|$)/);    //提取我是谁,这部分代码只有第一次连接的时候运行,如果后面连接的m值相同,前面的连接会被覆盖身份;
        if (m) {
            user[m] = ws;
        };

        let u = i.match(/(?<=:).+?$/);    //提取发给谁
        console.log(u, m[0]);
        ws.on('message', function (msg) {
            console.log('收到' + m[0] + '发给' + u + '的消息：' + msg);
            // ws.send(req.headers['sec-websocket-key'])
            // ws.send(req.url)
            if (u) {
                if (user[u]) {
                    if (user[u].readyState === 1) {
                        user[u].send(msg);
                        ws.send('发送成功');
                    } else {
                        ws.send('对方掉线');
                    }
                } else {
                    ws.send('找不到对象');
                }
            } else {//广播
                wss.clients.forEach(function each(client) {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(msg);
                    }
                });
            }
            if (online != wss._server._connections) {
                online = wss._server._connections;
                ws.send('当前在线' + online + '个连接');
            }
            // ws.send(req.headers.origin)
            // ws.send(JSON.stringify(Array.from(wss.clients)))
            // ws.send(JSON.stringify(ws))
            // ws.send(JSON.stringify(req))        
        })
    })
}

function select() {
    var selectSql1 = "select * from spc_word_mst where WORD_ID=? limit 0,1 "
    var selectSql2 = "select * from spc_baitai_mst where BAITAI_ID=? limit 0,1"
    //SPC_Result_JH
    var key1 = '001';
    var key2 = '001';
    var sync1 = true;
    var sync2 = true;
    conn.query(selectSql1, [key1], function (error, rows) {
        if (error) console.log(error)
        row1 = rows;
        sync1 = false;
    });
    while (sync1) { deasync.sleep(400); }
    conn.query(selectSql2, [key2], function (error1, rows) {
        if (error1) console.log(error1)
        row2 = rows;
        sync2 = false;

    });
    while (sync2) { deasync.sleep(400); }
    return row1;
    return row2;
}
module.exports = websoc2;