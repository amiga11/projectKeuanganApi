import express from 'express'
import { login } from '../controllers/UserController.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import {  getKktRs, getKpapdtRs, getKpfntRs, getKwtRs, getKwvtRs, getScEmergency } from '../controllers/InmRsController.js'
import { getSirsDua, getSirsSatu, getSirsTiga } from '../controllers/SirsController.js'
import { getSirsPersalinan } from '../controllers/SirsDWHController.js'

const router = express.Router()

// Token
router.post('/layanan/login', login)

// INM RS
router.get('/layanan/kkt-rs', verifyToken, getKktRs)
router.get('/layanan/kpapd-rs', verifyToken,getKpapdtRs)
router.get('/layanan/kwvt-rs',verifyToken, getKwvtRs)
router.get('/layanan/kpfnt-rs',verifyToken, getKpfntRs)
router.get('/layanan/kwt-rs',verifyToken, getKwtRs)
router.get('/layanan/sc-emergency',verifyToken, getScEmergency)

//SIRS
router.get('/layanan/sirs-satu',verifyToken, getSirsSatu)
router.get('/layanan/sirs-dua',verifyToken, getSirsDua)
router.get('/layanan/sirs-tiga',verifyToken, getSirsTiga)

//SIRS DWH
router.get('/layanan/persalinan', verifyToken,getSirsPersalinan)



export default router