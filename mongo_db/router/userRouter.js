import express from 'express'

import { getUsers, userRegister, userLogin, getUserStatus, logoutUser } from '../controller/userController.js'


const router = express.Router()


router.get('/get', getUsers)

router.post('/create', userRegister)

router.post('/login',userLogin)

router.get('/status', getUserStatus)
router.get('/logout', logoutUser)

export default router






