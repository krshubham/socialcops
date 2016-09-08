/*var post_title = document.getElementsByClassName('title')[0];
console.log(post_title);
post_title.onclick = function(){
	post_title.setAttribute('placeholder','');
};
*/
$( "div[contenteditable]" ).keyup(function(){
	$(this).contents()
	.filter(function() {
		return this.nodeType === 3;
	})
	.wrap( "<p draggable=\"true\"></p>" )
	.end();
});
$(document).ready(function () {
	$("#tooltip").hide();
	$('#editor').dblclick(function (e) {
		var x = e.clientX-70;
		var y = e.clientY-70;
		placeTooltip(x, y);
		$("#tooltip").show();
	});

});
$(document).click(function(){
	$('#tooltip').hide();
})
function getSelectionText() {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
		text = document.selection.createRange().text;
	}
	return text;
}


function placeTooltip(x_pos, y_pos) {
	var d = document.getElementById('tooltip');
	d.style.position = "absolute";
	d.style.left = x_pos + 'px';
	d.style.top = y_pos + 'px';
}

function bold(){
	document.execCommand('bold');
}
function underline(){
	document.execCommand('underline');
}
function highlight(){
	document.execCommand('foreColor',true,'red');
		//the only thing that disturbs is it doesn't go back to original state
	}
	var random = [];
	//Finding all the text in the document
	function RandomWord() {
		var requestStr = "http://randomword.setgetgo.com/get.php";

		$.ajax({
			type: "GET",
			url: requestStr,
			dataType: "jsonp",
			jsonpCallback: 'RandomWordComplete'
		});
	}
	function RandomWordComplete(data) {
		if(random.length === 100){
			return ;
		}
		else{
			random.push(data.Word);
			console.log(random);
		}
	}
	setInterval(RandomWord,1000);
	function replace(){
		var words = [];

		var walkDOM = function (node, func) {
			func(node);
			node = node.firstChild;
			while(node) {
				walkDOM(node, func);
				node = node.nextSibling;
			}

		};
		var j = 0;
		var url = "http://randomword.setgetgo.com/get.php";
		walkDOM(document.getElementById('editor'), function (node) {

			if (node.nodeName === '#text') {
				var text = node.textContent;

				text = text.replace(/[^A-Za-z]/g, ' ');
				text = text.split(' ');
				if (text.length) {
					/*console.log(text);*/
					for (var i = 0, length = text.length; i < length; i += 1) {
						var matched = false,
						word = text[i];
						if(word.length === 4){
							//console.log(word);
							//word = random[j];
							$("div.content").children().each(function () {
								$(this).text($(this).text().replace(word,random[j]));
								j++;
							});
						}				

					}
				}
			}
		});

		var displayWordList = function (words) {
			for (var i = 0, length = words.length; i < length; i ++) {
				console.log(words[i][0]);
			}
		};

		displayWordList(words);	
	}
	function done(){
		/*// Detect links pattern
		var exp = /(\b(http?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
		// Wrap the matched strings with `<span class="fake-link"></span>`
		$('#editor').html($('#editor').html().replace(exp, "<span class='fake-link'>$1</span>"));

		$('.fake-link').each(function() {
		    // Extra job: Check if parent is an anchor
		    if ($(this).parent().is('a')) {
		        // If `true`, then unwrap the original anchor which has been written by default from `.fake-link`
		        $(this).unwrap();
		    }
		    // Replace `.fake-link` with an anchor tag
		    $(this).replaceWith('<a href="' + $(this).text() + '">' + $(this).text() + '</a>');
		});*/
		/*$( "#editor" )
		.html()
		.filter(function() {
			return this.nodeType === 3;
		})
		.filter( "a" )
		.remove();*/
		console.log(document.getElementById('editor').innerHTML);
	}


	var list = document.getElementById("main-editor");
	Sortable.create(list);
