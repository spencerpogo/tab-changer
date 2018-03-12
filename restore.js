(function() {
    var oTitle = sessionStorage.getItem('oTitle');
	document.getElementsByTagName("title")[0].innerHTML = oTitle;
    var favicon = undefined;
    var nodeList = document.getElementsByTagName("link");
    for (var i = 0; i < nodeList.length; i++)
    {
        if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
        {
            var oFav = sessionStorage.getItem('oFav');
            favicon = nodeList[i].setAttribute("href", oFav);
        }
    }
	console.log("Restored Successfully.");
})();