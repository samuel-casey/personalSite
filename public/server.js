const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3030));

app.use('/', express.static(__dirname));

// personalSite is directory name of project
// app.set('personalSite', __dirname + '/html');

app.use(__dirname, function(request, response, next) {
  response.render(path.join(__dirname, '/admin.html'));
  next()
});

app.get('/admin.html', function(request, response) {
  response.render(path.join(__dirname, '/index.css'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});