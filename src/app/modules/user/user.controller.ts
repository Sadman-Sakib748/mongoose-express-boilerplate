import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { serviceUser } from "./user.service";

// POST - Create user
const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = await serviceUser.createUser(req.body);
  sendResponse(res, {
    success: true,
    statuscode: StatusCodes.OK,
    message: "User Created Successfully!",
    data: user,
  });
});

// GET - Get all users
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceUser.getAllUser();
  sendResponse(res, {
    success: true,
    statuscode: StatusCodes.OK,
    message: "All Users Retrieved Successfully",
    meta: result.meta,
    data: result.data,
  });
});

// GET - Get single user by ID
const getUserController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await serviceUser.getUserById(id);
  sendResponse(res, {
    success: true,
    statuscode: StatusCodes.OK,
    message: "User Retrieved Successfully",
    data: user,
  });
});

// PUT/PATCH - Update user
const updateUserController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedUser = await serviceUser.updateUser(id, req.body);
  sendResponse(res, {
    success: true,
    statuscode: StatusCodes.OK,
    message: "User Updated Successfully",
    data: updatedUser,
  });
});

// DELETE - Delete user
const deleteUserController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await serviceUser.deleteUser(id);
  sendResponse(res, {
    success: true,
    statuscode: StatusCodes.OK,
    message: "User Deleted Successfully",
    data: null,
  });
});

export const userController = {
  createUser,
  getAllUsers,
  getUserController,
  updateUserController,
  deleteUserController,
};
