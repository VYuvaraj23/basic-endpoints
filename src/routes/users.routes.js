import express from "express";
import {
  createUser,
  deleteByID,
  editUserByID,
  getAllUsers,
  getUserByID,
} from "../controller/users.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserByID);
router.post("/", createUser);
router.put("/:id", editUserByID);
router.delete("/:id", deleteByID);

export default router;
