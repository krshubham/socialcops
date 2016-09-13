function done(){
		var article =document.getElementById('main-editor');
		var res =document.getElementById('res');
		res.innerHTML="";
		var cont=article.innerHTML;
		var matches = [];
		cont=cont.replace(/&lt;/g,"<");
		cont=cont.replace(/&gt;/g,">");
		matches=cont.match(/[^<>(&nsbp;) ]*(<a( href="([^"]+)")?>([^<]+)<\/a>)/g);
		console.log(matches);
		for(i=0;i<matches.length;i++)
		{
			if(i%2!=0)
			{
				matches[i]=matches[i].replace("<a","<a style='color: blue;'");
			}
			else
				matches[i]=matches[i].replace("<a","<a style='color: red;'");
		}
		for(i=0;i<matches.length;i++)
		{
			res.innerHTML+="<br>"+matches[i];
		}
	}
