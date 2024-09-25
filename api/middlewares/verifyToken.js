/* eslint-disable no-undef */
import jwt from 'jsonwebtoken'
import { errorHandler } from './errorHandler.js';

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) {
        return next(errorHandler(401, 'UN AUTHORIZED'))
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            console.log(err);
            return (next(errorHandler(401, 'unauthorized')));
        }
        req.user = user;
        next()
    })
}

export default verifyToken