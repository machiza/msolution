const functions = require('firebase-functions');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('views', './views');
app.set('view engine', 'hbs');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
