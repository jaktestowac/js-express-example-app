const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 3001

const jsonParser = bodyParser.json()

const users = [{ id: 1, name: "Dale", surname: "Cooper" }]

app.get("/", (req, res) => {
    console.log("> Calling / with GET method...")
    res.send({ msg: "Hello world from jaktestowac.pl!" })
})

app.get("/users", (req, res) => {
    console.log("> Calling /users with GET method...")
    res.json(users)
})

app.post("/users", jsonParser, (req, res) => {
    console.log("> Calling /users with POST method...")
    const user = req.body

    console.log("Adding new user:", user)
    user.id = users.length + 1
    users.push(user)

    res.status(201).send(user)
})

app.listen(port, () => {
    console.log(`🎉 Application Started at ${port}`)
})
