const express = require('express')
const router = express.Router()
const zod = require('./zod')
const jwt = require('jsonwebtoken')
const { User, Account } = require('../db')
const JWT_SECRET = require('./config')
const { authMiddleware } = require('./middleware')

app.post('/signup', async (req, res) => {
    const body = req.body
    const { success } = zod.User.safeParse(body)
    if (!success) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const user = User.findOne({
        username: body.username
    })
    if (user._id) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const dbUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })

    const userId = dbUser._id

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)

    res.json({
        message: "User created successfully",
        token: token
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = User.findOne({
        username: username,
        password: password
    })
    if (!user) {
        return res.json({
            message: "Error while logging in"
        })
    }
    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET)
    res.json({
        token: token
    })
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
})

app.put('/update', authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    await User.updateOne(req.body, {
        id: req.userId
    })
    res.json({
        message: "User updated successfully"
    })
})

app.get('/bulk', async (req, res) => {
    const filter = req.query.filter || ""
    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

module.exports = router
