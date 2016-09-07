var randomwords = [];
//making an array of random words so that the words get stored in the ackground through ajax
function RandomWord() {
	var requestStr = "http://randomword.setgetgo.com/get.php";
	$.ajax({
		type: "GET",
		url: requestStr,
		dataType: "jsonp",
		jsonpCallback: 'RandomWordComplete'
	});
}
var editor = new MediumEditor('.content');
function RandomWordComplete(data) {
	randomwords.push(data.Word);
	//alert(data.Word);
}
$(document).ready(function(){
	setInterval(RandomWord,1700);
	//call the function in the background after repeated intervals to pupulate the array
});
var title = $('.title');
$('.title').click(function(){
	title.html(' ');
});
var c = 0;
var strings = [];
var stringsarr = [];
$('#done').click(function(){
	var paragraphs = $("p");
	var para = [];
	for(var i = 0; i < paragraphs.length; i++)
	{
		var p = paragraphs[i].innerHTML;  
		//alert(p);
		//var c = paragraphs[i].innerHTML;
		var b = p.split(" ");
		for (word in b){		
			if(b[word].length == 4){
				//alert("4 letter word found");
				//alert(b[word]);
				var wordarr = [];
				wordarr.push(b[word]);	
			// for each word in the array do something
			//here.
			var a = p.replace(b[word], randomwords[c]);
			c++;
			paragraphs[i].innerHTML = a;
		}
		else{
			continue;
		}
		p = paragraphs[i].innerHTML;
	}
		//para.push(paragraphs[i].innerHTML.split(" "));	
	}
});
$('.content p').on('keypress', function (e) {
	if (e.keyCode === 13) {
		e.preventDefault();
		$(this).after('</p><p>');

	}
}).on('click', function(e) {
	e.preventDefault();
	var tx = $(this).text();
	if(tx=='Click here...') {
		$(this).text(' ');   
	}
});