const express = require("express")

const router = express.Router()



const {

  getAccidents,

  createAccident,
  updateAccident,
  deleteAccident


} = require("../controllers/accidentController")



router.get("/", getAccidents)



router.post("/", createAccident)

router.put("/:id", updateAccident)

router.delete("/:id", deleteAccident)



module.exports = router