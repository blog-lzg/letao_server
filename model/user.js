const { query } = require('../db/query');

// 注册用户
module.exports.registerModel = function (username, password, mobile, smscode) {
    return query(`INSERT INTO USER (username, password,mobile,smscode) VALUES('${username}', '${password}', '${mobile}', '${smscode}')`)
}

// 查询用户
module.exports.findUserByUserName = function (username) {
    return query( `select * from user where username = '${username}'`)
}