const express = require(`express`);
const app = express();

app.get('/', function(req, res) {
    res.send(`Hello, SEI World`);
}
);

app.get('/about', function(req, res) {
    res.send('This is the about page');

})

app.listen(8000);
