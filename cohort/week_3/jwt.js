const { constants } = require('buffer')
const express = require('express')
const jwt = require('jsonwebtoken')
const { constrainedMemory } = require('process')
const jwtPassword = "123456"
const mongo = require('mongoose')
const { string } = require('zod')
const app = express()

app.use(express.json())

mongo.connect(
    "mongodb+srv://mkolhe23:esWCBcBghKUG42r9@cluster0.ggnczko.mongodb.net/user_app"
)

const User = mongo.model("User", {
    name: String,
    username: String,
    password: String
})

app.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name

    const existingUser = await User.findOne({ username: username })
    if (existingUser) {
        return res.status(400).send("User already exists")
    }

    const user = new User({
        name: name,
        username: username,
        password: password
    })

    user.save()
    res.json({
        "msg": "User created successfully"
    })
})

app.get('/find', async (req, res) => {
    const username = req.body.username
    const user = await User.findOne({ username: username })
    if (!user) {
        return res.status(400).send("User not Found")
    }
    res.json({
        user
    })
})


app.put('/updateUser', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    const existingUser = User.findOne({ username: username })
    if (!existingUser) {
        return res.status(400).send("User not Found , kindly sign up")
    }
    const updateUser = {
        $set: {
            username: username,
            password: password,
            name: name
        }
    }
    const updated = await User.updateOne(existingUser, updateUser)
    res.json({
        "msg": "User updated successfully"
    })
})

app.listen(3000)
