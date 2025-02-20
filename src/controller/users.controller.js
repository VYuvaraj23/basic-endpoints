import USERS from "../../data/data.js";
import { findIndexByID } from "../utils/common.helper.js";

const getAllUsers = (req, res) => {
  // res.send('')
  res.status(200).send(USERS);
};

const getUserByID = (req, res) => {
  console.log(parseInt(req.params.id));
  // res.send(USERS[req.params.id -1])
  // res.send(USERS.find((user)=>user.id === +req.params.id))

  const { id } = req.params;
  const index = findIndexByID(USERS,id)
  if (index !== -1) {
    res.send(USERS[index]);
  } else {
    res.send({ message: "Invalid ID" });
  }
};

const createUser = (req, res) => {
  console.log(req.body);

  const id = USERS.length ? USERS[USERS.length - 1].id + 1 : 1;
  USERS.push({ id, ...req.body });
  res.send({ message: "user created successfully" });
};

const editUserByID = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;


  const index = findIndexByID(USERS,id)

  if (index !== -1) {
    USERS.splice(index, 1, { id, name, email });
    res.send("alter the user data successfully");
  } else {
    res.send({ message: "Invalid ID" });
  }
};

const deleteByID = (req, res) => {
  const { id } = req.params;

  const index = findIndexByID(USERS,id)

  if (index !== -1) {
    USERS.splice(index, 1);
    res.send("delete the user data successfully");
  } else {
    res.send({ message: "Invalid ID" });
  }
};

export { getAllUsers, getUserByID, editUserByID, createUser, deleteByID };
