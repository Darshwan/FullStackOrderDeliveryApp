import { errorHandler } from "../middlewares/errorHandler.js";
import User from "../models/user-model.js";
import bcryptjs from 'bcryptjs'

const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "you are not allowed to update this user"))
  }
  if (req.body.password) {
    if (req.body.password.length < 4) {
      return next(errorHandler(400, 'Password must be at least 4 characters'));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 4 || req.body.username.length > 20) {
      return next(
        errorHandler(400, 'Username must be between 4 and 20 characters')
      );
    }
    if (req.body.username.includes(' ')) {
      return next(errorHandler(400, 'Username cannot contain spaces'));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, 'Username must be lowercase'));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, 'Username can only contain letters and numbers')
      );
    }
    // if (!req.body.phone.length !== 10) {
    //   return next(
    //     errorHandler(400, 'Phone Number is incorrect')
    //   );
    // }
  }
  console.log('Request body:', req.body);
  try {
    const updateData = {};
    if (req.body.username) updateData.username = req.body.username;
    if (req.body.email) updateData.email = req.body.email;
    if (req.body.password) updateData.password = req.body.password;
    if (req.body.phone) updateData.phone = req.body.phone;
    if (req.body.bio) updateData.bio = req.body.bio;
    if (req.body.profilePic) updateData.profilePic = req.body.profilePic;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: updateData, },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }

}

export default updateUser