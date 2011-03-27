// ==UserScript==
// @name           Remove utm_source from URLs
// @namespace      pro.irae.userscripts
// @description    Remove seamlessly the long URL from feedburner, making it easy to share and to read tose urls
// @include        *utm_source=*
// ==/UserScript==

(function() {
	var cleanURL = (document.location.href+'').replace(/(\?|&)?utm_source.*/,'');
	if(history && 'replaceState' in history) {
		history.replaceState({},'same',cleanURL);
	} else {
		// Firefox < 4 && Chrome < 5
		document.location.replace(cleanURL);
	}
})();