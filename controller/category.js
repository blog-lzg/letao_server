const {categoryModel,TwocategoryModel} = require('../model/category');
module.exports.categoryController = async function (ctx) {
    // Controller控制model
    const data = await categoryModel();
    ctx.body = {
        staus:200,
        data
    };
}
module.exports.TwoCategoryController = async function (ctx) {
    const { id } = ctx.request.query;
    // Controller控制model
    const data = await TwocategoryModel(id);
    ctx.body = {
        staus:200,
        data
    };
}