// ==UserScript==
// @name           Santander - Campo único para boleto
// @namespace      pro.irae.userscripts
// @description    Preenche campos do boleto baseado num campo único. Não importa quantos pontos, espaços, etc. Simplesmente copie e cole - como sempre deveria ser.
// @include        https://www.santandernet.com.br/ibpf/transacoes/BoletoBancario*
// ==/UserScript==

(function(){
	// Pega todos os elementos do primeiro form do documento
	// Procura os elementos que são do boleto
	var els = document.forms[0].elements;
	var reelems = /(txtBloco1a|txtBloco1b|txtBloco2a|txtBloco2b|txtBloco3a|txtBloco3b|txtBloco4|txtBloco5)/;
	var count = 0;
	for(var i=0;i<els.length;i++) {
		if(reelems.test(els[i].name)) {
			count++
		}
		if(els[i].name == 'txtBloco1') {
			var txtBloco1 = els[i]
		}
		if(els[i].name == 'txtBloco2') {
			var txtBloco2 = els[i]
		}
		if(els[i].name == 'txtBloco3') {
			var txtBloco3 = els[i]
		}
	}
	// Se eles existirem, cria um campo único
	if(count == 8) {
		var place = document.getElementById('ajudaLayer1');
		var div = document.createElement('div');
		div.innerHTML = '<p>Campo único: <input id="campoBoletoUnico" name="campoBoletoUnico" value="" style="width:80%;" /></p>';
		place.parentNode.insertBefore(div,place.nextSibling);
		// quando o campo único mudar, insere o valor nos outros campos
		var campoUnico = document.getElementById('campoBoletoUnico');
		campoUnico.addEventListener('change',function(e){
			var valor = (''+e.target.value).replace(/[^\d]/g,'');
			document.getElementById('txtBloco1a').value = valor.substr(0,5);
			document.getElementById('txtBloco1b').value = valor.substr(5,5);
			txtBloco1.value = valor.substr(0,10);
			document.getElementById('txtBloco2a').value = valor.substr(10,5);
			document.getElementById('txtBloco2b').value = valor.substr(15,6);
			txtBloco2.value = valor.substr(10,11);
			document.getElementById('txtBloco3a').value = valor.substr(21,5);
			document.getElementById('txtBloco3b').value = valor.substr(26,6);
			txtBloco3.value = valor.substr(21,11);
			document.getElementById('txtBloco4').value = valor.substr(32,1);
			document.getElementById('txtBloco5').value = valor.substr(33);
			(unsafeWindow||window).onCompleta();
		},false)
	}
})();
