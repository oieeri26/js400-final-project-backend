const router = require('express').Router({ mergeParams: true })
const User = require('../models/user')
const { isLoggedIn, isSameUser } = require('../middleware/auth')

router.post('/',  isLoggedIn, isSameUser, async (req, res, next) => {
  const status = 201
  const { userId } = req.params
  const query = { _id: userId }
  const user = await User.findOne(query)
  user.assignments.push(req.body)
  await user.save()
  const assignment = user.assignments[user.assignments.length - 1]
  res.status(status).json({ status, response: assignment })
})

router.put('/:postId', isLoggedIn, isSameUser, async (req, res, next) => {
  const status = 200

  const { postId, userId } = req.params
  const query = { _id: userId }
  const user = await User.findOne(query)
  const assignment = user.assignments.id(postId)
  const { assignmentTitle, projectDescription, projectLink } = req.body
  assignment.assignmentTitle = assignmentTitle
  assignment.projectDescription = projectDescription
  assignment.projectLink = projectLink
  await user.save()

  res.status(status).json({ status, response: assignment })
})

router.delete('/:postId', isLoggedIn, isSameUser, async (req, res, next) => {
  const status = 200
  const { postId, userId } = req.params
  const query = { _id: userId }
  const user = await User.findOne(query)
  user.assignments = user.assignments.filter(assignment => assignment.id !== postId)
  await user.save()
  res.json({ status, response: user })
})

module.exports = router