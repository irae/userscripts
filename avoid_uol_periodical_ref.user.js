// ==UserScript==
// @name           Avoid UOL periodical refresh
// @namespace      pro.irae.userscripts
// @description    Sets some know used booleans on UOL homepages to avoid the anoiyng periodical refresh.
// @include        *uol.com.br*
// ==/UserScript==

if((unsafeWindow||window)['IS_MEDIA_PLAYING'] !== undefined) {
	(unsafeWindow||window)['IS_MEDIA_PLAYING'] = true;
}

(function(){
	var count = 0;
	function checkKnowBoolean() {
		var win = (unsafeWindow||window);
		if(win.hasOwnProperty('uolmais') && win.uolmais.hasOwnProperty('player') && !win.uolmais.player.tocando) {
			win.uolmais.player.tocando = true;
		} else if(count < 5) {
			setTimeout(checkKnowBoolean,1000);
		}
		count++;
	};
	checkKnowBoolean();
})();
