const express = require("express")
const route = express.Router()


const{imageUpload} = require("../controllers/fileUpload")

route.post("/upload",imageUpload)

module.exports = route;