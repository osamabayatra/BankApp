const express = require('express')
const api = require('./routes/api')
const mongoose = require('mongoose')
var cookieParser = require('cookie-parser');
const Transaction = require('./models/transactions')
const app = express()
// const path = require('path')
app.use(cookieParser());
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bankApp')
// mongoose.connect('mongodb://localhost/DBName', { useNewUrlParser: true })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(express.static(path.join(__dirname, 'dist')))
// app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)


const PORT = 3001

// app.listen(PORT, function () {
//     console.log('server is listening');
// })
app.listen(process.env.PORT || PORT);