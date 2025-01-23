const express = require("express")

const app = express()

app.listen(3001, () => {
    console.log("Server is running")
    console.log("https://localhost:3001")
})