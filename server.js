const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3300;

const members = require("./Member");

app.get('/message', function (req, res) {
     res.send('This is the message');
});

app.get('/media', function (req, res) {
var response = {
podcasts: [{
       "description": "some text",
       "id": 574,
       "title": "Why long-term value is a winning bet",
       "media": "podcast",
       "publishedDate": "2018-12-19T18:00:00.000Z",
       "isLive": true,
       "isDeleted": false,
       "link": "https://urldefense.com/v3/__https://podcasts.com/574__;!!DHXL-mcXkJmB!8FgDGLaRRLN_gHBmfSnqYdMlpJepH0Vu4tElfz723bvynGhxkKE7mE9utTRpReuNNUidhr7iHMM$ ",
       "createdAt": "2018-12-20T06:30:00.618Z",
       "updatedAt": "2019-01-31T06:30:00.864Z"
    }],
 total: 1
}
if (response.podcasts.length > 0) {
     res.send(response);
} else {
var errorObj = {
     httpCode: 404,
     message: 'NOT_FOUND',
     description: 'The resource referenced by request does not exists.',
     details: 'Podcast is not available'
}
res.status(404);
res.send(errorObj)
}
});
// app.listen(port, function () {
//    console.log("\nServer is running on port " + port);
// });

app.get('/', (req, res) => {
    res.status(404).json({
        message : '404 NOT FOUND!'
    })
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res) => {
    const newMember = {
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    members.push(newMember);
    res.json(newMember);
    console.log(newMember)
});

app.listen(port, function() {
    console.log("\n Server is running on port " + port);
});
module.exports = app;