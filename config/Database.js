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

export const databaseSimar = new Sequelize(process.env.DB_DATABASE_SIMAR, process.env.DB_USERNAME_SIMAR, process.env.DB_PASSWORD_SIMAR, {
    host: process.env.DB_HOST_SIMAR,
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


export const databaseSirs = new Sequelize(process.env.DB_DATABASE_SIRS, process.env.DB_USERNAME_SIRS, process.env.DB_PASSWORD_SIRS, {
    host: process.env.DB_HOST_SIRS,
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

export const databaseSirsDwh = new Sequelize(process.env.DB_DATABASE_SIRS_DWH, process.env.DB_USERNAME_SIRS_DWH, process.env.DB_PASSWORD_SIRS_DWH,{
    host: process.env.DB_HOST_SIRS_DWH,
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