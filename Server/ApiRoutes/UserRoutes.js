const express = require("express");

const UserCtrl = require("../RouteController/UserController");

const router = express.Router();

router.post("/users", UserCtrl.createUser);
router.put("/users/:email", UserCtrl.updateUser);
router.delete("/users/:id", UserCtrl.deleteUser);
router.get("/users/:id", UserCtrl.getUserById);
router.get("/users", UserCtrl.getUsers);
router.get("/export", UserCtrl.exportData);

module.exports = router;
