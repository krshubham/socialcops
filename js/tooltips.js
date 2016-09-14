var post_title = document.getElementsByClassName('title')[0];
	console.log(post_title);
	post_title.onclick = function(){
		post_title.setAttribute('placeholder','');
	};

	$( "div[contenteditable]" ).keyup(function(){
		$(this).contents()
		.filter(function() {
			return this.nodeType === 3;
		})
		.wrap( "<p draggable=\"true\"></p>" )
		.end();
	});//Wrapping new lines into p tags.
	$(document).ready(function () {
		$("#tooltip").hide();// For the tooltips
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
	//Exec function which executes the command specified.
	//The only bug is with the foreColor option.
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