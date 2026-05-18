import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Token not found"
            });
        }

        const tokenVerify = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // decoded user data
        req.user = tokenVerify;

        next();

    } catch (err) {
        return res.status(401).json({
            message: err.message
        });
    }
};