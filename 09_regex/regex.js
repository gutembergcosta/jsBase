(function readyJS(win,doc){
	
	'use strict';

	let texto = 'Lorem ipsum Adipi Escing elit 033 03asumum 3 ipsum ##.'
	console.log(texto)

	let regex_e = /e/; //Primeira posição
	let regex_eAll = /e/g; //Todas ocorrências
	let regex_eOR_01 = /e|i/g; //Todas ocorrências
	let regex_eOR_02 = /[ei]/g; //Todas ocorrências
	let regex_eAlfaNumerico = /[a-zA-Z0-9]/g; //Todas alfanuméricas
	let regex_eEspecifico = /(ipsum)|[0-9]/g; //Todas alfanuméricas
	let regex_eEspecificoRepetidor = /(ipsum)|(03+)/g; //Todas alfanuméricas
	let regex_eAllIgnoreCase = /e/gi; //Todas ocorrências + ignorecas
	let regex_eAllQualquerCOisaMultiLine = /(^ip).+(sum$)/gi; //Todas ocorrências + ignorecas
	let regex_eqte = /um{1}/gi; //Todas ocorrências + ignorecas

	console.log(texto.match(regex_e))
	console.log(texto.match(regex_eAll))
	console.log(texto.match(regex_eOR_01))
	console.log(texto.match(regex_eOR_02))
	console.log(texto.match(regex_eAlfaNumerico))
	console.log(texto.match(regex_eEspecifico))
	console.log(texto.match(regex_eEspecificoRepetidor))
	console.log(texto.match(regex_eAllIgnoreCase))
	console.log(texto.match(regex_eAllQualquerCOisaMultiLine))
	console.log(texto.match(regex_eqte))

})(window, document)