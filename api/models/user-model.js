import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: false,
    },
    cart: {
        type: Object,
        required: false,
    },
    bio: {
        type: String,
        required: false
    }
}, {timestamps: true}
)

const User = mongoose.model('User', userSchema)
export default User