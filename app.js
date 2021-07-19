const express = require('express');
const connectDB =  require('./config/db')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const router = require('./routes/index')

const app = express()

// Set up config file
require('dotenv').config({ path: './config/config.env'})

// Create connection to database
connectDB()

// Set up Morgan logger
if(process.env.NODE_ENV == 'development') {
   app.use(morgan('dev'));
}

// Set up template engine (handlebars)
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

const port = process.env.PORT || 5000

app.use(express.static('public'));

// Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/users'));

app.listen(port , ()=> console.log(`> Server is up and running on port : ${port} | ${Date()}`))