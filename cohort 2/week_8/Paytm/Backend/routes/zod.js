const zod = require('zod')

const User = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})
module.exports = { User }
