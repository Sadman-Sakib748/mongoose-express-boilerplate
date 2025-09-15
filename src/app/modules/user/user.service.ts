import { IUser, Role } from "./user.interface";
import { User } from "./user.model";

// ✅ নতুন user create করা
const createUser = (payload: Partial<IUser>) => {
  // যদি role না দেওয়া হয়, default USER থাকবে
  if (!payload.role) payload.role = Role.USER;
  return User.create(payload);
};

// ✅ এক জন user get করা ID দ্বারা
const getUserById = async (id: string) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

// ✅ সব user get করা
const getAllUser = async () => {
  const users = await User.find({});
  const totalUser = await User.countDocuments();
  return { data: users, meta: { total: totalUser } };
};

// ✅ user update করা (Admin বানানোও possible)
const updateUser = async (userId: string, payload: Partial<IUser>) => {
  // যদি role path করা হয় যেমন: "ADMIN" তাহলে সে admin হবে
  return User.findByIdAndUpdate(userId, payload, { new: true });
};

// ✅ user delete করা
const deleteUser = async (userId: string) => {
  await User.findByIdAndDelete(userId);
  return true;
};

export const serviceUser = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};
