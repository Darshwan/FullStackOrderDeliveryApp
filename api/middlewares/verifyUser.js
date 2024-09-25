/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'
import User from '../models/user-model.js';

export const verifyToken = (req, res, next) => {
    // Check for token in cookies or Authorization header
    const token = req.cookies.access_token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return next(errorHandler(401, "Unauthorized, There is not any JWT provided"));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return next(errorHandler(401, "Unauthorized, JWT has expired"));
            }
            if (err.name === 'JsonWebTokenError') {
                return next(errorHandler(401, "Unauthorized, JWT is invalid"));
            }
            return next(errorHandler(401, "Unauthorized, JWT verification failed"));
        }

        req.user = user;
        next();
    });
};