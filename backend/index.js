const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000

app.get("/api/users", (req, res) => {
    const users  = [ 
        {
            name : "user1",
            age : 21,
            id : 1
        },
        {
            name : "user2",
            age : 21,
            id : 2
        }
    ]
    res.send(users)
})

app.listen(PORT , () => {
    console.log("the server is ready")
})

