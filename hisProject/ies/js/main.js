var bodyElement = window.document.querySelector('body');
function addScreenSizeToBodyElement () {
	bodyElement.setAttribute('style',`--innerWidth:${window.innerWidth}px;--innerHeight:${window.innerHeight}px;`);
}
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;
window.document.querySelector("input#fileInput").onchange=function(event){
	let uploadedFile = event.target.files[0];
	//console.log(uploadedFile);
	let readFile = new FileReader();
	readFile.readAsText(uploadedFile);
	readFile.onload = function(e) { 
		let contents = e.target.result;
		let json = JSON.parse(contents);
		console.log(json);
	};
};
window.document.querySelector('.dropFile').ondragover=window.document.querySelector('.dropFile').ondrop=window.document.querySelector('.dropFile').ondragover=function(event){
	event.preventDefault();
}
window.document.querySelector('.dropFile').ondrop=function(event){
	event.preventDefault();
	/*
	readFile.onload = function(e) { 
		let contents = e.target.result;
		let json = JSON.parse(contents);
		console.log(json);
	};
	*/
}
/*
$("#up").change(function(event){
    var uploadedFile = event.target.files[0]; 
    
		if(uploadedFile.type !== "text/javascript" && uploadedFile.type !== "application/x-javascript") { 
        alert("Wrong file type == " + uploadedFile.type); 
        return false;
    }
    
    if (uploadedFile) {
        var readFile = new FileReader();
        readFile.onload = function(e) { 
            var contents = e.target.result;
            var json = JSON.parse(contents);
            alert_data(json);
        };
        readFile.readAsText(uploadedFile);
    } else { 
        console.log("Failed to load file");
    }
});

function alert_data(json)
{
	alert('Name : ' + json.name + ', Family : '+ json.family)
}
*/