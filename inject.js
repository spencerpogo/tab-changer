// this is the code which will be injected into a given page...

(function() {
    var originalTitle = document.getElementsByTagName("title")[0].innerHTML;
	console.log("Injected! oTitle is " + originalTitle);
    sessionStorage.setItem('oTitle', originalTitle);
	document.getElementsByTagName("title")[0].innerHTML = "ELA Honors 6 Period 2";
    var favicon = undefined;
    var nodeList = document.getElementsByTagName("link");
    for (var i = 0; i < nodeList.length; i++)
    {
        if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
        {
            var originalFav = nodeList[i].getAttribute("href");
            sessionStorage.setItem('oFav', originalFav);
            favicon = nodeList[i].setAttribute("href", "https://ssl.gstatic.com/classroom/favicon_google_green_16.png");
        }
    }
})();
//Jonah--I think we should add the feature to change it back.  What do you think?
//I stored the favicon url and title in a variable but how should we restore it?
//ideas pls.
//-Spencer