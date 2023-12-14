const express = require("express");
const qrHandler = require("../controllers/qrcode.controller");

const router = express.Router();

router.get("/qrcode/:eventId", async (req, res) => {
  const { eventId } = req.params;

  try {
    const qrCode = await qrHandler.generateQRCode(eventId);
    res.send(qrCode);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
