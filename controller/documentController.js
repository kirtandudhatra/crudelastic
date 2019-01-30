let request = require('request');

module.exports = {

	createDocument: function(req, res){

		let ind = req.body.index;
		let type = req.body.type;
		let id = req.body.id;
		let data = req.body.data;
		request.put(
		  {
		    url: `http://localhost:9200/${ind}/${type}/${id}`,
		    body: data,
		     headers: {
					    'Content-Type': 'application/json'
					  }
		  },
		  function (err, httpResponse, body) {
		    if(err){
		    	console.log(err);
		    	//res.end();
		    }
		    else{
		    	res.setHeader('Content-Type', 'application/json');
		    	res.send(JSON.stringify(body));
		    }
		  }
		);
	},

	readDocument: function(req, res){
		let ind = req.query.index;
		let type = req.query.type;
		let id = req.query.id;
		request(`http://localhost:9200/${ind}/${type}/${id}`, { json: true }, (err, resp, body) => {
			  if (err) { return console.log(err); }
			  res.setHeader('Content-Type', 'application/json');
			  res.send(JSON.stringify(body));
		});

	},

	searchByText: function(req, res){
		var data ={};
		if(req.query.key === 'null'){
			data = {"query":{"match_all":{}}};
		}
		else{
			data={"query":{"query_string":{"query":req.query.key}}}
			console.log(data);
		}
		request(
		  {
		    url: `http://localhost:9200/_search`,
		    body: data,
		    method: 'post',
		    json: true
		  },
		  function (err, httpResponse, body) {
		    if(err){
		    	console.log(err);
		    	//res.end();
		    }
		    else{
		    	res.setHeader('Content-Type', 'application/json');
		    	res.send(JSON.stringify(body));
		    }
		  }
		);

	},

	updateDocument: function(req, res){

		let ind = req.body.index;
		let type = req.body.type;
		let id = req.body.id;
		let d = req.body.d;
		d=JSON.parse(d);
		//console.log(ind+" "+type+" "+id+" "+d);

		request(
		  {
		    url: `http://localhost:9200/${ind}/${type}/${id}/_update`,
		    body: d,
		    method: 'post',
		    json: true
		  },
		  function (err, httpResponse, body) {
		    if(err){
		    	console.log(err);
		    	res.end();
		    }
		    else{
		    	res.setHeader('Content-Type', 'application/json');
		    	res.send(JSON.stringify(body));
		    }
		  }
		);
	},

	deleteDocument: function(req, res){
		let ind = req.query.index;
		let type = req.query.type;
		let id = req.query.id;

		request.delete(
		  {
		    url: `http://localhost:9200/${ind}/${type}/${id}`,
		  },
		  function (err, httpResponse, body) {
		    if(err){
		    	console.log(err);

		    }
		    else{
		    	res.setHeader('Content-Type', 'application/json');
		    	res.send(JSON.stringify(body));
		    }
		  }
		);
	}
}