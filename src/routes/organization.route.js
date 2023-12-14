const express = require("express");
const organizationHandler = require("../controllers/organization.controller");

const router = express.Router();

router.post("/organizations", organizationHandler.createOrganization);
router.get("/organizations/:userId", organizationHandler.getOrganizationById);
router.get("/organizations", organizationHandler.getAllOrganizations);
router.put(
  "/organizations/:userId",
  organizationHandler.updateOrganizationById
);
router.delete(
  "/organizations/:userId",
  organizationHandler.deleteOrganizationById
);

module.exports = router;
