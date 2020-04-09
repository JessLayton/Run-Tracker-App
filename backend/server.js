const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({path:'.env'});

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGOATLAS_URI;

mongoose.connect(uri, {useNewUrlParser:true ,useCreateIndex:true }
    , () => { console.log("Connecting...........  Connected!!")}).catch(err => console.log(err))
const connection = mongoose.connection
connection.on('error',console.error.bind(console,'connection error:'))
connection.once('open',()=>{
    console.log('Hello Jess!')
})

const runsRouter = require('./routes/runs');

app.use('/runs', runsRouter);

app.listen(port, () => {
        console.log(`Server is running on port: ${port} --  Mongo is runnning -- Woop woop!!  `);
});