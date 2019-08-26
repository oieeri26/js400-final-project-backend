const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const config = require('../nodemon.json')
const User = require('../api/models/user')

const reset = async () => {
  mongoose.connect(config.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true
  })
  await User.deleteMany()
  return User.create([{
      email: 'student@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Time',
      lastName: 'Smith',
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!'
      }]
    },
    {
      email: 'newstudent@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Erin',
      lastName: 'Thompson',
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!'
      }]
    },
    // {
    //   email: 'admin@email.com',
    //   password: bcrypt.hashSync('password', 10),
    //   admin: true,
    //   firstName: 'Tom',
    //   lastName: 'Steel'
    //  }
  ])
}

reset().catch(console.error).then((response) => {
  console.log(`Seeds successful! ${response.length} records created.`)
  return mongoose.disconnect()
})