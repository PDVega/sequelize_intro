const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


const index = require('./routes/index');
const teachers = require('./routes/teachers')
const subjects = require('./routes/subjects')
const students = require('./routes/student')
// const add_student = require('./routes/add_student')
// const edit_student = require('./routes/edit_student')

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index);
app.use('/teachers', teachers);
app.use('/subjects', subjects);
app.use('/students', students);
// app.use('/students/add', students);
// app.use('/students/add', add_student);
// app.use('/students/edit', edit_student);

app.listen(3000)
