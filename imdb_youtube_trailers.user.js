// ==UserScript==
// @name		   IMDB Youtube Trailers
// @namespace	   pro.irae.userscripts
// @description	   Adds links to youtube trailers to the IMDB sidebar.
// @include		   http://www.imdb.com/title/*
// ==/UserScript==

// wrapper to wait what we need
function waiter() {
	if( (unsafeWindow||window).jQuery && (unsafeWindow||window).jQuery.isReady ) {
		var $ = (unsafeWindow||window).jQuery;
		var jQuery = unsafeWindow.jQuery;
// end wrapper		
		
		
		

// console.clear();
// get the film title and year
var temp = $('<div>');
var year = $('#main h1.header span a').text();
$('#main h1.header span').appendTo(temp.get(0));
var name = $.trim($('#main h1.header').text());
$('span',temp).appendTo('#main h1.header');
// build an HTML string based on the youtube search API results
$.ajax({
	url:"http://gdata.youtube.com/feeds/api/videos",
	data: {
		q: name+' '+year+' trailer',
		orderby: "relevance",
		'start-index':1,
		'max-results':3,
		format:5, // only embedable
		alt: 'json-in-script',
		v:2
	},
	dataType:'jsonp',
	success: function(data) {
		// console.dir(data.feed.entry);
		var html = '<div id="youtube-results" class="aux-content-widget-3"><h4>Youtube trailers</h4><ul style="margin-bottom:0;">\n';
		$.each(data.feed.entry,function(i,item) {
			// console.log(item.title.$t);
			html += '<li>'+
				'<a href="'+item.link[0].href+'" target="_blank">'+item.title.$t+'</a>'+
			'</li>\n';
		});
		html += '</ul></div>';
		// insert the HTML
		$('#sidebar').prepend(html);
	}
});


// wrapper second part
	} else {
		setTimeout(waiter,300);
	}
};
waiter();
