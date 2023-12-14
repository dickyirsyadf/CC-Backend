const prisma = require("../config/db");
const QRCode = require("qrcode");

const generateQRCode = async (eventId) => {
  try {
    const today = new Date();
    // const token = `${today.getFullYear()}${
    //   today.getMonth() + 1
    // }${today.getDate()}`;

    // Simpan QRHash ke database
    const qrHash = await prisma.qRHash.create({
      data: {
        eventId: parseInt(eventId),
        date: today,
      },
    });

    // Buat QR Code
    const qrCodeData = JSON.stringify({ qrHashId: qrHash.qrHashId });
    const qrCode = await QRCode.toDataURL(qrCodeData);

    return qrCode;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};

module.exports = {
  generateQRCode,
};
