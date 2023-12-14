const prisma = require("../config/db");

// Handler untuk membuat Category baru
const createCategory = async (req, res) => {
  const { category } = req.body;

  try {
    const newCategory = await prisma.category.create({
      data: {
        category,
      },
    });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Handler untuk mendapatkan semua Categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Handler untuk mendapatkan Category berdasarkan ID
const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: { categoryId: parseInt(id) },
    });

    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Handler untuk memperbarui Category berdasarkan ID
const updateCategoryById = async (req, res) => {
  const { id } = req.params;
  const { category } = req.body;

  try {
    const updatedCategory = await prisma.category.update({
      where: { categoryId: parseInt(id) },
      data: {
        category,
      },
    });

    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Handler untuk menghapus Category berdasarkan ID
const deleteCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.category.delete({
      where: { categoryId: parseInt(id) },
    });

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
