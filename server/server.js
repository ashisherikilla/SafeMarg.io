const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")
const accidentRoutes = require("./routes/accidentRoutes")

const app = express()

/* connect database */
connectDB()

/* middlewares */
app.use(cors({
  origin: "*"
}))

app.use(express.json())

/* test route */
app.get("/", (req, res) => {
  res.send("SafeMarg API running")
})

/* routes */
app.use("/api/accidents", accidentRoutes)

/* start server */
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
