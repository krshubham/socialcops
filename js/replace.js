
function replace(){
	var editor =document.getElementById('main-editor');
	//Don't replace some specific things like, true, &nbsp and hre.
	var words = editor.innerHTML.match(/\b(?!true|&nbsp|href|bsp;)\w{4}\b/gi);
	console.log(words);
	for(i=0;i<words.length;i++)
	{
		editor.innerHTML=editor.innerHTML.replace(words[i],random[i]);
	}
}

var random = []; // an array which will contain all the data which we get through the ajax request
function RandomWord() {
	var url = "http://randomword.setgetgo.com/get.php";

	$.ajax({
		type: "GET",
		url: url,
		dataType: "jsonp",
		jsonpCallback: 'RandomWordComplete'
	});
}
function RandomWordComplete(data) {
	console.log(data.Word);
	random.push(data.Word);
}
setInterval(RandomWord,2000);