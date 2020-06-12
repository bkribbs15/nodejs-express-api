var express = require('express');
var app = express();
var cors = require('cors')

app.use(cors())

app.options('*', cors())

app.get('/', function (req, res) {
  res.status(200).send({"Hello": "World!"});
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


app.get('/testers', function (req, res) {
    res.status(200).send({ "firstName": "John",
    "lastName" : "Doe",
    "test": "Passed"
     });
  });

app.get('/students', function (req, res) {
    res.status(200).send({ "firstName": "Bill",
    "lastName" : "Smith",
    "studentID": 1
        });
});