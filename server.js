
var express = require('express');
var app = express();

function timeout(req, res) {
    setTimeout(function() {
        res.send('');
    }, 25000);
}

app.options('/api', timeout);
app.post('/api/Security/Authentication', timeout);

var server = app.listen(9009, function() {
    console.log('Started on port %d', server.address().port);
});

