  
const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate')

const app = express();

app.engine('ejs', engines.ejs)
app.set('views', __dirname + '/html')
app.set('view engine', 'ejs')

app.use(express.static(__dirname));

app.get('/login', function(request, response) {
  response.render('login');
});

app.get('/dashboard', function(request, response) {
  response.render('dashboard')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

exports.app = functions.https.onRequest(app);