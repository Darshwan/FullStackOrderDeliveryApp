import express from 'express'
import { getPizzas } from '../controllers/pizzas.controller.js'
import { getDraftPizzas } from '../controllers/getDraftPizzas.controller.js'
import verifyToken from '../middlewares/verifyToken.js'
import {savePizza} from '../controllers/postDraftPizza.js'
import { deleteDraftPizzas } from '../controllers/deleteDraftPizzas.controller.js'

const router = express.Router()
router.get('/pizzas', getPizzas)
router.post('/savepizza', verifyToken, savePizza)
router.get("/draftpizzas/:userId", verifyToken, getDraftPizzas);
router.delete("/deletepizza/:pizzaId", verifyToken, deleteDraftPizzas);
export default router