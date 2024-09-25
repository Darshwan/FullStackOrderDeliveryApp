import express from 'express'
import verifyToken from '../middlewares/verifyToken.js'
import updateUser from '../controllers/update.controller.js'

const router = express.Router()

router.put('/update/:userId', verifyToken, updateUser)

export default router