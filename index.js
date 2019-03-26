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


app.use(cors());
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        css: '/css/index.css'
    });
});


app.get('/about', (req, res) => {
    res.render('about', {
        css: '/css/about.css'
    });
});

app.get('/programs', (req, res) => {
    res.render('programs', {
        css: '/css/programs.css'
    });
});


const PORT = process.env.PORT || 3000;


app.listen(PORT);