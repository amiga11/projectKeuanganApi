import { Sequelize } from "sequelize"
import moment from 'moment-timezone'

export const databaseUser = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    define: {
        freezeTableName: true,
        timestamps: false
    },
    dialectOptions: {
        // useUTC: false
        typeCast: function (field, next) {
            if (field.type == 'DATETIME' || field.type == 'TIMESTAMP') {
                return moment(field.string()).tz('Asia/Jakarta').format()
            }
            return next();
        },
        connectTimeout: 60000
    },
    timezone: '+07:00', //for writing to database
    logging: console.log,
    pool: {
        max: 100,
        min: 0,
        acquire: 60000,
        idle: 10000
    }
})