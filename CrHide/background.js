//Copyright Dandandu

/*chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!

  chrome.tabs.executeScript({
    code: 'document.getElementById(\"content_right\").style.display="none"'
  });
});*/
function func(){
	console.log("aaa");
	document.getElementById("content_right").style.display="none";
}
/*
window.onload = function(){
	setInterval(func,1000);
};*/

setInterval(func,100);
