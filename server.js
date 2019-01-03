const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();

//app.use(express.static(path.join(__dirname, 'build')));
app.use('/', express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080, () => {
    console.log("Churchtalk frontend server started at 8080")
});