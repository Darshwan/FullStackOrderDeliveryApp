import express from 'express'
import createOrder from '../controllers/order.controller.js'
import verifyToken from '../middlewares/verifyToken.js'


const orderrouter = express.Router()
orderrouter.post('/createorder/:userId', verifyToken, createOrder)

export default orderrouter