const express = require("express");
const router = express.Router();

const {
  home,
  about,
  contact,
  getTime,
  echoData,
  greet
} = require("../controllers/mainController");

router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);
router.get("/time", getTime);
router.post("/echo", echoData);
router.get("/greet", greet);

module.exports = router;