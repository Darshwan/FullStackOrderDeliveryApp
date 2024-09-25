import mongoose from 'mongoose'

const pizzaSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Boolean,
      required: true,
    }
  });

const Pizzas = mongoose.model('Pizzas',pizzaSchema)
export default Pizzas