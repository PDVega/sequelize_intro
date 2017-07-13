const express = require('express')
const router = express.Router()

const model = require('../models')

router.get('/', (req, res, next) => {
  model.Student.findAll()
  .then(data => {
    res.render('add_student', {data_student : data})
    console.log(data);
  })
})

router.post('/', (req, res, next) => {
  let first_name = req.body.first_name
  let last_name = req.body.last_name
  let email = req.body.email
  let jurusan = req.body.jurusan
    model.Student.create({
      'first_name':first_name,
      'last_name':last_name,
      'email':email,
      'jurusan': jurusan
      })
    .then((student) => {
      res.redirect(`/students`)
  })
})



module.exports = router;
