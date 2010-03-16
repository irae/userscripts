// ==UserScript==
// @name			Meme Close Video
// @description		Adds a border and close button to any video box. Intended to stop downloading a video when you no longer whants to watch it.
// @namespace		http://irae.pro.br/userscripts/
// @include			http://meme.yahoo.com/*
// ==/UserScript==

function initMemeCloseVideo($) {
	$('a.close_video_play').live('click',function(){
		$(this)
			.parents('.video_box')
			.find('.video_play,.video_player')
			.toggle();
	});

	$('<a class="close_video_play" href="#close">&#x2716;</a>')
		.appendTo('.video_play');

	$('<style type="text/css">'+
			'div.video_play{padding:10px;margin-left:-20px;-moz-border-radius:5px;border:1px solid #9C459C;position:relative;}'+
			'a.close_video_play{display:block;text-align:center;vertical align:middle;width:18px;height:18px;padding:0px 1px 4px 2px;background:#9C459C;color:#fff !important;-moz-border-radius:18px;position:absolute;top:-12px;right:-12px;}'+
		'</style>')
		.prependTo('head');
};

function waitjQuery() {
	jQuery = unsafeWindow.jQuery;
	if(!jQuery) {
		setTimeout(waitjQuery,200);
	} else {
		initMemeCloseVideo(jQuery);
	}
}
waitjQuery();
