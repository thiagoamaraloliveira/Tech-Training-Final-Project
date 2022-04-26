const { Router } = require("express");
const AuthController = require("../controllers/AuthController");


const router = Router();

router.post("/signin", AuthController.signin);


module.exports = router;
