const config = require("./package.json").projectConfig;

module.exports = {
    mongoConfig : {
        connectionUrl : config.mongoConnectionUrl,
        database: "WarungKeboen_db",
        collection:{
            USERS: "users",
            CATEGORIES: 'categories',
            CARTS: "carts",
            PRODUCTS: "products",
            BOOKMARKS: "bookmarks",
        },
    },
    serverConfig: {
        ip: config.serverIp,
        port: config.serverPort,
    },
    tokenSecret: "WarungKeboen_secret"
};