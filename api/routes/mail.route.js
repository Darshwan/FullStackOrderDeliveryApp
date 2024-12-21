import { sendMail } from "../utils/mailer.js";

const placeOrder = async (req, res, next) => {
  try {
    const { user, items, totalPrice, phoneNumber, HostAddress } = req.body;

    const newOrder = new Order({
      user,
      items,
      totalPrice,
      phoneNumber,
      HostAddress,
      status: "Pending",
      paymentStatus: "Unpaid",
    });

    const savedOrder = await newOrder.save();

    // Send confirmation email
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
  } catch (error) {
    next(error);
  }
};
