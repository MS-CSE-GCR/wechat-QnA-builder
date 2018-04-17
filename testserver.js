var express = require('express');


process.env.Wechat_Token='mmm'//replace your token
process.env.Ocp_Apim_Subscription_Key='2b637ba1a4fa4e59a642f2ce0d7f7ef9'//replace your key
process.env.QnA_Maker_Key='d1ae7408-d0dd-40b6-90b8-2f7bb7e7049b'//replace your key


var router = require('./router.js');

const app = express();

var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
app.use(bodyParser.xml({
    limit: '1MB',   // Reject payload bigger than 1 MB
    xmlParseOptions: {
      normalize: true,     // Trim whitespace inside text nodes
      normalizeTags: true, // Transform tags to lowercase
      explicitArray: false // Only put nodes in array if >1
    }
}));


app.use('/', router);

app.listen(process.env.PORT || 8082);
