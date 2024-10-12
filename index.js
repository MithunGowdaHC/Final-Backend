require("dotenv").config()
const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("This is the root page")

})

app.get("/contact" , (req, res) => {
    res.send("This is the contact page")
})

app.listen(PORT , () => {
    console.log(`The server is running at ${PORT}`)
})