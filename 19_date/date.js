(function readyJS(win,doc){
	
	'use strict';

	

	function relogio(){
		let data = new Date();

		console.log(data);

		let result = doc.querySelector('#result')
		
		let hora = data.getHours();
		let minutos = data.getMinutes();
		let segundos = data.getSeconds();
	
		result.innerHTML = hora + ' : ' + minutos + ' : ' + segundos

		setTimeout(relogio, 1000)

	}

	relogio()




})(window, document)