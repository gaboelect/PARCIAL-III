const mongoose = require("mongoose");

mongoose.connect('mongodb://mongo:27017/mydatabase')
    .then(db => {
        console.log('db conectada')
    })
.catch(err => console.error(err));