const {registerModel} = require('../model/user');
module.exports.registerController = async function (ctx) {
    // 获取请求post参数
    const {username, password,mobile,smscode} =  ctx.request.body;
    await registerModel(username, password,mobile,smscode);
    ctx.body = {
        status:200,
        message:'注册成功'
    }
}