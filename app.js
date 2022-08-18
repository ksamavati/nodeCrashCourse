const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000);

//serve homepage
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

//serve about page
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

//redirect about-us to about
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 page
//.use does the same thing as .get but responds to request regardless of URL
//requests run through code from top to bottom so this .use will only get hit if the request doesn't trigger any of the other .gets.
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});