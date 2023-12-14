const prisma = require("../config/db");

// Handler untuk mendapatkan semua peran (roles)
const getAllRoles = async (req, res) => {
  try {
    const roles = await prisma.role.findMany();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Handler untuk mendapatkan satu peran berdasarkan ID
const getRoleById = async (req, res) => {
  const roleId = parseInt(req.params.id);

  try {
    const role = await prisma.role.findUnique({
      where: { roleId },
    });

    if (role) {
      res.json(role);
    } else {
      res.status(404).json({ error: "Role not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Handler untuk menambahkan peran baru
const createRole = async (req, res) => {
  const { role } = req.body;

  try {
    const createdRole = await prisma.role.create({
      data: { role },
    });

    res.status(201).json(createdRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Handler untuk memperbarui peran berdasarkan ID
const updateRole = async (req, res) => {
  const roleId = parseInt(req.params.id);
  const { role } = req.body;

  try {
    const updatedRole = await prisma.role.update({
      where: { roleId },
      data: { role },
    });

    res.json(updatedRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Handler untuk menghapus peran berdasarkan ID
const deleteRole = async (req, res) => {
  const roleId = parseInt(req.params.id);

  try {
    const deletedRole = await prisma.role.delete({
      where: { roleId },
    });

    res.json(deletedRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
