const mongo = require('mongoose')

mongo.connect('mongodb+srv://mkolhe23:esWCBcBghKUG42r9@cluster0.ggnczko.mongodb.net/paytm')

const userSchema = mongo.Schema({
    FirstName: String,
    LastName: String,
    UserName: String,
    Password: String
})
const accountSchema = mongo.Schema({
    userId: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})
const User = mongo.model('User', userSchema)
const Account = mongo.model('Account', accountSchema)

module.exports = {
    User,
    Account
}
