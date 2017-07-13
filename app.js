const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


const index = require('./routes/index');
const teachers = require('./routes/teachers')
const subjects = require('./routes/subjects')
const students = require('./routes/student')
const add_student = require('./routes/add_student')
// const profiles = require('./routes/profile')
// const Contact_Group = require('./routes/contact_group')
// const ContactsDetail = require('./routes/contactsDetail')
// const GroupsDetail = require('./routes/groupsDetail') 

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index);
app.use('/teachers', teachers);
app.use('/subjects', subjects);
app.use('/students', students);
app.use('/students/add', add_student);
// app.use('/contacts-groups', Contact_Group);
// app.use('/contactsDetail', ContactsDetail)
// app.use('/groupsDetail', GroupsDetail)

app.listen(3000)
