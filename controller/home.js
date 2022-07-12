module.exports.gridlistController =  function (ctx) {
    ctx.body = {
        status:200,
        gridlist:[
            {
                id: 1,
                img_src: "/static/images/nav1.png"
            },
            {
                id: 2,
                img_src: "/static/images/nav2.png"
            },
            {
                id: 3,
                img_src: "/static/images/nav3.png"
            },
            {
                id: 4,
                img_src: "/static/images/nav4.png"
            },
            {
                id: 5,
                img_src: "/static/images/nav5.png"
            },
            {
                id: 6,
                img_src: "/static/images/nav6.png"
            }
        ]
    }
}

module.exports.sportsController = function (ctx) {
    ctx.body = {
        status:200,
        sports: [
            {
                name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 888.00
            },
            {
                name: 'FORUM 84 LOW 新款低帮经典运动鞋',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 899.00
            },
            {
                name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 888.00
            },
            {
                name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 888.00
            }
        ]
    }
}

module.exports.bannersController = function (ctx) {
    ctx.body = {
        status:200,
        swipeList: [
            {
                id: 1,
                img_src: "/images/banner1.png",
            },
            {
                id: 2,
                img_src: "/images/banner2.png",
            },
            {
                id: 3,
                img_src: "/images/banner3.png",
            },
            {
                id: 4,
                img_src: "/images/banner4.png",
            },
            {
                id: 5,
                img_src: "/images/banner5.png",
            },
        ]
    }
}