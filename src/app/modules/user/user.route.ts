import { Router } from "express";
import { userController } from "./user.controller";

const router = Router()
// POST - Create user
router.post("/register", userController.createUser);

// GET - Get all users
router.get("/all-users", userController.getAllUsers);

// GET - Get single user by ID (dynamic route last)
router.get("/:id", userController.getUserController);

// PUT/PATCH - Update user
router.put("/:id", userController.updateUserController);
router.patch("/:id", userController.updateUserController);

// DELETE - Delete user
router.delete("/:id", userController.deleteUserController);

export const userRoute = router