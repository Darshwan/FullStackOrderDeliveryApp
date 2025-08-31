import mongoose from 'mongoose'
import pizzas from "../scripts/pizzas.json" with { type: "json" };

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: {
    type: Array,
    required: true,
  },
  phoneNumber:{
    type: Number,
    required: true,
  },
  HostAddress: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending'
  },  // Other statuses could be 'In Progress', 'Completed', 'Delivered'
  paymentStatus: {
    type: String,
    default: 'Unpaid'
  },  // 'Paid' or 'Failed'
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const order = mongoose.model('order', orderSchema)
export default order