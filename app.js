const path = require('path');
const express = require('express');
const ejs = require('ejs');
const pageTitle = require('./pageTitle');
const gallery = require('./gallery');

/* Runs express */
const app = express();

/* Runs ejs */
app.set('view engine', 'ejs');

/* Get endpoint handlers to render */
app.get('/',function(req, res) {  
  res.render('index',pageTitle.index);
});

app.get('/gallery',function(req, res) {  
  res.render('gallery',{gallery});
});

/* Serving static files in express */
app.use(express.static(path.join(__dirname, 'public')));

/* Returns 404 error */
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

/* Localhost: 3000 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});