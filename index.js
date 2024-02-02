const express = require('express'),
   app = express();

const db = require ('./db')


// first make sure db connection is successful
// then start the express server
db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(3000,
            () => console.log('server started at 3000'))
    })
    .catch(err => console.log('db connection failed. \n' + err))