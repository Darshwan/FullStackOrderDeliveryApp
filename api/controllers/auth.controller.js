/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import User from "../models/user-model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    console.log(req.body)

    const { username, email, password } = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ username })
    if (!user) {
        const hashedPassword = await bcryptjs.hash(password, 10)
        const newUser = new User({ username, email, password: hashedPassword });
        try {
            await newUser.save();
            res.json('Signup Successfull')
            console.log(req.body);
        } catch (error) {
            console.log(error);
        }
    }else{
        return res.status(400).json({message: "User already exists"})
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password || username === '' || password === '') {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
    try {
        const validUser = await User.findOne({ username });
        if (!validUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const passwordValid = bcryptjs.compareSync(password, validUser.password);
        if (!passwordValid) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
            expiresIn: '24h', // Token expires in 24 hour
        });
        const { password: pass, ...rest } = validUser._doc;
        res.cookie('access_token', token, {
            httpOnly: true,
            secure: false,
        });
        console.log("Token is: ", token);
        res.status(200).json({
            success: true,
            message: 'Login successful',
            token: token,
            user: rest  
        });
        console.log(rest)
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}