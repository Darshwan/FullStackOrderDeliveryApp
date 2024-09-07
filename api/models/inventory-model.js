import mongoose from 'mongoose'

const InventorySchema = new mongoose.Schema({
    base: Number,
    sauce: Number,
    cheese: Number,
    veggies: [{ name: String, quantity: Number }]
  });
  
  const PizzaInventory = mongoose.model('PizzaInventory', InventorySchema)
  export default PizzaInventory