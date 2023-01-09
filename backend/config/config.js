const { Db } = require("mongodb");

const Config = {
    SMTP : {
        HOST:"smtp.mailtrap.io",
        PORT: 465,
        USER:"6cafe3897ecf56",
        PASS:"382db4d4b55b76",
        FROM:"noreplay@test.com",
        TLS:false
    },
    DB :{
        PROTOCOL : "mongodb",
        HOST : '127.0.0.1',
        NAME : "User",
        USER : "",
        PwD  : "",
        PORT : 27017 
    },
    ENVIRONMENT : 'dev',
    JWT_SECRET: "lkasjfiesadjf"
}

module.exports = Config;