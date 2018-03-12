// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});
//Keypress Event
chrome.commands.onCommand.addListener(function (command) {
    if (command === "inject") {
		//Inject into tab
		chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
			function(tab){
				chrome.tabs.executeScript(tab.ib, {
					file: 'inject.js'
				})
			}
		)
    }
});
chrome.commands.onCommand.addListener(function (command) {
    if (command === "restore") {
		//Inject into tab
		chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
			function(tab){
				chrome.tabs.executeScript(tab.ib, {
					file: 'restore.js'
				})
			}
		)
    }
});