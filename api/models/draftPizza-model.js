import mongoose, { model } from "mongoose";

const draftPizzaSchema = new mongoose.Schema({
    idOfUser: {
        type: String,
        required: true
    },
    items:{
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    privacy: {
        type: String,
        required: true,
    }
})

const draftPizzas = mongoose.model('draftPizzas', draftPizzaSchema)
export default draftPizzas