const mysql = require('mysql');
const { config } = require('./config');
// 创建连接池对象
const pool = mysql.createPool(config)


module.exports.query = function (sql) {
    return new Promise(function (resolve, reject) {
        // 连接数据库
        pool.getConnection(function (err, connect) {
            if (err) reject(err)
            connect.query(sql, function (err, result) {
                // 释放当前连接
                connect.release()
                if (err) reject(err)
                resolve(result);
            });
        })
    });
}