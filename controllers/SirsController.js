import paginationDB from '../config/PaginationDB.js'
import Joi from 'joi'
import { getBulanan, getTahunan } from '../models/SirsModel.js'

export const getSirsDua= (req, res) => {
    const schema = Joi.object({
        kode: Joi.string().allow(''),
        namaRS: Joi.string().allow('').allow(null),
        tahun: Joi.number().allow('').allow(null),
        page: Joi.number(),
        limit: Joi.number()
    })

    const { error, value } =  schema.validate(req.query)

    if (error) {
        res.status(400).send({
            status: false,
            message: error.details[0].message
        })
        return
    }
    // console.log(req.query)
    
    getTahunan(req, (err, results) => {
        if (err) {
            res.status(422).send({
                status: false,
                message: err
            })
            return
        }

        const paginationDBObject = new paginationDB(results.totalRowCount, results.page, results.limit, results.data)
        const remarkPagination = paginationDBObject.getRemarkPagination()
        const message = results.data.length ? 'data found' : 'data not found'

        res.status(200).send({
            status: true,
            message: message,
            pagination: remarkPagination,
            data: results.data
        })
    })
}


export const getSirsSatu= (req, res) => {
    const schema = Joi.object({
        kode: Joi.string().allow(''),
        namaRS: Joi.string().allow('').allow(null),
        bulan: Joi.number().allow('').allow(null),
        tahun: Joi.number().allow('').allow(null),
        page: Joi.number(),
        limit: Joi.number()
    })

    const { error, value } =  schema.validate(req.query)

    if (error) {
        res.status(400).send({
            status: false,
            message: error.details[0].message
        })
        return
    }
    // console.log(req.query)
    
    getBulanan(req, (err, results) => {
        if (err) {
            res.status(422).send({
                status: false,
                message: err
            })
            return
        }

        const paginationDBObject = new paginationDB(results.totalRowCount, results.page, results.limit, results.data)
        const remarkPagination = paginationDBObject.getRemarkPagination()
        const message = results.data.length ? 'data found' : 'data not found'

        res.status(200).send({
            status: true,
            message: message,
            pagination: remarkPagination,
            data: results.data
        })
    })
}
