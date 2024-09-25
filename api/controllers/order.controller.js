import orders from "../models/order-model.js";

const createOrder = async (req, res) => {
    const { items, totalPrice, HostAddress,phoneNumber } = req.body;

  try {
    const order = new orders({
      user: req.user.id,
      items,
      totalPrice,
      HostAddress,
      phoneNumber,
      status: 'Pending',
    });
    const savedOrder = await order.save();
    
    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: savedOrder,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Order creation failed", error });
  }

}

export default createOrder