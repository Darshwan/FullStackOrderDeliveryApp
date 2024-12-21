import express from 'express'
import createOrder, { getOrders } from '../controllers/order.controller.js'
import verifyToken from '../middlewares/verifyToken.js'

const orderrouter = express.Router()
orderrouter.post('/createorder/:userId', verifyToken, createOrder)
orderrouter.get('/getorders/:userId', verifyToken, getOrders);

export default orderrouter