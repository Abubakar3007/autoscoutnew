import express from "express";
const router = express.Router();
import { emailVerification, login, register, resetPassword, profile } from "../controller/auth.controller.js"

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/verify-email", emailVerification);
router.post("/auth/reset-password", resetPassword);
router.get("/auth/profile", profile);

export default router;