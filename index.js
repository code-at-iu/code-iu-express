const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//set static folder
app.use(express.static(path.join(__dirname, 'static')))


// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//cors middlewear 

app.use(cors());
app.use(expressLayouts);

// ejs template engine middlewear

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// routes

const index_routes = require('./routes/index_routes');
app.use(index_routes);

// app

const PORT = process.env.PORT || 3000;


app.listen(PORT);

