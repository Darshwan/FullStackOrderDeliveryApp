import Orders from "../models/order-model.js";
import { sendMail } from "../utils/mailer.js";

const createOrder = async (req, res) => {
    const { items, totalPrice, email,HostAddress, paymentMethod,phoneNumber,paymentStatus } = req.body;

  try {
    const order = new Orders({
      user: req.user.id,
      items,
      email,
      totalPrice,
      HostAddress,
      phoneNumber,
      paymentMethod,
      orderStatus: "Pending",
      paymentStatus,
    });
    const savedOrder = await order.save();
    const userEmail = req.user.email;
    const orderDetails = items
      .map((item) => `<li>${item.name} x ${item.quantity}</li>`)
      .join("");
    await sendMail(
      userEmail,
      "Order Confirmation",
      "Your order has been placed successfully.",
      `<h1>Thank you for your order!</h1>
            <p>Your order details:</p>
            <ul>${orderDetails}</ul>
            <p>Total Price: ${totalPrice}</p>`
    );

    res
      .status(201)
      .json({ message: "Order placed successfully", order: savedOrder });
    console.log(savedOrder);
  }  catch (error) {
    res.status(500).json({ success: false, message: "Order creation failed", error });
  }
    
  

}

 export const getOrders = async (req, res) => {
  try {
    const { userId } = req.params; // Extract userId from the URL
    console.log(userId);
    
    const orders = await Orders.find({ userId }).populate("items.pizzaId"); // Populate pizza details
    if (!orders.length) {
      return res.status(404).json({ message: "No orders found for this user" });
    }
    res.status(200).json(orders); // Send the orders as JSON
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
}

export default createOrder