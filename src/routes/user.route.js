const express = require("express");
const userHandler = require("../controllers/user.controller");

const router = express.Router();

router.get("/users", userHandler.getAllUsers);
router.get("/users/:id", userHandler.getUserById);
router.post("/users", userHandler.createUser);
router.put("/users/:id", userHandler.updateUserById);
router.delete("/users/:id", userHandler.deleteUserById);

module.exports = router;
