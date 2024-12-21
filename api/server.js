/* eslint-disable no-undef */
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js'
import pizzaRoutes from './routes/pizzas.routes.js'
import userRoutes from './routes/user.route.js'
import orderRoutes from './routes/order.routes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB connection successfull");
}).catch((error)=> {
    console.log(error);
})

const app = express()
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173', 
}));
app.listen(3000, ()=>{
    console.log("Server is running  on port: 3000");
})
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/products', pizzaRoutes)
app.use('/api/user', userRoutes)
app.use('/api/order', orderRoutes)
app.use((error, req, res, next)=>{
    const statusCode = error.StatusCode || 500;
    const message = error.message || "Internal server error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
