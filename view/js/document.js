function createDocument(){
	var ind = prompt("Provide name of Index:","");
	var type = prompt("Provide Type of Document:","");
	var id = prompt("Provide id of Document:","");
	var data = prompt("Provide Data:","");
	if(id === null || type === null || ind === null)
		return;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      alert(`${ind} index, ${type} type, ${id} id - document created!`);
	      alert(this.responseText);
	    }
	  };
	xhttp.open("POST", "createdocument", false);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`index=${ind}&type=${type}&id=${id}&data=${data}`);	
}

function readDocument(){
	var ind = prompt("Provide name of Index:","");
	var type = prompt("Provide Type of Document:","");
	var id = prompt("Provide id of Document:","");
	if(id === null || type === null || ind === null)
		return;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      alert(this.responseText);
	    }
	  };
	xhttp.open("GET", `readdocument?index=${ind}&type=${type}&id=${id}`, false);
	xhttp.send();	

}

function searchByText(){
	var searchtext = prompt("Enter Search Text(Hit cancel to display whole data)","");
	var querystring = `?key=${searchtext}`;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      alert(this.responseText);
	    }
	  };
	xhttp.open("GET", `searchbytext${querystring}`, false);
	xhttp.send();	

}

function updateDocument(){
	var ind = prompt("Provide name of Index:","");
	var type = prompt("Provide Type of Document:","");
	var id = prompt("Provide id of Document:","");
	var d = prompt("Provide Body:","");
	if(id === null || type === null || ind === null)
		return;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      alert(this.responseText);
	    }
	  };
	xhttp.open("POST", `updatedocument`, false);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`index=${ind}&type=${type}&id=${id}&d=${d}`);
	xhttp.send();
}

function deleteDocument(){
	var ind = prompt("Provide name of Index:","");
	var type = prompt("Provide Type of Document:","");
	var id = prompt("Provide id of Document:","");
	if(id === null || type === null || ind === null)
		return;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      alert(this.responseText);
	    }
	  };
	xhttp.open("GET", `deletedocument?index=${ind}&type=${type}&id=${id}`, false);
	xhttp.send();
}

