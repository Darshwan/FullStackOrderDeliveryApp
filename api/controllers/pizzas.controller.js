
import Pizzas from '../models/pizza-model.js';

export const getPizzas = async (req, res) => {
    try {
        const pizzas = await Pizzas.find();
        res.json(pizzas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}