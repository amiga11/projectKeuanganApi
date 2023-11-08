import {  getKkt, getKpapd, getKpfn, getKwt, getKwv } from '../models/InmRsModel.js'
import paginationDB from '../config/PaginationDB.js'
import Joi from 'joi'

export const getKktRs= (req, res) => {
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
    
    getKkt(req, (err, results) => {
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

export const getKpapdtRs= (req, res) => {
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
    
    getKpapd(req, (err, results) => {
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

export const getKwvtRs= (req, res) => {
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
    
    getKwv(req, (err, results) => {
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

export const getKpfntRs= (req, res) => {
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
    
    getKpfn(req, (err, results) => {
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

export const getKwtRs= (req, res) => {
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
    
    getKwt(req, (err, results) => {
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