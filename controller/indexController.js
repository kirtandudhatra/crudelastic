let request = require('request');

module.exports = {

	createIndex: function(req, res){

		let name = req.body.name;
		request.put(
		  {
		    url: `http://localhost:9200/${name}`,
		  },
		  function (err, httpResponse, body) {
		    if(err){
		    	console.log(err);

		    }
		    else{
		    	res.setHeader('Content-Type', 'application/json');
		    	res.send();
		    }
		  }
		);
	},

	deleteIndex: function(req, res){

		let name = req.query.name;
		request.delete(
		  {
		    url: `http://localhost:9200/${name}`,
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