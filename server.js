const express = require('express');

const app = express();

app.use(express.static(process.cwd() + '/public'));

app.get('/', function (res, res) {
    res.send("Go to /news to see paginator");
});

app.get('/news', function(req, res) {
    res.sendFile(process.cwd() + '/public/news.html');
});

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("Express server running at http://localhost:" + port);
});
