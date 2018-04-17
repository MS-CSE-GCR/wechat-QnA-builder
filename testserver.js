var express = require('express');


process.env.Wechat_Token='mmm'
process.env.Ocp_Apim_Subscription_Key='2b637ba1a4fa4e59a642f2ce0d7f7ef9'
process.env.QnA_Maker_Key='d1ae7408-d0dd-40b6-90b8-2f7bb7e7049b'


var router = require('./router.js');

const app = express();

app.use('/', router);

app.listen(process.env.PORT || 8082);