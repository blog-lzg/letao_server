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