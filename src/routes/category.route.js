const express = require("express");
const categoryHandler = require("../controllers/category.controller");

const router = express.Router();

router.post("/categories", categoryHandler.createCategory);
router.get("/categories", categoryHandler.getAllCategories);
router.get("/categories/:id", categoryHandler.getCategoryById);
router.put("/categories/:id", categoryHandler.updateCategoryById);
router.delete("/categories/:id", categoryHandler.deleteCategoryById);

module.exports = router;
