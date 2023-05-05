const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validationToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = <req className="headers author"></req>;
    // const token = req.headers.authorization.split(' ')[1];
    // if (!token) {
    //     res.status(401);
    //     throw new Error('Not authorized, no token');
    // }
    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     req.user = await User.findById(decoded.id).select('-password');
    //     next();
    // } catch (error) {
    //     res.status(401);
    //     throw new Error('Not authorized, token failed');
    // }
});
