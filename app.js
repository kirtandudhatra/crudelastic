const express = require('express');
const bodyParser = require('body-parser');
var app = express();
let ind = require('./controller/indexController');
let doc = require('./controller/documentController');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('view'));
 
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/view/index.html');
});

app.post('/createindex', function(req, res){
	ind.createIndex(req,res);
});
app.post('/createdocument', function(req, res){
	doc.createDocument(req,res);
});
app.get('/readdocument', function(req, res){
	doc.readDocument(req,res);
});
app.get('/deleteindex', function(req, res){
	ind.deleteIndex(req,res);
});
app.get('/searchbytext', function(req, res){
	doc.searchByText(req,res);
});
app.post('/updatedocument', function(req, res){
	doc.updateDocument(req,res);
});
app.get('/deletedocument', function(req, res){
	doc.deleteDocument(req,res);
});
app.listen(3000);