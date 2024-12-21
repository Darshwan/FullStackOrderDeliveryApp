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
        unique: false,
        sparse: true 
    },
    cart: {
        type: Object,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: false
    },
    profilePic: {
        type: String,
        default: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?t=st=1727435566~exp=1727439166~hmac=884d5516b56eb62247f5ebb2f2493baaae9e377ae3a9e7013038b77e903d341c&w=740"
    }
}, {timestamps: true}
)

const User = mongoose.model('User', userSchema)
export default User