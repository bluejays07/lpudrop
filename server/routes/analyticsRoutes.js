const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  bloodGroupDetailsContoller, adminBloodGroupDetailsContoller
} = require("../controllers/analyticsController");


const router = express.Router();

router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsContoller);
router.get("/adminBloodGroups-data", authMiddelware, adminBloodGroupDetailsContoller);


module.exports = router;
