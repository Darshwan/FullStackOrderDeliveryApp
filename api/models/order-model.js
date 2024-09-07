import mongoose from 'mongoose'
import User from './user-model.js';


const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: User },
    items: [ // Each item is a pizza customization
      {
        base: String,
        sauce: String,
        cheese: String,
        veggies: String
      }
    ],
    totalPrice: Number,
    status: { type: String, enum: ['Order Received', 'In Kitchen', 'Sent to Delivery'], default: 'Order Received' }
  });
  
  const OrderSchema = mongoose.model('OrderSchema', orderSchema)
export default OrderSchema