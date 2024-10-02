const mongo = require('mongoose')
const { string } = require('zod')

mongo.connect("mongodb+srv://mkolhe23:esWCBcBghKUG42r9@cluster0.ggnczko.mongodb.net/todo_app")

const toDosSchema = mongo.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongo.model('todos', toDosSchema)

module.exports = {
    todo
}