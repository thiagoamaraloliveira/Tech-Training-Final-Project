const { Router } = require("express");
const DeviceController = require("../controllers/DeviceController");

const router = Router();

router.get("/devices", DeviceController.getAllDevices);
router.get("/devices/:id", DeviceController.getDevice);
router.post("/devices", DeviceController.createDevice);

module.exports = router;
