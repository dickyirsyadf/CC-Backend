const express = require("express");
const router = express.Router();

const userRoutes = require("./user.route");
const eventRoutes = require("./event.route");
const authRoutes = require("./auth.route");
const organizationRoutes = require("./organization.route");
const categoryRoutes = require("./category.route");
const qrcodeRoutes = require("./qrcode.route");
const roleRoutes = require("./role.route");

router.use(userRoutes);
router.use(eventRoutes);
router.use(authRoutes);
router.use(organizationRoutes);
router.use(categoryRoutes);
router.use(qrcodeRoutes);
router.use(roleRoutes);

module.exports = router;
