const {query} = require('../db/query');

// 一级分类
module.exports.categoryModel = function () {
    return query('select * from category')
}

// 二级分类
module.exports.TwocategoryModel = function (cid) {
    return query(`select * from brand where categoryId = ${cid}`)
}