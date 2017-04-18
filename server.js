const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
const PORT = 8000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./dist")))
app.use(express.static(path.join(__dirname, "./node_modules")))

// app.set("views", path.join(__dirname, "/users-app/views"))
// app.set("view engine", "ejs")

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`)
})