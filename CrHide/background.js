//Copyright Dandandu

/*chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!

  chrome.tabs.executeScript({
    code: 'document.getElementById(\"content_right\").style.display="none"'
  });
});*/
function func(){
	//document.getElementById("content_right").style.display="none";
	var element=document.getElementById("content_right");
	element.innerHTML = "HEHE";
}
/*
window.onload = function(){
	setInterval(func,1000);
};*/
setInterval(func,100);
