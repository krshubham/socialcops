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