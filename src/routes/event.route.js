const express = require("express");
const eventHandler = require("../controllers/event.controller");
const router = express.Router();

router.get("/events", eventHandler.getAllEvents);
router.get("/events/:id", eventHandler.getEventById);
router.post("/events", eventHandler.createEvent);
router.put("/events/:id", eventHandler.updateEventById);
router.delete("/events/:id", eventHandler.deleteEventById);

module.exports = router;
