const express = require('express')
const { createTodo } = require('./types')
const { todo } = require('./db')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())

app.post('/todo', async (req, res) => {
    const createPayLoad = req.body
    const parsedPayLoad = createTodo.safeParse(createPayLoad)

    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get('/todos', async (req, res) => {
    const response = await todo.find({})
    res.json({
        todos: response
    })
})

app.put('/completed', async (req, res) => {
    const createPayLoad = req.body
    const parsedPayLoad = createTodo.safeParse(createPayLoad)
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    console.log(req.body._id)
    await todo.updateOne({
        _id: req.body._id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marks as done"
    })
})


app.listen(3000)