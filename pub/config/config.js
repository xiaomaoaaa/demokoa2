/**
 * 配置文件
 */
//发布配置
const production = {

    //服务器端口
    SERVER_PORT : 8080,

    //REDIS配置
    REDIS: {
        host: 'localhost',            
        port: 6379,
        password: "abcd",
        maxAge: 3600000
    },

    //MYSQL数据库配置
    MYSQL: {
        host: "localhost",
        user: "root",
        password: "",
        port: "3306",
        database: "nodesample",
        supportBigNumbers: true,
        multipleStatements: true,
        timezone: 'utc'
    }

}

//开发配置
const development = {

    //服务器端口
    SERVER_PORT : 8012,

    //REDIS配置
    REDIS: {
        host: 'localhost',            
        port: 6379,
        password: "abcd",
        maxAge: 3600000
    },

    //MYSQL数据库配置
    MYSQL: {
        host: "localhost",
        user: "root",
        password: "",
        port: "3306",
        database: "nodesample",
        supportBigNumbers: true,
        multipleStatements: true,
        timezone: 'utc'
    }

}

const config = production

module.exports = config