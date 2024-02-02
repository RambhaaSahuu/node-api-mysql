const express = require('express'),
    app = express(),
    bodyparser = require('body-parser');
require('express-async-errors')

const db = require('./db'),
    employeeRoutes = require('./controllers/employee.controller')


//middleware
app.use(bodyparser.json())
app.use('/api/employees', employeeRoutes)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')

})

// first- db connection success
// 2nd- express server

db.query("SELECT 1")
    .then(() => {
        console.log('Connected to Mysql Server.')
        app.listen(3000,
            () => console.log('server has started at 3000'))
    })
    .catch(err => console.log('db connection failed. \n' + err))

