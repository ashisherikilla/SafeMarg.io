const express = require("express")

const cors = require("cors")

require("dotenv").config()



const connectDB = require("./config/db")



const accidentRoutes = require("./routes/accidentRoutes")



const app = express()



connectDB()



app.use(cors())

app.use(express.json())



app.get("/", (req, res) => {

  res.send("SafeMarg API running")

})



app.use("/api/accidents", accidentRoutes)



const PORT = process.env.PORT || 5000



app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)
  console.log(`MongoDB URI: ${process.env.MONGO_URI}`)
  console.log("mongoDB connection status:", connectDB ? "Connected" : "Not Connected")

})