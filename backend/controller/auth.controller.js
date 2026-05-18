import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const BACKEND_PORT = 'https://localhost:5000'

// register
export const register = async (req, res) => {
    try {
        const { name, email, phone, country, city, state, zip, address, username, password } = req.body;

        console.log(name, email)

        if (!name || !email || !phone || !country || !city || !state || !zip || !address || !username || !password) {
            return res.status(400).json({ message: "Please fill all required information" })
        }

        const findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(400).json({
                message: "User already registered"
            })
        }

        const user = new User({ name, email, phone, country, city, state, zip, address, username, password });
        await user.save();

        return res.status(200).json({
            message: "User created successfully"
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: "Please fill all required information" })
        }

        const findUser = await User.findOne({ email }).select("+password");
        if (!findUser) {
            return res.json({
                message: "User not found"
            })
        }

        // compare password
        const verifyPassword = await bcrypt.compare(password, findUser.password);
        if (!verifyPassword) {
            return res.json({
                message: "Password not match"
            })
        }

        // create session
        const token = jwt.sign(
            { id: findUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.status(201).json(
            {
                token: token,
                user: {
                    id: findUser._id,
                    name: findUser.name,
                    email: findUser.email
                },
                message: "User successfully login"
            }
        )

    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// email verification
export const emailVerification = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            res.status(400).json({
                message: "Email is required"
            })
        }

        const findUser = await User.findOne({ email });

        if (!findUser) {
            res.status(400).json({
                message: "User not found"
            })
        };

        const token = jwt.sign(
            { user: findUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        const verifyLink = `${BACKEND_PORT}/verify-email/${token}`;

        return res.status(200).json({
            message: "Verification link generated successfully",
            verifyLink
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// password reset
export const resetPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const { token } = req.params;

        if (!password) {
            res.status(400).json({
                message: "All fields required"
            })
        }

        // user jisne request ki hai uska token aur hmara token both are same
        const isTokenVerified = jwt.verify(token, process.env.JWT_SECRET);

        const userPassword = await bcrypt.hash(password, 10);

        const updatedUser = await User.findByIdAndUpdate(
            isTokenVerified.id,
            { password: userPassword },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "Password reset successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// profile
export const profile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        console.log(token)

        if (!token) {
            return res.status(401).json({
                message: "No token provided"
            });
        }

        const decoded = jwt.verify(token, process.anv.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        });
        console.log(err)
    }
}