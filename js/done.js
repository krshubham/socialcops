function done(){
	var editor =document.getElementById('main-editor');
	var links =document.getElementById('links');
	links.innerHTML="";
	var content=editor.innerHTML;
	var hrefs = [];
	//RegEx for the links
	content=content.replace(/&lt;/g,"<");
	content=content.replace(/&gt;/g,">");
	hrefs = content.match(/[^<>(&nsbp;) ]*(<a( href="([^"]+)")?>([^<]+)<\/a>)/g);
	for(var i=0;i<hrefs.length;i++)
	{
		if(i%2!=0)
		{
			//Fixing the colors of the links in the bottom bar
			hrefs[i]=hrefs[i].replace("<a","<a style='color: red;'");
		}
		else
			hrefs[i]=hrefs[i].replace("<a","<a style='color: blue;'");
	}
	for(i=0;i<hrefs.length;i++)
	{
		links.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+hrefs[i];
	}
}