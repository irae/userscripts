// ==UserScript==
// @name           Usable GoPlan Titles
// @namespace      pro.irae.userscripts
// @description    I want to close the ticket from terminal, my tabs are visible but I can't see the ticket number without focusing firefox and selecting the tab. This script prepend the number to document title.
// @include        http://ipanemax.goplanapp.com/inrlife/ticket/view/*
// ==/UserScript==

(function(){
	document.title = '#'+(document.location.href+'').replace(/.*?([0-9]+)$/,'$1') + ' - ' + document.title.replace(/(^[^\|]+\||\|[^|]+$)/g,'');
})();