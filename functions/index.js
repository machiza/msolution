const functions = require('firebase-functions');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('views', './views');
app.set('view engine', 'hbs');


// ------------------ routes ---------------------

// login
app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.render('index.hbs', { layout: false });
});

// ------------------ welcome --------------------
// index
app.get('/admin', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.render('admin/index');
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
