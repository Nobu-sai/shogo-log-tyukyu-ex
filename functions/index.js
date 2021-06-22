
const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const basicAuth = require('basic-auth-connect');

const app = express();

app.use(basicAuth('user','password'));


// app.use(express.static(path.join(__dirname, '../build')));
// app.use(express.static(path.join(__dirname, 'test-site', 'build')));
app.use(express.static(path.join(__dirname, '../main-site/build')));


app.use((req, res, next) => {   
    // res.sendFile(path.join(__dirname, '../build/index.html'));
    // res.sendFile(path.join(__dirname, 'test-site', 'build', 'index.html'));
    res.sendFile(path.join(__dirname, '../main-site/build/index.html'));
    // res.send("Site from Cloud Function/app")
})


exports.app = functions.https.onRequest(app);
