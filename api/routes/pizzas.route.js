import express from 'express'
import { getPizzas } from '../controllers/pizzas.controller.js'

const router = express.Router()
router.get('/pizzas', getPizzas)
export default router