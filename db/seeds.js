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
      firstName: 'Tim',
      lastName: 'Smith',
      admin: false,
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!',
        grade: 40,
        total: 50
      }]
    },
    {
      email: 'newstudent@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Erin',
      lastName: 'Thompson',
      admin: false,
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!',
        grade: 34,
        total: 50
      }]
    },
    {
      email: 'teridactyl@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Teri',
      lastName: 'Dactyl',
      admin: false,
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!',
        grade: 45,
        total: 50
      }]
    },
    {
      email: 'perryscope@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Perry',
      lastName: 'Scope',
      admin: false,
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!',
        grade: 50,
        total: 50
      }]
    },
    {
      email: 'skyeblue@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Skye',
      lastName: 'Blue',
      admin: false,
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!',
        grade: 42,
        total: 50
      }]
    },
    {
      email: 'slymeedentalfloss@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Sly',
      lastName: 'Meedentalfloss',
      admin: false,
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!',
        grade: null,
        total: null
      }]
    },
    {
      email: 'artdecco@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Art',
      lastName: 'Decco',
      admin: false,
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!',
        grade: null,
        total: null
      }]
    },
    {
      email: 'simonsais@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Simon',
      lastName: 'Sais',
      admin: false,
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!',
        grade: null,
        total: null
      }]
    },
    {
      email: 'gregarias@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Greg',
      lastName: 'Arias',
      admin: false,
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!',
        grade: null,
        total: null
      }]
    },
    {
      email: 'markateer@email.com',
      password: bcrypt.hashSync('password', 10),
      firstName: 'Mark',
      lastName: 'Ateer',
      admin: false,
      assignments: [{
        assignmentTitle: 'Full Stack Final Project',
        projectLink: 'www.project.com',
        projectDescription: 'Final Project for js400!',
        grade: null,
        total: null
      }]
    },
    {
      email: 'admin@email.com',
      password: bcrypt.hashSync('password', 10),
      admin: true,
      firstName: 'Tom',
      lastName: 'Steel'
     }
  ])
}

reset().catch(console.error).then((response) => {
  console.log(`Seeds successful! ${response.length} records created.`)
  return mongoose.disconnect()
})