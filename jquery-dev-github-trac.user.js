// ==UserScript==
// @name           jQuery Dev Github Trac Links
// @namespace      pro.irae.userscripts
// @description    Linkfy issue numbers in github commit messages.
// @include        http://github.com/jquery/jquery/commit*
// @include        http://github.com/jquery/jquery/tree*
// @include        http://github.com/jquery/jquery/blob*
// ==/UserScript==

// Some simple functions to find elements.
var id = function(id){return document.getElementById(id)},
	tag = function(tag,scope){return (scope||document).getElementsByTagName(tag)},
	hasClass = function(find,nodes) {
		var ret = [],node,i; for(i=0;i<nodes.length;i++) { node = nodes[i];
			if(1+node.className.indexOf(find)) { ret.push(node);}
		} return ret;
	};

// find all commit messages
var messages = hasClass('message',
					tag('div',
						id('commit')
					)
				);

// for each message, check it's contents for issue numbers
// and replace then for links
var message,i,text,extra;
for(i=0;i<messages.length;i++) { message = messages[i];
	texta = ''+message.innerHTML;
	// account for links in commit lists
	extra = texta.match('<a[^>]+>');
	textb = texta.replace(/#(\d+)/g,(extra?'</a>':'')+'<a style="color:#4183C4;" href="http://dev.jquery.com/ticket/$1" target="_blank">#$1</a>'+(extra?extra[0]:''));
	if(texta!=textb) { // avoid unessessary DOM writes
		message.innerHTML = textb;
	}
}

