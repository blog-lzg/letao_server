const crypto = require('crypto');

// 根据密码加密
module.exports.cryptoPassword = function (password) {
    return crypto.createHash('MD5').update(password).digest('hex')
}