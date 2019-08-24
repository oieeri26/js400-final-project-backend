const router = require('express').Router()
const Student = require('../models/user')
const { isLoggedIn, isSameUser } = require('../middleware/auth')
const { validate } = require('../middleware/users')

///////////////
// Home View //
///////////////

// , isLoggedIn, isSameUser

// GET

router.get('/:userId/assignments', async (req, res, next) => {
    const status = 200
    const response = await Student.findById(req.params.userId)
    res.json({ status, response: response.assignments })
})

// PUT

router.put('/:userId/:assignmentId', async (req, res, next) => {
    const status = 200
    
    const { assignmentId, userId } = req.params
    const query = { _id: userId }
    const student = await Student.findOne(query)
    const assignment = student.assignments.id(assignmentId)

    const { assignmentTitle, projectLink, projectDescription } = req.body
    assignment.assignmentTitle = assignmentTitle
    assignment.projectLink = projectLink
    assignment.projectDescription = projectDescription
    await student.save()

    res.status(status).json({ status, response: assignment })
})

// DELETE

router.delete('/:userId/:assignmentId', async (req, res, next) => {
    const status = 200
    
    const { assignmentId, userId } = req.params
    const query = { _id: userId }
    const student = await Student.findOne(query)

    student.assignments = student.assignments.filter(assignment => assignment.id !== assignmentId)
    console.log(student.assignments.id)

    res.json({ status, response: student })
})

///////////////////////
// All Students View //
///////////////////////

// isLoggedIn,

router.get('/:userId', async (req, res, next) => {
    const status = 200
    const response = await Student.find().select('email firstName lastName')
    res.json({ status, response })
})

////////////////////////////////
// CREATE NEW ASSIGNMENT View //
////////////////////////////////

// POST

router.post('/:userId', async (req, res, next) => {
    const status = 201

    const { userId } = req.params
    console.log(req.params)
    const query = { _id: userId }
    const student = await Student.findOne(query)

    student.assignments.push(req.body)
    await student.save()

    const assignment = student.assignments[student.assignments.length - 1]
    res.status(status).json({ status, response: assignment })
})

module.exports = router