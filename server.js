const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
    // const session = require("express-session")

const PORT = 8000
    // let secret = 'ThisIsASecretKey' // string for encryption

var app = express();
// app.use(session({ secret: secret }));

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