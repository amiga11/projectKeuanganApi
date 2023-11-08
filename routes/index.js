import express from 'express'
import { login } from '../controllers/UserController.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import {  getKktRs, getKpapdtRs, getKpfntRs, getKwtRs, getKwvtRs } from '../controllers/InmRsController.js'
import { getSirsDua, getSirsSatu } from '../controllers/SirsController.js'

const router = express.Router()

// Token
router.post('/layanan/login', login)

// INM RS
router.get('/layanan/kkt-rs', getKktRs)
router.get('/layanan/kpapd-rs', getKpapdtRs)
router.get('/layanan/kwvt-rs', getKwvtRs)
router.get('/layanan/kpfnt-rs', getKpfntRs)
router.get('/layanan/kwt-rs', getKwtRs)

//SIRS
router.get('/layanan/sirs-satu', getSirsSatu)
router.get('/layanan/sirs-dua', getSirsDua)



export default router