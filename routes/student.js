const express = require('express')
const router = express.Router()

const model = require('../models')

router.get('/', (req, res)=>{
  model.Student.findAll().then(data =>{
    res.render('students', {data_students : data})
  })
})

module.exports = router;
