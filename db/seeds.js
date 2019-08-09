const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const config = require('../nodemon.json')
const User = require('../api/models/user')

const reset = async () => {
    mongoose.connect(config.env.MONGO_DB_CONNECTION, { useNewUrlParser: true })
    await User.deleteMany()
    return User.create([
        {
            email: "student@email.com",
            password: bcrypt.hashSync('password', 10)
        },
        {
            email: "admin@email.com",
            password: bcrypt.hashSync('password', 10)
        }
    ])
}

reset().catch(console.error).then((response) => {
    console.log(`Seeds successful! ${response.length} records created.`)
    return mongoose.disconnect()
  })
  