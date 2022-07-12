const { query } = require('../db/query');
module.exports.registerModel = function (username, password, mobile, smscode) {
    return query(`INSERT INTO USER (username, password,mobile,smscode) VALUES('${username}', '${password}', '${mobile}', '${smscode}')`)
}