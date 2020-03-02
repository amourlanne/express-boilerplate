const express = require('express');

if(process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const server = express();

server.get('/', function (req, res) {
  res.send('Hello World!')
});

server.listen(process.env.PORT, async function () {
  console.log('Example app listening on port ' + process.env.PORT)
});
