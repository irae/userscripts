// ==UserScript==
// @name           Remove utm_source, utm_pages, etc. from URLs
// @namespace      pro.irae.userscripts
// @description    Remove seamlessly the long URL from analytics, feedburner, etc. making it easy to share and to read tose urls
// @include        *utm_source=*
// @include        *utm_page=*
// ==/UserScript==

(function() {
	var cleanURL = (document.location.href+'').replace(/(\?|&)?utm_.*/,'');
	if(history && 'replaceState' in history) {
		history.replaceState({},'same',cleanURL);
	} else {
		// Firefox < 4 && Chrome < 5
		document.location.replace(cleanURL);
	}
})();