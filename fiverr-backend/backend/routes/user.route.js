// eslint-disable-next-line no-undef
const express = require("express");
const deleteUser = require("../controller/user.controller.js");
const router = express.Router();
const verifyToken = require("../middleware/jwt.js");

router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
