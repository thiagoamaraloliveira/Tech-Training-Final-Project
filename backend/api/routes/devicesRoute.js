const { Router } = require("express");
const DeviceController = require("../controllers/DeviceController");

const router = Router();

router.get("/devices", DeviceController.getAllDevices);
router.get("/devices/:id", DeviceController.getDevice);
router.post("/devices", DeviceController.createDevice);
router.put("/devices/:id", DeviceController.updateDevice);
router.delete("/devices/:id", DeviceController.deleteDevice);
router.post("/devices/:id/restore", DeviceController.restoreDevice);

module.exports = router;
