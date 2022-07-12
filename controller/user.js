const { registerModel, findUserByUserName } = require('../model/user');
const Joi = require('joi');
module.exports.registerController = async function (ctx) {
    // 获取请求post参数
    const { username, password, mobile, smscode } = ctx.request.body;

    const schema = Joi.object({
        username: Joi.string().min(6).max(20).required(),  // 用户名是字符串类型的必传最小长度3位最大长度20位
        password: Joi.string().pattern(/^[a-zA-Z0-9]{6,30}$/),
        repeat_password: Joi.ref('password'),  // 判断密码 和再次输入密码是否一
        mobile: Joi.string().pattern(/^1[3-9]\d{9}$/) // 校验手机号
    })

    const result = schema.validate({ username, password, mobile });
    // 校验参数
    if (result.error) {
        ctx.body = {
            status: 400,
            data: result.error.details[0].message
        }
        return
    }

    // 判断用户是否已注册
    const user = await findUserByUserName(username)

    // 注册过
    if (user[0]) {
        ctx.body = {
            status: 400,
            message: '当前用户已注册'
        }
    } else {
        await registerModel(username, password, mobile, smscode);
        ctx.body = {
            status: 200,
            message: '注册成功'
        }
    }

}