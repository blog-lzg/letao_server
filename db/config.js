// module.exports.config = {
//     dev: {
//         connectionLimit: 10,
//         host: 'localhost',
//         user: 'root',
//         password: 'lzg123',
//         database: 'lettao'
//     },
//     uat: {
//         connectionLimit: 20,
//         host: 'vips968.com',
//         user: 'root',
//         password: 'lzg123',
//         database: 'lettao'
//     },
//     pro: {
//         connectionLimit: 10,
//         host: 'vips968.com',
//         user: 'root',
//         password: 'lzg123',
//         database: 'lettao'
//     }
// }


const config = {
    // 开发环境的数据库配置
    dev: {
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'lzg123',
        database: 'letao'
    },
    // 测试环境的数据库配置
    uat: {
        connectionLimit: 20,
        host: 'uat.com',
        user: 'root',
        password: 'lzg123',
        database: 'letao'
    },
    // 生产境的数据库配置
    pro: {
        connectionLimit: 10,
        host: 'vips968.com',
        user: 'root',
        password: 'lzg123',
        database: 'letao'
    }
}[process.env.DB_ENV]


module.exports.config = config;
