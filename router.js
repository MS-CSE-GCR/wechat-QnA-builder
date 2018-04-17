var express = require('express');
var crypto = require('crypto');
var axios = require('axios');

var router = express.Router();


const token = process.env.Wechat_Token;
const qnakey1 = process.env.Ocp_Apim_Subscription_Key;
const qnakey2 = process.env.QnA_Maker_Key;

router.get('/', function (req, res, next) {

    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;
    var echostr = req.query.echostr;

    var array = new Array(token, timestamp, nonce);
    array.sort();
    var str = array.toString().replace(/,/g, "");

    var sha1Code = crypto.createHash("sha1");
    var code = sha1Code.update(str, 'utf-8').digest("hex");

    if (code === signature) {
        res.send(echostr)
    } else {
        res.send("error");
    }

});

router.post('/', function (req, res) {

    res.writeHead(200, { 'Content-Type': 'application/xml' });

    var data = req.body.xml;
    var question = data.content;
    postCode(question, function (answer) {
        var resMsg = '<xml>' +
            '<ToUserName><![CDATA[' + data.fromusername + ']]></ToUserName>' +
            '<FromUserName><![CDATA[' + data.tousername + ']]></FromUserName>' +
            '<CreateTime>' + parseInt(new Date().valueOf() / 1000) + '</CreateTime>' +
            '<MsgType><![CDATA[text]]></MsgType>' +
            '<Content><![CDATA[' + answer + ']]></Content>' +
            '</xml>';
        res.end(resMsg);
    })
});

router.get('/test/:q', function (req, res) {
    var question = req.params.q;
    postCode(question, function (answer) {
        var resMsg = answer;
        res.json(resMsg);
    })

});


router.get('/check', function (req, res) {
    if(!token) {
        res.end('Wechat_Token Missing! Please set in your Azure Web App "app settings".')
    } else if(!qnakey1) {
        res.end('Ocp_Apim_Subscription_Key Missing! Please set in your Azure Web App "app settings".')
    } else if(!qnakey2) {
        res.end('QnA_Maker_Key Missing! Please set in your Azure Web App "app settings".')
    } else {
        res.end('Success.')
    }

});




function postCode(question, cb) {
    axios({
        method: 'post',
        url: `https://westus.api.cognitive.microsoft.com/qnamaker/v2.0//knowledgebases/${qnakey2}/generateAnswer`,
        headers: {
            'Ocp-Apim-Subscription-Key': qnakey1
        },
        data: {
            question: question,
        }
    }).then(function (response) {
        cb(response.data.answers)
    }).catch(function(e){
        cb(e)
    });
}

module.exports = router;

