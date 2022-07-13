const { smscode,sendSms } = require('../utils/sms');
module.exports.smsController = async function (ctx) {
    const { mobile } =  ctx.request.body;
    // 生产指定位数的验证码
    const code = smscode(6);
    const data = await sendSms(mobile, code)
    console.log(data.SendStatusSet);
    if (data.SendStatusSet && data.SendStatusSet[0].Code !='Ok') {
        ctx.body = {
            status:'400',
            message:data.SendStatusSet[0].Message
        }
    }else {
        ctx.body = {
            status:200,
            data:'短信发送成功'
        }
    }
   

}