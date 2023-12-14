const express = require("express");
const router = express.Router();
const roleHandler = require("../controllers/role.controller");

router.get("/roles", roleHandler.getAllRoles);
router.get("/roles/:id", roleHandler.getRoleById);
router.post("/roles", roleHandler.createRole);
router.put("/roles/:id", roleHandler.updateRole);
router.delete("/roles/:id", roleHandler.deleteRole);

module.exports = router;
