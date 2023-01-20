require("dotenv").config()
// console.log(process.env.PORT)
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 8080
const app = express()

// connect
const connect = require("./config/db")

// cors
app.use(cors())

// express.json()
app.use(express.json())

// All Routes

// Auth Route
const authRoute = require("./routes/auth.routes");
app.use("/auth", authRoute);



app.get("/", (req, res) => {
    res.send("Home Page")
})


app.listen(PORT, async () => {
    await connect()
    console.log(`server listen http://localhost:${PORT}`)
})