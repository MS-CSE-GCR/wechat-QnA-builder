var express = require('express');
var router = require('./router.js');

const app = express();

app.use('/', router);

app.listen(process.env.PORT || 1337);