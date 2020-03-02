const express = require('express');

const server = express();

server.get('/', function (req, res) {
  res.send('Hello World!')
});

server.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port ' + process.env.PORT || 3000)
});
