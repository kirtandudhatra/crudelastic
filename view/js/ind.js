function createIndex(){
	var name = prompt("Provide name of Index:","");
	if(name === null)
		return;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      alert(`${name} index created!`);
	    }
	  };
	xhttp.open("POST", "createindex", false);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`name=${name}`);	
}

function deleteIndex(){
	var name = prompt("Provide name of Index:","");
	if(name === null)
		return;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      alert(`${name} index deleted!`);
	    }
	  };
	xhttp.open("GET", `deleteindex?name=${name}`, false);
	xhttp.send();	
}